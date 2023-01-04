/**
 * @Author: xiayuushi@qq.com xiayuushi@163.com
 * @Date: 2023-01-04 10:26:35
 * @LastEditors: xiayuushi@qq.com xiayuushi@163.com
 * @LastEditTime: 2023-01-04 12:00:30
 * @FilePath: \temp\tempv3\.eslintrc.js
 * @Description:
 * @Copyright(c) 2023 by xiayuushi@qq.com xiayuushi@163.com, All Rights Reserved.
 */
module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'plugin:vue/vue3-essential',
        'standard'
    ],
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: [
        'vue'
    ],
    rules: {
        indent: [2, 4],
        'no-console': 2
    }
}
