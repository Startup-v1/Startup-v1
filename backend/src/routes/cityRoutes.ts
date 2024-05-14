import express from "express";
import { getCities, getCityByName } from "../controllers/cityController";

const router = express.Router();

router.get("/cities", getCities);
router.get("/city/:name", getCityByName);

export default router;
