import express from "express";
import { login, authenticateUser } from "../controllers/authController"; // TODO add change password controller
const router = express.Router();

router.post("/login", login);
router.post("/authenticate", authenticateUser);

export default router;
