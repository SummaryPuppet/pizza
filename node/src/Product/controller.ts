import { Request, Response } from "express";
import { unlink } from "fs/promises";

import { ProductCategory } from "@prisma/client";
import { HOST } from "../config";
import * as ProductModel from "./model";

export const getAllProducts = async (_: Request, res: Response) => {
  const products = await ProductModel.findAll();

  const productsWithImg = products.map((product) => ({
    ...product,
    imgURL: `${HOST}/img/${product.imagePath}`,
  }));

  res.json(productsWithImg);
};

export const getProduct = async (req: Request, res: Response) => {
  const { id } = req.params;

  const product = await ProductModel.findId(Number(id));

  const ingredients = product?.IngredientsOnProducts.map(
    (element) => element.ingredient
  );

  const productWithoutIngredientsOnProduct = {
    ...product,
    IngredientsOnProducts: null,
    ingredients,
    imgURL: `${HOST}/img/${product?.imagePath}`,
  };

  res.json(productWithoutIngredientsOnProduct);
};

export const createProduct = async (req: Request, res: Response) => {
  const {
    name,
    description,
    price: priceString,
    quantityInStock: quantityInStockString,
    category,
    createdBy: createdByString,
  } = req.body;

  try {
    const ingredients: number[] = JSON.parse(req.body.ingredients);

    let imagePath = "";

    if (req.file) {
      imagePath = req.file.path.split("storage")[1].slice(1);
    }

    let cost = ingredients.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );

    const price = parseFloat(priceString);
    const quantityInStock = parseFloat(quantityInStockString);
    const createdBy = parseFloat(createdByString);

    const uppercaseCategory =
      category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();

    if (!(uppercaseCategory in ProductCategory)) {
      return res.status(400).json({ error: "Invalid category value" });
    }

    const result = await ProductModel.create({
      name,
      description,
      cost,
      price,
      quantityInStock,
      category: uppercaseCategory as ProductCategory,
      imagePath,
      ingredients,
      createdBy,
    });

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const {
    name,
    description,
    cost: costString,
    price: priceString,
    quantityInStock: quantityInStockString,
    category,
    ingredients,
  } = req.body;

  const cost = parseFloat(costString);
  const price = parseFloat(priceString);
  const quantityInStock = parseFloat(quantityInStockString);

  try {
    const product = await ProductModel.update(Number(id), {
      name,
      description,
      quantityInStock,
      price,
      category,
      cost,
      ingredients,
    });

    res.json(product);
  } catch (error) {
    console.error(error);

    res.status(500).json({ error: "Internal error" });
  }
};

export const updateProductQuantity = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { quantityInStock: quantityInStockString } = req.body;

  const quantityInStock = parseFloat(quantityInStockString);

  try {
    const product = await ProductModel.updateQuantityInStock(
      Number(id),
      quantityInStock
    );

    res.json(product);
  } catch (error) {
    console.error(error);

    res.status(500).json({ error: "Internal error" });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await ProductModel.deleteOne(Number(id));

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
