<template>
  <div>
    <PageHero title="About IntelliForge" subtitle="Empowering businesses with technology, innovation, and trust." :breadcrumb="[{ name: 'Home', path: '/' }, { name: 'About Us' }]" />

    <!-- Our Story -->
    <section class="py-20"><div class="container-main max-w-4xl">
      <h2 class="text-2xl font-extrabold mb-4"><span class="gradient-text">Our Story</span></h2>
      <p class="text-gray-300 leading-relaxed">At IntelliForge, we believe technology should empower people, businesses, and communities. Our journey began with a simple mission — to help organizations transform their ideas into reliable, scalable, and impactful digital solutions.</p>
    </div></section>

    <div class="section-divider"></div>

    <!-- Our Mission -->
    <section class="py-20"><div class="container-main max-w-4xl">
      <h2 class="text-2xl font-extrabold mb-4"><span class="gradient-text">Our Mission</span></h2>
      <p class="text-gray-300 leading-relaxed">Our mission is to become a trusted technology partner for businesses by delivering innovative software, intelligent automation, and future-ready digital solutions.</p>
    </div></section>

    <div class="section-divider"></div>

    <!-- Our Values -->
    <section class="py-20"><div class="container-main">
      <h2 class="text-2xl font-extrabold text-center mb-12"><span class="gradient-text">Our Values</span></h2>
      <div class="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
        <div v-for="v in values" :key="v.title" class="feature-card text-center">
          <div class="icon-gradient mx-auto mb-4"><component :is="v.icon" class="w-6 h-6 text-brand-blue" /></div>
          <h3 class="font-bold text-white">{{ v.title }}</h3>
        </div>
      </div>
    </div></section>

    <div class="section-divider"></div>

    <!-- Why IntelliForge -->
    <section class="py-20"><div class="container-main max-w-4xl">
      <h2 class="text-2xl font-extrabold mb-4"><span class="gradient-text">Why IntelliForge</span></h2>
      <p class="text-gray-300 leading-relaxed">We combine strategy, design, engineering, and emerging technologies to help businesses solve real problems. From startups to growing enterprises, IntelliForge acts as a trusted companion in the digital transformation journey.</p>
    </div></section>

    <AboutSection />
  </div>
</template>

<script setup>
import PageHero from '../components/PageHero.vue'
import AboutSection from '../components/AboutSection.vue'
import { Lightbulb, Shield, Users, Star, TrendingUp } from 'lucide-vue-next'
document.title = 'About Us — IntelliForge'
const values = [
  { title: 'Innovation', icon: Lightbulb },
  { title: 'Integrity', icon: Shield },
  { title: 'Collaboration', icon: Users },
  { title: 'Customer Success', icon: Star },
  { title: 'Continuous Improvement', icon: TrendingUp },
]
</script>
