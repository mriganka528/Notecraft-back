const jwt = require('jsonwebtoken');
const JWT_SECRET = "helloMyselfMriganka";

const fetchUser = (req, res, next) => {
    // Get the user from the jwt token and add id to req object
    const token = req.header('auth-token');
    if (!token) {
        console.error("Token is missing");
        return res.status(401).send({ error: "Token is not provided" });
    }

    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        console.error("Token verification failed:", error);
        res.status(401).send({ error: "Authentication failed. Please provide a valid token" });
    }
}

module.exports = fetchUser;
