<template>
  <footer class="relative pt-10 pb-6 overflow-hidden">
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"></div>

    <!-- Pre-footer CTA -->
    <div class="container-main relative z-10 mb-10">
      <div class="bg-white/[0.02] border border-white/[0.06] rounded-xl p-6 md:p-8 text-center">
        <div class="max-w-lg mx-auto">
          <h2 class="text-xl md:text-2xl font-black text-white mb-3 tracking-tight">Ready to build your next <span class="gradient-text">digital product?</span></h2>
          <p class="text-[13px] text-gray-400 mb-5 leading-relaxed">Join industry leaders who trust IntelliForge for secure, scalable software.</p>
          <router-link to="/contact-us" class="btn-primary !px-6 !py-2.5 !text-[13px]">
            <span>Contact IntelliForge</span>
            <ArrowRight class="w-3.5 h-3.5" />
          </router-link>
        </div>
      </div>
    </div>

    <div class="container-main">
      <div class="grid grid-cols-2 lg:grid-cols-12 gap-6 mb-8">
        <!-- Company Info -->
        <div class="col-span-2 lg:col-span-4">
          <router-link to="/" class="inline-flex items-center gap-2 mb-3 group">
            <div class="w-6 h-6 relative flex items-center justify-center">
              <img src="/logo.svg" alt="IntelliForge" class="h-6 relative z-10" />
            </div>
            <span class="text-base font-black tracking-tight text-white leading-none">Intelli<span class="gradient-text">Forge</span></span>
          </router-link>
          <p class="text-gray-500 text-[12px] leading-relaxed max-w-xs mb-4">
            Custom software, generative AI, and cloud architectures for modern enterprises.
          </p>
          <div class="flex items-center gap-2">
            <a href="#" class="w-7 h-7 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-gray-500 hover:text-white hover:border-brand-blue/30 transition-all" aria-label="Facebook">
              <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" class="w-7 h-7 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-gray-500 hover:text-white hover:border-brand-blue/30 transition-all" aria-label="X">
              <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#" class="w-7 h-7 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-gray-500 hover:text-white hover:border-brand-blue/30 transition-all" aria-label="LinkedIn">
              <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>

        <!-- Services -->
        <div class="lg:col-span-2 lg:col-start-6">
          <h4 class="text-[10px] font-bold text-white/60 mb-3 uppercase tracking-widest">Services</h4>
          <ul class="space-y-2">
            <li v-for="link in footerLinks.services.links.slice(0, 4)" :key="link.path">
              <router-link :to="link.path" class="text-[11px] text-gray-500 hover:text-white transition-colors">{{ link.name }}</router-link>
            </li>
            <li>
              <router-link to="/our-services" class="text-[10px] font-semibold text-brand-blue hover:text-brand-cyan transition-colors">View All &rarr;</router-link>
            </li>
          </ul>
        </div>

        <!-- Solutions -->
        <div class="lg:col-span-2">
          <h4 class="text-[10px] font-bold text-white/60 mb-3 uppercase tracking-widest">Solutions</h4>
          <ul class="space-y-2">
            <li v-for="link in footerLinks.solutions.links.slice(0, 5)" :key="link.path">
              <router-link :to="link.path" class="text-[11px] text-gray-500 hover:text-white transition-colors">{{ link.name }}</router-link>
            </li>
          </ul>
        </div>

        <!-- Company -->
        <div class="lg:col-span-2">
          <h4 class="text-[10px] font-bold text-white/60 mb-3 uppercase tracking-widest">Company</h4>
          <ul class="space-y-2">
            <li v-for="link in footerLinks.company.links" :key="link.path">
              <router-link :to="link.path" class="text-[11px] text-gray-500 hover:text-white transition-colors">{{ link.name }}</router-link>
            </li>
            <li><router-link to="/privacy-policy" class="text-[11px] text-gray-500 hover:text-white transition-colors">Privacy</router-link></li>
            <li><router-link to="/terms-conditions" class="text-[11px] text-gray-500 hover:text-white transition-colors">Terms</router-link></li>
          </ul>
        </div>
      </div>

      <div class="h-px bg-white/[0.04] mb-4 w-full"></div>

      <div class="flex flex-col sm:flex-row items-center justify-between gap-2">
        <p class="text-[10px] text-gray-600">&copy; 2024 IntelliForge Inc. All Rights Reserved.</p>
        <div class="flex items-center gap-4">
          <router-link to="/privacy-policy" class="text-[10px] text-gray-600 hover:text-white transition-colors">Privacy</router-link>
          <router-link to="/terms-conditions" class="text-[10px] text-gray-600 hover:text-white transition-colors">Terms</router-link>
          <router-link to="/sitemap" class="text-[10px] text-gray-600 hover:text-white transition-colors">Sitemap</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { footerLinks } from '../data/footerLinks.js'
import { ArrowRight } from 'lucide-vue-next'
</script>
