import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    Components({
      types: [
        {
          from: 'vue-router',
          names: ['RouterLink', 'RouterView'],
        },
      ],
      resolvers: [
        AntDesignVueResolver({
          importStyle: false, // css in js
          resolveIcons: true,
        }),
      ],
      dirs: ['src/views/**', 'src/components/**'],
      deep: true,
      dts: false, //typescript인 경우 - tsconfig.json에서 include에 추가하면 타입 체크 가능
    }),
    AutoImport({
      // targets to transform
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
      ],

      // global imports to register
      imports: [
        // presets
        'vue',
        'vue-router',
        'pinia',

        // custom
        {
          axios: [
            // default imports
            ['default', 'axios'], // import { default as axios } from 'axios',
          ],
          'lodash-es': [['default', '$_']],
          dayjs: [['default', 'dayjs']],
        },
      ],

      resolvers: [
        AntDesignVueResolver({
          importStyle: false, // css in js
          resolveIcons: true,
        }),
      ],

      // Auto import for module exports under directories
      // by default it only scan one level of modules under the directory
      dirs: ['./src/stores'],

      dts: true,

      eslintrc: {
        enabled: true, // <-- this
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@views': fileURLToPath(new URL('./src/views', import.meta.url)),
      '@stores': fileURLToPath(new URL('./src/stores', import.meta.url)),
    },
  },
})
