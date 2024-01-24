import { TransactionType } from "@prisma/client";
import prisma from "../lib/db";

interface transactionInput {
  description: string;
  amount: number;
  kind: TransactionType;
}

export const findAll = async () => {
  return await prisma.transaction.findMany();
};

export const findId = async (id: number) => {
  return await prisma.transaction.findUnique({ where: { id } });
};

export const findMonth = async (month: number) => {
  const all_transactions = await findAll();

  return all_transactions.filter(
    (transaction) => transaction.createdAt.getMonth() == month
  );
};

export const create = async ({
  description,
  amount,
  kind,
}: transactionInput) => {
  return await prisma.transaction.create({
    data: {
      description,
      amount,
      kind,
    },
  });
};

export const update = async (
  id: number,
  { description, amount, kind }: transactionInput
) => {
  return await prisma.transaction.update({
    where: { id },
    data: {
      description,
      amount,
      kind,
    },
  });
};

export const deleteOne = async (id: number) => {
  return await prisma.transaction.delete({
    where: { id },
  });
};
