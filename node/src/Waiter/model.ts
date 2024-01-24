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
  firstName: string,
  lastName: string,
  code: string
) => {
  return await prisma.waiter.create({
    data: {
      firstname: firstName,
      lastname: lastName,
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
