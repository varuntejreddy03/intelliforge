<template>
  <div>
    <PageHero title="Our Solutions" subtitle="Comprehensive Business Solutions tailored for your enterprise." :breadcrumb="[{ name: 'Home', path: '/' }, { name: 'Our Solutions' }]" />
    <section class="py-20"><div class="container-main">
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <SolutionCard v-for="s in solutions" :key="s.slug" :icon="s.icon" :title="s.title" :description="s.shortDesc" :link="'/' + s.slug" />
      </div>
    </div></section>
    <CTABanner title="Reach out to us now and let's start transforming your business together." primaryButtonText="Contact Us" primaryButtonLink="/contact-us" />
    <AboutSection />
  </div>
</template>

<script setup>
import PageHero from '../../components/PageHero.vue'
import SolutionCard from '../../components/SolutionCard.vue'
import CTABanner from '../../components/CTABanner.vue'
import AboutSection from '../../components/AboutSection.vue'
import { solutions } from '../../data/solutions.js'
document.title = 'Our Solutions — IntelliForge'
</script>
