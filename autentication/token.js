//Revisar Oatuh: 2.0
import jwt from 'jsonwebtoken';
export const getJwtToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
};

export const verifyToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
            if (err) {
                reject();
            } else {
                resolve(decoded);
            }
        });
    });
};