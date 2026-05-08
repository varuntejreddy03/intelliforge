<template>
  <div class="premium-card group cursor-pointer h-full flex flex-col" :id="'solution-card-' + title.toLowerCase().replace(/\s+/g, '-')">
    <div class="mb-5 flex justify-between items-start">
      <div class="icon-gradient transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
        <component :is="icon" class="w-6 h-6 text-brand-purple" />
      </div>
      <div class="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-gray-300 group-hover:border-brand-purple/30 group-hover:bg-brand-purple/10 group-hover:text-white transition-colors">
        Solution
      </div>
    </div>
    <h3 class="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-blue group-hover:to-brand-purple transition-all">{{ title }}</h3>
    <p class="text-[15px] text-gray-400 leading-relaxed mb-6 flex-grow">{{ description }}</p>
    
    <div class="pt-5 border-t border-white/5 flex items-center justify-between">
      <span class="text-xs font-bold uppercase tracking-wider text-brand-blue opacity-80 group-hover:opacity-100 transition-opacity">Explore Product</span>
      <router-link :to="link" class="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white text-gray-400 transition-all duration-300">
        <ArrowRight class="w-4 h-4" />
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ArrowRight } from 'lucide-vue-next'

defineProps({
  icon: { type: [Object, Function], default: null },
  title: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String, required: true },
})
</script>
