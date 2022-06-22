import { MainApi } from './base';

export async function getUser(): Promise<Object> {
  return (await MainApi.get('/user')).data;
};

export async function updateUser(payload: Object): Promise<Object> {
  return (await MainApi.post('/user', payload)).data;
};