<template>
  <div class="feature-card" :id="'product-card-' + title.toLowerCase().replace(/\s+/g, '-')">
    <div class="icon-gradient mb-5">
      <Sparkles class="w-6 h-6 text-brand-blue" />
    </div>
    <h3 class="text-lg font-bold text-white mb-2">{{ title }}</h3>
    <p v-if="tagline" class="text-sm text-brand-blue mb-3 font-medium">{{ tagline }}</p>
    <p class="text-sm text-gray-400 leading-relaxed mb-4">{{ description }}</p>
    <router-link v-if="link" :to="link" class="inline-flex items-center gap-2 text-sm font-medium text-brand-blue hover:text-brand-purple transition-colors">
      Learn More <ArrowRight class="w-4 h-4" />
    </router-link>
  </div>
</template>

<script setup>
import { Sparkles, ArrowRight } from 'lucide-vue-next'
defineProps({
  title: { type: String, required: true },
  tagline: { type: String, default: '' },
  description: { type: String, required: true },
  link: { type: String, default: '' },
})
</script>
