const jwt = require("jsonwebtoken");

const verifyJWT = (req, res, next) => {
    return next(); 
    const unauthenticatedRoutes = ['/quizzes', '/users', '/register', '/auth', '/refresh', '/logout'];

    // Check if the current route does not require JWT verification
    if (unauthenticatedRoutes.includes(req.path)) {
        return next(); // Skip JWT verification for unauthenticated routes
    }

    const authHeader = req.headers.authorization || req.headers.Authorization;
    if (!authHeader?.startsWith("Bearer ")) return res.sendStatus(401);

    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) return res.sendStatus(403); // Invalid token
        req.user = decoded.UserInfo.username;
        req.roles = decoded.UserInfo.roles;
        next();
    });
};

module.exports = verifyJWT;
