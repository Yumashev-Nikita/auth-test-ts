import { MainApi } from './base';

export async function getToken(payload: { email: String, password: String }): Promise<{ data: { token: string }, status: number }> {
  return await MainApi.post('/auth/login', payload);
};

export async function registerUser(payload: { email: String, name: String, type: String }): Promise<{ data: { message: string, token: string }, status: number }> {
  return await MainApi.post('/auth/register', payload);
};

export async function restoreRequest(payload: { email: String }): Promise<{ data: string, status: number }> {
  return await MainApi.post('/auth/restore', payload);
};