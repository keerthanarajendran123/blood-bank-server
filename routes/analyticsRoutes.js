import express from "express";
import authMiddleware from "../middlewares/authMiddelware.js";
import { bloodGroupDetailsContoller } from "../controllers/analyticsController.js";

const router = express.Router();

// Routes


router.get("/bloodGroups-data", authMiddleware, bloodGroupDetailsContoller);

export default router;
