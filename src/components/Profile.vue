<template lang='pug'>
.generic-window
    .generic-window__input-container
      span(class='common-text') Логин
      input(
        class='generic-window__input-area common-text'
        placeholder='...'
        v-model='profile.login'
      )
    .generic-window__input-container
      span(class='common-text') Имя
      input(
        class='generic-window__input-area common-text'
        placeholder='...'
        v-model='profile.name'
      )
    .generic-window__input-container
      span(class='common-text') Почта
      input(
        class='generic-window__input-area common-text'
        placeholder='...'
        v-model='profile.email'
      )
    .generic-window__input-container
      span(class='common-text') Специальность
      input(
        class='generic-window__input-area common-text'
        placeholder='...'
        v-model='profile.type'
      )
    .generic-window__input-container
      span(class='common-text') Github
      input(
        class='generic-window__input-area common-text'
        placeholder='...'
        v-model='profile.github'
      )
    .generic-window__input-container
      span(class='common-text') Город
      input(
        class='generic-window__input-area common-text'
        placeholder='...'
        v-model='profile.city'
      )
    .generic-window__input-container
      span(class='common-text') Телефон
      input(class='generic-window__input-area common-text' :placeholder='profile.phone'
      v-model='profile.phone'
    )
    .generic-window__input-container
      span(class='common-text') День рождения
      input(
        class='generic-window__input-area common-text'
        placeholder='...'
        v-model='profile.birthday'
      )
    span(
      class='common-text cursor-pointer grey-hover'
      @click='updateUser(profile)'
    ) Сохранить
</template>

<script lang='ts'>
import { computed } from 'vue';
import { useAuth } from '../stores/auth'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'profile',
  setup() {
    const authStore = useAuth();
    return {
      profile: computed(() => authStore.$state.profile),
      updateUser: (payload: any) => authStore.updateUser(payload),
    };
  },
});
</script>

<style lang='sass' scoped>
@use './style/_generic-window'
</style>
