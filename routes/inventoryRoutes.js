import express from "express";
import authMiddleware from "../middlewares/authMiddelware.js";
import {
  createInventoryController,
  getInventoryController,
  getDonarsController,
  getHospitalController,
  getOrgnaisationController,
  getOrgnaisationForHospitalController,
  getInventoryHospitalController,
  getRecentInventoryController,
} from "../controllers/inventoryController.js";

const router = express.Router();

// Routes

// ADD INVENTORY || POST
router.post("/create-inventory", authMiddleware, createInventoryController);

// GET ALL BLOOD RECORDS
router.get("/get-inventory", authMiddleware, getInventoryController);

// GET RECENT BLOOD RECORDS
router.get("/get-recent-inventory", authMiddleware, getRecentInventoryController);

// GET HOSPITAL BLOOD RECORDS
router.post("/get-inventory-hospital", authMiddleware, getInventoryHospitalController);

// GET DONAR RECORDS
router.get("/get-donars", authMiddleware, getDonarsController);

// GET HOSPITAL RECORDS
router.get("/get-hospitals", authMiddleware, getHospitalController);

// GET ORGANISATION RECORDS
router.get("/get-organisation", authMiddleware, getOrgnaisationController);

// GET ORGANISATION RECORDS FOR HOSPITAL
router.get("/get-organisation-for-hospital", authMiddleware, getOrgnaisationForHospitalController);

export default router;
