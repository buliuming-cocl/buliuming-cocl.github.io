import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 组织 Pages 站点 buliuming-cocl.github.io 部署在根路径
export default defineConfig({
  plugins: [vue()],
  base: '/',
})
