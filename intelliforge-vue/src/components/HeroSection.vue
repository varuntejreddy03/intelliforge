<template>
  <section class="relative min-h-[92vh] flex items-center pt-16 pb-20 overflow-hidden">
    <!-- Section glow -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-brand-blue/[0.06] via-brand-purple/[0.04] to-transparent rounded-full blur-3xl pointer-events-none"></div>

    <div class="container-main relative z-10 w-full">
      <div class="flex flex-col lg:flex-row items-center gap-16 xl:gap-20">

        <!-- Left Content -->
        <div class="flex-1 text-center lg:text-left w-full max-w-2xl lg:max-w-none">
          <!-- Badges row -->
          <div class="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-8">
            <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-blue/20 bg-brand-blue/[0.06] text-[11px] font-bold uppercase tracking-wider text-brand-cyan">
              <span class="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse"></span> AI-Powered
            </span>
            <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-purple/20 bg-brand-purple/[0.06] text-[11px] font-bold uppercase tracking-wider text-brand-purple">
              Cloud Native
            </span>
            <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-[11px] font-bold uppercase tracking-wider text-gray-300">
              Enterprise Ready
            </span>
          </div>

          <h1 class="font-black leading-[1.05] mb-7 tracking-tight text-white">
            Transform Your<br class="hidden sm:block" />
            <span class="gradient-text">Enterprise</span> With<br class="hidden sm:block" />
            Next-Gen AI
          </h1>

          <p class="text-lg sm:text-xl text-gray-400 mb-10 leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
            Deploy robust cloud architectures, intelligent automation, and custom software designed to accelerate growth and dominate your market.
          </p>

          <div class="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-14">
            <router-link to="/our-services" class="btn-primary w-full sm:w-auto">
              <span>Explore Capabilities</span>
              <ArrowRight class="w-4 h-4" />
            </router-link>
            <router-link to="/contact-us" class="btn-secondary w-full sm:w-auto">
              <span>Book Consultation</span>
            </router-link>
          </div>

          <!-- Trust Indicators -->
          <div class="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4 pt-7 border-t border-white/[0.06]">
            <div class="flex items-center gap-2.5 text-[13px] font-semibold text-gray-400">
              <div class="w-6 h-6 rounded-full bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center"><Check class="w-3.5 h-3.5 text-brand-blue" /></div>
              Web Development
            </div>
            <div class="flex items-center gap-2.5 text-[13px] font-semibold text-gray-400">
              <div class="w-6 h-6 rounded-full bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center"><Check class="w-3.5 h-3.5 text-brand-purple" /></div>
              Cloud & DevOps
            </div>
            <div class="flex items-center gap-2.5 text-[13px] font-semibold text-gray-400">
              <div class="w-6 h-6 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center"><Check class="w-3.5 h-3.5 text-brand-cyan" /></div>
              AI Engineering
            </div>
          </div>
        </div>

        <!-- Right Visual -->
        <div class="flex-1 w-full max-w-[520px] relative hidden lg:block">
          <div class="relative w-full aspect-[4/3.5] flex items-center justify-center">
            <!-- Main Dashboard Card -->
            <div class="w-full h-full bento-card !p-6 shadow-[0_20px_80px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_80px_rgba(0,180,255,0.1)] transition-shadow duration-700">

              <!-- Dashboard Header -->
              <div class="flex items-center justify-between mb-5 pb-4 border-b border-white/[0.06]">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center shadow-lg shadow-brand-purple/20">
                    <Cpu class="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div class="text-white font-bold text-sm tracking-wide">IntelliForge OS</div>
                    <div class="text-brand-cyan text-[11px] font-mono flex items-center gap-1.5 mt-0.5">
                      <span class="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse"></span> Systems Optimal
                    </div>
                  </div>
                </div>
                <div class="flex gap-1.5">
                  <div class="w-2.5 h-2.5 rounded-full bg-white/10"></div>
                  <div class="w-2.5 h-2.5 rounded-full bg-white/10"></div>
                  <div class="w-2.5 h-2.5 rounded-full bg-brand-cyan/40"></div>
                </div>
              </div>

              <!-- Graph Area -->
              <div class="relative h-36 rounded-xl border border-white/[0.06] bg-[#030712] mb-5 overflow-hidden flex items-center justify-center">
                <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjAuNSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvc3ZnPg==')]"></div>
                <div class="relative w-24 h-24">
                  <div class="absolute inset-0 border-[1.5px] border-brand-blue/20 rounded-full animate-spin-slow"></div>
                  <div class="absolute inset-3 border-[1.5px] border-dashed border-brand-purple/25 rounded-full animate-spin-reverse-slow"></div>
                  <div class="absolute inset-0 flex items-center justify-center">
                    <div class="w-10 h-10 bg-gradient-to-br from-brand-blue to-brand-purple rounded-full blur-lg animate-pulse opacity-60"></div>
                    <div class="absolute w-8 h-8 bg-[#0a0e1a] rounded-full flex items-center justify-center border border-white/10">
                      <Brain class="w-4 h-4 text-brand-cyan" />
                    </div>
                  </div>
                </div>
              </div>

              <!-- Metrics -->
              <div class="grid grid-cols-2 gap-3">
                <div class="bg-white/[0.02] rounded-xl p-4 border border-white/[0.04]">
                  <div class="text-gray-500 text-[10px] font-bold uppercase mb-1.5 flex items-center gap-1.5">
                    <Activity class="w-3 h-3 text-brand-cyan" /> Network Load
                  </div>
                  <div class="text-white font-mono text-lg font-bold mb-2">24.8 <span class="text-[10px] text-gray-600">TB/s</span></div>
                  <div class="w-full bg-white/[0.04] h-1.5 rounded-full overflow-hidden">
                    <div class="bg-gradient-to-r from-brand-cyan to-brand-blue w-[68%] h-full rounded-full"></div>
                  </div>
                </div>
                <div class="bg-white/[0.02] rounded-xl p-4 border border-white/[0.04]">
                  <div class="text-gray-500 text-[10px] font-bold uppercase mb-1.5 flex items-center gap-1.5">
                    <Database class="w-3 h-3 text-brand-purple" /> Active Nodes
                  </div>
                  <div class="text-white font-mono text-lg font-bold mb-2">8,402 <span class="text-[10px] text-gray-600">UP</span></div>
                  <div class="flex items-end gap-1 h-3">
                    <div class="w-full bg-brand-purple/20 h-[30%] rounded-sm"></div>
                    <div class="w-full bg-brand-purple/35 h-[55%] rounded-sm"></div>
                    <div class="w-full bg-brand-purple/55 h-[75%] rounded-sm"></div>
                    <div class="w-full bg-brand-purple/80 h-[90%] rounded-sm"></div>
                    <div class="w-full bg-brand-purple h-full rounded-sm"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Floating Cards -->
            <div class="absolute -right-4 top-8 bg-[#0a0e1a]/95 backdrop-blur-xl border border-brand-blue/15 p-3 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] animate-float">
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-lg bg-brand-blue/10 flex items-center justify-center border border-brand-blue/20">
                  <Shield class="w-4 h-4 text-brand-blue" />
                </div>
                <div>
                  <div class="text-white text-[12px] font-bold">Zero Trust</div>
                  <div class="text-brand-cyan text-[10px] font-bold uppercase mt-0.5">Secured</div>
                </div>
              </div>
            </div>

            <div class="absolute -left-4 bottom-14 bg-[#0a0e1a]/95 backdrop-blur-xl border border-brand-purple/15 p-3 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] animate-float" style="animation-delay: 2s;">
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-lg bg-brand-purple/10 flex items-center justify-center border border-brand-purple/20">
                  <Zap class="w-4 h-4 text-brand-purple" />
                </div>
                <div>
                  <div class="text-white text-[12px] font-bold">Auto Scale</div>
                  <div class="text-brand-purple text-[10px] font-bold uppercase mt-0.5">Active</div>
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
import { ArrowRight, Check, Brain, Cpu, Shield, Zap, Activity, Database } from 'lucide-vue-next'
</script>
