import { ProductCategory } from "@prisma/client";
import prisma from "../lib/db";

interface ProductInput {
  name: string;
  description?: string;
  price: number;
  category: ProductCategory;
  cost: number;
  quantityInStock: number;
  imagePath?: string;
  ingredients: number[];
  createdBy?: number;
}

export const findAll = async () => {
  return await prisma.product.findMany();
};

export const findId = async (id: number) => {
  return await prisma.product.findUnique({
    where: { id },
    include: {
      IngredientsOnProducts: {
        include: {
          ingredient: true,
        },
      },
      createdBy: true,
    },
  });
};

export const create = async (productInput: ProductInput) => {
  const {
    name,
    description,
    cost,
    price,
    quantityInStock,
    category,
    imagePath,
    ingredients,
    createdBy,
  } = productInput;

  return await prisma.product.create({
    data: {
      name,
      description,
      cost,
      price,
      quantityInStock,
      category,
      imagePath,
      IngredientsOnProducts: {
        create: ingredients.map((ingredientId) => ({
          ingredient: { connect: { id: ingredientId } },
        })),
      },
      createdBy: { connect: { id: createdBy } },
    },
    include: {
      IngredientsOnProducts: {
        include: {
          ingredient: true,
        },
      },
    },
  });
};

export const update = async (
  id: number,
  {
    name,
    description,
    cost,
    price,
    category,
    quantityInStock,
    ingredients,
  }: ProductInput
) => {
  return await prisma.product.update({
    where: { id },
    data: {
      name,
      description,
      cost,
      price,
      category,
      quantityInStock,
      IngredientsOnProducts: {
        set: ingredients.map((ingredientId) => ({
          ingredientId_productId: {
            ingredientId: ingredientId,
            productId: id,
          },
        })),
      },
    },
    include: {
      IngredientsOnProducts: {
        include: {
          ingredient: true,
        },
      },
    },
  });
};

export const updateQuantityInStock = async (
  id: number,
  quantityInStock: number
) => {
  return await prisma.product.update({
    where: { id },
    data: {
      quantityInStock,
    },
  });
};

export const deleteOne = async (id: number) => {
  return await prisma.product.delete({ where: { id } });
};
