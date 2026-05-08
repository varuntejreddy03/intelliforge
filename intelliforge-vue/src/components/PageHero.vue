<template>
  <section class="relative py-24 overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-brand-dark">
      <div class="absolute inset-0 opacity-20">
        <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-purple/20 rounded-full blur-[150px]"></div>
        <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-blue/20 rounded-full blur-[120px]"></div>
      </div>
      <div class="absolute inset-0" style="background-image: radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px); background-size: 40px 40px;"></div>
    </div>

    <div class="relative container-main">
      <!-- Breadcrumb -->
      <nav v-if="breadcrumb && breadcrumb.length" class="mb-4 text-sm text-gray-400" aria-label="Breadcrumb">
        <ol class="flex items-center gap-2">
          <li v-for="(crumb, i) in breadcrumb" :key="i" class="flex items-center gap-2">
            <router-link v-if="crumb.path" :to="crumb.path" class="hover:text-brand-blue transition-colors">{{ crumb.name }}</router-link>
            <span v-else class="text-gray-500">{{ crumb.name }}</span>
            <ChevronRight v-if="i < breadcrumb.length - 1" class="w-3.5 h-3.5 text-gray-600" />
          </li>
        </ol>
      </nav>

      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
        <span class="gradient-text">{{ title }}</span>
      </h1>
      <p v-if="subtitle" class="text-lg sm:text-xl text-gray-300 max-w-3xl leading-relaxed">{{ subtitle }}</p>
    </div>
  </section>
</template>

<script setup>
import { ChevronRight } from 'lucide-vue-next'

defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  breadcrumb: { type: Array, default: () => [] },
})
</script>
