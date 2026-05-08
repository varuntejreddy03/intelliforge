<template>
  <div class="premium-card group cursor-pointer block h-full flex flex-col justify-between" :id="'service-card-' + title.toLowerCase().replace(/\s+/g, '-')">
    <div>
      <div class="icon-gradient mb-6 transition-transform duration-300 group-hover:scale-110">
        <component :is="icon" class="w-6 h-6 text-brand-blue" />
      </div>
      <h3 class="text-xl font-bold text-white mb-3 group-hover:text-brand-cyan transition-colors">{{ title }}</h3>
      <p class="text-sm text-gray-400 leading-relaxed mb-6">{{ description }}</p>
    </div>
    
    <router-link :to="link" class="arrow-group inline-flex items-center gap-2 text-sm font-bold text-brand-blue hover:text-white transition-colors mt-auto">
      <span>Learn More</span>
      <ArrowRight class="w-4 h-4 arrow-icon" />
    </router-link>
  </div>
</template>

<script setup>
import { ArrowRight } from 'lucide-vue-next'

defineProps({
  icon: { type: [Object, Function], required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String, required: true },
})
</script>
