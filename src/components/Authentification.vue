<template lang='pug'>
.generic-window
  .generic-window__label.input-bar-text Войти
  .generic-window__input-container
    span(class='input-bar-text') Логин
    input(class='generic-window__input-area input-bar-text' placeholder='...'
    v-model='email')
  .generic-window__input-container
    span(class='input-bar-text') Пароль
    input(class='generic-window__input-area input-bar-text' placeholder='...'
    v-model='password')
  span(class='common-text' @click='login({ email, password })') Подтвердить
</template>

<script lang='ts'>
import { useAuth } from '../stores/auth'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'authentification',
  data() {
    return {
      email: String(),
      password: String(),
    };
  },
  setup() {
    const authStore = useAuth(); 
    return {
      login: (payload: { email: String, password: String, }) => authStore.login(payload),
    };
  },
});
</script>

<style scoped lang="sass">
@use './style/_textpresets'
@use './style/_generic-window'
.common-text
  @extend %maintypo
  @extend %h2semibold
</style>