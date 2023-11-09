import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useInviteeStore = defineStore('invitee', () => {
  const identity = ref()
  const opened = ref(false)

  return { identity, opened }
})
