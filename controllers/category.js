import bcrypt from "bcrypt";
import { Category } from "../models/category.js";
import { request } from "express";

export const categoryGet = async (req, res) => {
    return res.status(200).json({ message: "Hola mundo desde categoria GET BY ID" });
}
export const categoryGetById = (req, res) => {
    return res.status(200).json({ message: "Hola mundo desde categoria  GET BY ID" });
}
export const categoryPost = async (req, res) => {
    return res.status(200).json({ message: "Hola mundo desde categoria  POST" });
}
export const categoryPut = (req, res) => {
    return res.status(200).json({ message: "Hola mundo desde categoria PUT" });
}
export const categoryDelete = (req, res) => {
    return res.status(200).json({ message: "Hola mundo desde categoria DELETE" });
}