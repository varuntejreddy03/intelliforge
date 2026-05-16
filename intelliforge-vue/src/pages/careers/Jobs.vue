<template>
  <div>
    <PageHero title="Jobs" subtitle="Innovate, Impact, Inspire. Join the IntelliForge team." :breadcrumb="[{ name: 'Home', path: '/' }, { name: 'Careers' }, { name: 'Jobs' }]" />

    <section class="py-20"><div class="container-main max-w-4xl">
      <div class="text-center mb-12">
        <p class="text-gray-300 leading-relaxed text-lg">At IntelliForge, we're looking for passionate individuals to join our dynamic team. Dive into a culture of innovation, collaboration, and respect, where your skills and ideas are valued as you help shape the future.</p>
      </div>

      <div class="grid gap-6 mb-16">
        <JobCard v-for="job in jobs" :key="job.id" :job="job" />
      </div>

      <div class="glass-card p-8 text-center max-w-2xl mx-auto border-brand-blue/30 relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-r from-brand-blue/10 to-brand-purple/10"></div>
        <div class="relative z-10">
          <h3 class="text-2xl font-bold text-white mb-4">Ready to Apply?</h3>
          <p class="text-gray-300 mb-6">Send your resume and cover letter to our HR team.</p>
          <a href="mailto:Rajeshkolli393@gmail.com" class="btn-primary inline-flex items-center gap-2">Send Resume <Mail class="w-5 h-5" /></a>
          <div class="mt-8 pt-6 border-t border-white/10">
            <p class="text-sm text-gray-400">IntelliForge Inc<br/>Houston, TX</p>
          </div>
        </div>
      </div>
    </div></section>

    <AboutSection />
  </div>
</template>

<script setup>
import PageHero from '../../components/PageHero.vue'
import JobCard from '../../components/JobCard.vue'
import AboutSection from '../../components/AboutSection.vue'
import { jobs } from '../../data/jobs.js'
import { Mail } from 'lucide-vue-next'
document.title = 'Jobs — IntelliForge'
</script>
