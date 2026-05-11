<template>
  <div class="global-bg"></div>
  <div class="min-h-screen flex flex-col relative z-0">
    <Navbar />
    <main class="flex-grow pt-[72px]">
      <router-view v-slot="{ Component, route }">
        <transition name="page" mode="out-in">
          <component :is="Component" :key="route.fullPath" />
        </transition>
      </router-view>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' })

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el))

  // Re-observe on route changes
  const mutationObserver = new MutationObserver(() => {
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el))
  })
  mutationObserver.observe(document.querySelector('#app'), { childList: true, subtree: true })
})
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(12px);
}
</style>
