<script setup>
import { site, history } from '../data/site.js'
import { useFadeIn } from '../composables/useFadeIn.js'

useFadeIn()
</script>

<template>
  <!-- 首页 / 英雄区 -->
  <section id="home" class="hero">
    <div class="container hero-content">
      <img src="/buliuming.png" alt="不刘名科创 logo" class="hero-logo" />
      <h1>{{ site.name }}</h1>
      <p class="hero-slogan">{{ site.slogan }}</p>
      <p class="hero-desc">{{ site.description }}</p>
      <div class="hero-buttons">
        <router-link to="/projects" class="btn">查看项目</router-link>
        <router-link to="/team" class="btn btn-outline">认识成员</router-link>
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
</template>
