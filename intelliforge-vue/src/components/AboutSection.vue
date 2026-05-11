<template>
  <section class="py-10" id="about-intelliforge">
    <div class="container-main">
      <div class="max-w-2xl mx-auto text-center mb-6">
        <h2 class="text-xl font-black mb-3 text-white">
          About <span class="gradient-text">IntelliForge</span>
        </h2>
        <p class="text-gray-400 text-[13px] leading-relaxed">
          We're your trusted companion on your digital journey. Our approach is people first: building genuine connections, understanding your unique needs, and earning your trust every step of the way.
        </p>
      </div>
      <div class="grid sm:grid-cols-3 gap-3 max-w-lg mx-auto">
        <div class="text-center px-3 py-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
          <Heart class="w-4 h-4 text-brand-blue mx-auto mb-1.5" />
          <span class="text-[10px] font-semibold text-gray-300 block">Client-First</span>
        </div>
        <div class="text-center px-3 py-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
          <Server class="w-4 h-4 text-brand-purple mx-auto mb-1.5" />
          <span class="text-[10px] font-semibold text-gray-300 block">Scalable</span>
        </div>
        <div class="text-center px-3 py-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
          <Headphones class="w-4 h-4 text-brand-cyan mx-auto mb-1.5" />
          <span class="text-[10px] font-semibold text-gray-300 block">Reliable Support</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Heart, Server, Headphones } from 'lucide-vue-next'
</script>
