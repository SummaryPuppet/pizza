import { Router } from "express";
import {
  register as registerController,
  login as loginController,
  verifyToken,
} from "./controller";

const router = Router();

router.post("/register", registerController);

router.post("/login", loginController);

router.get("/verify-token", verifyToken);

export default router;
