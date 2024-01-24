const HOST_URL = import.meta.env.VITE_API_URL;

export const getProducts = async () => {
  const response = await fetch(`${HOST_URL}/products`);
  return await response.json();
};

export const getProduct = async (id: string) => {
  const response = await fetch(`${HOST_URL}/product/${id}`);
  return await response.json();
};

export const createProduct = async (formData: FormData) => {
  return await fetch(`${HOST_URL}/product/`, {
    method: "POST",
    body: formData,
  });
};
