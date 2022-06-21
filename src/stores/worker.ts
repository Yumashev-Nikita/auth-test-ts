import { defineStore } from 'pinia'
import { getWorkerById } from '../api/workers'

export const useWorker = defineStore('useWorker', {
  state: () => {
    return {
      worker: Object(),
    };
  },
  getters: {
  },
  actions: {
    async pullWorker(id: String) { this.worker = await getWorkerById(id); },
  },
});
