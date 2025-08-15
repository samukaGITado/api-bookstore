import { Router } from "express";
import { criarAutor, listarTodosAutores } from "../controllers/autorControllers.js";

const router = Router()

router.post("/", criarAutor)
router.get("/", listarTodosAutores)

export default router