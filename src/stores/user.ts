export default defineStore('user', () => {
  const token = ref('')
  return {
    token
  }
}, {
  persist: true
})
