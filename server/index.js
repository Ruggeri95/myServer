const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(cors({ origin: 'http://localhost:5173' }))
app.use(express.json())

// rotas
const authRoutes = require('./routes/auth')
const signupsRoutes = require('./routes/signups')
const contactsRoutes = require('./routes/contacts')

app.use('/api/auth', authRoutes)
app.use('/api/signups', signupsRoutes)
app.use('/api/contacts', contactsRoutes)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`🚀 Servidor a correr na porta ${PORT}`))