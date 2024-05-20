import express from "express";
import { login, authenticateUser, changePassword } from "../controllers/authController";
const router = express.Router();

router.post("/login", login);
router.post("/authenticate", authenticateUser);

export default router;
