import { Router } from "express";
import {
  createTransaction,
  deleteTransaction,
  getAllTransactionPerId,
  getAllTransactions,
  updateTransaction,
} from "./controller";

const router = Router();

router.get("/transactions", getAllTransactions);
router.get("/transactions/:month", getAllTransactionPerId);

router.get("/transaction/:id", getAllTransactionPerId);

router.post("/transaction", createTransaction);

router.put("/transaction/:id", updateTransaction);
router.delete("/transaction/:id", deleteTransaction);

export default router;
