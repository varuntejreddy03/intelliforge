<template>
  <section class="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
    <!-- Grid Pattern -->
    <div class="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>

    <div class="container-main relative z-10 w-full">
      <div class="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
        
        <!-- Left Content -->
        <div class="flex-1 text-center lg:text-left pt-10 lg:pt-0 max-w-3xl mx-auto lg:mx-0">
          <SectionBadge text="AI-Powered Technology Services" class="mx-auto lg:mx-0" />
          
          <h1 class="text-[40px] sm:text-[52px] lg:text-[72px] font-black leading-[1.1] mb-6 tracking-tight">
            Empower Your Vision with <br class="hidden xl:block" />
            <span class="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-brand-blue via-brand-purple to-brand-blue animate-gradient bg-[length:200%_auto]">Cutting-Edge</span> Tech
          </h1>
          
          <p class="text-lg sm:text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
            Unlock your business potential with custom software solutions, intelligent automation, and scalable architectures designed for the future.
          </p>
          
          <div class="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-12">
            <router-link to="/our-services" class="btn-primary w-full sm:w-auto text-lg !py-4 !px-8">
              <span>Explore Services</span>
              <ArrowRight class="w-5 h-5" />
            </router-link>
            <router-link to="/contact-us" class="btn-secondary w-full sm:w-auto text-lg !py-4 !px-8">
              <span>Talk to Us</span>
            </router-link>
          </div>

          <!-- Trust Indicators -->
          <div class="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4 pt-8 border-t border-white/10">
            <div class="flex items-center gap-2 text-sm font-semibold text-gray-400">
              <CheckCircle class="w-4 h-4 text-brand-blue" /> Web Development
            </div>
            <div class="flex items-center gap-2 text-sm font-semibold text-gray-400">
              <CheckCircle class="w-4 h-4 text-brand-purple" /> AI Solutions
            </div>
            <div class="flex items-center gap-2 text-sm font-semibold text-gray-400">
              <CheckCircle class="w-4 h-4 text-brand-cyan" /> Product Engineering
            </div>
            <div class="flex items-center gap-2 text-sm font-semibold text-gray-400">
              <CheckCircle class="w-4 h-4 text-brand-blue" /> Cloud & DevOps
            </div>
          </div>
        </div>

        <!-- Right Visual (Premium Glass Card Dashboard) -->
        <div class="flex-1 w-full max-w-[600px] relative hidden md:block mx-auto lg:mx-0">
          <!-- Background Glows behind card -->
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-brand-blue/20 rounded-full blur-[80px] animate-pulse-slow"></div>
          
          <div class="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square flex items-center justify-center perspective-1000">
            
            <!-- Main Glass Board -->
            <div class="w-full max-w-[500px] bg-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl relative overflow-hidden transform rotate-y-[-10deg] rotate-x-[5deg] transition-transform duration-700 hover:rotate-y-0 hover:rotate-x-0">
               <!-- Header -->
               <div class="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                 <div class="flex items-center gap-3">
                   <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center shadow-lg">
                      <Brain class="w-5 h-5 text-white" />
                   </div>
                   <div>
                     <div class="text-white font-bold text-sm">IntelliForge AI Core</div>
                     <div class="text-green-400 text-xs font-mono flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span> Systems Online</div>
                   </div>
                 </div>
               </div>

               <!-- Graph/Visual Area -->
               <div class="relative h-48 rounded-xl border border-white/5 bg-black/20 mb-6 overflow-hidden flex items-center justify-center">
                  <!-- Animated Tech Grid lines -->
                  <div class="absolute inset-0" style="background-image: linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px); background-size: 20px 20px;"></div>
                  
                  <div class="relative w-32 h-32">
                     <div class="absolute inset-0 border-2 border-brand-blue/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
                     <div class="absolute inset-2 border-2 border-dashed border-brand-purple/40 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                     <div class="absolute inset-0 flex items-center justify-center">
                        <div class="w-12 h-12 bg-gradient-to-br from-brand-blue to-brand-purple rounded-full blur-md animate-pulse"></div>
                        <Cpu class="w-8 h-8 text-white absolute" />
                     </div>
                  </div>
               </div>

               <!-- Modules Grid -->
               <div class="grid grid-cols-2 gap-4">
                 <div class="bg-white/5 rounded-xl p-4 border border-white/5 hover:bg-white/10 transition-colors">
                   <div class="text-brand-cyan text-xs font-bold uppercase mb-1">Process Load</div>
                   <div class="text-white font-mono text-xl">98.4%</div>
                   <div class="w-full bg-white/10 h-1 mt-2 rounded-full overflow-hidden">
                     <div class="bg-brand-cyan w-[98%] h-full"></div>
                   </div>
                 </div>
                 <div class="bg-white/5 rounded-xl p-4 border border-white/5 hover:bg-white/10 transition-colors">
                   <div class="text-brand-purple text-xs font-bold uppercase mb-1">Active Nodes</div>
                   <div class="text-white font-mono text-xl">1,204</div>
                   <div class="flex items-end gap-1 h-2 mt-2">
                     <div class="w-full bg-brand-purple/40 h-full rounded-sm"></div>
                     <div class="w-full bg-brand-purple/60 h-[80%] rounded-sm"></div>
                     <div class="w-full bg-brand-purple h-[60%] rounded-sm"></div>
                     <div class="w-full bg-brand-purple/80 h-full rounded-sm"></div>
                   </div>
                 </div>
               </div>

            </div>

            <!-- Floating Mini Card 1 -->
            <div class="absolute -right-6 top-10 bg-[#0A0A1F] border border-brand-blue/30 p-3 rounded-xl shadow-2xl animate-float" style="animation-delay: 0s;">
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-full bg-brand-blue/20 flex items-center justify-center"><Shield class="w-4 h-4 text-brand-blue" /></div>
                <div>
                  <div class="text-white text-xs font-bold">Secure Infra</div>
                  <div class="text-gray-400 text-[10px]">Protected</div>
                </div>
              </div>
            </div>

            <!-- Floating Mini Card 2 -->
            <div class="absolute -left-8 bottom-20 bg-[#0A0A1F] border border-brand-purple/30 p-3 rounded-xl shadow-2xl animate-float" style="animation-delay: 1.5s;">
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-full bg-brand-purple/20 flex items-center justify-center"><Zap class="w-4 h-4 text-brand-purple" /></div>
                <div>
                  <div class="text-white text-xs font-bold">Auto Scale</div>
                  <div class="text-gray-400 text-[10px]">Active</div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ArrowRight, CheckCircle, Brain, Cpu, Shield, Zap } from 'lucide-vue-next'
import SectionBadge from './SectionBadge.vue'
</script>

<style scoped>
.perspective-1000 {
  perspective: 1000px;
}
.animate-gradient {
  animation: bg-pan 4s linear infinite;
}
@keyframes bg-pan {
  to { background-position: 200% center; }
}
</style>
