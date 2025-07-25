import express from "express";
import jwttokenMiddleware from "../../middleware/jwtoken.middleware.js"
import compareBaz from "./compBaz.controller.js";

const router = express.Router();

router.post("/",compareBaz.form);
router.get("/",jwttokenMiddleware,compareBaz.getForm);

export default router;