import { ICreateTable } from "@/types/table";

const HOST_URL = import.meta.env.VITE_API_URL;

export const getTables = async () => {
  const response = await fetch(`${HOST_URL}/tables`);
  return await response.json();
};

export const createTable = async (body: ICreateTable) => {
  return await fetch(`${HOST_URL}/table`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};
