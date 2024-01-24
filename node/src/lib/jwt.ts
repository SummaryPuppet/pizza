import { TOKEN_SECRET } from "../config";
import jwt from "jsonwebtoken";

export const createAccessToken = async (payload: {
  id: number;
  username?: string;
}) => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, TOKEN_SECRET, { expiresIn: "1d" }, (err, token) => {
      if (err) reject(err);
      resolve(token);
    });
  });
};
