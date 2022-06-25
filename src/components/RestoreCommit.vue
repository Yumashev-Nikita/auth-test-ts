<template lang='pug'>
.generic-window
  .generic-window__label.common-text Введите ваш email
  .generic-window__input-container
    span(class='common-text dark:text-white') Новый пароль
    input(
      class='generic-window__input-area common-text'
      placeholder='...'
      v-model='password'
    )
    span(class='common-text dark:text-white') Подтвердите пароль
    input(
      class='generic-window__input-area common-text'
      placeholder='...'
      v-model='password_confirmation'
    )
  span(
    class='common-text cursor-pointer grey-hover generic-window__button dark:text-white'
    @click='restoreCommit({ token, password, password_confirmation }); validatePassword(password)'
  ) Отправить
  div(
    class='generic-window__notification notif_red'
    v-if='!validPw'
    v-for='error in errors'
    :key='error'
  ) {{ error }}
  div(
    class='generic-window__notification notif_red'
    v-if='restoreCommitNotif !== ""'
  ) {{ restoreCommitNotif }}
</template>

<script lang='ts'>
import { useAuth } from '../stores/auth'
import { computed } from 'vue';
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'restore-commit',
  data() {
    return {
      token: this.$route.params.token.toString(),
      password: '123456',
      password_confirmation: '123456',
    };
  },
  setup() {
    const authStore = useAuth();
    return {
      restoreCommit: (payload: { token: string, password: string, password_confirmation: string }) => { authStore.restoreCommit(payload); },
      restoreCommitNotif: computed(() => authStore.$state.restoreCommitNotif),
      errors:  computed(() => authStore.$state.errors),
      validPw:  computed(() => authStore.$state.flag_pw),
      validatePassword: (password: string) => authStore.validatePassword(password),
    };
  },
});
</script>

<style scoped lang="sass">
@use './style/_generic-window'
</style>
