<template>
  <div v-if="service">
    <PageHero
      :title="service.h1"
      :subtitle="service.subtitle"
      :breadcrumb="[{ name: 'Home', path: '/' }, { name: 'Services', path: '/our-services' }, { name: service.title }]"
      :panelItems="service.keyPoints.slice(0, 5)"
    />

    <!-- Content Section -->
    <section class="py-10">
      <div class="container-main">
        <div class="grid lg:grid-cols-3 gap-6">
          <!-- Main Content -->
          <div class="lg:col-span-2 space-y-8">
            <!-- Overview -->
            <div class="bento-card !p-6 !rounded-xl">
              <h2 class="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <span class="w-1 h-4 bg-gradient-to-b from-brand-blue to-brand-purple rounded-full"></span>
                Overview
              </h2>
              <p class="text-gray-300 leading-[1.75] text-[13px]">{{ service.content }}</p>
            </div>

            <!-- What We Deliver -->
            <div>
              <h2 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span class="w-1 h-4 bg-gradient-to-b from-brand-purple to-brand-cyan rounded-full"></span>
                What We Deliver
              </h2>
              <div class="grid sm:grid-cols-2 gap-2.5">
                <div v-for="(point, i) in service.keyPoints" :key="i" class="flex items-center gap-2.5 px-4 py-3 rounded-lg bg-white/[0.02] border border-white/[0.05] hover:border-brand-blue/20 hover:bg-white/[0.04] transition-all group">
                  <div class="w-6 h-6 rounded-md bg-brand-blue/10 border border-brand-blue/15 flex items-center justify-center shrink-0 group-hover:bg-brand-blue/20 transition-colors">
                    <CheckCircle class="w-3 h-3 text-brand-blue" />
                  </div>
                  <span class="text-gray-300 text-[12px] font-medium">{{ point }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="lg:col-span-1">
            <div class="bg-white/[0.02] border border-white/[0.06] rounded-xl p-5 sticky top-20">
              <div class="icon-gradient mb-3 !w-9 !h-9 !rounded-lg">
                <component :is="service.icon" class="w-4 h-4 text-brand-cyan" />
              </div>
              <h3 class="text-sm font-bold text-white mb-1.5">{{ service.title }}</h3>
              <p class="text-[11px] text-gray-400 leading-relaxed mb-4">{{ service.shortDesc }}</p>

              <router-link to="/contact-us" class="btn-primary w-full justify-center !py-2.5 !px-4 !text-[12px] mb-2.5">
                <span>Get Started</span>
                <ArrowRight class="w-3 h-3" />
              </router-link>
              <router-link to="/our-services" class="btn-secondary w-full justify-center !py-2 !px-4 !text-[11px]">
                <span>All Services</span>
              </router-link>

              <div class="mt-4 pt-4 border-t border-white/[0.05] space-y-2">
                <div class="flex items-center gap-2 text-[10px]">
                  <Clock class="w-3 h-3 text-brand-cyan" />
                  <span class="text-gray-400">2-12 week engagement</span>
                </div>
                <div class="flex items-center gap-2 text-[10px]">
                  <Users class="w-3 h-3 text-brand-purple" />
                  <span class="text-gray-400">Dedicated team</span>
                </div>
                <div class="flex items-center gap-2 text-[10px]">
                  <Shield class="w-3 h-3 text-brand-blue" />
                  <span class="text-gray-400">Enterprise security</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-10">
      <div class="container-main">
        <div class="max-w-2xl mx-auto bg-white/[0.02] border border-white/[0.06] rounded-xl p-6 md:p-8 text-center">
          <h2 class="text-xl font-black text-white mb-3 tracking-tight">{{ service.cta }}</h2>
          <router-link to="/contact-us" class="btn-primary !py-2.5 !px-6 !text-[13px]">
            <span>Book Consultation</span>
            <ArrowRight class="w-3.5 h-3.5" />
          </router-link>
          <p class="text-[10px] text-gray-500 mt-3">No commitment · Free consultation · 24h response</p>
        </div>
      </div>
    </section>

    <!-- About -->
    <AboutSection />
  </div>
  <div v-else class="min-h-[50vh] flex items-center justify-center">
    <p class="text-gray-400">Service not found.</p>
  </div>
</template>

<script setup>
import { computed, watchEffect } from 'vue'
import PageHero from '../../components/PageHero.vue'
import AboutSection from '../../components/AboutSection.vue'
import { CheckCircle, ArrowRight, Clock, Users, Shield } from 'lucide-vue-next'
import { getServiceBySlug } from '../../data/services.js'

const props = defineProps({
  slug: { type: String, required: true }
})

const service = computed(() => getServiceBySlug(props.slug))

watchEffect(() => {
  if (service.value) document.title = `${service.value.title} — IntelliForge`
})
</script>
