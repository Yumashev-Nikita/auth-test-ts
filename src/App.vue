<template lang='pug'>
div(:class='theme ? "dark" : "light"')
  div(class='main-container bg-white dark:bg-neutral-800')
    EntryPoint
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { computed } from 'vue';
import { useThemeControl } from './stores/theme-control'

import EntryPoint from './pages/EntryPoint.vue'

export default defineComponent({
  name: 'app',
  components: {
    EntryPoint,
  },
  setup() {
    const themeStore = useThemeControl();
    return {
      theme: computed(() => themeStore.getMode),
    };
  },
})
</script>

<style scoped lang="sass">
.main-container
  position: absolute
  top: 0
  left: 0
  width: 100%
  min-height: 100%
</style>
