import { Request, Response } from "express";

import * as TransactionModel from "./model";

export const getAllTransactions = async (_: Request, res: Response) => {
  const transactions = await TransactionModel.findAll();

  const transactionsWithMonth = transactions.map((transaction) => ({
    ...transaction,
    month: transaction.createdAt.getMonth(),
  }));

  res.json(transactionsWithMonth);
};

export const getAllTransactionsPerMonth = async (
  req: Request,
  res: Response
) => {
  const { month } = req.params;

  const transactions = await TransactionModel.findMonth(Number(month));

  res.json(transactions);
};

export const getAllTransactionPerId = async (req: Request, res: Response) => {
  const { id } = req.params;

  const transaction = await TransactionModel.findId(Number(id));

  res.json(transaction);
};

export const createTransaction = async (req: Request, res: Response) => {
  const { description, amount, kind } = req.body;

  const result = await TransactionModel.create({
    description,
    amount,
    kind,
  });

  res.json(result);
};

export const updateTransaction = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { description, amount, kind } = req.body;

  try {
    const transaction = await TransactionModel.update(Number(id), {
      description,
      amount,
      kind,
    });

    res.json(transaction);
  } catch (error) {}
};

export const deleteTransaction = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await TransactionModel.deleteOne(Number(id));

    res.json(result);
  } catch (error) {
    res.status(500);
  }
};
