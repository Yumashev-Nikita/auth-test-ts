<template lang='pug'>
.top-nav-bar
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
      @click='logout'
    ) Log-out
<router-view></router-view>
</template>

<script lang='ts'>
import { computed } from 'vue';
import { useAuth } from '../stores/auth'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'entry-point',
  setup() {
    const authStore = useAuth();
    if (localStorage.getItem('authToken') !== null) {
      authStore.getUser();
      authStore.$state.authentificated = true;
    }
    return {
      nameStatic: computed(() => authStore.$state.nameStatic),
      authentificated: computed(() => authStore.getAuthState),
      logout: () => authStore.logout(),
    };
  },
});
</script>

<style scoped lang="sass">
@use './style/_textpresets'
.top-nav-bar
  position: fixed
  top: 0px
  left: 0px
  height: 50px
  width: 100%
  background-color: black
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
</style>
