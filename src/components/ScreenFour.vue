<script setup lang="ts">
import { useInterval } from '@vueuse/core'

import { useIntervalFn } from '@vueuse/core'
import { ref } from 'vue'

const days = ref()
const hours = ref()
const minutes = ref()
const seconds = ref()

const { pause, resume, isActive } = useIntervalFn(() => {
  const countDownDate = new Date('Nov 18, 2023 09:00:00').getTime()
  const now = new Date().getTime()

  const distance = countDownDate - now

  days.value = Math.floor(distance / (1000 * 60 * 60 * 24))
  hours.value = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  seconds.value = Math.floor((distance % (1000 * 60)) / 1000)
}, 1000)
</script>

<template>
  <div class="bg-white">
    <div class="pt-12 px-6">
      <div class="mx-auto font-content text-2xl text-center text-[#a98b71]">
        Acara akan diselenggarakan dalam
      </div>
      <div class="mt-4 flex justify-evenly items-center text-center">
        <div class="bg-[#a98b71] rounded py-2 px-5 text-[#333333]">
          <div>
            {{ days }}
          </div>
          <div>Hari</div>
        </div>
        <div class="bg-[#a98b71] rounded py-2 px-5 text-[#333333]">
          <div>
            {{ hours }}
          </div>
          <div>Jam</div>
        </div>
        <div class="bg-[#a98b71] rounded py-2 px-5 text-[#333333]">
          <div>
            {{ minutes }}
          </div>
          <div>Menit</div>
        </div>
      </div>
    </div>
  </div>
</template>
