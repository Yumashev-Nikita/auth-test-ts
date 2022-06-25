<template lang="pug">
div(:class='theme ? "dark" : "light"')
  div(class='dark:bg-neutral-600 flex flex-col shadow-xl rounded-lg w-64 h-96 mx-1 mb-5 p-5 dark:text-white')
    img(
      class='rounded-lg'
      :src='image'
    )
    span(
      class='my-2 font-sans text-lg font-normal dark:text-white'
    ) {{ name }}
    router-link(
      class='my-2 font-sans text-lg font-medium hover:text-gray-600 mt-auto transition transform delay-250 hover:-translate-y-1 dark:text-white'
      :to="{ name: 'worker', params: { id: id }}"
    ) Открыть профиль
</template>

<script lang='ts'>
import { useThemeControl } from '../stores/theme-control'
import { computed } from 'vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'worker-card',
  props: {
    image: String,
    name: String,
    id: Number,
  },
  setup() {
    const themeStore = useThemeControl();
    return {
      theme: computed(() => themeStore.getMode),
    };
  },
});
</script>
