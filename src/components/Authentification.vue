<template lang='pug'>
.generic-window
  .generic-window__label.common-text Войти
  .generic-window__input-container
    span(class='common-text') Логин
    input(
      class='generic-window__input-area common-text'
      placeholder='...'
      v-model='email'
    )
  .generic-window__input-container
    span(class='common-text') Пароль
    input(
      class='generic-window__input-area common-text'
      placeholder='...'
      v-model='password'
    )
  span(
    class='common-text cursor-pointer grey-hover generic-window__button'
    @click='login({ email, password })'
  ) Подтвердить
  router-link(
    to='/restore/request'
    class='rl-ns common-text cursor-pointer grey-hover generic-window__button'
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
      login: (payload: { email: String, password: String, }) => {
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