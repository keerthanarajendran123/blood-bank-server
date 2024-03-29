import express from "express";
import authMiddleware from "../middlewares/authMiddelware.js";
import adminMiddleware from "../middlewares/adminMiddleware.js";
import {
  getDonarsListController,
  getHospitalListController,
  getOrgListController,
  deleteDonarController,
} from "../controllers/adminController.js";

// Router object
const router = express.Router();

// Routes

// GET || DONAR LIST
router.get(
  "/donar-list",
  authMiddleware,
  adminMiddleware,
  getDonarsListController
);

// GET || HOSPITAL LIST
router.get(
  "/hospital-list",
  authMiddleware,
  adminMiddleware,
  getHospitalListController
);

// GET || ORG LIST
router.get(
  "/org-list",
  authMiddleware,
  adminMiddleware,
  getOrgListController
);

// DELETE DONAR || GET
router.delete(
  "/delete-donar/:id",
  authMiddleware,
  adminMiddleware,
  deleteDonarController
);


export default router;
