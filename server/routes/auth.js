const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const db = require('../db')

const SALT_ROUNDS = 12

// SIGNUP
router.post('/signup', async (req, res) => {
    const { nome, email, password } = req.body

    if (!nome || !email || !password) {
        return res.status(400).json({ error: 'Campos obrigatórios em falta' })
    }

    try {
        const existe = await db.query('SELECT id FROM users WHERE email = $1', [email])
        if (existe.rows.length > 0) {
            return res.status(409).json({ error: 'Email já registado' })
        }

        const hash = await bcrypt.hash(password, SALT_ROUNDS)
        const result = await db.query(
            'INSERT INTO users (nome, email, password_hash) VALUES ($1, $2, $3) RETURNING id, nome, email',
            [nome, email, hash]
        )

        const user = result.rows[0]
        const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '7d' })

        res.status(201).json({ token, user })
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Erro interno' })
    }
})

// LOGIN
router.post('/login', async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).json({ error: 'Campos obrigatórios em falta' })
    }

    try {
        const result = await db.query('SELECT * FROM users WHERE email = $1', [email])

        if (result.rows.length === 0) {
            return res.status(401).json({ error: 'Credenciais inválidas' })
        }

        const user = result.rows[0]
        const passwordCorreta = await bcrypt.compare(password, user.password_hash)

        if (!passwordCorreta) {
            return res.status(401).json({ error: 'Credenciais inválidas' })
        }

        const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '7d' })

        res.json({ token, user: { id: user.id, nome: user.nome, email: user.email } })
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Erro interno' })
    }
})

module.exports = router