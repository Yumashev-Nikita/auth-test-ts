import { defineStore } from 'pinia'
import { getToken, registerUser, restoreRequest, restoreCommit } from '../api/auth'
import { getUser } from '../api/user'
import { updateUser } from '../api/user'
import { useValidation } from './validation';
import router from '../router'

export const useAuth = defineStore('useAuth', {
  state: () => {
    return {
      authMessage: String(),
      registerMessage: String(),
      authentificated: Boolean(),
      nameStatic: String(),
      profile: Object(),
      restoreReqMessage: String(),
      restoreCommitMessage: String(),
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
        this.authMessage = resp.data.message,
        this.authentificated = false;
      }
    },
    logout() {
      localStorage.removeItem('authToken');
      this.$reset();
    },
    async register(payload: { email: string, name: string, type: string }) {
      const resp = await registerUser(payload);
      if (resp.status === 200) {
        localStorage.setItem('authToken', resp.data.token);
        router.push('/workers');
        this.profile = await getUser();
        this.authentificated = true;
        this.nameStatic = this.profile.name;
      } else {
        this.authentificated = false;
        this.registerMessage = resp.data.message;
      }
    },
    async restoreRequest(payload: { email: string }) {
      const resp = await restoreRequest(payload);
      this.restoreReqMessage = resp.data;
      console.log(resp);
    },
    async restoreCommit(payload: { token: string, password: string, password_confirmation: string }) {
      const resp = await restoreCommit(payload);
      if (resp.status === 500) {
        this.restoreCommitMessage = 'Ваша ссылка не действительна.'
      } else {
        this.restoreCommitMessage = resp.data.message;
      }
    },
    async getUser() {
      this.profile = await getUser();
      this.nameStatic = this.profile.name;
    },
    async updateUser(payload: {
      name: string,
      about: string,
      github: string,
      city: string,
      is_finished: true,
      telegram: string,
      phone: string,
      birthday: string
    }) {
      const validationStore = useValidation();
      if (validationStore.validateProfileData(payload)) {
        this.profile = await updateUser(payload);
        this.nameStatic = this.profile.name;
      }
    },
  },
});
