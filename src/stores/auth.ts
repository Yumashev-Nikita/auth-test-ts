import { defineStore } from 'pinia'
import { getToken, registerUser } from '../api/auth'
import { getUser } from '../api/user'
import { updateUser } from '../api/user'
import router from '../router'

export const useAuth = defineStore('useAuth', {
  state: () => {
    return {
      authNotif: String(),
      registerNotif: String(),
      authentificated: Boolean(),
      nameStatic: String(),
      profile: Object(),
    };
  },
  getters: {
    getAuthState: (state) => state.authentificated,
  },
  actions: {
    async login(payload: { email: String, password: String }) {
      const resp = await getToken(payload);
      if (resp.status === 200) {
        localStorage.setItem('authToken', resp.data.token);
        router.push('/workers');
        if (localStorage.getItem('authToken') !== null) { this.profile = await getUser(); }
        this.authentificated = true;
        this.nameStatic = this.profile.name;
      } else {
        this.authentificated = false;
      }
    },
    logout() {
      localStorage.removeItem('authToken');
      this.$reset();
    },
    async register(payload: { email: String, name: String, type: String }) {
      const resp = await registerUser(payload);
      if (resp.status !== 409 && resp.status !== 408) {
        localStorage.setItem('authToken', resp.data.token);
        router.push('/workers');
        this.profile = await getUser();
        this.authentificated = true;
        this.nameStatic = this.profile.name;
      } else {
        this.authentificated = false;
        this.registerNotif = resp.data.message;
      }
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
