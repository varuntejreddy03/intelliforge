<template>
  <div>
    <PageHero title="Contact Us" subtitle="We'd love to hear from you. Get in touch with IntelliForge today." :breadcrumb="[{ name: 'Home', path: '/' }, { name: 'Contact Us' }]" :showPanel="false" />
    <section class="py-12"><div class="container-main">
      <div class="grid lg:grid-cols-5 gap-8 items-start">
        <!-- Form -->
        <div class="lg:col-span-3">
          <ContactForm />
        </div>

        <!-- Sidebar -->
        <div class="lg:col-span-2 space-y-4">
          <div class="bg-white/[0.02] border border-white/[0.08] rounded-xl p-5 space-y-4">
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center">
                <Mail class="w-4 h-4 text-brand-blue" />
              </div>
              <div>
                <h3 class="text-[13px] font-bold text-white">Email Us</h3>
                <a href="mailto:Rajeshkolli393@gmail.com" class="text-[12px] text-brand-blue hover:text-brand-cyan transition-colors">Rajeshkolli393@gmail.com</a>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-lg bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center">
                <Phone class="w-4 h-4 text-brand-purple" />
              </div>
              <div>
                <h3 class="text-[13px] font-bold text-white">Call Us</h3>
                <a href="tel:+19402955967" class="text-[12px] text-brand-blue hover:text-brand-cyan transition-colors">+1 (940) 295-5967</a>
              </div>
            </div>
          </div>

          <div class="bg-white/[0.02] border border-white/[0.08] rounded-xl p-5">
            <h3 class="text-[13px] font-bold text-white mb-3">Why IntelliForge?</h3>
            <div class="space-y-2.5">
              <div class="flex items-center gap-2.5">
                <CheckCircle class="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                <span class="text-[12px] text-gray-400">Free initial consultation</span>
              </div>
              <div class="flex items-center gap-2.5">
                <CheckCircle class="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                <span class="text-[12px] text-gray-400">Response within 24 hours</span>
              </div>
              <div class="flex items-center gap-2.5">
                <CheckCircle class="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                <span class="text-[12px] text-gray-400">Enterprise-grade solutions</span>
              </div>
              <div class="flex items-center gap-2.5">
                <CheckCircle class="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                <span class="text-[12px] text-gray-400">Dedicated project team</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div></section>
  </div>
</template>

<script setup>
import PageHero from '../components/PageHero.vue'
import ContactForm from '../components/ContactForm.vue'
import { Mail, CheckCircle, Phone } from 'lucide-vue-next'
document.title = 'Contact Us — IntelliForge'
</script>
