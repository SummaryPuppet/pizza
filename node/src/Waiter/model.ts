import prisma from "../lib/db";

export const findAll = async () => {
  return await prisma.waiter.findMany();
};

export const findOneCode = async (code: string) => {
  return await prisma.waiter.findFirstOrThrow({
    where: {
      code,
    },
  });
};

export const create = async (
  firstname: string,
  lastname: string,
  code: string
) => {
  return await prisma.waiter.create({
    data: {
      firstname,
      lastname,
      code,
    },
  });
};

export const deleteOne = async (id: number) => {
  return await prisma.waiter.delete({
    where: {
      id,
    },
  });
};
