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

export async function restoreCommit(payload: { token: string, password: string, password_confirmation: string }): Promise<{ data: { message: string }, status: number }> {
  return await MainApi.post('/auth/restore/confirm', payload);
}

export function validatePassword(password: string): { flag: boolean, errors: string[]} {
  // eslint-disable-next-line prefer-const
  let errors = [];
  if (password.length < 8) {
    errors.push('Пароль должен содержать минимум 8 знаков.'); 
  }
  if (password.search(/[a-z]/i) < 0) {
    errors.push('Пароль должен содержать минимум одну букву.');
  }
  if (password.search(/[0-9]/) < 0) {
    errors.push('Пароль должен содержать цифры.'); 
  }
  console.log(errors);
  if (errors.length > 0) {
    return { flag: false, errors: errors };
  }
  return { flag: true, errors: errors };
}

export function validateEmail(email: string): { flag: boolean, error: string } {
  if (/(.+)@(.+){2,}\.(.+){2,}/.test(email)) {
    return { flag: true, error: ''};
  } else {
    return { flag: false, error: 'Невалидный email.'};
  }
}