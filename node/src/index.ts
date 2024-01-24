import cors from "cors";
import { config } from "dotenv";
import express from "express";

import authRoutes from "./Auth/route";
import ingredientRoutes from "./Ingredient/route";
import productRoutes from "./Product/route";
import waiterRoute from "./Waiter/route";

import passport from "passport";
import { configPassport } from "./lib/passport";

config();

configPassport();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
// app.use(cors({ origin: ["http://localhost:5173"] }));
app.use(passport.initialize());
app.use("/img", express.static(__dirname + "/storage"));

app.get("/", async (_, res) => {
  res.send("hello world");
});

app.use(authRoutes);
app.use(productRoutes);
app.use(ingredientRoutes);
app.use(waiterRoute);

app.listen(port);
console.log(`Server on port http://localhost:${port}`);
