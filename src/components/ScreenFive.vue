<script setup lang="ts">
const openMap = () => {
  window.open('https://www.google.com/maps?q=-7.833164, 110.917036&z=15&output=embed', '_blank')
}
</script>

<template>
  <div class="bg-white">
    <div class="">
      <!-- <div class="mx-auto font-content text-2xl text-center text-[#a98b71]">Berlokasi di</div> -->
      <div class="pt-4 flex justify-evenly items-center text-center">
        <div class="p-2">
          <iframe
            src="https://www.google.com/maps?q=-7.833164, 110.917036&z=15&output=embed"
            height="450"
            width="400"
            style="border: 0"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div
        class="text-center mt-1 pb-12 text-[#a98b71]  font-content"
        
      >
      <span class="cursor-pointer hover:underline" @click="openMap">
        Buka di google maps
      </span>
      </div>
    </div>
  </div>
</template>
