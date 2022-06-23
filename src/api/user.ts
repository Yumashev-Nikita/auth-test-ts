import { MainApi } from './base';

export async function getUser(): Promise<Record<string, unknown>> {
  return (await MainApi.get('/user')).data;
}

export async function updateUser(
  payload: {
    show_name: string,
    about: string,
    github: string,
    city: string,
    is_finished: true,
    telegram: string,
    phone: string,
    birthday: string
  }): Promise<Record<string, unknown>> {
    const resp = await MainApi.post('/user', payload);
    console.log(resp);
    return (resp).data;
}
