<script setup lang="ts">
import BaseLayout from './BaseLayout.vue'
const emits = defineEmits<{
  (event: 'open'): void
}>()
</script>

<template>
  <BaseLayout>
    <div
      class="w-full h-screen max-h-[32rem] relative overflow-hidden block z-10 max-w-md before:content-[''] before:absolute before:bottom-[-10] before:inset-0 before:block before:bg-[#2a231e] before:opacity-50 before:z-[-5] bg-[url('/src/assets/head3.webp')] min-h-screen bg-no-repeat bg-cover bg-center"
    >
      <div
        v-motion
        :initial="{
          y: -20,
          opacity: 0
        }"
        :enter="{ opacity: 1, y: 0, scale: 1 }"
        :visible-once="{
          y: 0,
          opacity: 1
        }"
        :delay="500"
      >
        <div class="font-content text-white text-center mt-44 text-base">Undangan Pernikahan</div>
        <!-- <div class="font-content text-white text-center mt-2">18 November 2023</div> -->
        <div class="font-head text-5xl text-white text-center mt-6">Adya & Afrijal</div>
        <div class="font-content text-base text-center text-white mt-6">18 . 11 . 2023</div>
      </div>
      <div
        class="absolute bottom-16 w-full"
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
        <div class="text-white text-center mb-4 font-content">
          <div class="text-md">teruntuk,</div>
          <div class="text-lg">Mas Rudy</div>
        </div>
        <div class="px-3 py-1 mx-auto rounded-full bg-white w-fit text-center">
          <button @click="emits('open')" class="text-black font-content">Buka Undangan</button>
        </div>
      </div>
    </div>
  </BaseLayout>
</template>
