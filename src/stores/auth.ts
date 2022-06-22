import { defineStore } from 'pinia'
import { getToken } from '../api/auth'
import { getUser } from '../api/user'
import { updateUser } from '../api/user'

export const useAuth = defineStore('useAuth', {
  state: () => {
    return {
      authentificated: Boolean(),
      nameStatic: String(),
      profile: Object(),
    };
  },
  getters: {
    checkToken: () => localStorage.getItem('authToken') !== null,
  },
  actions: {
    async login(payload: { email: String, password: String }) {
      getToken(payload);
      this.profile = await getUser();
      this.authentificated = true;
    },
    async getUser() {
      this.profile = await getUser();
      this.nameStatic = this.profile.name;
    },
    async updateUser(payload: any) {
      this.profile = await updateUser(payload);
      this.nameStatic = this.profile.name;
    },
  },
});
