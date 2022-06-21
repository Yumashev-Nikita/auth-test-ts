import axios from 'axios';

export interface WorkerData {
  id: Number,
  email: String,
  image: String,
  login: String,
  name: String,
}

export const MainApi = axios.create({
  baseURL: 'https://test.atwinta.online/api/v1',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('authToken')}`,
  }
});
