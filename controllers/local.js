import bcrypt from "bcrypt";
import { Local } from "../models/local.js";
import { request } from "express";

export const localGet = async (req, res) => {
    return res.status(200).json({ message: "Hola mundo desde local GET" });
}
export const localGetById = (req, res) => {
    return res.status(200).json({ message: "Hola mundo desde local GET BY ID" });
}
export const localPost = async (req, res) => {
    return res.status(200).json({ message: "Hola mundo desde local POST" });
}
export const localPut = (req, res) => {
    return res.status(200).json({ message: "Hola mundo desde local PUT" });
}
export const localDelete = (req, res) => {
    return res.status(200).json({ message: "Hola mundo desde local DELETE" });
}