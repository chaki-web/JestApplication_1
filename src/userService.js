import { fetchData } from './api.js';

export const getUserName = async () => {
  const user = await fetchData();
  return user.name;
};
