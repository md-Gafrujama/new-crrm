import express from "express";
import { 
  unlockAccount, 
  getLockedAccounts 
} from "./security.controller.js";
import jwtTokenMiddleware from "../../middleware/jwtoken.middleware.js";

const router = express.Router();

router.use(jwtTokenMiddleware);

router.post("/unlock", unlockAccount);
router.get("/locked", getLockedAccounts);

export default router;