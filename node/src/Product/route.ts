import { Router } from "express";

import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
  updateProduct,
  updateProductQuantity,
} from "./controller";
import upload from "../storage";

const router = Router();

router.get("/products", getAllProducts);

router.get("/product/:id", getProduct);

router.post("/product", upload.single("productImg"), createProduct);

router.put("/product/:id", upload.single("productImg"), updateProduct);

router.put("/product/:id/quantity", updateProductQuantity);

router.delete("/product/:id", deleteProduct);

export default router;
