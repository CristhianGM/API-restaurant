import bcrypt from "bcrypt";
import { Company } from "../models/company.js";
import { request } from "express";

export const companyGet = async (req, res) => {
    return res.status(200).json({ message: "Hola mundo desde company GET" });
}
export const companyGetById = (req, res) => {
    return res.status(200).json({ message: "Hola mundo desde company GET BY ID" });
}
export const companyPost = async (req, res) => {
    return res.status(200).json({ message: "Hola mundo desde company POST" });
}
export const companyPut = (req, res) => {
    return res.status(200).json({ message: "Hola mundo desde company PUT" });
}
export const companyDelete = (req, res) => {
    return res.status(200).json({ message: "Hola mundo desde company DELETE" });
}

export const userGet = async (req, res) => {
    const userBD = await User.find();
    return res.status(200).json({ ok: true, users: userBD });
}
export const userGetById = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    const userBD = await User.findById(id); 
    return res.status(200).json({ ok: true, user: userBD });
}
export const userPost = async (req, res) => {
    console.log("Se ejecuta el metodo post");
    const { name, email, password, role } = req.body;
    const nuevoUsuario = { name, email, password, role, }
    nuevoUsuario.password = bcrypt.hashSync(nuevoUsuario.password, 10);
    const userBD = await User.create(nuevoUsuario);
    return res.status(200).json({ ok: true, user: userBD });
}
export const userPut = async (req, res) => {
    const {name, role} = req.body;
    const {id} = req.params;
    const userDB = await User.findByIdAndUpdate(id, {name, role}, {new: true});
    return res.status(200).json({ ok: true, user: userDB });
}
export const userDelete = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    const userBD = await User.findOneAndDelete({_id: id});
    return res.status(200).json({ ok: true, user: userBD });
}
export const userLogin = async (req, res) => {
    const { email, password } = req.body;
    const userBD = await User.findOne({ email });
    if (!userBD) {
        return res.status(404).json({ ok: false, message: "Usuario no encontrado." });
    }    
    const validPassword = bcrypt.compareSync(password, userBD.password);
    if (!validPassword) {
        return res.status(404).json({ ok: false, message: "Password incorrecto." });
    }
    return res.status(200).json({ ok: true, user: userBD });
}