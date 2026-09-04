import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

// 主题已在 index.html <head> 内联脚本中同步设置，避免 FOUC
createApp(App).mount('#app')
