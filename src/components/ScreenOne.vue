<script setup lang="ts"></script>

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
          :delay="500"
        >
          <div class="text-3xl">Adya & Afrijal</div>
          <div class="mt-4 font-content">18 November 2023</div>
        </div>
      </div>
      <!-- <div class="custom-shape-divider-bottom">
        <img src="https://valengina.datengdong.com/themes/spacemagenta/images/mask.png" alt="mask" />
      </div> -->
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
