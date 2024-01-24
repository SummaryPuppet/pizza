import prisma from "../lib/db";

export const findAll = async () => {
  return await prisma.table.findMany();
};

export const findOne = async (id: number) => {
  return await prisma.table.findUnique({
    where: {
      id,
    },
  });
};

export const create = async (number: number, capacity: number) => {
  return await prisma.table.create({
    data: {
      number,
      capacity,
    },
  });
};

export const deleteOne = async (id: number) => {
  return await prisma.table.delete({
    where: {
      id,
    },
  });
};
