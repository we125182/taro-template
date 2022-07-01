const AutoImport = require('unplugin-auto-import/webpack')

const taro = [
  ['*', 'Taro'],
  'useLoad',
  'useUnload',
  'useDidShow',
  'useDidHide',
  'usePullDownRefresh',
  'useReachBottom',
  'usePageScroll',
  'useResize',
  'useShareAppMessage',
  'useTabItemTap',
  'useTitleClick',
  'useOptionMenuClick',
  'usePullIntercept',
  'useShareTimeline',
  'useAddToFavorites',
  'useReady',
  'useRouter',
]

module.exports = function registerAutoImportsPlugin(chain) {
  // @ts-ignore
  chain.plugin('auto-imports').use((args) => AutoImport(args), [{
    imports: [
      'vue',
      'pinia',
      {
        '@tarojs/taro': taro
      }
    ],
    dts: './types/auto-imports.d.ts'
  }])

}
