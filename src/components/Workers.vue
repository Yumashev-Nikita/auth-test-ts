<template lang='pug'>
.workers-container
  .workers
    WorkerCard(
      v-for='worker in workers'
      :key='worker.email'
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

import WorkerCard from './WorkerCard.vue'

export default defineComponent({
  name: 'workers',
  components: {
    WorkerCard,
  },
  setup() {
    const workersStore = useWorkers(); 
    getToken();
    workersStore.pullWorkers();
    return {
      workers: computed(() => workersStore.$state.workers),
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
  margin-top: 100px
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
