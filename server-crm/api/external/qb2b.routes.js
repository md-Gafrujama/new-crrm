import express from "express";
import qb2b from "./qb2b.controller.js";

const router = express.Router();

router.post("/contact", qb2b.Contact);
router.get("/contact",qb2b.getContact);

router.post("/leads",qb2b.Leads);
router.get("/leads",qb2b.getLeads);

export default router;