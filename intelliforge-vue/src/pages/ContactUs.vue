<template>
  <div>
    <PageHero title="Contact Us" subtitle="We'd love to hear from you. Get in touch with IntelliForge today." :breadcrumb="[{ name: 'Home', path: '/' }, { name: 'Contact Us' }]" />
    <section class="py-20"><div class="container-main">
      <div class="grid lg:grid-cols-2 gap-12">
        <ContactForm />
        <div class="space-y-6">
          <div class="feature-card">
            <div class="flex items-start gap-4">
              <div class="icon-gradient shrink-0"><Mail class="w-5 h-5 text-brand-blue" /></div>
              <div><h3 class="font-bold text-white mb-1">Email</h3><p class="text-sm text-gray-400">Rajeshkolli393@gmail.com</p></div>
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
import { Mail } from 'lucide-vue-next'
document.title = 'Contact Us — IntelliForge'
</script>
