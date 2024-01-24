import { Router } from "express";
import upload from "../storage";
import {
  createIngredient,
  deleteIngredient,
  getAllIngredients,
  getIngredient,
  updateIngredient,
  updateIngredientQuantity,
} from "./controller";

const router = Router();

/**
 * Get all Ingredients
 * @route GET /ingredients
 * @returns Ingredient[] - List of ingredients
 */
router.get("/ingredients", getAllIngredients);

/**
 * Get an Ingredient from id
 * @route GET /ingredient/:id
 * @returns Ingredient
 */
router.get("/ingredient/:id", getIngredient);

/**
 * Create an Ingredient
 * @route POST /ingredient
 * @returns Ingredient
 */
router.post("/ingredient", upload.single("ingredientImg"), createIngredient);

/**
 * Update an Ingredient from id
 * @route PUT /ingredient/:id
 * @returns Ingredient
 */
router.put("/ingredient/:id", upload.single("ingredientImg"), updateIngredient);

/**
 * Update the quantity fon an Ingredient from id
 * @route PUT /ingredient/:id/quantity
 * @returns Ingredient
 */
router.put("/ingredient/:id/quantity", updateIngredientQuantity);

/**
 * Delete an Ingredient from id
 * @route DELETE /ingredient/:id
 * @returns Ingredient
 */
router.delete("/ingredient/:id", deleteIngredient);

export default router;
