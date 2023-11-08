import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useInviteeStore = defineStore('invitee', () => {
  const identity = ref()

  return { identity }
})
