import { Request, Response } from "express";
import * as WaiterModel from "./model";

export const getAllWaiters = async (_req: Request, res: Response) => {
  const waiters = await WaiterModel.findAll();

  res.json(waiters);
};

export const loginWaiter = async (req: Request, res: Response) => {
  const { code } = req.body;

  try {
    const waiter = WaiterModel.findOneCode(code);

    res.json(waiter);
  } catch (error) {
    res.status(401).json({ error: "Invalid credentials" });
  }
};

export const createWaiter = async (req: Request, res: Response) => {
  const { firstName, lastName, code } = req.body;

  const waiter = await WaiterModel.create(firstName, lastName, code);

  res.json(waiter);
};

export const deleteWaiter = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const waiter = await WaiterModel.deleteOne(parseInt(id));
    res.json(waiter);
  } catch (error) {
    res.status(500);
  }
};
