import { validationResult } from 'express-validator';

//request --> es una solicitud del cliente al servidor
//response --> es la respuesta del servidor al cliente
//next --> es una función que se llama para pasar el control al siguiente middleware
export const validarCampos = (req, res, next) => {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
        return res.status(400).json(
            {
                ok: false,
                msg: errors.array()[0].msg
            }
        );
    }
    next();
}