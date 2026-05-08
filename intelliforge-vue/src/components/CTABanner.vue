<template>
  <section class="relative py-24 overflow-hidden" id="cta-banner">
    <div class="absolute inset-0 bg-[#0A0A1F]"></div>
    
    <!-- Premium Gradients -->
    <div class="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-purple/50 to-transparent"></div>
    <div class="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-blue/50 to-transparent"></div>
    
    <div class="absolute inset-0 opacity-30">
       <div class="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-brand-blue/30 rounded-full blur-[120px] animate-pulse-slow"></div>
       <div class="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-brand-purple/30 rounded-full blur-[120px] animate-pulse-slow" style="animation-delay: 2s"></div>
    </div>
    
    <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50"></div>

    <div class="relative container-main text-center z-10">
      <div class="max-w-4xl mx-auto glass-card !rounded-3xl p-10 md:p-16 border-brand-blue/20 shadow-[0_0_80px_rgba(0,180,255,0.1)] relative overflow-hidden">
        
        <!-- Inner glow -->
        <div class="absolute -top-32 -left-32 w-64 h-64 bg-brand-blue/20 rounded-full blur-[80px]"></div>
        <div class="absolute -bottom-32 -right-32 w-64 h-64 bg-brand-purple/20 rounded-full blur-[80px]"></div>

        <div class="relative z-10">
          <h2 class="text-3xl sm:text-5xl font-black mb-6 tracking-tight">
            <span class="text-white">{{ title }}</span>
          </h2>
          <p v-if="description" class="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10 font-medium">{{ description }}</p>
          <div class="flex flex-wrap items-center justify-center gap-4">
            <router-link :to="primaryButtonLink" class="btn-primary !px-8 !py-4 text-lg">
              <span>{{ primaryButtonText }}</span>
              <ArrowRight class="w-5 h-5" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ArrowRight } from 'lucide-vue-next'

defineProps({
  title: { type: String, required: true },
  description: { type: String, default: '' },
  primaryButtonText: { type: String, default: 'Get Started' },
  primaryButtonLink: { type: String, default: '/contact-us' },
})
</script>
