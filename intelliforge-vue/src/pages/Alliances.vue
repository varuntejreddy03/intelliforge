<template>
  <div>
    <PageHero title="Alliances" subtitle="IntelliForge partners with industry leaders to drive innovation and deliver advanced solutions." :breadcrumb="[{ name: 'Home', path: '/' }, { name: 'Alliances' }]" />
    <section class="py-20"><div class="container-main">
      <p class="text-gray-300 max-w-3xl mx-auto text-center mb-16 leading-relaxed">IntelliForge partners with industry leaders to drive innovation and deliver advanced solutions, leveraging diverse expertise for the benefit of our clients.</p>
      <!-- Technology Partners -->
      <h2 class="text-2xl font-extrabold text-center mb-8"><span class="gradient-text">Technology Partners</span></h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
        <div v-for="p in techPartners" :key="p" class="glass-card p-6 flex items-center justify-center h-24">
          <span class="text-sm font-medium text-gray-400">{{ p }}</span>
        </div>
      </div>
      <!-- For Business -->
      <h2 class="text-2xl font-extrabold text-center mb-8"><span class="gradient-text">For Business</span></h2>
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <SolutionCard v-for="s in businessSolutions" :key="s.slug" :icon="s.icon" :title="s.title" :description="s.shortDesc" :link="'/' + s.slug" />
      </div>
    </div></section>
    <CTABanner title="Partner with IntelliForge" description="Let's build the future together." primaryButtonText="Contact Us" primaryButtonLink="/contact-us" />
  </div>
</template>

<script setup>
import PageHero from '../components/PageHero.vue'
import SolutionCard from '../components/SolutionCard.vue'
import CTABanner from '../components/CTABanner.vue'
import { solutions } from '../data/solutions.js'
document.title = 'Alliances — IntelliForge'
const techPartners = ['AWS', 'Microsoft Azure', 'Google Cloud', 'Salesforce', 'Oracle', 'SAP']
const businessSolutions = solutions.filter(s => ['crm-pro','hr-master','project-plus','invento-sync'].includes(s.slug))
</script>
