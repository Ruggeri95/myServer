const jwt = require('jsonwebtoken')

module.exports = function authMiddleware(req, res, next) {
    const header = req.headers['authorization']
    const token = header && header.split(' ')[1]

    if (!token) return res.status(401).json({ error: 'Token em falta' })

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        next()
    } catch {
        res.status(403).json({ error: 'Token inválido ou expirado' })
    }
}