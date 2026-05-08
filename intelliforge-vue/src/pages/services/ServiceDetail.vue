<template>
  <div v-if="service">
    <PageHero :title="service.h1" :subtitle="service.subtitle" :breadcrumb="[{ name: 'Home', path: '/' }, { name: 'Services', path: '/our-services' }, { name: service.title }]" />

    <section class="py-20"><div class="container-main max-w-4xl">
      <p class="text-gray-300 leading-relaxed text-lg mb-12">{{ service.content }}</p>

      <h2 class="text-2xl font-extrabold mb-8"><span class="gradient-text">Key Features</span></h2>
      <div class="grid sm:grid-cols-2 gap-4 mb-12">
        <div v-for="point in service.keyPoints" :key="point" class="flex items-start gap-3 feature-card !p-5">
          <CheckCircle class="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
          <span class="text-gray-300 text-sm">{{ point }}</span>
        </div>
      </div>
    </div></section>

    <CTABanner :title="service.cta" primaryButtonText="Get Started" primaryButtonLink="/contact-us" />
    <AboutSection />
  </div>
  <div v-else class="min-h-screen flex items-center justify-center">
    <p class="text-gray-400">Service not found.</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import PageHero from '../../components/PageHero.vue'
import CTABanner from '../../components/CTABanner.vue'
import AboutSection from '../../components/AboutSection.vue'
import { CheckCircle } from 'lucide-vue-next'
import { getServiceBySlug } from '../../data/services.js'

const route = useRoute()
const service = computed(() => {
  const s = getServiceBySlug(route.params.slug)
  if (s) document.title = `${s.title} — IntelliForge`
  return s
})
</script>
