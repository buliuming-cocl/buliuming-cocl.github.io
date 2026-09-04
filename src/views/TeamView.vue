<script setup>
import { team } from '../data/site.js'
</script>

<template>
  <section class="page team">
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
</template>
