# 不刘名科创工作室官网

不刘名科创（buliuming-cocl）工作室官网，基于 Vue 3 + Vite 构建，部署于 GitHub Pages。

## 本地开发

```bash
npm install
npm run dev      # 开发服务器
npm run build    # 生产构建到 dist/
npm run preview  # 预览构建产物
```

## 部署

推送到 `main` 分支后，GitHub Actions 会自动构建并部署到 GitHub Pages。
需在仓库 Settings → Pages 中将 Source 设为 **GitHub Actions**。

## 内容维护

站点数据集中在 `src/data/site.js`：

- `projects`：来自 [buliuming-cocl](https://github.com/buliuming-cocl) 组织的开源项目
- `affiliates`：附属团队（OpenWe Labs、豆芽人联盟 Yay Alliance）
- `history` / `team`：发展史与团队成员

Logo 源文件位于项目根目录 `buliuming.png`，由 Vite 在构建时统一打包引用。
