import prisma from "../lib/db";

interface IngredientOptional {
  name: string;
  price: number;
  unitPrice: number;
  quantityInStock: number;
  description: string;
  imagePath?: string;
  createdBy?: number;
}

export const findAll = async () => {
  return await prisma.ingredient.findMany();
};

export const findId = async (id: number) => {
  return await prisma.ingredient.findUnique({ where: { id } });
};

export const create = async (ingredientInput: IngredientOptional) => {
  const {
    name,
    price,
    unitPrice,
    quantityInStock,
    description,
    imagePath,
    createdBy,
  } = ingredientInput;

  return await prisma.ingredient.create({
    data: {
      name,
      price,
      unitPrice,
      quantityInStock,
      description,
      imagePath,
      createdBy: { connect: { id: createdBy } },
    },
  });
};

export const update = async (
  id: number,
  { name, price, unitPrice, quantityInStock, description }: IngredientOptional
) => {
  return await prisma.ingredient.update({
    where: { id },
    data: {
      name,
      price,
      unitPrice,
      quantityInStock,
      description,
    },
  });
};

export const updateQuantityInStock = async (
  id: number,
  quantityInStock: number
) => {
  return await prisma.ingredient.update({
    where: { id },
    data: {
      quantityInStock,
    },
  });
};

export const deleteOne = async (id: number) => {
  return await prisma.ingredient.delete({
    where: { id },
  });
};
