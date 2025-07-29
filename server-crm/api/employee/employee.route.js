import express from "express";
import jwtTokenMiddleware from "../../middleware/jwtoken.middleware.js";
import { upload, uploadToCloudinary } from "../../utilis/fileUpload.js"; 
import employee from "./employee.controller.js";

const router = express.Router();
router.use(express.json());

router.post("/",jwtTokenMiddleware, upload.single('profilePhoto'),uploadToCloudinary,employee.addEmployee);
router.get("/",jwtTokenMiddleware,employee.getEmployee);
router.delete("/:id",jwtTokenMiddleware,employee.delEmployee);
router.put("/:id",jwtTokenMiddleware,employee.updateEmployee);

export default router;