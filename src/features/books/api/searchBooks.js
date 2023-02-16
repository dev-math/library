import axios from '@/lib/axios';

export const searchBooks = async (query) => {
  const response = await axios.post(`/search?q=${query}`);
  return response;
};
