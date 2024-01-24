const HOST_URL = import.meta.env.VITE_API_URL;

export const getWaiters = async () => {
  const response = await fetch(`${HOST_URL}/waiters`);
  return await response.json();
};
