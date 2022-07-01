import { defineStore } from "pinia";

import { ref } from "vue";

export default defineStore('user', () => {
  const token = ref('')
  return {
    token
  }
}, {
  persist: true
})
