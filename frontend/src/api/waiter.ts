import { ICreateWaiter } from "@/types/waiter";

const HOST_URL = import.meta.env.VITE_API_URL;

export const getWaiters = async () => {
  const response = await fetch(`${HOST_URL}/waiters`);
  return await response.json();
};

export const createWaiter = async (body: ICreateWaiter) => {
  return await fetch(`${HOST_URL}/waiter/create/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};
