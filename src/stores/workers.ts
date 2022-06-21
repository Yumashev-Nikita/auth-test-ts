import { defineStore } from 'pinia'
import { getWorkers } from '../api/workers'
import { WorkerData } from '../api/base';

export const useWorkers = defineStore('useWorkers', {
  state: () => {
    return {
      page: 1,
      workers: Array(),
    };
  },
  getters: {
  },
  actions: {
    async pullWorkers() { this.workers = await getWorkers(this.page); },
  },
});
