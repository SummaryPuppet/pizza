import { Request, Response } from "express";
import { unlink } from "fs/promises";

import { HOST } from "../config";
import * as IngredientModel from "./model";

export const getAllIngredients = async (_: Request, res: Response) => {
  const ingredients = await IngredientModel.findAll();

  const ingredientsWithImg = ingredients.map((ingredient) => ({
    ...ingredient,
    imgURL: `${HOST}/img/${ingredient.imagePath}`,
  }));

  res.json(ingredientsWithImg);
};

export const getIngredient = async (req: Request, res: Response) => {
  const { id } = req.params;

  const ingredient = await IngredientModel.findId(Number(id));

  const ingredientWithImg = {
    ...ingredient,
    imgURL: `${HOST}/img/${ingredient?.imagePath}`,
  };

  res.json(ingredientWithImg);
};

export const createIngredient = async (req: Request, res: Response) => {
  try {
    const {
      name,
      description,
      price: priceString,
      unitPrice: unitPriceString,
      quantityInStock: quantityInStockString,
      createdBy: createdByString,
    } = req.body;

    let imagePath = "";

    if (req.file) {
      imagePath = req.file.path.split("storage")[1].slice(1);
    }

    const price = parseFloat(priceString);
    const unitPrice = parseFloat(unitPriceString);
    const quantityInStock = parseFloat(quantityInStockString);
    const createdBy = parseInt(createdByString);

    const result = await IngredientModel.create({
      name,
      price,
      unitPrice,
      quantityInStock,
      description,
      imagePath,
      createdBy,
    });

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
};

export const updateIngredient = async (req: Request, res: Response) => {
  const { id } = req.params;
  const {
    name,
    description,
    price: priceString,
    unitPrice: unitPriceString,
    quantityInStock: quantityInStockString,
  } = req.body;

  const price = parseFloat(priceString);
  const unitPrice = parseFloat(unitPriceString);
  const quantityInStock = parseFloat(quantityInStockString);

  try {
    const ingredient = await IngredientModel.update(Number(id), {
      name,
      description,
      unitPrice,
      price,
      quantityInStock,
    });

    res.json(ingredient);
  } catch (error) {
    console.error(error);

    res.status(500).json({ error: "Internal error" });
  }
};

export const updateIngredientQuantity = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { quantityInStock: quantityInStockString } = req.body;

  const quantityInStock = parseFloat(quantityInStockString);

  try {
    const ingredient = await IngredientModel.updateQuantityInStock(
      Number(id),
      quantityInStock
    );

    res.json(ingredient);
  } catch (error) {
    console.error(error);

    res.status(500).json({ error: "Internal error" });
  }
};

export const deleteIngredient = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await IngredientModel.deleteOne(Number(id));

    if (result?.imagePath) {
      await unlink(`../storage/${result?.imagePath}`);
    }

    res.json(result);
  } catch (error: any) {
    if (error.code == "ENOENT") {
      return res.status(404).json({ error: "File not found" });
    }

    res.status(500);
  }
};
