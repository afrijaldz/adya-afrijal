<script setup lang="ts">
import { computed, ref } from 'vue'
import { useClipboard } from '@vueuse/core'
import { useInviteeStore } from '../stores/invitee';

const inviteeStore = useInviteeStore()

const identity = computed(() => inviteeStore.identity)

const openMap = () => {
  window.open('https://www.google.com/maps?q=-7.833164, 110.917036&z=15&output=embed', '_blank')
}

const btc = ref('1FFfXrrmqUvUryZ9K8RDACQSX9ak2ZJT1b')
const eth = ref('0x1f3D416D808474872880b5eb070BA4b98Abd2b9A')

const { copy: copyBtc, copied: btcCopied, isSupported: isBtcSupported} = useClipboard({ source: btc })
const { copy: copyEth, copied: ethCopied, isSupported: isEthSupported} = useClipboard({ source: eth })
</script>

<template>
  <div class="bg-white">
    <div class="pb-12">
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
      <div class="text-center mt-1 text-[#a98b71] font-content">
        <span class="cursor-pointer hover:underline text-sm" @click="openMap">
          Buka di google maps
        </span>
      </div>
      <div v-if="identity.sumbangan === 'tidak'" class="py-6 text-center">
        <div class="w-[60px] h-[3px] mx-auto bg-[#a98b71]"></div>
        <div class="text-[#a98b71] mt-10 font-content">Tanpa Mengurangi Rasa Hormat</div>
        <div class="mt-2 text-sm px-5 font-content">
          Kami tidak menerima sumbangan dalam bentuk apapun kecuali do'a atau Bitcoin/Ethereum
        </div>
        <div class="mx-auto mt-2">
          <template v-if="isBtcSupported">
            <button
              class="px-2 py-1 bg-orange-400 rounded text-xs font-content"
              @click="copyBtc(btc)"
            >
              <template v-if="!btcCopied">Copy addr BTC </template
              ><template v-else> Copied!</template>
            </button>
          </template>

          &nbsp;

          <template v-if="isEthSupported">
            <button
              class="px-2 py-1 bg-blue-400 rounded text-xs font-content"
              @click="copyEth(eth)"
            >
              <template v-if="!ethCopied">Copy addr ETH </template
              ><template v-else> Copied!</template>
            </button>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
