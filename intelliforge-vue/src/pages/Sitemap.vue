<template>
  <div>
    <PageHero title="Sitemap" subtitle="Navigate through the IntelliForge website." :breadcrumb="[{ name: 'Home', path: '/' }, { name: 'Sitemap' }]" />

    <section class="py-20"><div class="container-main">
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <div class="glass-card p-8">
          <h3 class="text-xl font-bold text-white mb-6 pb-4 border-b border-white/10">Main Pages</h3>
          <ul class="space-y-3">
            <li><router-link to="/" class="text-gray-300 hover:text-brand-blue transition-colors">Home</router-link></li>
            <li><router-link to="/about-us" class="text-gray-300 hover:text-brand-blue transition-colors">About Us</router-link></li>
            <li><router-link to="/alliances" class="text-gray-300 hover:text-brand-blue transition-colors">Alliances</router-link></li>
            <li><router-link to="/contact-us" class="text-gray-300 hover:text-brand-blue transition-colors">Contact Us</router-link></li>
          </ul>
        </div>

        <div class="glass-card p-8">
          <h3 class="text-xl font-bold text-white mb-6 pb-4 border-b border-white/10">Services</h3>
          <ul class="space-y-3">
            <li><router-link to="/our-services" class="text-white font-medium hover:text-brand-blue transition-colors">All Services</router-link></li>
            <li v-for="s in services" :key="s.slug"><router-link :to="'/' + s.slug" class="text-gray-300 hover:text-brand-blue transition-colors">{{ s.title }}</router-link></li>
          </ul>
        </div>

        <div class="glass-card p-8">
          <h3 class="text-xl font-bold text-white mb-6 pb-4 border-b border-white/10">Solutions</h3>
          <ul class="space-y-3">
            <li><router-link to="/our-solutions" class="text-white font-medium hover:text-brand-blue transition-colors">All Solutions</router-link></li>
            <li v-for="s in solutions" :key="s.slug"><router-link :to="'/' + s.slug" class="text-gray-300 hover:text-brand-blue transition-colors">{{ s.title }}</router-link></li>
          </ul>
        </div>

        <div class="glass-card p-8">
          <h3 class="text-xl font-bold text-white mb-6 pb-4 border-b border-white/10">Products</h3>
          <ul class="space-y-3">
            <li v-for="p in products" :key="p.slug"><router-link :to="'/' + p.slug" class="text-gray-300 hover:text-brand-blue transition-colors">{{ p.title }}</router-link></li>
          </ul>
        </div>

        <div class="glass-card p-8">
          <h3 class="text-xl font-bold text-white mb-6 pb-4 border-b border-white/10">Careers</h3>
          <ul class="space-y-3">
            <li><router-link to="/jobs" class="text-gray-300 hover:text-brand-blue transition-colors">Jobs</router-link></li>
            <li><router-link to="/employee-referral-program" class="text-gray-300 hover:text-brand-blue transition-colors">Employee Referral Program</router-link></li>
          </ul>
        </div>

        <div class="glass-card p-8">
          <h3 class="text-xl font-bold text-white mb-6 pb-4 border-b border-white/10">Legal</h3>
          <ul class="space-y-3">
            <li><router-link to="/privacy-policy" class="text-gray-300 hover:text-brand-blue transition-colors">Privacy Policy</router-link></li>
            <li><router-link to="/terms-conditions" class="text-gray-300 hover:text-brand-blue transition-colors">Terms & Conditions</router-link></li>
          </ul>
        </div>

      </div>
    </div></section>
  </div>
</template>

<script setup>
import PageHero from '../components/PageHero.vue'
import { services } from '../data/services.js'
import { solutions } from '../data/solutions.js'
import { products } from '../data/products.js'
document.title = 'Sitemap — IntelliForge'
</script>
