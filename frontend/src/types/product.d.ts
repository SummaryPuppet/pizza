import { IIngredient } from "./ingredient";

export interface IProduct {
  id: number;
  name: string;
  description: string;
  cost: number;
  price: number;
  quantityInStock: number;
  imgURL: string;
  ingredients: IIngredient[];
  category: ProductCategory;
}

export interface ICreateProduct {
  name: string;
  description: string;
  price: number;
  quantityInStock: number;
  productImg: string;
  ingredients: number[];
  category: ProductCategory;
}

export enum ProductCategory {
  Pizza = "pizza",
  Lasagna = "lasagna",
  Drink = "drink",
  Aditional = "aditional",
}
