import { createApp } from 'vue'
import '@tarojs/taro/html.css';
import './app.less'
import store from '@/stores'

const App = createApp({
  // onShow (options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

App.use(store)

export default App
