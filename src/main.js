/**
 * @Author: xiayuushi@qq.com xiayuushi@163.com
 * @Date: 2023-01-04 10:11:51
 * @LastEditors: xiayuushi@qq.com xiayuushi@163.com
 * @LastEditTime: 2023-01-04 11:54:13
 * @FilePath: \temp\tempv3\src\main.js
 * @Description: xx
 * @Copyright(c) 2023 by xiayuushi@qq.com xiayuushi@163.com, All Rights Reserved.
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
