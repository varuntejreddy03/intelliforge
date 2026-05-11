<template>
  <div class="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.03] backdrop-blur-md mb-8 w-max">
    <div class="relative w-2 h-2">
      <div class="absolute inset-0 bg-brand-cyan rounded-full animate-ping opacity-60"></div>
      <div class="absolute inset-0 bg-brand-blue rounded-full"></div>
    </div>
    <span class="text-[11px] font-bold uppercase tracking-[0.15em] text-gray-300">{{ text }}</span>
  </div>
</template>

<script setup>
defineProps({
  text: { type: String, required: true }
})
</script>
