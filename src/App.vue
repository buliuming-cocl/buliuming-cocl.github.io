<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { site } from './data/site.js'

// 深色模式（初始值从 DOM 读取，index.html 已在挂载前设置好）
const theme = ref(document.documentElement.getAttribute('data-theme') || 'light')
function toggleTheme() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
  document.documentElement.setAttribute('data-theme', theme.value)
  localStorage.setItem('theme', theme.value)
}

// 移动端菜单
const menuOpen = ref(false)
function closeMenu() {
  menuOpen.value = false
}
function onKeydown(e) {
  if (e.key === 'Escape') menuOpen.value = false
}
function onDocClick(e) {
  if (menuOpen.value && !e.target.closest('.navbar')) menuOpen.value = false
}

onMounted(() => {
  document.addEventListener('keydown', onKeydown)
  document.addEventListener('click', onDocClick)
})

onUnmounted(() => {
  document.removeEventListener('keydown', onKeydown)
  document.removeEventListener('click', onDocClick)
})
</script>

<template>
  <header>
    <nav class="navbar container">
      <router-link to="/" class="logo" @click="closeMenu">
        <img src="/buliuming.png" alt="不刘名科创 logo" class="logo-img" />
        <span>{{ site.name }}</span>
      </router-link>
      <ul id="nav-menu" class="nav-links" :class="{ active: menuOpen }">
        <li><router-link to="/" @click="closeMenu">首页</router-link></li>
        <li><router-link to="/projects" @click="closeMenu">项目</router-link></li>
        <li><router-link to="/affiliates" @click="closeMenu">附属团队</router-link></li>
        <li><router-link to="/team" @click="closeMenu">团队</router-link></li>
      </ul>
      <div class="nav-actions">
        <button class="theme-toggle" @click="toggleTheme" aria-label="切换深色模式">
          {{ theme === 'dark' ? '☀️' : '🌙' }}
        </button>
        <button
          class="menu-toggle"
          @click="menuOpen = !menuOpen"
          aria-label="菜单"
          :aria-expanded="menuOpen"
          aria-controls="nav-menu"
        >☰</button>
      </div>
    </nav>
  </header>

  <main>
    <router-view />
  </main>

  <footer>
    <div class="container footer-content">
      <div class="footer-brand">
        <img src="/buliuming.png" alt="logo" class="footer-logo" />
        <div>
          <h3>{{ site.name }}</h3>
          <p>{{ site.slogan }}</p>
        </div>
      </div>
      <div class="footer-links">
        <router-link to="/">首页</router-link>
        <router-link to="/projects">项目</router-link>
        <router-link to="/affiliates">附属团队</router-link>
        <router-link to="/team">团队</router-link>
      </div>
    </div>
    <div class="copyright">
      <p>&copy; 2026 {{ site.name }}工作室. 保留所有权利.</p>
    </div>
  </footer>
</template>
