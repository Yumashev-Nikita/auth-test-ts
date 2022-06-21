import { defineStore } from 'pinia'
import { getWorkers } from '../api/workers'

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
