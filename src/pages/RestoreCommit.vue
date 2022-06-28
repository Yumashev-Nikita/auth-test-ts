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
    @click='handleRestoreCommit({ token, password, password_confirmation }); handlePasswordValidation(password)'
  ) Отправить
  div(
    class='generic-window__message message_red'
    v-if='!validPw'
    v-for='error in errors'
    :key='error'
  ) {{ error }}
  div(
    class='generic-window__message message_red'
    v-if='restoreCommitMessage !== ""'
  ) {{ restoreCommitMessage }}
</template>

<script lang='ts'>
import { useAuth } from '../stores/auth'
import { useValidation } from '../stores/validation'
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
    const validationStore = useValidation();
    return {
      handleRestoreCommit: (payload: { token: string, password: string, password_confirmation: string }) => { authStore.restoreCommit(payload); },
      handlePasswordValidation: (password: string) => validationStore.validatePassword(password),
      restoreCommitMessage: computed(() => authStore.$state.restoreCommitMessage),
      errors:  computed(() => validationStore.$state.errors_pw),
      validPw:  computed(() => validationStore.$state.flag_pw),
    };
  },
});
</script>

<style scoped lang="sass">
@use '../style/_generic-window'
</style>
