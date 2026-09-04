import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { writeFileSync, copyFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

// 组织 Pages 站点 buliuming-cocl.github.io 部署在根路径
export default defineConfig({
  plugins: [
    vue(),
    // GitHub Pages SPA 回退：构建后把 index.html 复制为 404.html，
    // 使直接访问 /projects 等子路由时由前端路由接管
    {
      name: 'gh-pages-spa-fallback',
      apply: 'build',
      closeBundle() {
        const outDir = resolve(__dirname, 'dist')
        const index = resolve(outDir, 'index.html')
        const notFound = resolve(outDir, '404.html')
        if (existsSync(index)) {
          copyFileSync(index, notFound)
          writeFileSync(
            resolve(outDir, '.nojekyll'),
            ''
          )
        }
      },
    },
  ],
  base: '/',
})
