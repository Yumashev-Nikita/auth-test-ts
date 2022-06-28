<template lang='pug'>
.generic-window
  .generic-window__input-container
    span(class='common-text dark:text-white') Имя
    input(
      class='generic-window__input-area common-text'
      placeholder='...'
      v-model='profile.name'
    )
  .generic-window__input-container
    span(class='common-text dark:text-white') Почта
    textarea(
      style="user-select: none; outline: none; cursor: not-allowed; resize: none; overflow:hidden; padding: 0 5px;"
      class='generic-window__input-area common-text'
      :placeholder='profile.email'
      readonly
    )
  .generic-window__input-container
    span(class='common-text dark:text-white') Специальность
    textarea(
      style="user-select: none; outline: none; cursor: not-allowed; resize: none; overflow:hidden; padding: 0 5px;"
      class='generic-window__input-area common-text'
      :placeholder='profile.type'
      readonly
    )
  .generic-window__input-container
    span(class='common-text dark:text-white') Github
    input(
      class='generic-window__input-area common-text'
      placeholder='...'
      v-model='profile.github'
    )
  .generic-window__input-container
    span(class='common-text dark:text-white') Telegram
    input(
      class='generic-window__input-area common-text'
      placeholder='...'
      v-model='profile.telegram'
    )
  .generic-window__input-container
    span(class='common-text dark:text-white') Город
    input(
      class='generic-window__input-area common-text'
      placeholder='...'
      v-model='profile.city'
    )
  .generic-window__input-container
    span(class='common-text dark:text-white') Телефон
    input(class='generic-window__input-area common-text' :placeholder='profile.phone'
    v-model='profile.phone'
  )
  .generic-window__input-container
    span(class='common-text dark:text-white') День рождения
    input(
      class='generic-window__input-area common-text'
      placeholder='...'
      v-model='profile.birthday'
    )
  .generic-window__input-container
    span(class='common-text dark:text-white') Расскажите о себе
    textarea(
      class='common-text about-area'
      placeholder='...'
      v-model='profile.about'
    )
  span(
    class='common-text cursor-pointer grey-hover dark:text-white'
    @click='handleUserUpdate(profile)'
  ) Сохранить
  div(
    class='generic-window__message message_red'
    v-if='!validProfile'
    v-for='error in errors'
    :key='error'
  ) {{ error }}
</template>

<script lang='ts'>
import { computed } from 'vue';
import { useAuth } from '../stores/auth'
import { defineComponent } from 'vue'
import { useThemeControl } from '../stores/theme-control'
import { useValidation } from '../stores/validation';

export default defineComponent({
  name: 'profile',
  setup() {
    const authStore = useAuth();
    const themeStore = useThemeControl();
    const validationStore = useValidation();
    return {
      profile: computed(() => authStore.$state.profile),
      handleUserUpdate: (payload: any) => authStore.updateUser(payload),
      theme: computed(() => themeStore.getMode),
      validProfile: computed(() => validationStore.$state.flag_profile),
      errors: computed(() => validationStore.$state.errors_profile),
    };
  },
});
</script>

<style lang='sass' scoped>
@use '../style/_generic-window'
</style>
