import { Router } from "express";
import { productGet, productGetById, productPost, productPut, productDelete } from "../controllers/product.js";
export const productRouter = Router();
productRouter.get('/', productGet);
productRouter.get('/:id', productGetById);
productRouter.post('/', productPost);
productRouter.put('/:id', productPut);
productRouter.delete('/:id', productDelete);