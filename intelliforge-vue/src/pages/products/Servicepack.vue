<template>
  <div>
    <PageHero title="Servicepack" subtitle="An AI-powered Omni-Channel Interaction Analytics Platform." :breadcrumb="[{ name: 'Home', path: '/' }, { name: 'Products' }, { name: 'Servicepack' }]" />

    <section class="py-20"><div class="container-main max-w-5xl">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-3xl font-extrabold mb-6"><span class="gradient-text">Translating Interactions into Strategic Insights</span></h2>
          <p class="text-gray-300 leading-relaxed mb-6">Our AI-powered platform excels in comprehending customer conversations across omni-channel support: calls, chats, emails, and reviews.</p>
          <p class="text-gray-400 leading-relaxed mb-8">Leveraging modern Large Language Models, it extracts valuable business insights from every interaction, helping organizations enhance customer experiences and make data-driven decisions with confidence.</p>
          <ul class="space-y-4 mb-8">
            <li class="flex items-center gap-3 text-sm text-gray-300"><CheckCircle class="w-5 h-5 text-brand-blue" /> Omni-channel support integration</li>
            <li class="flex items-center gap-3 text-sm text-gray-300"><CheckCircle class="w-5 h-5 text-brand-blue" /> Generative AI insights</li>
            <li class="flex items-center gap-3 text-sm text-gray-300"><CheckCircle class="w-5 h-5 text-brand-blue" /> Strategic CX analysis</li>
          </ul>
        </div>

        <div class="glass-card p-8">
          <h3 class="text-xl font-bold text-white mb-6">Subscription Plan</h3>
          <div class="flex items-baseline gap-2 mb-6">
            <span class="text-4xl font-extrabold text-white">$299</span><span class="text-gray-400">/mo</span>
          </div>
          <div class="space-y-6 mb-8">
            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">Quantity (Licenses)</label>
              <div class="flex items-center bg-brand-dark rounded-lg border border-white/10 p-1 w-32">
                <button class="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white" @click="qty = Math.max(1, qty - 1)">-</button>
                <input type="text" v-model="qty" readonly class="w-full text-center bg-transparent text-white font-medium outline-none" />
                <button class="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white" @click="qty++">+</button>
              </div>
            </div>
            <div class="pt-4 border-t border-white/10 flex justify-between items-center font-bold text-lg">
              <span class="text-white">Total:</span><span class="gradient-text">${{ qty * 299 }}</span>
            </div>
          </div>
          <div class="space-y-3">
            <button class="btn-primary w-full justify-center text-center">Pay with Stripe (Demo)</button>
            <button class="btn-secondary w-full justify-center text-center">Pay with PayPal (Demo)</button>
          </div>
          <p class="text-xs text-gray-500 text-center mt-4">*This is a frontend demonstration only.</p>
        </div>
      </div>
    </div></section>

    <CTABanner title="Discover what Servicepack can do for you." primaryButtonText="Contact Us" primaryButtonLink="/contact-us" />
    <AboutSection />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PageHero from '../../components/PageHero.vue'
import CTABanner from '../../components/CTABanner.vue'
import AboutSection from '../../components/AboutSection.vue'
import { CheckCircle } from 'lucide-vue-next'
document.title = 'Servicepack — IntelliForge'
const qty = ref(1)
</script>
