import { Request, Response } from "express";
import * as TableModel from "./model";

export const getAllTables = async (_req: Request, res: Response) => {
  const tables = await TableModel.findAll();

  res.json(tables);
};

export const getTable = async (req: Request, res: Response) => {
  const { id } = req.params;

  const table = await TableModel.findOne(Number(id));

  res.json(table);
};

export const createTable = async (req: Request, res: Response) => {
  const { number: numberString, capacity: capacityString } = req.body;

  const number = parseInt(numberString);
  const capacity = parseInt(capacityString);

  const table = await TableModel.create(number, capacity);

  res.json(table);
};

export const deleteTable = async (req: Request, res: Response) => {
  const { id } = req.params;

  const table = await TableModel.deleteOne(Number(id));

  res.json(table);
};
