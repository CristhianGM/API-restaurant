import { verifyToken } from "../autentication/token.js";
const verifyToken = (req,res,next) => {
    const usertoken = req.header('Authorization') || "";
    verifyToken(usertoken)
    .then((user) => {
        req.user = user;
        next();
    })
    .catch((error) => {
        return res.status(401).json({ok: false, message: "Token no valido"});
    });
    next();
} 