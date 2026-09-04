<script setup>
import { site, projects } from '../data/site.js'
</script>

<template>
  <section class="page projects">
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
</template>
