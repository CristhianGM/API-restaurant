import { Router } from "express";
import { companyGet, companyGetById, companyPost, companyPut, companyDelete } from "../controllers/company.js";
export const companyRouter = Router();
companyRouter.get('/', companyGet);
companyRouter.get('/:id', companyGetById);
companyRouter.post('/', companyPost);
companyRouter.put('/:id', companyPut);
companyRouter.delete('/:id', companyDelete);