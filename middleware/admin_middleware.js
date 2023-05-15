const userModel = require("../models/user");
const jwt = require("jsonwebtoken");
require("dotenv").config();
ADMIN_TOKEN_KEY = process.env.ADMIN_TOKEN_KEY;

const adminMiddleware = async function (req, res, next) {
    const token = req.headers["access-token"];
    if (!token) {
        return res
            .status(403)
            .send({ Message: "A Token Is Required For Authentication" });
    }

    // jwt.verify(token,)
    const decoded = jwt.verify(token, process.env.ADMIN_TOKEN_KEY);
    if (decoded.is_admin) {
        const user = jwt.verify(token, ADMIN_TOKEN_KEY);
        req.user = user;
        return next();
    } else {
        return res.status(404).send({ Message: "Sorry Only Admin Can Access." });
    }
};

module.exports = { adminMiddleware };
