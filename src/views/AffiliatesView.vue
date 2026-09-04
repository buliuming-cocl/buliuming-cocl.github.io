<script setup>
import { affiliates } from '../data/site.js'
</script>

<template>
  <section class="page affiliates">
    <div class="container">
      <div class="section-title">
        <h2>旗下团队</h2>
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
              <a
                v-for="l in a.links"
                :key="l.label"
                :href="l.url"
                target="_blank"
                rel="noopener"
              >
                {{ l.label }}
              </a>
            </div>
          </div>
          <p class="affiliate-desc">{{ a.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
