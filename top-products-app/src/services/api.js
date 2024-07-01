import axios from 'axios';

const API_URL = 'http://20.244.56.144/test';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE5ODE1NzU4LCJpYXQiOjE3MTk4MTU0NTgsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImUwNzk0MTk4LWRkZjAtNGRjNi1iYTU3LTJiYzcxMGY1MGM2ZCIsInN1YiI6ImVrdGFiaGFydGkyMzVAZ21haWwuY29tIn0sImNvbXBhbnlOYW1lIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIiwiY2xpZW50SUQiOiJlMDc5NDE5OC1kZGYwLTRkYzYtYmE1Ny0yYmM3MTBmNTBjNmQiLCJjbGllbnRTZWNyZXQiOiJ6TEZuT1JtR3NTWmVmQ01YIiwib3duZXJOYW1lIjoiRWt0YSBCaGFydGkiLCJvd25lckVtYWlsIjoiZWt0YWJoYXJ0aTIzNUBnbWFpbC5jb20iLCJyb2xsTm8iOiIxMTIxMjgwNyJ9.rWGIzGhkzxuexDpgi3BswYXxQbw_kgUyW9SIW9yxA2Q' 
  },
});

export const getProducts = async (company, category, top, minPrice, maxPrice) => {
  try {
    const response = await api.get(`/companies/${company}/categories/${category}/products`, {
      params: { top, minPrice, maxPrice },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export default api;
