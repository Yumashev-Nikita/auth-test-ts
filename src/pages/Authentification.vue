<template lang='pug'>
.generic-window
  div(class='generic-window__label common-text dark:text-white') Войти
  .generic-window__input-container
    span(class='common-text dark:text-white') Логин
    input(
      class='generic-window__input-area common-text'
      placeholder='...'
      v-model='email'
    )
  .generic-window__input-container
    span(class='common-text dark:text-white') Пароль
    input(
      class='generic-window__input-area common-text'
      placeholder='...'
      v-model='password'
    )
  span(
    class='common-text cursor-pointer grey-hover generic-window__button dark:text-white'
    @click='handleLogin({ email, password })'
  ) Подтвердить
  router-link(
    to='/restore/request'
    class='rl-ns common-text cursor-pointer grey-hover generic-window__button dark:text-white'
  ) Забыл пароль
  div(
    class='generic-window__message message_red'
    v-if='authMessage !== ""'
  ) {{ authMessage }}
</template>

<script lang='ts'>
import { useAuth } from '../stores/auth'
import { defineComponent } from 'vue'
import { computed } from '@vue/reactivity';

export default defineComponent({
  name: 'authentification',
  data() {
    return {
      email: 'libradrago79@gmail.com',
      password: '6pYIYy5wCN',
    };
  },
  setup() {
    const authStore = useAuth(); 
    return {
      handleLogin: (payload: { email: string, password: string, }) => {
        authStore.login(payload);
        authStore.getUser();
      },
      authMessage: computed(() => authStore.$state.authMessage),
    };
  },
});
</script>

<style scoped lang="sass">
@use '../style/_generic-window'
</style>
