<template>
  <div
    class="bento-card group h-full flex flex-col relative"
    :class="featured ? '!border-brand-purple/20 shadow-[0_0_40px_rgba(123,47,255,0.06)]' : ''"
    :id="'solution-card-' + title.toLowerCase().replace(/\s+/g, '-')"
  >
    <!-- Featured glow -->
    <div v-if="featured" class="absolute -top-px -left-px -right-px -bottom-px rounded-[24px] bg-gradient-to-br from-brand-blue/20 via-transparent to-brand-purple/20 pointer-events-none"></div>

    <div class="mb-5 flex justify-between items-start relative z-10">
      <div class="icon-gradient !bg-brand-purple/[0.08] !border-brand-purple/15 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(123,47,255,0.15)]">
        <component :is="icon" class="w-5 h-5 text-brand-purple" />
      </div>
      <div class="px-3 py-1.5 bg-brand-purple/[0.08] border border-brand-purple/20 rounded-full text-[10px] font-bold text-brand-purple uppercase tracking-widest">
        SaaS Product
      </div>
    </div>

    <h3 class="text-xl font-bold text-white mb-3 relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-blue group-hover:to-brand-purple transition-all duration-300">{{ title }}</h3>
    <p class="text-[14px] text-gray-400 leading-relaxed mb-6 relative z-10">{{ description }}</p>

    <!-- Feature bullets -->
    <ul class="space-y-2.5 mb-8 relative z-10 flex-grow">
      <li class="flex items-center gap-2.5 text-[13px] text-gray-400 font-medium">
        <CheckCircle2 class="w-3.5 h-3.5 text-brand-cyan shrink-0" /> Cloud Native Architecture
      </li>
      <li class="flex items-center gap-2.5 text-[13px] text-gray-400 font-medium">
        <CheckCircle2 class="w-3.5 h-3.5 text-brand-purple shrink-0" /> AI-Powered Insights
      </li>
      <li class="flex items-center gap-2.5 text-[13px] text-gray-400 font-medium">
        <CheckCircle2 class="w-3.5 h-3.5 text-brand-blue shrink-0" /> Seamless Integration
      </li>
    </ul>

    <router-link :to="link" class="relative z-10 pt-5 border-t border-white/[0.05] flex items-center justify-between group-hover:border-brand-purple/15 transition-colors">
      <span class="text-[13px] font-semibold text-gray-400 group-hover:text-white transition-colors">View Product</span>
      <div class="w-9 h-9 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-brand-blue group-hover:to-brand-purple group-hover:border-transparent group-hover:shadow-[0_4px_16px_rgba(123,47,255,0.3)] transition-all duration-300 group-hover:translate-x-1">
        <ArrowRight class="w-4 h-4 text-white" />
      </div>
    </router-link>
  </div>
</template>

<script setup>
import { ArrowRight, CheckCircle2 } from 'lucide-vue-next'

defineProps({
  icon: { type: [Object, Function], default: null },
  title: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String, required: true },
  featured: { type: Boolean, default: false },
})
</script>
