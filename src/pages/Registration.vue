<template lang='pug'>
.generic-window
  div(class='generic-window__label common-text dark:text-white') Зарегистрироваться
  .generic-window__input-container
    span(class='common-text dark:text-white') Ваше имя
    input(
      class='generic-window__input-area common-text'
      placeholder='...'
      v-model='name'
    )
  .generic-window__input-container
    span(class='common-text dark:text-white') Ваша почта
    input(
      class='generic-window__input-area common-text'
      placeholder='...'
      v-model='email'
    )
  .generic-window__input-container
    span(class='common-text dark:text-white') Специальность
    input(
      class='generic-window__input-area common-text'
      placeholder='...'
      v-model='type'
    )
  span(
    class='common-text cursor-pointer grey-hover generic-window__button dark:text-white'
    @click='handleRegister({ email, name, type })'
  ) Подтвердить
  div(
    class='generic-window__message message_red'
    v-if='registerMessage !== ""'
  ) {{ registerMessage }}
</template>

<script lang='ts'>
import { useAuth } from '../stores/auth'
import { computed } from 'vue';
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'registration',
  data() {
    return {
      email: 'libra79@gmail.com',
      name: 'Никита',
      type: 'back',
    };
  },
  setup() {
    const authStore = useAuth(); 
    return {
      handleRegister: (payload: { email: string, name: string, type: string }) => { authStore.register(payload); },
      registerMessage: computed(() => authStore.$state.registerMessage),
    };
  },
});
</script>

<style scoped lang="sass">
@use '../style/_generic-window'
</style>