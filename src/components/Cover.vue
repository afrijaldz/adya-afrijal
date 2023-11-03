<script setup lang="ts">
import BaseLayout from './BaseLayout.vue'
const emits = defineEmits<{
  (event: 'open'): void
}>()
</script>

<template>
  <BaseLayout>
    <div class="
    w-full
            h-screen
            max-h-[32rem]
            relative
            overflow-hidden
            block
            z-10
            max-w-md

       before:content-['']
            before:absolute
            before:bottom-[-10]
            before:inset-0
            before:block
            before:bg-black
            before:opacity-40
            before:z-[-5]

            
    bg-[url('/src/assets/head3.webp')] min-h-screen bg-no-repeat bg-cover 
            bg-center">

      <div class="font-sub-head text-white text-center mt-40 text-2xl">
        Kita akan menikah
      </div>
      <div class="font-head text-5xl text-white text-center mt-20">
        Adya & Afrijal
      </div>
      <div
      class="absolute  bottom-20 w-full"
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
      <div class="px-3 py-2 mx-auto rounded-full bg-white w-fit text-center">
        <button @click="emits('open')" class="text-black">Buka Undangan</button>
      </div>
    </div>
    </div>
  </BaseLayout>
</template>
