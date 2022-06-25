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
    @click='login({ email, password })'
  ) Подтвердить
  router-link(
    to='/restore/request'
    class='rl-ns common-text cursor-pointer grey-hover generic-window__button dark:text-white'
  ) Забыл пароль
</template>

<script lang='ts'>
import { useAuth } from '../stores/auth'
import { defineComponent } from 'vue'

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
      login: (payload: { email: string, password: string, }) => {
        authStore.login(payload);
        authStore.getUser();
      },
    };
  },
});
</script>

<style scoped lang="sass">
@use './style/_generic-window'
</style>
