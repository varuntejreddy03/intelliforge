<template>
  <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md mb-6 w-max">
    <div class="w-2 h-2 rounded-full bg-brand-blue animate-pulse"></div>
    <span class="text-xs font-bold uppercase tracking-wider text-gray-300">{{ text }}</span>
  </div>
</template>

<script setup>
defineProps({
  text: { type: String, required: true }
})
</script>
