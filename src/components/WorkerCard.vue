<template lang="pug">
.worker
  img(
    class='worker__image'
    :src='image'
  )
  span(
    class='worker__name'
  ) {{ name }}
  router-link(
    :to="{ name: 'worker', params: { id: id }}"
  ) Открыть профиль
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'worker-card',
  props: {
    image: String,
    name: String,
    id: Number,
  },
});
</script>

<style lang="sass" scoped>
@use './style/_textpresets'
.worker
  width: 200px
  margin: 15px 0
  padding: 0 20px 20px 20px
  display: flex
  flex-direction: column
  border-left: 5px solid
  &__name
    @extend %maintypo
    @extend %h2semibold
    margin: 5px 0
  &__profile-link
    @extend %maintypo
    @extend %h2semibold
    color: #ff6969
    text-decoration: none
    margin: 5px 0
    &:hover
      color: #990000
</style>