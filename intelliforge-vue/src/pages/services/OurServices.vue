<template>
  <div>
    <PageHero title="Our Services" subtitle="Explore IntelliForge's full range of technology services designed to help businesses build, scale, and transform." :breadcrumb="[{ name: 'Home', path: '/' }, { name: 'Our Services' }]" />

    <section class="py-24">
      <div class="container-main">
        <!-- Section intro -->
        <div class="text-center mb-14 max-w-2xl mx-auto reveal">
          <SectionBadge text="Enterprise Capabilities" class="mx-auto" />
          <h2 class="font-black text-white mb-4 tracking-tight">Full-Stack Technology <span class="gradient-text">Services</span></h2>
          <p class="text-[15px] text-gray-400 leading-relaxed">From strategy to deployment, we provide end-to-end technology services that drive real business outcomes.</p>
        </div>

        <!-- Services Grid -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div v-for="(s, i) in services" :key="s.slug" class="reveal" :class="'reveal-delay-' + ((i % 4) + 1)">
            <ServiceCard :icon="s.icon" :title="s.title" :description="s.shortDesc" :link="'/' + s.slug" :index="i" />
          </div>
        </div>
      </div>
    </section>

    <CTABanner title="Ready to transform your business?" description="Get in touch to discuss your next project with our expert team." primaryButtonText="Contact Us" primaryButtonLink="/contact-us" />
    <AboutSection />
  </div>
</template>

<script setup>
import PageHero from '../../components/PageHero.vue'
import ServiceCard from '../../components/ServiceCard.vue'
import SectionBadge from '../../components/SectionBadge.vue'
import CTABanner from '../../components/CTABanner.vue'
import AboutSection from '../../components/AboutSection.vue'
import { services } from '../../data/services.js'
document.title = 'Our Services — IntelliForge'
</script>
