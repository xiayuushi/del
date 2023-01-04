/**
 * @Author: xiayuushi@qq.com xiayuushi@163.com
 * @Date: 2023-01-04 11:41:38
 * @LastEditors: xiayuushi@qq.com xiayuushi@163.com
 * @LastEditTime: 2023-01-04 11:45:37
 * @FilePath: \temp\tempv3\src\utils\request.js
 * @Description:
 * @Copyright(c) 2023 by xiayuushi@qq.com xiayuushi@163.com, All Rights Reserved.
 */
import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
})

instance.interceptors.request.use(function (config) {
    return config
}, function (error) {
    return Promise.reject(error)
})

instance.interceptors.response.use(function (response) {
    return response
}, function (error) {
    return Promise.reject(error)
})

export default instance
