<template>
  <div v-if="solution">
    <PageHero :title="solution.h1" :subtitle="solution.subtitle" :breadcrumb="[{ name: 'Home', path: '/' }, { name: 'Solutions', path: '/our-solutions' }, { name: solution.title }]" />

    <section class="py-24">
      <div class="container-main">
        <div class="grid lg:grid-cols-3 gap-12">
          <!-- Main Content -->
          <div class="lg:col-span-2">
            <div class="bento-card !p-8 md:!p-10 mb-8">
              <h2 class="text-2xl font-bold text-white mb-6">About {{ solution.title }}</h2>
              <p class="text-gray-300 leading-relaxed text-[15px]">{{ solution.content }}</p>
            </div>

            <div class="grid md:grid-cols-2 gap-8">
              <!-- Key Features -->
              <div>
                <h2 class="text-xl font-bold text-white mb-5 flex items-center gap-2">
                  <span class="w-1.5 h-6 bg-gradient-to-b from-brand-blue to-brand-purple rounded-full"></span>
                  Key Features
                </h2>
                <div class="space-y-3">
                  <div v-for="point in solution.keyPoints" :key="point" class="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                    <CheckCircle class="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                    <span class="text-gray-300 text-[13px]">{{ cleanText(point) }}</span>
                  </div>
                </div>
              </div>

              <!-- Benefits -->
              <div>
                <h2 class="text-xl font-bold text-white mb-5 flex items-center gap-2">
                  <span class="w-1.5 h-6 bg-gradient-to-b from-brand-purple to-brand-cyan rounded-full"></span>
                  Business Benefits
                </h2>
                <div class="space-y-3">
                  <div v-for="benefit in solution.benefits" :key="benefit" class="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                    <TrendingUp class="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
                    <span class="text-gray-300 text-[13px]">{{ benefit }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="lg:col-span-1">
            <div class="bento-card !p-7 sticky top-28">
              <div class="px-3 py-1.5 bg-brand-purple/[0.08] border border-brand-purple/20 rounded-full text-[10px] font-bold text-brand-purple uppercase tracking-widest w-fit mb-5">
                SaaS Product
              </div>
              <h3 class="text-lg font-bold text-white mb-3">{{ solution.title }}</h3>
              <p class="text-[13px] text-gray-400 leading-relaxed mb-6">{{ solution.shortDesc }}</p>

              <router-link to="/contact-us" class="btn-primary w-full justify-center mb-4">
                <span>Request Demo</span>
                <ArrowRight class="w-4 h-4" />
              </router-link>
              <router-link to="/our-solutions" class="btn-secondary w-full justify-center text-[13px]">
                <span>View All Solutions</span>
              </router-link>

              <div class="mt-6 pt-6 border-t border-white/[0.06] space-y-3">
                <div class="flex items-center gap-3 text-[12px]">
                  <Cloud class="w-3.5 h-3.5 text-brand-cyan" />
                  <span class="text-gray-400">Cloud-native architecture</span>
                </div>
                <div class="flex items-center gap-3 text-[12px]">
                  <Zap class="w-3.5 h-3.5 text-brand-purple" />
                  <span class="text-gray-400">AI-powered insights</span>
                </div>
                <div class="flex items-center gap-3 text-[12px]">
                  <Lock class="w-3.5 h-3.5 text-brand-blue" />
                  <span class="text-gray-400">Enterprise-grade security</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <CTABanner title="Transform your business with IntelliForge." primaryButtonText="Get Started" primaryButtonLink="/contact-us" />
    <AboutSection />
  </div>
  <div v-else class="min-h-screen flex items-center justify-center">
    <p class="text-gray-400">Solution not found.</p>
  </div>
</template>

<script setup>
import { computed, watchEffect } from 'vue'
import PageHero from '../../components/PageHero.vue'
import CTABanner from '../../components/CTABanner.vue'
import AboutSection from '../../components/AboutSection.vue'
import { CheckCircle, TrendingUp, ArrowRight, Cloud, Zap, Lock } from 'lucide-vue-next'
import { getSolutionBySlug } from '../../data/solutions.js'

const props = defineProps({
  slug: { type: String, required: true }
})

const solution = computed(() => getSolutionBySlug(props.slug))

function cleanText(text) {
  if (text.length > 80) return text.substring(0, 77) + '...'
  return text
}

watchEffect(() => {
  if (solution.value) document.title = `${solution.value.title} — IntelliForge`
})
</script>
