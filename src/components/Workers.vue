<template lang='pug'>
.workers-container
  .page-list
    span(class='arrow dark:text-white') &lt
    span(
      v-for='page in pages'
      :key='page'
      class='page-number page-number-text dark:text-white'
      @click='setPage(page)'
    ) {{ page }}
    span(class='arrow dark:text-white') >
  .workers
    WorkerCard(
      v-for='worker in workers'
      :key='worker.id'
      :image='worker.image'
      :name='worker.name'
      :id='worker.id'
    )
</template>

<script lang='ts'>
import { useWorkers } from '../stores/workers'
import { computed } from 'vue';
import { defineComponent } from 'vue'
import { getToken } from '../api/auth'
import { useThemeControl } from '../stores/theme-control'

import WorkerCard from './WorkerCard.vue'

export default defineComponent({
  name: 'workers',
  components: {
    WorkerCard,
  },
  setup() {
    const workersStore = useWorkers();
    const themeStore = useThemeControl();
    workersStore.pullWorkers();
    return {
      setPage: (page: number) => workersStore.setPage(page),
      workers: computed(() => workersStore.$state.workers.data),
      pages: computed(() => workersStore.$state.workers.last_page),
      theme: computed(() => themeStore.getMode),
    };
  },
});
</script>

<style scoped lang="sass">
@use './style/_textpresets'
.workers-container
  width: 1060px
  margin: 100px auto
.workers
  display: flex
  flex-wrap: wrap
  flex-direction: row
.page-list
  margin: 50px 0
.page-number
  margin: 10px 5px
.page-number-text
  @extend %maintypo
  @extend %h1semibold
  color: black
  cursor: pointer
  &:hover
    color: gray
.arrow
  @extend %maintypo
  @extend %h1semibold
  color: black
  cursor: pointer
  &:hover
    color: gray
</style>
