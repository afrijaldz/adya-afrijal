<script setup lang="ts">
import BaseLayout from './BaseLayout.vue'
const emits = defineEmits<{
  (event: 'open'): void
}>()
</script>

<template>
  <BaseLayout>
    <div
      v-motion
      :initial="{
        y: 20,
        opacity: 0
      }"
      :enter="{ opacity: 1, y: 0, scale: 1 }"
      :visible-once="{
        y: 0,
        opacity: 1
      }"
      :delay="500"
    >
      <button @click="emits('open')">Buka</button>
    </div>
  </BaseLayout>
</template>
