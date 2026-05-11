<template>
  <section class="relative py-10 overflow-hidden" id="cta-banner">
    <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div class="w-[400px] h-[200px] bg-gradient-to-r from-brand-blue/[0.04] to-brand-purple/[0.04] rounded-full blur-[60px]"></div>
    </div>

    <div class="relative container-main text-center z-10">
      <div class="max-w-xl mx-auto bg-white/[0.02] border border-white/[0.06] rounded-xl p-6 md:p-8">
        <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-white/[0.06] bg-white/[0.02] mb-4">
          <span class="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse"></span>
          <span class="text-[9px] font-bold uppercase tracking-widest text-gray-400">{{ badge || 'Start Today' }}</span>
        </div>

        <h2 class="text-xl sm:text-2xl font-black mb-3 tracking-tight text-white leading-tight">
          {{ title }}
        </h2>
        <p v-if="description" class="text-gray-400 text-[13px] max-w-md mx-auto mb-5 leading-relaxed">{{ description }}</p>

        <router-link :to="primaryButtonLink" class="btn-primary !px-6 !py-2.5 !text-[13px]">
          <span>{{ primaryButtonText }}</span>
          <ArrowRight class="w-3.5 h-3.5" />
        </router-link>

        <p class="text-[10px] text-gray-500 mt-3">No commitment · Free consultation · 24h response</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ArrowRight } from 'lucide-vue-next'

defineProps({
  title: { type: String, required: true },
  description: { type: String, default: '' },
  badge: { type: String, default: '' },
  primaryButtonText: { type: String, default: 'Get Started' },
  primaryButtonLink: { type: String, default: '/contact-us' },
})
</script>
