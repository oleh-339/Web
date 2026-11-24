import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const fetchProducts = async (category = 'All', search = '') => {
  const response = await axios.get(`${API_BASE_URL}/products`, {
    params: { category, search }
  });
  return response.data;
};

export const fetchProductById = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/products/${id}`);
  return response.data;
};