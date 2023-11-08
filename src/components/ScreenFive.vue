<script setup lang="ts">

import { ref } from 'vue'

const openMap = () => {
  window.open('https://maps.app.goo.gl/2TUMCpcKuyDK4zyk7', '_blank')
}
</script>

<template>
  <div class="bg-white">
    <div class="pt-12 pb-32">
      <div class="mx-auto font-content text-2xl text-center text-[#a98b71]">
        Berlokasi di
      </div>
      <div class="mt-4 flex justify-evenly items-center text-center">
        <div class="p-2">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d255.80438713570751!2d110.91695136724172!3d-7.833162084749739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1699460001000!5m2!1sid!2sid"  height="450" width="400" style="border:0;" allowFullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <div class="text-center mt-6 text-[#a98b71] cursor-pointer hover:underline font-content" @click="openMap">
        Buka di google maps
      </div>
    </div>
  </div>
</template>
