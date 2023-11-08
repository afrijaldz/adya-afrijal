<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
// import { useMediaControls } from '@vueuse/core'
import { useSound } from '@vueuse/sound'

import Cover from './components/Cover.vue'
import BaseLayout from './components/BaseLayout.vue'
import ScreenOne from './components/ScreenOne.vue'
import ScreenTwo from './components/ScreenTwo.vue'
import ScreenThree from './components/ScreenThree.vue'
import ScreenFour from './components/ScreenFour.vue'
import ScreenFive from './components/ScreenFive.vue'
import ScreenSix from './components/ScreenSix.vue'
import trumpetSfx from './assets/Justin Bieber - Lifetime.mp3'

const opened = ref<boolean>(false)

const { play, pause, isPlaying } = useSound(trumpetSfx, { volume: 0.5 })


watch(opened, (value) => {
  if (value) {
    play()
  }
})

</script>

<template>
  <template v-if="opened">
    <BaseLayout>
      <div class="fixed z-10 ml-8 bottom-8">
        <div class="bg-red-400 rounded-full">
          <template v-if="isPlaying">
            <svg
              @click="pause()"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </template>
          <template v-else>
            <svg
              @click="play()"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
              />
            </svg>
          </template>
        </div>
      </div>

      <ScreenOne />
      <ScreenTwo />
      <ScreenThree />
      <ScreenFour />
      <ScreenFive />
      <ScreenSix />
      <!-- <div
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0, scale: 1 }"
        :variants="{ custom: { scale: 2 } }"
        :delay="300"
        class="relative"
      >
        <div class="snap-y snap-mandatory overflow-y-auto relative">
          <div class="relative">
   <div class="sticky z-10 w-auto h-auto right-3 bg-blue-300">
          play
        </div>
          </div>
        </div>
      </div> -->
    </BaseLayout>
  </template>
  <template v-else>
    <Cover @open="opened = true" />
  </template>
</template>

<style scoped></style>
