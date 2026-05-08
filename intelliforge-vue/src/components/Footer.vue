<template>
  <footer class="bg-[#050510] pt-0 pb-8 relative overflow-hidden">
    <!-- Top Gradient Border -->
    <div class="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent"></div>

    <!-- Pre-footer CTA -->
    <div class="relative border-b border-white/5">
      <div class="absolute inset-0 bg-brand-section opacity-50"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent to-[#050510]"></div>
      <div class="container-main py-16 text-center relative z-10">
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white mb-6">Ready to build your next digital product?</h2>
        <router-link to="/contact-us" class="btn-primary">
          <span>Contact IntelliForge</span>
          <ArrowRight class="w-4 h-4" />
        </router-link>
      </div>
    </div>

    <div class="container-main pt-16">
      <!-- Footer columns -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
        
        <!-- Company Info -->
        <div class="lg:col-span-2">
          <router-link to="/" class="inline-flex items-center gap-3 mb-6 group">
             <div class="w-8 h-8 relative flex items-center justify-center">
                <div class="absolute inset-0 bg-brand-blue opacity-20 blur-md rounded-full group-hover:opacity-40 transition-opacity"></div>
                <img src="/logo.svg" alt="IntelliForge" class="h-8 relative z-10" />
             </div>
             <span class="text-xl font-extrabold tracking-tight text-white leading-none">Intelli<span class="gradient-text">Forge</span></span>
          </router-link>
          <p class="text-gray-400 leading-relaxed text-sm max-w-sm mb-8">
            Empowering modern businesses with custom software, AI solutions, and digital transformation services. Build for the future with IntelliForge.
          </p>
          <div class="flex items-center gap-3">
            <a href="#" class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-blue hover:border-brand-blue transition-all duration-300" aria-label="Facebook">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-blue hover:border-brand-blue transition-all duration-300" aria-label="X / Twitter">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-blue hover:border-brand-blue transition-all duration-300" aria-label="LinkedIn">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>

        <!-- Dynamic Columns from Data (Skipping "What's New" and combining some for cleaner 5-col layout) -->
        <div>
          <h4 class="text-sm font-bold text-white mb-6 uppercase tracking-wider">{{ footerLinks.services.title }}</h4>
          <ul class="space-y-3">
            <li v-for="link in footerLinks.services.links.slice(0, 5)" :key="link.path">
              <router-link :to="link.path" class="text-sm text-gray-400 hover:text-white transition-colors duration-200 block w-max hover:translate-x-1 transform">{{ link.name }}</router-link>
            </li>
            <li>
               <router-link to="/our-services" class="text-sm font-semibold text-brand-blue hover:text-brand-cyan transition-colors duration-200 mt-2 block">View All Services →</router-link>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-sm font-bold text-white mb-6 uppercase tracking-wider">{{ footerLinks.solutions.title }}</h4>
          <ul class="space-y-3">
            <li v-for="link in footerLinks.solutions.links.slice(0, 6)" :key="link.path">
              <router-link :to="link.path" class="text-sm text-gray-400 hover:text-white transition-colors duration-200 block w-max hover:translate-x-1 transform">{{ link.name }}</router-link>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-sm font-bold text-white mb-6 uppercase tracking-wider">Company</h4>
          <ul class="space-y-3">
            <li v-for="link in footerLinks.company.links" :key="link.path">
              <router-link :to="link.path" class="text-sm text-gray-400 hover:text-white transition-colors duration-200 block w-max hover:translate-x-1 transform">{{ link.name }}</router-link>
            </li>
            <li><router-link to="/privacy-policy" class="text-sm text-gray-400 hover:text-white transition-colors duration-200 block w-max hover:translate-x-1 transform">Privacy Policy</router-link></li>
            <li><router-link to="/terms-conditions" class="text-sm text-gray-400 hover:text-white transition-colors duration-200 block w-max hover:translate-x-1 transform">Terms of Use</router-link></li>
          </ul>
        </div>
      </div>

      <!-- Divider -->
      <div class="h-px bg-white/5 mb-8 w-full"></div>

      <!-- Bottom bar -->
      <div class="flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-sm text-gray-500">
          Copyright &copy; 2024 <span class="text-white font-medium">IntelliForge Inc</span>. All Rights Reserved.
        </p>
        <div class="flex items-center gap-6">
          <router-link to="/privacy-policy" class="text-sm text-gray-500 hover:text-white transition-colors">Privacy</router-link>
          <router-link to="/terms-conditions" class="text-sm text-gray-500 hover:text-white transition-colors">Terms</router-link>
          <router-link to="/sitemap" class="text-sm text-gray-500 hover:text-white transition-colors">Sitemap</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { footerLinks } from '../data/footerLinks.js'
import { ArrowRight } from 'lucide-vue-next'
</script>
