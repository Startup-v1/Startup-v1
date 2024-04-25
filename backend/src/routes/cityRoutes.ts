import express from "express";
import { getCities } from "../controllers/cityController";

const router = express.Router();

router.get("/cities", getCities);
// router.get("/cities/:id");

export default router;
