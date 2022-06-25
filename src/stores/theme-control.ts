import { defineStore } from 'pinia'

export const useThemeControl = defineStore('useThemeControl', {
  state: () => {
    return {
      dark: false,
    };
  },
  getters: {
    getMode: (state) => state.dark,
  },
  actions: {
    SWITCH_DARK_MODE(mode: boolean) { this.dark = mode },
  },
});
