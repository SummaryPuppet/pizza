import { Router } from "express";
import {
  createWaiter,
  deleteWaiter,
  getAllWaiters,
  loginWaiter,
} from "./controller";

const router = Router();

router.get("/waiters", getAllWaiters);

router.post("/waiter/login", loginWaiter);

router.post("/waiter/create", createWaiter);

router.delete("/waiter/:id", deleteWaiter);

export default router;
