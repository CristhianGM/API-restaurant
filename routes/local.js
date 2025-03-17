import { Router } from "express";
import { localGet, localGetById, localPost, localPut, localDelete } from "../controllers/local.js";
export const localRouter = Router();
localRouter.get('/', localGet);
localRouter.get('/:id', localGetById);
localRouter.post('/', localPost);
localRouter.put('/:id', localPut);
localRouter.delete('/:id', localDelete);