import { MainApi } from './base';

export async function getWorkers(page: number): Promise<{ data: [], last_page: number }> {
  return (await MainApi.get(`/workers?page=${page}`)).data;
}

export async function getWorkerById(id: string):
  Promise<{ data: {
    id: 0,
    login: string,
    name: string,
    email: string,
    image: string,
    about: string,
    type: string,
    github: string,
    city: string,
    is_finished: true,
    phone: string,
    birthday: string
  }}> {
  return await MainApi.get(`/workers/${id}`);
}
