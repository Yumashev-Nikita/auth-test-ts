import axios from 'axios';

export const MainApi = axios.create({
  baseURL: 'https://test.atwinta.online/api/v1',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('authToken')}`,
  }
});
