import { defineStore } from 'pinia'
import { getUser } from '../api/user'

export const useAuth = defineStore('useAuth', {
  state: () => {
    return {
      nameStatic: String(),
      profile: Object(),
    };
  },
  getters: {
  },
  actions: {
    async login(payload: { email: String, password: String }) { this.profile = await getUser(payload); },
    setStaticName() { console.log(this.profile);
      this.nameStatic = this.profile.name; }
  },
});
