const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try{
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = decoded.userId;
        next();
    }catch (e) {
        res.status(401).send({
            message: 'Not authenticated with this token',
            success: false,
            data: e,
        })
    }
}