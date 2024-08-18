import { Router } from "express";
const router = Router();
import * as AuthController from "./auth.controller.js";
import validation from "../../middleware/validation.js";
import { loginSchema, registerSchema } from "./auth.validation.js";



router.post('/register', validation(registerSchema),AuthController.Register);

router.post('/login', validation(loginSchema),AuthController.login);

export default router;