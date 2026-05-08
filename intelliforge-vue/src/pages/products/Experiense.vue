<template>
  <div>
    <PageHero title="Experiense" subtitle="Introducing the world's first Virtual Sales Development Representative, a game changer in full-cycle sales automation." :breadcrumb="[{ name: 'Home', path: '/' }, { name: 'Products' }, { name: 'Experiense' }]" />

    <section class="py-20"><div class="container-main max-w-4xl">
      <div class="glass-card p-8 sm:p-12 text-center">
        <h2 class="text-3xl font-extrabold mb-6"><span class="gradient-text">World's Cheapest Human-Like AI Agents</span></h2>
        <p class="text-gray-300 leading-relaxed mb-6 text-lg">Whether it's lead qualification, lead generation, or customer service, our AI agents excel beyond expectations. Powered by advanced generative AI.</p>
        <p class="text-gray-400 leading-relaxed mb-10">No-code setup, easy to implement, and costing just a tenth of a real agent, they deliver unmatched efficiency and performance.</p>
        <a href="https://www.experiense.ai" target="_blank" rel="noopener noreferrer" class="btn-primary text-lg px-8 py-4">Visit www.experiense.ai <ExternalLink class="w-5 h-5" /></a>
      </div>
    </div></section>

    <CTABanner title="Ready to automate your sales?" primaryButtonText="Contact Us" primaryButtonLink="/contact-us" />
    <AboutSection />
  </div>
</template>

<script setup>
import PageHero from '../../components/PageHero.vue'
import CTABanner from '../../components/CTABanner.vue'
import AboutSection from '../../components/AboutSection.vue'
import { ExternalLink } from 'lucide-vue-next'
document.title = 'Experiense — IntelliForge'
</script>
