import { MainApi } from './base';

export async function getWorkers(page: Number): Promise<{ data: any, last_page: number }> {
  return (await MainApi.get(`/workers?page=${page}`)).data;
};
