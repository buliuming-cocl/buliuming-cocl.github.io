<script setup>
import { affiliates } from '../data/site.js'
</script>

<template>
  <section class="page affiliates">
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
</template>
