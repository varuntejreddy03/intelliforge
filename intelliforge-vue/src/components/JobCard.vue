<template>
  <div class="feature-card" :id="'job-' + job.id">
    <div class="flex items-start justify-between mb-4">
      <div>
        <h3 class="text-lg font-bold text-white">{{ job.title }}</h3>
        <span class="text-xs font-medium uppercase tracking-wider text-brand-blue">{{ job.level }}</span>
      </div>
      <div class="icon-gradient shrink-0"><Briefcase class="w-5 h-5 text-brand-blue" /></div>
    </div>
    <p class="text-sm text-gray-400 mb-4 leading-relaxed">{{ job.description }}</p>
    <div class="flex flex-wrap gap-2">
      <span v-for="skill in job.skills" :key="skill" class="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-gray-300 border border-white/5">{{ skill }}</span>
    </div>
  </div>
</template>

<script setup>
import { Briefcase } from 'lucide-vue-next'
defineProps({ job: { type: Object, required: true } })
</script>
