/**
 * @Author: xiayuushi@qq.com xiayuushi@163.com
 * @Date: 2023-01-04 10:11:51
 * @LastEditors: xiayuushi@qq.com xiayuushi@163.com
 * @LastEditTime: 2023-01-04 10:26:46
 * @FilePath: \temp\tempv3\vite.config.js
 * @Description:
 * @Copyright(c) 2023 by xiayuushi@qq.com xiayuushi@163.com, All Rights Reserved.
 */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), vueJsx(), AutoImport({
        resolvers: [ElementPlusResolver()]
    }),
    Components({
        resolvers: [ElementPlusResolver()]
    })],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
