<template>
  <div class="bento-card group h-full flex flex-col !p-7" :id="'product-card-' + title.toLowerCase().replace(/\s+/g, '-')">
    <div class="icon-gradient mb-5 group-hover:shadow-[0_0_20px_rgba(0,180,255,0.1)] transition-all">
      <Sparkles class="w-5 h-5 text-brand-blue" />
    </div>
    <h3 class="text-lg font-bold text-white mb-2 group-hover:text-brand-blue transition-colors duration-300">{{ title }}</h3>
    <p v-if="tagline" class="text-[13px] text-brand-blue/80 mb-3 font-semibold">{{ tagline }}</p>
    <p class="text-[14px] text-gray-400 leading-relaxed mb-5 flex-grow">{{ description }}</p>
    <router-link v-if="link" :to="link" class="inline-flex items-center gap-2 text-[13px] font-semibold text-gray-400 hover:text-white transition-colors mt-auto pt-4 border-t border-white/[0.05]">
      Learn More <ArrowRight class="w-3.5 h-3.5" />
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
