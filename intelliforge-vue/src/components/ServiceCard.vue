<template>
  <div class="bento-card group flex flex-col h-full !p-7" :id="'service-card-' + title.toLowerCase().replace(/\s+/g, '-')">
    <div class="flex items-start justify-between mb-5">
      <div class="icon-gradient group-hover:border-brand-blue/30 group-hover:shadow-[0_0_20px_rgba(0,180,255,0.1)]">
        <component :is="icon" class="w-5 h-5 text-brand-cyan" />
      </div>
      <div class="w-2 h-2 rounded-full bg-brand-cyan/40 group-hover:bg-brand-cyan transition-colors"></div>
    </div>

    <h3 class="text-lg font-bold text-white mb-3 group-hover:text-brand-cyan transition-colors duration-300">{{ title }}</h3>
    <p class="text-[14px] text-gray-400 leading-relaxed mb-5 flex-grow">{{ description }}</p>

    <!-- Feature tags -->
    <div class="flex flex-wrap gap-1.5 mb-6">
      <span v-for="tag in tags" :key="tag" class="px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-[10px] font-semibold text-gray-400 uppercase tracking-wide">
        {{ tag }}
      </span>
    </div>

    <router-link :to="link" class="group/btn inline-flex items-center gap-2.5 text-[13px] font-semibold text-gray-400 mt-auto pt-5 border-t border-white/[0.05] hover:border-brand-blue/20 transition-all w-full">
      <span class="group-hover/btn:text-white transition-colors">Explore Service</span>
      <div class="w-7 h-7 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover/btn:bg-brand-blue group-hover/btn:border-brand-blue group-hover/btn:translate-x-1 transition-all duration-300">
        <ArrowRight class="w-3.5 h-3.5 text-white" />
      </div>
    </router-link>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { ArrowRight } from 'lucide-vue-next'

const props = defineProps({
  icon: { type: [Object, Function], required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String, required: true },
  index: { type: Number, default: 0 }
})

const tags = computed(() => {
  const tagMap = {
    'Web Development': ['React', 'Vue', 'Node.js'],
    'Mobile App Development': ['iOS', 'Android', 'Cross-Platform'],
    'QA & Testing': ['Automation', 'CI/CD', 'Security'],
    'DevOps Services': ['Docker', 'AWS', 'Kubernetes'],
    'AI & ML Development': ['LLM', 'NLP', 'ML Ops'],
    'Custom Software Development': ['SaaS', 'API', 'Scalable'],
    'UI/UX Design': ['Figma', 'Research', 'Systems'],
    'Blockchain Development': ['Smart Contracts', 'DApps', 'Web3'],
  }
  return tagMap[props.title] || ['Enterprise', 'Scalable']
})
</script>
