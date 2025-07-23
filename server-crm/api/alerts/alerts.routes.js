import express from "express";
import alertController from "./alerts.controller.js";
import jwtTokenMiddleware from "../../middleware/jwtoken.middleware.js";

const router = express.Router();

router.post("/", jwtTokenMiddleware, alertController.createAlert);
router.get("/",jwtTokenMiddleware,alertController.getAllAlert);

export default router;