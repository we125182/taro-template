import { createPersistedState } from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(createPersistedState({
  storage: {
    setItem: (key, value) => Taro.setStorageSync(key, value),
    getItem: (key) => Taro.getStorageSync(key)
  },
}))

export default pinia
