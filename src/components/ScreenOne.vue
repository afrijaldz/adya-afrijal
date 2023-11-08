<script setup lang="ts">

import { useIntervalFn } from '@vueuse/core'
import { ref } from 'vue'

const days = ref()
const hours = ref()
const minutes = ref()
const seconds = ref()

const distance = ref(0)

const { pause, resume, isActive } = useIntervalFn(() => {
  const countDownDate = new Date('Nov 18, 2023 09:00:00').getTime()
  const now = new Date().getTime()

  distance.value = countDownDate - now

  if (distance.value > 0) {
    days.value = Math.floor(distance.value / (1000 * 60 * 60 * 24))
    hours.value = Math.floor((distance.value % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    minutes.value = Math.floor((distance.value % (1000 * 60 * 60)) / (1000 * 60))
    seconds.value = Math.floor((distance.value % (1000 * 60)) / 1000)
  }

}, 1000)

</script>

<template>
  <div class="snap-start">
    <div
      class="bg-cover min-h-screen relative bg-[url('/src/assets/cccc.webp')] bg-center bg-no-repeat before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-t from-[#2a231e] from-15% via-transparent before:opacity-100 before:z-[] w-full"
    >
      <div class="absolute bottom-[calc(10vh)] text-center font-head text-[#f9f5ea] w-full">
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
          :delay="600"
        >
          <div class="text-3xl">Adya & Afrijal</div>
          <div class="mt-4 font-content" v-if="distance > 0">{{ days }} hari {{ hours }} jam {{ minutes }} menit {{ seconds }} detik</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.custom-shape-divider-bottom {
  position: absolute;
  bottom: 0px;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}
</style>
