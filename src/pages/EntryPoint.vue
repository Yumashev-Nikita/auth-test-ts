<template lang='pug'>
.top-nav-bar
  img(
    v-if='!theme'
    class='rounded-lg cursor-pointer theme-button'
    src='../media/moon.svg'
    width='30'
    height='30'
    @click='handleDarkModeSwitch(true)',
  )
  img(
    v-if='theme'
    class='rounded-lg cursor-pointer theme-button'
    src='../media/sun.svg'
    width='30'
    height='30'
    @click='handleDarkModeSwitch(false)',
  )
  .top-nav-bar__block-container
    router-link(
      v-if='authentificated'
      to='/workers'
      class='top-nav-bar__block nav-bar-block-text rl-ns'
    ) Сотрудники
    router-link(
      v-if='!authentificated'
      to='/auth'
      class='top-nav-bar__block nav-bar-block-text rl-ns'
    ) Sign-in
    router-link(
      v-if='!authentificated'
      to='/register'
      class='top-nav-bar__block nav-bar-block-text rl-ns'
    ) Sign-up
    router-link(
      v-if='authentificated'
      to='/profile'
      class='top-nav-bar__block nav-bar-block-text rl-ns'
    ) {{ nameStatic }}
    router-link(
      v-if='authentificated'
      to='/auth'
      class='top-nav-bar__block nav-bar-block-text rl-ns'
      @click='handleLogout'
    ) Log-out
div(:class='theme ? "dark" : "light"')
  <router-view></router-view>
</template>

<script lang='ts'>
import { useAuth } from '../stores/auth'
import { defineComponent } from 'vue'
import { useThemeControl } from '../stores/theme-control'
import { computed } from 'vue'

export default defineComponent({
  name: 'entry-point',
  setup() {
    const themeStore = useThemeControl();
    const authStore = useAuth();
    if (localStorage.getItem('authToken') !== null) {
      authStore.getUser();
      authStore.$state.authentificated = true;
    }
    return {
      nameStatic: computed(() => authStore.$state.nameStatic),
      authentificated: computed(() => authStore.getAuthState),
      theme: computed(() => themeStore.getMode),
      handleDarkModeSwitch: (mode: boolean) => themeStore.SWITCH_DARK_MODE(mode),
      handleLogout: () => authStore.logout(),
    };
  },
});
</script>

<style scoped lang="sass">
@use '../style/_textpresets'
.top-nav-bar
  position: fixed
  top: 0px
  left: 0px
  height: 50px
  width: 100%
  background-color: black
  z-index: 100
  &__block-container
    display: flex
    flex-direction: row
    justify-content: center
    height: 100%
    align-items: center
  &__block
    display: flex
    width: 140px
    height: 65%
    justify-content: center
    align-items: center
    margin: 0px 10px
.rl-ns
  text-decoration: none

.nav-bar-block-text
  @extend %maintypo
  @extend %h2semibold
  color: white
  transition: color 0.1s
  cursor: pointer
  user-select: none
  &:hover
    color: #5c5c5c

.signIn-text
  @extend %maintypo
  @extend %h1semibold

.commit-text
  @extend %maintypo
  @extend %h2semibold
  color: black
  transition: color 0.1s
  cursor: pointer
  user-select: none
  &:hover
    color: #383838
.theme-button
  position: absolute
  right: 60px
  top: 10px
</style>
