import { defineStore } from 'pinia'
import { getToken, registerUser, restoreRequest, restoreCommit } from '../api/auth'
import { getUser } from '../api/user'
import { updateUser } from '../api/user'
import router from '../router'

export const useAuth = defineStore('useAuth', {
  state: () => {
    return {
      authNotif: String(),
      registerNotif: String(),
      restoreReqNotif: String(),
      restoreCommitNotif: String(),
      authentificated: Boolean(),
      nameStatic: String(),
      profile: Object(),
    };
  },
  getters: {
    getAuthState: (state) => state.authentificated,
  },
  actions: {
    async login(payload: { email: string, password: string }) {
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
    async register(payload: { email: string, name: string, type: string }) {
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
    async restoreRequest(payload: { email: string }) {
      const resp = await restoreRequest(payload);
      this.restoreReqNotif = resp.data;
      console.log(resp);
    },
    async restoreCommit(payload: { token: string, password: string, password_confirmation: string }) {
      const resp = await restoreCommit(payload);
      console.log(resp.data.message);
      this.restoreCommitNotif = resp.data.message;
      console.log(resp);
    },
    async getUser() {
      this.profile = await getUser();
      this.nameStatic = this.profile.name;
    },
    async updateUser(payload: {
      show_name: string,
      about: string,
      github: string,
      city: string,
      is_finished: true,
      telegram: string,
      phone: string,
      birthday: string
    }) {
      this.profile = await updateUser(payload);
      this.nameStatic = this.profile.name;
    },
  },
});
