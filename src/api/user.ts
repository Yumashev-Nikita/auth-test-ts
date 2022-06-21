import { MainApi } from './base';

export async function getUser(payload: { email: String, password: String, }): Promise<{ data: any }> {
  console.log(await MainApi.get('/user'));
  return await MainApi.get('/user');
};