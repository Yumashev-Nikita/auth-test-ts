import { MainApi } from './base';
import router from '../router'

export function getToken(payload: { email: String, password: String }) {
  MainApi.post('/auth/login', payload)
    .then((response) => {
      localStorage.setItem('authToken', response.data.token);
      router.push('/workers');
    });
};