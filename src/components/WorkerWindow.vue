<template lang="pug">
div(v-if='worker !== undefined')
  .worker
    .table-container
    table
      tr
        td
          .worker__image
            img(
              :src='worker.image'
              width='375'
              height='375'
            )
        td
          div(class='data-container dark:text-white')
            .worker__name {{ worker.name }}
            .worker__data-line
              .worker__data-line_title Логин:
              .worker__data-line_data {{ worker.login }}
            .worker__data-line
              .worker__data-line_title Email:
              .worker__data-line_data {{ worker.email }}
            .worker__data-line
              .worker__data-line_title Должность:
              .worker__data-line_data {{ worker.worker.position }}
            .worker__data-line
              .worker__data-line_title Отдел:
              .worker__data-line_data {{ worker.worker.department }}
            .worker__data-line
              .worker__data-line_title Зачислен:
              .worker__data-line_data {{ worker.worker.adopted_at }}
            .worker__data-line
              .worker__data-line_title О себе:
              .worker__data-line_data {{ worker.about }}
</template>

<script lang='ts'>
import { useWorker } from '../stores/worker'
import { computed } from 'vue'
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { useThemeControl } from '../stores/theme-control'

export default defineComponent({
  name: 'worker-window',
  setup() {
    const workersStore = useWorker();
    const themeStore = useThemeControl();
    const route = useRoute();
    workersStore.pullWorker(route.params.id.toString());
    return {
      worker: computed(() => workersStore.$state.worker.data),
      theme: computed(() => themeStore.getMode),
    };
  },
});
</script>

<style lang="sass" scoped>
@use './style/_textpresets'
.worker
  margin: 190px auto
  width: 1000px
  &__name
    @extend %maintypo
    @extend %h1semibold
    margin-bottom: 15px
  &__image
    margin-right: 50px
    width: 370px
  &__data-line
    margin: 5px 0
    &_title
      @extend %maintypo
      @extend %h2semibold
    &_data
      @extend %maintypo
      @extend %text-normal
.table-container
  margin-top: 30px
.data-container
  border-left: 3px solid
  padding-left: 20px
  min-height: 300px
</style>
