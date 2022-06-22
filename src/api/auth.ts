import { MainApi } from './base';
import router from '../router'

export async function getToken(payload: { email: String, password: String }) {
  const resp = await MainApi.post('/auth/login', payload);
  localStorage.setItem('authToken', resp.data.token);
  console.log(resp);
  router.push('/workers');
  return resp.status;
};