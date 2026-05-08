<template>
  <div>
    <HeroSection />

    <!-- Services Grid -->
    <section class="py-24 relative overflow-hidden">
      <!-- Background elements -->
      <div class="absolute inset-0 bg-[#08081A]"></div>
      <div class="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-blue/5 to-transparent"></div>
      
      <div class="container-main relative z-10">
        <div class="text-center mb-16">
          <SectionBadge text="Our Capabilities" class="mx-auto" />
          <h2 class="text-3xl sm:text-5xl font-extrabold mb-6 text-white tracking-tight">Technology Services Built for <span class="gradient-text">Modern Businesses</span></h2>
          <p class="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">We deliver high-end software solutions, intelligent automation, and cloud architecture to accelerate your digital transformation journey.</p>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard v-for="s in homeServices" :key="s.slug" :icon="s.icon" :title="s.title" :description="s.shortDesc" :link="'/' + s.slug" />
        </div>
        <div class="mt-12 text-center">
           <router-link to="/our-services" class="btn-secondary group">
             <span>View All Services</span>
             <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
           </router-link>
        </div>
      </div>
    </section>

    <!-- Premium GenAI Split Banner -->
    <section class="py-24 relative overflow-hidden">
      <div class="absolute inset-0 bg-[#0A0A1F]"></div>
      <!-- Complex glow background -->
      <div class="absolute inset-0 opacity-40">
         <div class="absolute top-0 left-1/4 w-[800px] h-[800px] bg-brand-purple/20 rounded-full blur-[150px]"></div>
         <div class="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-brand-blue/20 rounded-full blur-[120px]"></div>
      </div>
      
      <div class="relative container-main flex flex-col lg:flex-row items-center gap-16">
        <div class="flex-1 lg:pr-10 z-10 relative">
          <SectionBadge text="Next-Gen AI" />
          <h2 class="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight text-white leading-tight">
            <span class="gradient-text">Generative AI</span> Solutions for the Future
          </h2>
          <p class="text-gray-300 text-lg leading-relaxed mb-10 font-medium">
            Unlock tomorrow's potential. We integrate cutting-edge Large Language Models and AI automation directly into your business workflows, driving unparalleled creativity and operational growth.
          </p>
          
          <div class="grid grid-cols-2 gap-4 mb-10">
            <div class="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
              <div class="w-10 h-10 rounded-full bg-brand-blue/20 flex items-center justify-center shrink-0"><Zap class="w-5 h-5 text-brand-blue" /></div>
              <span class="text-white font-semibold text-sm">10x Faster Workflows</span>
            </div>
            <div class="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
              <div class="w-10 h-10 rounded-full bg-brand-purple/20 flex items-center justify-center shrink-0"><Cpu class="w-5 h-5 text-brand-purple" /></div>
              <span class="text-white font-semibold text-sm">AI-Ready Systems</span>
            </div>
          </div>

          <div class="flex flex-wrap gap-4">
            <router-link to="/ai-ml-development" class="btn-primary">
              <span>Consult Now</span>
              <ArrowRight class="w-4 h-4" />
            </router-link>
          </div>
        </div>

        <div class="flex-1 flex justify-center lg:justify-end w-full relative z-10">
          <div class="relative w-full max-w-[500px] aspect-square rounded-[40px] border border-white/10 overflow-hidden bg-black/40 backdrop-blur-3xl shadow-2xl p-8 flex items-center justify-center group">
             <!-- Interactive Background Effect -->
             <div class="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-brand-purple/10 opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>
             
             <!-- Neural Net Illustration -->
             <div class="relative w-full h-full">
                <!-- Center Core -->
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-brand-blue/20 rounded-full flex items-center justify-center animate-pulse">
                   <div class="w-24 h-24 bg-brand-purple/40 rounded-full blur-md"></div>
                   <Brain class="w-12 h-12 text-white absolute z-10" />
                </div>
                
                <!-- Orbiting Nodes (CSS simplified visual) -->
                <div class="absolute top-1/4 left-1/4 w-3 h-3 bg-brand-cyan rounded-full shadow-[0_0_15px_#4FC3F7] animate-float"></div>
                <div class="absolute bottom-1/4 right-1/4 w-4 h-4 bg-brand-blue rounded-full shadow-[0_0_20px_#00B4FF] animate-float" style="animation-delay: 1s"></div>
                <div class="absolute top-1/3 right-1/5 w-2 h-2 bg-brand-purple rounded-full shadow-[0_0_10px_#7B2FFF] animate-float" style="animation-delay: 2s"></div>
                <div class="absolute bottom-1/3 left-1/5 w-5 h-5 bg-white/80 rounded-full shadow-[0_0_20px_white] animate-float" style="animation-delay: 0.5s"></div>
                
                <!-- SVG Connecting Lines -->
                <svg class="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M50 50 L25 25 M50 50 L75 75 M50 50 L20 66 M50 50 L80 33" stroke="url(#line-grad)" stroke-width="0.5" stroke-dasharray="2,2"/>
                  <defs>
                    <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stop-color="#00B4FF"/>
                      <stop offset="100%" stop-color="#7B2FFF"/>
                    </linearGradient>
                  </defs>
                </svg>
             </div>
          </div>
        </div>
      </div>
    </section>

    <!-- For Business -->
    <section class="py-24 relative overflow-hidden bg-[#08081A]">
      <div class="container-main relative z-10">
        <div class="text-center mb-16">
          <SectionBadge text="SaaS Ecosystem" class="mx-auto" />
          <h2 class="text-3xl sm:text-5xl font-extrabold mb-6 text-white tracking-tight">Business Solutions That <span class="gradient-text">Scale With You</span></h2>
          <p class="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">Ready-to-deploy platforms designed to optimize your operations, from customer relationships to inventory management.</p>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <SolutionCard v-for="s in businessSolutions" :key="s.slug" :icon="s.icon" :title="s.title" :description="s.shortDesc" :link="'/' + s.slug" />
        </div>
      </div>
    </section>

    <!-- Social Management CTA -->
    <CTABanner 
      title="Seamless Social Management" 
      description="Streamline your social media workflows and enhance engagement with smart automation and real-time analytics." 
      primaryButtonText="Find out how" 
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
