<template lang='pug'>
.generic-window
  .generic-window__label.common-text Введите ваш email
  .generic-window__input-container
    span(class='common-text') Новый пароль
    input(
      class='generic-window__input-area common-text'
      placeholder='...'
      v-model='password'
    )
    span(class='common-text') Подтвердите пароль
    input(
      class='generic-window__input-area common-text'
      placeholder='...'
      v-model='password_confirmation'
    )
  span(
    class='common-text cursor-pointer grey-hover generic-window__button'
    @click='restoreCommit({ token, password, password_confirmation })'
  ) Отправить
  div(
    class='generic-window__notification notif_green'
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
      token: '36fewrt324235',
      password: '123456',
      password_confirmation: '123456',
    };
  },
  setup() {
    const authStore = useAuth();
    return {
      restoreCommit: (payload: { token: string, password: string, password_confirmation: string }) => { authStore.restoreCommit(payload); },
      restoreCommitNotif: computed(() => authStore.$state.restoreCommitNotif),
    };
  },
});
</script>

<style scoped lang="sass">
@use './style/_generic-window'
</style>
