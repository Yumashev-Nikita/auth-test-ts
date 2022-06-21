import { MainApi, WorkerData } from './base';

export async function getWorkers(page: Number): Promise<WorkerData[]> {
  return (await MainApi.get(`/workers?page=${page}`)).data.data;
};
