import '@tarojs/taro'

declare module '@tarojs/taro' {
  interface TaroStatic {
    useLoad(callback: (options?: Record<string, unknown>) => void): void
  }
}
