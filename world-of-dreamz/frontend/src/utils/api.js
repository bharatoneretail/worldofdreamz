import axios from 'axios';

const api = axios.create({
  // Uses the env var if available, otherwise falls back to relative path for local dev
  baseURL: import.meta.env.VITE_API_URL || '', 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;