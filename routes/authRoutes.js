import express from "express";
import {
  registerController,
  loginController,
  currentUserController,
} from "../controllers/authController.js";
import authMiddleware from "../middlewares/authMiddelware.js"


const router = express.Router();

// Routes


router.post("/register", registerController);

router.post("/login", loginController);

router.get("/current-user", authMiddleware, currentUserController);


export default router;
