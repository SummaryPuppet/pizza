import { Router } from "express";

import upload from "../storage";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
  updateProduct,
  updateProductQuantity,
} from "./controller";

const router = Router();

/**
 * Get all Products
 * @route GET /products
 * @returns Product[] - List of products
 */
router.get("/products", getAllProducts);

/**
 * Get a Product from id
 * @route GET /product/:id
 * @returns Product
 */
router.get("/product/:id", getProduct);

/**
 * Create a Product
 * @route POST /product/:id
 * @returns Product
 */
router.post("/product", upload.single("productImg"), createProduct);

/**
 * Update a Product from id
 * @route PUT /product/:id
 * @returns Product
 */
router.put("/product/:id", upload.single("productImg"), updateProduct);

/**
 * Update the quantity fon a Product from id
 * @route PUT /product/:id
 * @returns Product
 */
router.put("/product/:id/quantity", updateProductQuantity);

/**
 * Delete Product from id
 * @route DELETE /product/:id
 * @returns Product
 */
router.delete("/product/:id", deleteProduct);

export default router;
