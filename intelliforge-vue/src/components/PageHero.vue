<template>
  <section class="relative pt-10 pb-10 overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-[#030712]"></div>
    <div class="absolute inset-0 opacity-15">
      <div class="absolute top-0 right-0 w-[350px] h-[350px] bg-brand-purple/15 rounded-full blur-[100px]"></div>
      <div class="absolute bottom-0 left-0 w-[250px] h-[250px] bg-brand-blue/10 rounded-full blur-[80px]"></div>
    </div>

    <div class="relative container-main">
      <div class="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
        <!-- Left: Text -->
        <div class="flex-1">
          <nav v-if="breadcrumb && breadcrumb.length" class="mb-4" aria-label="Breadcrumb">
            <ol class="flex items-center gap-1.5 flex-wrap">
              <li v-for="(crumb, i) in breadcrumb" :key="i" class="flex items-center gap-1.5">
                <router-link v-if="crumb.path" :to="crumb.path" class="text-[11px] font-bold tracking-widest uppercase text-brand-blue hover:text-brand-cyan transition-colors">{{ crumb.name }}</router-link>
                <span v-else class="text-[11px] font-bold tracking-widest uppercase text-gray-500">{{ crumb.name }}</span>
                <ChevronRight v-if="i < breadcrumb.length - 1" class="w-3 h-3 text-gray-600" />
              </li>
            </ol>
          </nav>

          <h1 class="font-black leading-[1.1] mb-4 tracking-tight text-white text-2xl sm:text-3xl lg:text-4xl">
            {{ title }}
          </h1>
          <p v-if="subtitle" class="text-[15px] text-gray-400 leading-relaxed max-w-lg">{{ subtitle }}</p>
        </div>

        <!-- Right: Service Preview Panel -->
        <div v-if="showPanel" class="hidden lg:block w-[280px] shrink-0">
          <div class="bg-white/[0.02] border border-white/[0.06] rounded-xl p-4">
            <div class="flex items-center gap-2 mb-3 pb-2.5 border-b border-white/[0.05]">
              <div class="w-6 h-6 rounded-md bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center">
                <Layers class="w-3 h-3 text-white" />
              </div>
              <span class="text-[12px] font-bold text-white">Capabilities</span>
            </div>
            <div class="space-y-1.5">
              <div v-for="item in panelItems" :key="item" class="flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-white/[0.02] border border-white/[0.03]">
                <div class="w-1 h-1 rounded-full bg-brand-cyan"></div>
                <span class="text-[11px] text-gray-300">{{ item }}</span>
              </div>
            </div>
            <div class="mt-3 pt-2.5 border-t border-white/[0.05] flex gap-2">
              <div class="flex-1 text-center py-1.5 rounded-md bg-white/[0.02]">
                <div class="text-[9px] text-gray-500">Engagement</div>
                <div class="text-[11px] font-bold text-white">2-12 wks</div>
              </div>
              <div class="flex-1 text-center py-1.5 rounded-md bg-white/[0.02]">
                <div class="text-[9px] text-gray-500">Security</div>
                <div class="text-[11px] font-bold text-white">Enterprise</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ChevronRight, Layers } from 'lucide-vue-next'

defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  breadcrumb: { type: Array, default: () => [] },
  showPanel: { type: Boolean, default: true },
  panelItems: { type: Array, default: () => ['Technology Services', 'Cloud Solutions', 'AI Engineering', 'QA & Testing', 'DevOps & CI/CD'] },
})
</script>
