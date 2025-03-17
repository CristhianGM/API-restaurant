import { Router } from "express";
import { userDelete, userGet, userGetById, userPost, userPut } from "../controllers/user.js";
import { check } from "express-validator";
import { validarCampos } from "../middleware/validar-campos.js";
import { existeEmail, exiteIdUser } from "../middleware/validar-db.js";
export const userRouter = Router();
//Middlewares
/* const validarCampos = (req, res, next) => {
    // console.log("Esto se ejecuta antes del post"); 
    const { name, email, password, role } = req.body;
    if(!email?.trim()) {
        return res.status(400).json({ 
            ok: false,
            message: "Ingrese un email, campo obligatorio." 
        });
    }
    if(password.length < 6) {
        return res.status(400).json({
            ok: false,
            message: "La contraseña debe tener al menos 6 caracteres."
        });
    }
    if(role !== 'ADMIN') {
        return res.status(400).json({
            ok: false,
            message: "El rol debe ser ADMIN."
        });
    }
    // console.log({ name, email, password, role }) 
    next();
} */
//Validad que el password con mayor a 6 caracteres+
//Validad que el rol sea ADMIN

//TODO: la ruta de la logica
//api/users
userRouter.get('/', userGet);
//api/users/1345
userRouter.get('/:id', [
    check("id", "El id no es valido de MONGODB").isMongoId(),
    check("id").custom(exiteIdUser),
    validarCampos],
    userGetById);
userRouter.post('/', [
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("name", "Debe tener al menos 3 caracteres").isLength({ min: 3 }),
    check("password", "El password es obligatorio").not().isEmpty(),
    check("password", "Debe tener al menos 6 caracteres").isLength({ min: 6 }),
    check("password", "El password no debe ser mayor a 30 caracteres").isLength({ max: 30 }),
    check("email", "El email es obligatorio").not().isEmpty(),
    check("email", "El email debe tener un dominio valido").isEmail(),
    check("role", "El rol debe ser valido").isIn(["ADMIN", "WAITER"]),
    check("email").custom(existeEmail),
    validarCampos],
    userPost);
userRouter.put('/:id', [
    check("id", "El id no es valido de MONGODB").isMongoId(),
    check("id").custom(exiteIdUser),
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("name", "Debe tener al menos 3 caracteres").isLength({ min: 3 }),
    check("role", "El rol es obligatorio").not().isEmpty(),
    check("role", "El rol debe ser valido").isIn(["ADMIN", "WAITER"]),
    validarCampos],
    userPut);
userRouter.delete('/:id', [
    check("id", "El id no es valido de MONGODB").isMongoId(),
    check("id").custom(exiteIdUser),
    validarCampos],
    userDelete);
//company
//local
// category (X)
// product
//userRouter.post('/');
//Aqui estan lo endpoints de la entidad user
//Un endpoint es básicamente un punto de acceso a un recurso dentro de la API.
//CRUD => Create, Read, Update, Delete
