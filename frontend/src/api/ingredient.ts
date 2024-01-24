const HOST_URL = import.meta.env.VITE_API_URL;

export const getIngredients = async () => {
  const response = await fetch(`${HOST_URL}/ingredients`);
  return await response.json();
};

export const getIngredient = async (id: string) => {
  const response = await fetch(`${HOST_URL}/ingredient/${id}`);
  return await response.json();
};

export const createIngredient = async (formData: FormData) => {
  return await fetch(`${HOST_URL}/ingredient/`, {
    method: "POST",
    body: formData,
  });
};

export const updateIngredientQuantity = async (
  id: string,
  quantity: number
) => {
  const response = await fetch(`${HOST_URL}/ingredient/${id}/quantity`, {
    method: "PUT",
    body: JSON.stringify(quantity),
  });
  return await response.json();
};
