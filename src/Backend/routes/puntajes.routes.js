import { Router } from "express";
import { getTiempos, createUsuario, createPuntajes } from "../controllers/puntajes.controller.js";

const router = Router()

router.get('/tiempos', getTiempos )

router.post('/login', createUsuario)

router.post('/createPuntajes', createPuntajes)

export default router