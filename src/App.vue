<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { site, history, team, projects, affiliates } from './data/site.js'

// 深色模式（初始值从 DOM 读取，main.js 已在挂载前设置好）
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

// 滚动淡入 + 菜单关闭事件
onMounted(() => {
  document.addEventListener('keydown', onKeydown)
  document.addEventListener('click', onDocClick)

  const els = document.querySelectorAll('.fade-in')
  if (!('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('visible'))
    return
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12 }
  )
  els.forEach((el) => observer.observe(el))
})

onUnmounted(() => {
  document.removeEventListener('keydown', onKeydown)
  document.removeEventListener('click', onDocClick)
})
</script>

<template>
  <header>
    <nav class="navbar container">
      <a href="#home" class="logo" @click="closeMenu">
        <img src="/buliuming.png" alt="不刘名科创 logo" class="logo-img" />
        <span>{{ site.name }}</span>
      </a>
      <ul id="nav-menu" class="nav-links" :class="{ active: menuOpen }">
        <li><a href="#home" @click="closeMenu">首页</a></li>
        <li><a href="#about" @click="closeMenu">关于</a></li>
        <li><a href="#history" @click="closeMenu">发展史</a></li>
        <li><a href="#projects" @click="closeMenu">项目</a></li>
        <li><a href="#affiliates" @click="closeMenu">附属团队</a></li>
        <li><a href="#team" @click="closeMenu">团队</a></li>
        <li><a href="#contact" @click="closeMenu">联系</a></li>
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

  <!-- 首页 / 英雄区 -->
  <section id="home" class="hero">
    <div class="container hero-content">
      <img src="/buliuming.png" alt="不刘名科创 logo" class="hero-logo" />
      <h1>{{ site.name }}</h1>
      <p class="hero-slogan">{{ site.slogan }}</p>
      <p class="hero-desc">{{ site.description }}</p>
      <div class="hero-buttons">
        <a href="#projects" class="btn">查看项目</a>
        <a href="#contact" class="btn btn-outline">联系我们</a>
      </div>
    </div>
  </section>

  <!-- 关于 -->
  <section id="about" class="about fade-in">
    <div class="container">
      <div class="section-title">
        <h2>关于我们</h2>
      </div>
      <div class="about-content">
        <h3>{{ site.tagline }}</h3>
        <p>{{ site.description }}</p>
        <p class="about-more">
          我们以 GitHub 开源项目为主，覆盖 Web 开发、AI 应用、桌面应用与底层开发，
          期待与热爱技术的你一起创造。
        </p>
      </div>
    </div>
  </section>

  <!-- 发展史 -->
  <section id="history" class="history fade-in">
    <div class="container">
      <div class="section-title">
        <h2>发展史</h2>
      </div>
      <div class="timeline">
        <div v-for="item in history" :key="item.date" class="timeline-item">
          <h3>{{ item.date }}</h3>
          <p>{{ item.text }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 项目 -->
  <section id="projects" class="projects fade-in">
    <div class="container">
      <div class="section-title">
        <h2>项目</h2>
        <p>来自 <a :href="site.github" target="_blank" rel="noopener">buliuming-cocl</a> 组织的最新开源项目</p>
      </div>
      <div class="card-grid">
        <a
          v-for="p in projects"
          :key="p.name"
          :href="p.url"
          target="_blank"
          rel="noopener"
          class="card project-card"
        >
          <div class="card-head">
            <h3>{{ p.name }}</h3>
            <span class="lang">{{ p.lang }}</span>
          </div>
          <p>{{ p.desc }}</p>
          <span class="card-link">查看仓库 →</span>
        </a>
      </div>
    </div>
  </section>

  <!-- 附属团队 -->
  <section id="affiliates" class="affiliates fade-in">
    <div class="container">
      <div class="section-title">
        <h2>附属团队</h2>
        <p>与我们紧密协作的伙伴团队</p>
      </div>
      <div class="affiliate-list">
        <div v-for="a in affiliates" :key="a.name" class="affiliate">
          <div class="affiliate-head">
            <div>
              <h3>{{ a.name }}</h3>
              <span class="affiliate-tagline">{{ a.tagline }}</span>
            </div>
            <div class="affiliate-links">
              <a :href="a.github" target="_blank" rel="noopener">GitHub</a>
              <a v-if="a.site" :href="a.site" target="_blank" rel="noopener">官网</a>
            </div>
          </div>
          <p class="affiliate-desc">{{ a.desc }}</p>
          <div class="affiliate-projects">
            <a
              v-for="p in a.projects"
              :key="p.name"
              :href="p.url"
              target="_blank"
              rel="noopener"
              class="chip"
            >
              {{ p.name }} · {{ p.desc }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 团队 -->
  <section id="team" class="team fade-in">
    <div class="container">
      <div class="section-title">
        <h2>我们的团队</h2>
      </div>
      <div class="card-grid team-grid">
        <div v-for="m in team" :key="m.name" class="card team-card">
          <div class="avatar">{{ m.avatar }}</div>
          <h3>{{ m.name }}</h3>
          <p class="role">{{ m.role }}</p>
          <p class="desc">{{ m.desc }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 联系 -->
  <section id="contact" class="contact fade-in">
    <div class="container">
      <div class="section-title">
        <h2>联系我们</h2>
      </div>
      <div class="contact-content">
        <div class="contact-info">
          <h3>让我们开始您的项目</h3>
          <p>我们期待与您合作，共同创造出色的解决方案。请随时与我们联系。</p>
          <div class="contact-item">
            <span class="contact-icon">✉️</span>
            <div>
              <h4>邮箱</h4>
              <a :href="'mailto:' + site.email">{{ site.email }}</a>
            </div>
          </div>
          <div class="contact-item">
            <span class="contact-icon">🐙</span>
            <div>
              <h4>GitHub</h4>
              <a :href="site.github" target="_blank" rel="noopener">{{ site.github }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

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
        <a href="#home">首页</a>
        <a href="#about">关于</a>
        <a href="#history">发展史</a>
        <a href="#projects">项目</a>
        <a href="#team">团队</a>
      </div>
    </div>
    <div class="copyright">
      <p>&copy; 2026 {{ site.name }}工作室. 保留所有权利.</p>
    </div>
  </footer>
</template>
