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

router.get("/ingredients", getAllIngredients);

router.get("/ingredient/:id", getIngredient);

router.post("/ingredient", upload.single("ingredientImg"), createIngredient);

router.put("/ingredient/:id", upload.single("ingredientImg"), updateIngredient);

router.put("/ingredient/:id/quantity", updateIngredientQuantity);

router.delete("/ingredient/:id", deleteIngredient);

export default router;
