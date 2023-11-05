<script setup lang="ts"></script>

<template>
  <div class="bg-[#fff] snap-start min-h-screen text-white bg-[url('/src/assets/bg-u.png')]">
    <div class="pt-24">
      <div
        class="mx-auto"
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
        <img
          src="../assets/adya.webp"
          class="w-[144px] rounded-full border-4 border-[#a98b71] mx-auto"
        />
        <div class="text-[#a98b71] text-2xl font-semibold font-play text-center mt-2">
          Adya Restina Prameswari
        </div>
        <div class="text-[#A38F7C] font-semibold font-content text-center mt-2">
          Putri kedua dari
        </div>
        <div class="text-center text-[#A38F7C] font-content font-light text-sm mt-2">
          <div>Bapak Sofian Saleh &</div>
          <div>Ibu Suwarni</div>
        </div>
      </div>
      <div
        class="mt-16 mx-auto"
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
        <img
          src="../assets/afrijal.webp"
          class="w-[144px] rounded-full border-4 border-[#a98b71] mx-auto"
        />

        <div class="text-[#a98b71] text-2xl font-semibold font-play text-center mt-2">
          Afrijal Dzuhri
        </div>
        <div class="text-[#A38F7C] font-semibold font-content text-center mt-2">
          Putra pertama dari
        </div>
        <div class="text-center text-[#A38F7C] font-content font-light text-sm mt-2">
          <div>Bapak Sujarwadi &</div>
          <div>Ibu Tumpuk Sari</div>
        </div>
      </div>
    </div>
  </div>
</template>
