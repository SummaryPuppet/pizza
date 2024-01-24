import { Request, Response } from "express";
import { createAccessToken } from "../lib/jwt";
import { compare, hashPassword } from "../utils/bcrypt";
import * as UserModel from "./model";

import jwt, { JsonWebTokenError, TokenExpiredError } from "jsonwebtoken";
import { TOKEN_SECRET } from "../config";

export const register = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  try {
    const hash = await hashPassword(password);
    const user = await UserModel.create({ email, username, password: hash });

    const token = createAccessToken({
      id: user.id,
      username: user.username,
    });

    res.cookie("token", token, {
      secure: true,
      sameSite: "none",
    });

    res.json({
      id: user.id,
      username: user.username,
      email: user.email,
    });
  } catch (error) {
    res.status(500).json({ message: "Registration failed" });
  }
};

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const user = await UserModel.getOne({ username });

    if (!(await compare(password, user!.password)))
      return res.status(401).json({ message: "Invalid credentials" });

    const token = await createAccessToken({
      id: user!.id,
      username: user!.username,
    });

    res.cookie("token", token, {
      httpOnly: process.env.NODE_ENV !== "development",
      secure: true,
      sameSite: "none",
    });

    res.json({
      id: user?.id,
      username: user?.username,
      email: user?.email,
    });
  } catch (error: any) {
    console.error(error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const verifyToken = async (req: Request, res: Response) => {
  const { token } = req.cookies;

  if (!token) return res.send(false);

  jwt.verify(token, TOKEN_SECRET, async (error: any, decoded?: any) => {
    if (error) {
      if (
        error instanceof JsonWebTokenError ||
        error instanceof TokenExpiredError
      ) {
        return res.sendStatus(401); // Token inválido o expirado
      } else {
        return res.sendStatus(401); // Otro tipo de error
      }
    }

    if (decoded) {
      const userFound = await UserModel.getById(decoded.id);
      if (!userFound) return res.sendStatus(401);

      return res.json({
        id: userFound.id,
        username: userFound.username,
        email: userFound.email,
      });
    }
  });
};

export const logout = async (_req: Request, res: Response) => {
  res.cookie("token", "", {
    httpOnly: true,
    secure: true,
    expires: new Date(0),
  });
  return res.sendStatus(200);
};

// export const login = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   passport.authenticate(
//     "jwt",
//     { session: false },
//     (err: Error, user: User | false) => {
//       if (err || !user) return res.status(401);

//       req.login(user, { session: false }, (err) => {
//         if (err) return res.status(500);

//         const secretKey = process.env.JWT_KEY || "few";
//         const token = jwt.sign({ userId: user as User }, secretKey, {
//           expiresIn: "24h",
//         });

//         return res.json({ token });
//       });
//     }
//   )(req, res, next);
// };

// export const login = async (req: Request, res: Response) => {
//   const token = jwt.sign({ id: req.user!.id! }, TOKEN_SECRET);

//   res.cookie("jwt", token, { httpOnly: true });

//   res.json({ token });
// };
