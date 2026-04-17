const express = require('express')
const router = express.Router()
const db = require('../db')

router.post('/', async (req, res) => {
    const { nome, email, telefone, plano, preco, pagamento } = req.body

    if (!nome || !email || !plano) {
        return res.status(400).json({ error: 'Campos obrigatórios em falta' })
    }

    try {
        const result = await db.query(
            `INSERT INTO signups (nome, email, telefone, plano, preco, pagamento)
             VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
            [nome, email, telefone, plano, preco, pagamento]
        )
        res.status(201).json({ sucesso: true, dados: result.rows[0] })
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Erro ao guardar assinatura' })
    }
})

module.exports = router