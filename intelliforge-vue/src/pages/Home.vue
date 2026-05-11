<template>
  <div>
    <HeroSection />

    <!-- Services Grid -->
    <section class="py-28 relative overflow-hidden">
      <div class="container-main relative z-10">
        <div class="text-center mb-16 max-w-2xl mx-auto reveal">
          <SectionBadge text="Enterprise Capabilities" class="mx-auto" />
          <h2 class="font-black mb-5 text-white tracking-tight">Technology Services Built for <span class="gradient-text">Modern Businesses</span></h2>
          <p class="text-[16px] text-gray-400 leading-relaxed">We deliver high-end software solutions, intelligent automation, and cloud architecture to accelerate your digital transformation journey.</p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div v-for="(s, index) in homeServices" :key="s.slug" class="reveal" :class="'reveal-delay-' + (index + 1)">
            <ServiceCard :icon="s.icon" :title="s.title" :description="s.shortDesc" :link="'/' + s.slug" :index="index + 1" />
          </div>
        </div>

        <div class="mt-14 text-center reveal">
          <router-link to="/our-services" class="btn-secondary">
            <span>View All Capabilities</span>
            <ArrowRight class="w-4 h-4" />
          </router-link>
        </div>
      </div>
    </section>

    <!-- GenAI Split Section -->
    <section class="py-28 relative overflow-hidden">
      <!-- Subtle section glow -->
      <div class="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-brand-blue/[0.04] rounded-full blur-[120px] pointer-events-none"></div>

      <div class="relative container-main flex flex-col lg:flex-row items-center gap-16">
        <!-- Left Content -->
        <div class="flex-1 lg:pr-8 z-10 relative reveal">
          <SectionBadge text="Next-Gen AI Core" />
          <h2 class="font-black mb-6 tracking-tight text-white">
            <span class="gradient-text">Generative AI</span> Solutions
          </h2>
          <p class="text-[16px] text-gray-400 leading-relaxed mb-10">
            Unlock tomorrow's potential. We integrate cutting-edge Large Language Models and AI automation directly into your enterprise workflows, driving unparalleled operational growth.
          </p>

          <div class="grid sm:grid-cols-2 gap-4 mb-10">
            <div class="bento-card !rounded-xl !p-4 flex items-center gap-3 !bg-white/[0.02]">
              <div class="w-10 h-10 rounded-lg bg-brand-blue/[0.08] flex items-center justify-center shrink-0 border border-brand-blue/15">
                <Zap class="w-4 h-4 text-brand-blue" />
              </div>
              <div>
                <span class="text-white font-bold text-[13px] block mb-0.5">10x Faster Workflows</span>
                <span class="text-gray-500 text-[11px]">Automated operations</span>
              </div>
            </div>
            <div class="bento-card !rounded-xl !p-4 flex items-center gap-3 !bg-white/[0.02]">
              <div class="w-10 h-10 rounded-lg bg-brand-purple/[0.08] flex items-center justify-center shrink-0 border border-brand-purple/15">
                <Cpu class="w-4 h-4 text-brand-purple" />
              </div>
              <div>
                <span class="text-white font-bold text-[13px] block mb-0.5">AI-Ready Systems</span>
                <span class="text-gray-500 text-[11px]">LLM Integration</span>
              </div>
            </div>
          </div>

          <router-link to="/ai-ml-development" class="btn-primary">
            <span>Consult AI Team</span>
            <ArrowRight class="w-4 h-4" />
          </router-link>
        </div>

        <!-- Right Visual -->
        <div class="flex-1 w-full max-w-[420px] relative z-10 flex justify-center lg:justify-end reveal reveal-delay-2">
          <div class="relative w-full aspect-square bento-card !rounded-full !p-0 overflow-hidden flex items-center justify-center !border-white/[0.04]">
            <div class="relative w-28 h-28 rounded-full border border-white/[0.08] flex items-center justify-center bg-black/40 backdrop-blur-xl z-20">
              <div class="absolute inset-0 border-2 border-t-brand-blue border-r-brand-purple border-b-transparent border-l-transparent rounded-full animate-spin-slow"></div>
              <div class="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-purple rounded-full blur-[16px] animate-pulse opacity-50"></div>
              <Brain class="w-9 h-9 text-white absolute z-10" />
            </div>
            <div class="absolute inset-8 border border-white/[0.04] rounded-full animate-spin-reverse-slow"></div>
            <div class="absolute inset-16 border border-brand-blue/[0.08] rounded-full animate-spin-slow flex items-center justify-start">
              <div class="w-2.5 h-2.5 bg-brand-cyan rounded-full shadow-[0_0_8px_#4FC3F7] -ml-1"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SaaS Solutions -->
    <section class="py-28 relative overflow-hidden">
      <div class="container-main relative z-10">
        <div class="text-center mb-16 max-w-2xl mx-auto reveal">
          <SectionBadge text="SaaS Ecosystem" class="mx-auto" />
          <h2 class="font-black mb-5 text-white tracking-tight">Business Solutions That <span class="gradient-text">Scale With You</span></h2>
          <p class="text-[16px] text-gray-400 leading-relaxed">Ready-to-deploy platforms designed to optimize your operations, from customer relationships to advanced data analytics.</p>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div v-for="(s, index) in businessSolutions" :key="s.slug" class="reveal" :class="'reveal-delay-' + (index + 1)">
            <SolutionCard :icon="s.icon" :title="s.title" :description="s.shortDesc" :link="'/' + s.slug" :featured="index === 0" />
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <CTABanner
      title="Seamless Social Management"
      description="Streamline your social media workflows and enhance engagement with smart automation and real-time generative AI analytics."
      badge="New Product"
      primaryButtonText="Request Demo"
      primaryButtonLink="/social-sync"
    />
  </div>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue'
import ServiceCard from '../components/ServiceCard.vue'
import SolutionCard from '../components/SolutionCard.vue'
import SectionBadge from '../components/SectionBadge.vue'
import CTABanner from '../components/CTABanner.vue'
import { services } from '../data/services.js'
import { solutions } from '../data/solutions.js'
import { Brain, ArrowRight, Zap, Cpu } from 'lucide-vue-next'

document.title = 'IntelliForge — Premium Technology Services'

const homeSlugs = ['web-development', 'mobile-app-development', 'qa-testing', 'devops-services']
const homeServices = services.filter(s => homeSlugs.includes(s.slug))
const businessSlugs = ['crm-pro', 'hr-master', 'project-plus', 'invento-sync']
const businessSolutions = solutions.filter(s => businessSlugs.includes(s.slug))
</script>
