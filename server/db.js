const { Pool } = require('pg')
require('dotenv').config()

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
})

pool.connect()
    .then(() => console.log('✅ Base de dados ligada'))
    .catch(err => console.error('Erro na ligação:', err.message))

module.exports = pool