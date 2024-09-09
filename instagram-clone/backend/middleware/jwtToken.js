import jwt from 'jsonwebtoken'

const jwtWebMiddleware = (req, res, next) => {

    // extract token from request header
    const jwtToken = req.headers.authorization.split(' ')[1]

    if (!jwtToken) return res.status(401).json({ error: "unauthorized!" })

    try {
        const decoded = jwt.verify(jwtToken, process.env.JWT_SECRET)

        // pass the data to requested route
        req.user = decoded
        next()
    } catch (error) {
        res.status(401).json({ error: "Invalid token" })
    }
}

const generateToken = (userData) => {
    return jwt.sign(userData, process.env.JWT_SECRET)
}

export { jwtWebMiddleware, generateToken }