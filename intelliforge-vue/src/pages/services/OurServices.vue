<template>
  <div>
    <PageHero title="Our Services" subtitle="Explore IntelliForge's full range of technology services designed to help businesses build, scale, and transform." :breadcrumb="[{ name: 'Home', path: '/' }, { name: 'Our Services' }]" />
    <section class="py-20"><div class="container-main">
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ServiceCard v-for="s in services" :key="s.slug" :icon="s.icon" :title="s.title" :description="s.shortDesc" :link="'/' + s.slug" />
      </div>
    </div></section>
    <CTABanner title="Transform your business with IntelliForge" description="Get in touch to discuss your next project." primaryButtonText="Contact Us" primaryButtonLink="/contact-us" />
    <AboutSection />
  </div>
</template>

<script setup>
import PageHero from '../../components/PageHero.vue'
import ServiceCard from '../../components/ServiceCard.vue'
import CTABanner from '../../components/CTABanner.vue'
import AboutSection from '../../components/AboutSection.vue'
import { services } from '../../data/services.js'
document.title = 'Our Services — IntelliForge'
</script>
