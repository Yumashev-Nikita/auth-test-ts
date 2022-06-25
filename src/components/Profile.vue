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
    input(
      class='generic-window__input-area common-text'
      placeholder='...'
      v-model='profile.type'
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
  span(
    class='common-text cursor-pointer grey-hover dark:text-white'
    @click='updateUser(profile)'
  ) Сохранить
</template>

<script lang='ts'>
import { computed } from 'vue';
import { useAuth } from '../stores/auth'
import { defineComponent } from 'vue'
import { useThemeControl } from '../stores/theme-control'

export default defineComponent({
  name: 'profile',
  setup() {
    const authStore = useAuth();
    const themeStore = useThemeControl();
    return {
      profile: computed(() => authStore.$state.profile),
      updateUser: (payload: any) => authStore.updateUser(payload),
      theme: computed(() => themeStore.getMode),
    };
  },
});
</script>

<style lang='sass' scoped>
@use './style/_generic-window'
</style>
