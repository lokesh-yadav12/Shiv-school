import axios from 'axios';

// For now, hardcode the API URL (adjust later when backend is ready)
const api = axios.create({
  baseURL: '/api', // or 'http://localhost:5000/api' when backend is ready
  withCredentials: true,
});

// helper to set token when using bearer tokens
export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

export default api;
