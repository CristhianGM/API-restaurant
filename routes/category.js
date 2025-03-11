import { Router } from "express";
import { categoryGet, categoryGetById, categoryPost, categoryPut, categoryDelete } from "../controllers/category.js";
export const categoryRouter = Router();
categoryRouter.get('/', categoryGet);
categoryRouter.get('/:id', categoryGetById);
categoryRouter.post('/', categoryPost);
categoryRouter.put('/:id', categoryPut);
categoryRouter.delete('/:id', categoryDelete);
