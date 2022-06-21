import { MainApi } from './base';

export function getToken() {
  MainApi.post('/auth/login', { email: 'libradrago79@gmail.com', password: '6pYIYy5wCN', })
    .then((response) => { localStorage.setItem('authToken', response.data.token);});
  };