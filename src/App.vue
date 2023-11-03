<script setup lang="ts">
import { ref } from 'vue'

import Cover from './components/Cover.vue'
import BaseLayout from './components/BaseLayout.vue'

const opened = ref<boolean>(false)
</script>

<template>
  <template v-if="opened">
    <BaseLayout>
      <div
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0, scale: 1 }"
        :variants="{ custom: { scale: 2 } }"
        :delay="300"
      >
        <div class="text-primary-dark font-head">JFEFEF</div>
      </div>
    </BaseLayout>
  </template>
  <template v-else>
    <Cover @open="opened = true" />
  </template>
</template>

<style scoped></style>
