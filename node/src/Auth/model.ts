import prisma from "../lib/db";

interface User {
  username: string;
  email: string;
  password: string;
}

export const create = async ({ email, username, password }: User) => {
  return await prisma.admin.create({
    data: {
      email,
      password,
      username,
    },
  });
};

export const getOne = async ({ username }: { username: string }) => {
  return await prisma.admin.findFirst({
    where: {
      username,
    },
  });
};

export const getById = async (id: number) => {
  return await prisma.admin.findUnique({
    where: {
      id,
    },
  });
};
