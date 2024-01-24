import { IUser } from "@/types/user";

const HOST_URL = import.meta.env.VITE_API_URL;

export const signup = async (user: IUser) => {
  return await fetch(`${HOST_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
};

export const signin = async (user: IUser) => {
  return await fetch(`${HOST_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
};

export const checkLogin = async (cookies: { [key: string]: string }) => {
  return await fetch(`${HOST_URL}/verify-token`, {
    body: cookies.token,
  });
};
