import bcrypt from "bcrypt";
import { Product } from "../models/product.js";
import { request } from "express";

export const productGet = async (req, res) => {
    return res.status(200).json({ message: "Hola mundo desde producto GET" });
}
export const productGetById = (req, res) => {
    return res.status(200).json({ message: "Hola mundo desde producto GET BY ID" });
}
export const productPost = async (req, res) => {
    return res.status(200).json({ message: "Hola mundo desde producto POST" });
}
export const productPut = (req, res) => {
    return res.status(200).json({ message: "Hola mundo desde producto PUT" });
}
export const productDelete = (req, res) => {
    return res.status(200).json({ message: "Hola mundo desde producto DELETE" });
}