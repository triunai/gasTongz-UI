import axios from 'axios';

const API = axios.create({
  baseURL: 'https://localhost:7256',
  headers: { 'Content-Type': 'application/json' }
  // // Add this if you need to send cookies/auth headers
  // withCredentials: true 
});

export default API;