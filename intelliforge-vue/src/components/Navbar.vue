<template>
  <nav class="glass-nav fixed top-0 left-0 right-0 z-50 h-[80px] flex items-center transition-all duration-300">
    <div class="container-main w-full">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <router-link to="/" class="flex items-center gap-3 shrink-0 group">
          <div class="relative flex items-center justify-center w-10 h-10">
            <div class="absolute inset-0 bg-brand-blue opacity-20 blur-md rounded-full group-hover:opacity-40 transition-opacity"></div>
            <img src="/logo.svg" alt="IntelliForge" class="h-10 relative z-10 drop-shadow-lg" />
          </div>
          <div class="flex flex-col">
            <span class="text-xl font-extrabold tracking-tight text-white leading-none">Intelli<span class="gradient-text">Forge</span></span>
          </div>
        </router-link>

        <!-- Desktop Menu -->
        <div class="hidden lg:flex items-center gap-2">
          <template v-for="item in navigation" :key="item.name">
            <!-- Simple link -->
            <router-link
              v-if="!item.children"
              :to="item.path"
              class="nav-link px-5 py-2.5 text-sm font-semibold text-gray-300 hover:text-white rounded-xl transition-all duration-300 hover:bg-white/[0.04]"
              active-class="text-white bg-white/[0.06]"
            >
              {{ item.name }}
            </router-link>

            <!-- Dropdown -->
            <div v-else class="relative group h-[80px] flex items-center">
              <button
                class="nav-link px-5 py-2.5 text-sm font-semibold text-gray-300 group-hover:text-white rounded-xl transition-all duration-300 hover:bg-white/[0.04] flex items-center gap-1.5"
              >
                {{ item.name }}
                <ChevronDown class="w-4 h-4 transition-transform duration-300 group-hover:rotate-180 opacity-70 group-hover:opacity-100" />
              </button>
              
              <!-- Dropdown Panel -->
              <div
                class="absolute top-[70px] left-1/2 -translate-x-1/2 pt-4 w-max min-w-[280px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
              >
                <div class="glass-card !rounded-2xl p-2 border border-white/10 shadow-2xl relative overflow-hidden">
                  <div class="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-transparent opacity-50"></div>
                  <div class="relative z-10 flex flex-col gap-1">
                    <router-link
                      v-for="child in item.children"
                      :key="child.path"
                      :to="child.path"
                      class="px-4 py-3 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-white/[0.06] transition-all duration-200 flex items-center justify-between group/link"
                    >
                      {{ child.name }}
                      <ArrowRight class="w-4 h-4 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all text-brand-blue" />
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>

        <div class="hidden lg:flex items-center ml-4 pl-4 border-l border-white/10">
          <router-link to="/contact-us" class="btn-primary !py-2.5 !px-5 !text-sm">
            <span>Talk to Us</span>
          </router-link>
        </div>

        <!-- Mobile Hamburger -->
        <button
          class="lg:hidden p-2 text-gray-300 hover:text-white bg-white/5 rounded-lg transition-colors border border-white/10"
          @click="mobileOpen = !mobileOpen"
          aria-label="Toggle menu"
        >
          <Menu v-if="!mobileOpen" class="w-5 h-5" />
          <X v-else class="w-5 h-5" />
        </button>
      </div>
    </div>

    <!-- Mobile Drawer -->
    <Transition name="slide">
      <div v-if="mobileOpen" class="lg:hidden fixed inset-0 top-[80px] z-40 flex">
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" @click="mobileOpen = false"></div>
        <div class="relative w-[300px] h-full bg-[#050510] border-r border-white/10 overflow-y-auto flex flex-col shadow-2xl">
          <div class="py-6 px-4 flex-grow flex flex-col gap-2">
            <template v-for="item in navigation" :key="item.name">
              <router-link
                v-if="!item.children"
                :to="item.path"
                class="block px-4 py-3 text-[15px] font-semibold text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                active-class="bg-white/10 text-white"
                @click="mobileOpen = false"
              >
                {{ item.name }}
              </router-link>

              <div v-else class="bg-white/[0.02] rounded-xl border border-white/5 overflow-hidden">
                <button
                  class="w-full flex items-center justify-between px-4 py-3 text-[15px] font-semibold text-gray-300 hover:text-white transition-all"
                  @click="toggleMobileDropdown(item.name)"
                >
                  {{ item.name }}
                  <ChevronDown
                    class="w-4 h-4 transition-transform duration-300"
                    :class="{ 'rotate-180': mobileDropdowns[item.name] }"
                  />
                </button>
                <Transition name="accordion">
                  <div v-if="mobileDropdowns[item.name]" class="bg-black/20 border-t border-white/5">
                    <router-link
                      v-for="child in item.children"
                      :key="child.path"
                      :to="child.path"
                      class="block pl-8 pr-4 py-3 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all"
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
          <div class="p-4 border-t border-white/10 mt-auto">
            <router-link to="/contact-us" class="btn-primary w-full justify-center" @click="mobileOpen = false">
              Contact Us
            </router-link>
          </div>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, reactive, watch } from 'vue'
import { useRoute } from 'vue-router'
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-vue-next'
import { navigation } from '../data/navigation.js'

const mobileOpen = ref(false)
const mobileDropdowns = reactive({})
const route = useRoute()

function toggleMobileDropdown(name) {
  mobileDropdowns[name] = !mobileDropdowns[name]
}

watch(() => route.path, () => {
  mobileOpen.value = false
})
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}
.slide-enter-from > div:last-child,
.slide-leave-to > div:last-child {
  transform: translateX(-100%);
}

.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}
.accordion-enter-from,
.accordion-leave-to {
  opacity: 0;
  max-height: 0;
}
.accordion-enter-to,
.accordion-leave-from {
  max-height: 500px;
}
</style>
