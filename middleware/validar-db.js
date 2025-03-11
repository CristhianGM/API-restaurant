import { User } from '../models/user.js';
export const existeEmail = async (email) => {
    const existeUsuario = await User.findOne({ email });
    //const existeUsuario = await User.findOne({email});
    if (existeUsuario) {
        throw new Error(`El correo ${email} está registrado en la base de datos`);
    }
    console.log("Salida:", existeUsuario);
}

export const exiteIdUser = async (id) => {
    const existeUserId = await User.findById(id);
    if (!existeUserId) {
        throw new Error(`El id ${id} ingresado no existe`);
    }
}