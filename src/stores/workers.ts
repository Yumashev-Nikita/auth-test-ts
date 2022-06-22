import { defineStore } from 'pinia'
import { getWorkers } from '../api/workers'

export const useWorkers = defineStore('useWorkers', {
  state: () => {
    return {
      page: Number(),
      workers: { data: Array(), last_page: Number() },
    };
  },
  getters: {
  },
  actions: {
    async pullWorkers() { this.workers = await getWorkers(this.page); },
    async setPage(page: number) {
      this.page = page;
      this.workers = await getWorkers(this.page);
    },
  },
});
