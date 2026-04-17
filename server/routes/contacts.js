const express = require('express')
const router = express.Router()
const db = require('../db')

router.post('/', async (req, res) => {
    const { nome, email, assunto, mensagem } = req.body

    if (!nome || !email || !mensagem) {
        return res.status(400).json({ error: 'Campos obrigatórios em falta' })
    }

    try {
        const result = await db.query(
            `INSERT INTO contacts (nome, email, assunto, mensagem)
             VALUES ($1, $2, $3, $4) RETURNING *`,
            [nome, email, assunto, mensagem]
        )
        res.status(201).json({ sucesso: true, dados: result.rows[0] })
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Erro ao guardar mensagem' })
    }
})

module.exports = router