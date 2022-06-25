<template lang='pug'>
.generic-window
  div(class='generic-window__label common-text dark:text-white') Введите ваш email
  .generic-window__input-container
    span(class='common-text dark:text-white') Ваша почта
    input(
      class='generic-window__input-area common-text'
      placeholder='...'
      v-model='email'
    )
  span(
    class='common-text cursor-pointer grey-hover generic-window__button dark:text-white'
    @click='restoreRequest({ email })'
  ) Отправить
  div(
    class='generic-window__notification notif_green'
    v-if='restoreReqNotif !== ""'
  ) {{ restoreReqNotif }}
</template>

<script lang='ts'>
import { useAuth } from '../stores/auth'
import { computed } from 'vue';
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'restore-request',
  data() {
    return {
      email: 'libradrago79@gmail.com',
    };
  },
  setup() {
    const authStore = useAuth(); 
    return {
      restoreRequest: (payload: { email: string }) => { authStore.restoreRequest(payload); },
      restoreReqNotif: computed(() => authStore.$state.restoreReqNotif),
    };
  },
});
</script>

<style scoped lang="sass">
@use './style/_generic-window'
</style>
