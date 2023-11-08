<script setup lang="ts">
const openMap = () => {
  window.open('https://www.google.com/maps?q=-7.833164, 110.917036&z=15&output=embed', '_blank')
}
</script>

<template>
  <div class="bg-white">
    <div class="pt-12 pb-32">
      <div class="mx-auto font-content text-2xl text-center text-[#a98b71]">Berlokasi di</div>
      <div class="mt-4 flex justify-evenly items-center text-center">
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
        class="text-center mt-3 text-[#a98b71] cursor-pointer hover:underline font-content"
        @click="openMap"
      >
        Buka di google maps
      </div>
    </div>
  </div>
</template>
