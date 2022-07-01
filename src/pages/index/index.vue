<template>
  <div class="index">
    <button @click="setToken">set token</button>
    <span>{{ userStore.token }}</span>
  </div>
</template>

<script setup lang="ts">
import './index.less'
import { useLoad } from '@tarojs/taro'
import useUserStore from '@/stores/user'

const userStore = useUserStore()

useLoad((options) => {
  console.log(options)
  console.log('useLoad')
})

const setToken = () => {
  userStore.token = Math.random().toString()
}
</script>
