import { Router } from "express";
import { criarAutor } from "../controllers/autorControllers.js";

const router = Router()

router.post("/", criarAutor)

export default router