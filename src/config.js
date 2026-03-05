// Backend API configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export const API_ENDPOINTS = {
  CONTACT: `${API_BASE_URL}/contact`,
};

export default API_BASE_URL;
