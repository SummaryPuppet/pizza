export interface IIngredient {
  id: number;
  name: string;
  description: string;

  unitPrice: number;
  price: number;
  quantityInStock: number;

  imgURL: string;
}

export interface ICreateIngredient {
  name: string;
  description: string;

  unitPrice: number;
  price: number;
  quantityInStock: number;

  ingredientImg: FileList;
}
