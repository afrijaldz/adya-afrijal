<script setup lang="ts">
import BaseLayout from './BaseLayout.vue'
import { useInviteeStore } from '../stores/invitee'
import { computed, ref } from 'vue'
import { useFetch } from '@vueuse/core'
const emits = defineEmits<{
  (event: 'open'): void
}>()

const inviteeStore = useInviteeStore()

const identity = computed(() => inviteeStore.identity)

const invitationCode = ref('')
const inputOpen = ref(false)
const toastError = ref(false)

const handleInput = async () => {
  if (inputOpen.value) {
    const { data } = await useFetch('https://api-a2.jlab.my.id/hash/' + invitationCode.value)
      .get()
      .json()

    if (data.value) {
      if (data.value.data) {
        inviteeStore.identity = data.value.data
        inviteeStore.opened = true
      } else {
        invitationCode.value = ''
        toastError.value = true
        setTimeout(() => {
          toastError.value = false
        }, 2000)
      }
    }
  } else {
    inputOpen.value = true
  }
}
</script>

<template>
  <div
    v-if="toastError"
    id="toast-danger"
    class="flex fixed z-20 top-3 right-3 items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
    role="alert"
  >
    <div
      class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200"
    >
      <svg
        class="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"
        />
      </svg>
      <span class="sr-only">Error icon</span>
    </div>
    <div class="ml-3 text-sm font-normal">Kode undangan salah</div>
  </div>
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
        <template v-if="identity">
          <div class="text-white text-center mb-4 font-content">
            <div class="text-md">teruntuk,</div>
            <div class="text-lg">{{ identity?.name }}</div>
          </div>
          <div class="px-3 py-1 mx-auto rounded-full bg-white w-fit text-center">
            <button @click="emits('open')" class="text-black font-content">Buka Undangan</button>
          </div>
        </template>
        <template v-else>
          <div class="text-white text-center mb-5 font-content">
            <div class="text-md">Mohon do'a restu</div>
          </div>
          <div class="text-center py-3">
            <input
              placeholder="Masukkan kode di sini"
              class="py-1 px-2 rounded placeholder:text-sm"
              v-if="inputOpen"
              v-model="invitationCode"
            />
          </div>
          <div class="px-3 py-1 mx-auto rounded-full bg-white w-fit text-center">
            <button @click="handleInput" class="text-black font-content">
              {{ inputOpen ? 'Buka Undangan' : 'Masukkan Kode Undangan' }}
            </button>
          </div>
        </template>
      </div>
    </div>
  </BaseLayout>
</template>
