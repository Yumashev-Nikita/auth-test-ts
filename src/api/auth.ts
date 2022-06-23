import { MainApi } from './base';

export async function getToken(payload: { email: string, password: string }): Promise<{ data: { token: string }, status: number }> {
  return await MainApi.post('/auth/login', payload);
}

export async function registerUser(payload: { email: string, name: string, type: string }): Promise<{ data: { message: string, token: string }, status: number }> {
  return await MainApi.post('/auth/register', payload);
}

export async function restoreRequest(payload: { email: string }): Promise<{ data: string, status: number }> {
  return await MainApi.post('/auth/restore', payload);
}

export async function restoreCommit(payload: { token: string, password: string, password_confirmation: string }): Promise<{ data: string, status: number }> {
  return await MainApi.post('/auth/restore/confirm', payload);
}
