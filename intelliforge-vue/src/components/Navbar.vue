<template>
  <div class="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
    <nav
      class="pointer-events-auto backdrop-blur-2xl border shadow-[0_8px_32px_rgba(0,0,0,0.4)] rounded-full px-4 py-2.5 flex items-center justify-between w-full max-w-[1200px] transition-all duration-500"
      :class="scrolled ? 'bg-[#030712]/85 border-white/10' : 'bg-[#030712]/60 border-white/[0.06]'"
    >
      <!-- Logo -->
      <router-link to="/" class="flex items-center gap-2.5 shrink-0 group px-2 py-1">
        <div class="relative flex items-center justify-center w-8 h-8">
          <div class="absolute inset-0 bg-brand-blue opacity-20 blur-md rounded-full group-hover:opacity-40 transition-opacity duration-300"></div>
          <img src="/logo.svg" alt="IntelliForge" class="h-8 relative z-10" />
        </div>
        <span class="text-xl font-bold tracking-tight text-white leading-none">Intelli<span class="gradient-text">Forge</span></span>
      </router-link>

      <!-- Desktop Menu -->
      <div class="hidden lg:flex items-center gap-0.5">
        <template v-for="item in navigation" :key="item.name">
          <router-link
            v-if="!item.children"
            :to="item.path"
            class="px-4 py-2 text-[14px] font-medium text-gray-300 hover:text-white rounded-full transition-all duration-200 hover:bg-white/[0.06] whitespace-nowrap"
            active-class="!text-white !bg-white/10"
          >
            {{ item.name }}
          </router-link>

          <div v-else class="relative group">
            <button
              class="px-4 py-2 text-[14px] font-medium text-gray-300 group-hover:text-white rounded-full transition-all duration-200 hover:bg-white/[0.06] flex items-center gap-1.5 whitespace-nowrap"
            >
              {{ item.name }}
              <ChevronDown class="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180 opacity-50 group-hover:opacity-100" />
            </button>

            <div class="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[280px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div class="bg-[#0a0e1a]/95 backdrop-blur-2xl rounded-2xl p-2 border border-white/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                <div class="flex flex-col max-h-[60vh] overflow-y-auto custom-scrollbar">
                  <router-link
                    v-for="child in item.children"
                    :key="child.path"
                    :to="child.path"
                    class="p-3 rounded-xl hover:bg-white/[0.06] transition-all duration-200 flex items-start gap-3 group/link"
                  >
                    <div class="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center shrink-0 group-hover/link:bg-brand-blue/10 group-hover/link:border-brand-blue/30 transition-colors">
                      <component :is="getIcon(child.name)" class="w-4 h-4 text-gray-400 group-hover/link:text-brand-blue transition-colors" />
                    </div>
                    <div>
                      <div class="text-[13px] font-semibold text-white/90 mb-0.5 flex items-center gap-1.5">
                        {{ child.name }}
                        <ArrowRight class="w-3 h-3 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all text-brand-blue" />
                      </div>
                      <div class="text-[11px] text-gray-500 leading-snug">{{ getDesc(child.name) }}</div>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>

      <!-- Right CTA -->
      <div class="hidden lg:flex items-center pr-1">
        <router-link to="/contact-us" class="relative group/cta px-6 py-2.5 rounded-full text-[14px] font-semibold text-white bg-gradient-to-r from-brand-blue to-brand-purple border border-white/10 hover:border-white/25 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,180,255,0.3)] hover:-translate-y-0.5 whitespace-nowrap">
          <span class="relative z-10">Talk to Us</span>
        </router-link>
      </div>

      <!-- Mobile Hamburger -->
      <button
        class="lg:hidden p-2.5 mr-1 text-gray-300 hover:text-white bg-white/[0.05] rounded-full transition-colors border border-white/[0.08] hover:border-white/15"
        @click="mobileOpen = !mobileOpen"
        aria-label="Toggle menu"
      >
        <Menu v-if="!mobileOpen" class="w-4 h-4" />
        <X v-else class="w-4 h-4" />
      </button>
    </nav>

    <!-- Mobile Drawer -->
    <Transition name="slide">
      <div v-if="mobileOpen" class="lg:hidden fixed inset-0 top-[72px] z-40 flex pointer-events-auto px-4 pb-4">
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" @click="mobileOpen = false"></div>
        <div class="relative w-full h-full bg-[#0a0e1a]/98 backdrop-blur-2xl rounded-2xl border border-white/[0.06] flex flex-col shadow-2xl overflow-hidden mt-2">
          <div class="p-5 flex-grow overflow-y-auto flex flex-col gap-1">
            <template v-for="item in navigation" :key="item.name">
              <router-link
                v-if="!item.children"
                :to="item.path"
                class="block px-4 py-3.5 text-[15px] font-semibold text-gray-200 hover:text-white hover:bg-white/[0.05] rounded-xl transition-all"
                active-class="bg-white/[0.08] text-white"
                @click="mobileOpen = false"
              >
                {{ item.name }}
              </router-link>

              <div v-else class="rounded-xl border border-white/[0.04] overflow-hidden">
                <button
                  class="w-full flex items-center justify-between px-4 py-3.5 text-[15px] font-semibold text-gray-200 hover:text-white transition-all"
                  @click="toggleMobileDropdown(item.name)"
                >
                  {{ item.name }}
                  <ChevronDown
                    class="w-4 h-4 transition-transform duration-300"
                    :class="{ 'rotate-180': mobileDropdowns[item.name] }"
                  />
                </button>
                <Transition name="accordion">
                  <div v-if="mobileDropdowns[item.name]" class="bg-white/[0.02] border-t border-white/[0.04] py-2">
                    <router-link
                      v-for="child in item.children"
                      :key="child.path"
                      :to="child.path"
                      class="block pl-8 pr-4 py-2.5 text-[14px] font-medium text-gray-400 hover:text-white hover:bg-white/[0.04] transition-all rounded-lg mx-2"
                      active-class="text-brand-blue"
                      @click="mobileOpen = false"
                    >
                      {{ child.name }}
                    </router-link>
                  </div>
                </Transition>
              </div>
            </template>
          </div>
          <div class="p-5 border-t border-white/[0.06]">
            <router-link to="/contact-us" class="btn-primary w-full justify-center" @click="mobileOpen = false">
              <span>Contact Us</span>
              <ArrowRight class="w-4 h-4" />
            </router-link>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, reactive, watch, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { ChevronDown, Menu, X, ArrowRight, Settings, Box, Sparkles, Briefcase, Users, Award } from 'lucide-vue-next'
import { navigation } from '../data/navigation.js'

const mobileOpen = ref(false)
const mobileDropdowns = reactive({})
const scrolled = ref(false)
const route = useRoute()

function toggleMobileDropdown(name) {
  mobileDropdowns[name] = !mobileDropdowns[name]
}

function handleScroll() {
  scrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

watch(() => route.path, () => { mobileOpen.value = false })

const getIcon = (name) => {
  const map = { 'Our Services': Settings, 'Our Solutions': Box, 'Experiense': Sparkles, 'Servicepack': Award, 'Jobs': Briefcase, 'Employee Referral Program': Users }
  return map[name] || Box
}
const getDesc = (name) => {
  const map = { 'Our Services': 'Enterprise tech services', 'Our Solutions': 'SaaS platforms', 'Experiense': 'Virtual SDR Agent', 'Servicepack': 'Omnichannel Analytics', 'Jobs': 'Join our team', 'Employee Referral Program': 'Refer & earn bonuses' }
  return map[name] || 'Learn more'
}
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar { width: 5px; }
.custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
.custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 10px; }

.slide-enter-active, .slide-leave-active { transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
.slide-enter-from, .slide-leave-to { opacity: 0; transform: translateY(-10px); }

.accordion-enter-active, .accordion-leave-active { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); overflow: hidden; }
.accordion-enter-from, .accordion-leave-to { opacity: 0; max-height: 0; }
.accordion-enter-to, .accordion-leave-from { max-height: 500px; }
</style>
