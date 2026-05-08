<template>
  <div v-if="solution">
    <PageHero :title="solution.h1" :subtitle="solution.subtitle" :breadcrumb="[{ name: 'Home', path: '/' }, { name: 'Solutions', path: '/our-solutions' }, { name: solution.title }]" />

    <section class="py-20"><div class="container-main max-w-4xl">
      <p class="text-gray-300 leading-relaxed text-lg mb-12">{{ solution.content }}</p>

      <div class="grid md:grid-cols-2 gap-12">
        <div>
          <h2 class="text-2xl font-extrabold mb-6"><span class="gradient-text">Key Features</span></h2>
          <ul class="space-y-4">
            <li v-for="point in solution.keyPoints" :key="point" class="flex items-start gap-3">
              <CheckCircle class="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
              <span class="text-gray-300">{{ point }}</span>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="text-2xl font-extrabold mb-6"><span class="gradient-text">Business Benefits</span></h2>
          <ul class="space-y-4">
            <li v-for="benefit in solution.benefits" :key="benefit" class="flex items-start gap-3">
              <TrendingUp class="w-5 h-5 text-brand-purple shrink-0 mt-0.5" />
              <span class="text-gray-300">{{ benefit }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div></section>

    <CTABanner title="Transform your business with IntelliForge." primaryButtonText="Get Started" primaryButtonLink="/contact-us" />
    <AboutSection />
  </div>
  <div v-else class="min-h-screen flex items-center justify-center">
    <p class="text-gray-400">Solution not found.</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import PageHero from '../../components/PageHero.vue'
import CTABanner from '../../components/CTABanner.vue'
import AboutSection from '../../components/AboutSection.vue'
import { CheckCircle, TrendingUp } from 'lucide-vue-next'
import { getSolutionBySlug } from '../../data/solutions.js'

const route = useRoute()
const solution = computed(() => {
  const s = getSolutionBySlug(route.params.slug)
  if (s) document.title = `${s.title} — IntelliForge`
  return s
})
</script>
