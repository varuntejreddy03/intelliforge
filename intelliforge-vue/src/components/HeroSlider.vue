<template>
  <section class="relative overflow-hidden min-h-[600px] flex items-center" id="hero-slider">
    <!-- Animated gradient background -->
    <div class="absolute inset-0 bg-brand-dark">
      <div class="absolute inset-0 opacity-30">
        <div class="absolute top-1/4 -left-32 w-96 h-96 bg-brand-blue/20 rounded-full blur-[120px] animate-pulse"></div>
        <div class="absolute bottom-1/4 -right-32 w-96 h-96 bg-brand-purple/20 rounded-full blur-[120px] animate-pulse" style="animation-delay: 1s"></div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-brand-blue/10 to-brand-purple/10 rounded-full blur-[150px]"></div>
      </div>
      <!-- Grid overlay -->
      <div class="absolute inset-0" style="background-image: radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 40px 40px;"></div>
    </div>

    <!-- Slide content -->
    <div class="relative z-10 container-main w-full py-24">
      <TransitionGroup name="hero-slide">
        <div v-for="(slide, index) in slides" :key="index" v-show="currentSlide === index" class="max-w-3xl">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            <span class="gradient-text">{{ slide.title }}</span>
          </h1>
          <p class="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
            {{ slide.subtitle }}
          </p>
          <router-link to="/our-services" class="btn-primary text-base" :id="'hero-cta-' + index">
            {{ slide.cta }}
            <ArrowRight class="w-5 h-5" />
          </router-link>
        </div>
      </TransitionGroup>
    </div>

    <!-- Controls -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
      <button @click="prevSlide" class="p-2 rounded-full border border-white/10 text-white/60 hover:text-white hover:border-white/30 transition-all" aria-label="Previous slide">
        <ChevronLeft class="w-5 h-5" />
      </button>
      <div class="flex gap-2">
        <button
          v-for="(_, i) in slides"
          :key="i"
          @click="goToSlide(i)"
          class="w-2.5 h-2.5 rounded-full transition-all duration-300"
          :class="currentSlide === i ? 'bg-brand-blue w-8' : 'bg-white/20 hover:bg-white/40'"
          :aria-label="'Go to slide ' + (i + 1)"
        ></button>
      </div>
      <button @click="nextSlide" class="p-2 rounded-full border border-white/10 text-white/60 hover:text-white hover:border-white/30 transition-all" aria-label="Next slide">
        <ChevronRight class="w-5 h-5" />
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-vue-next'

const slides = [
  {
    title: 'Empower Your Vision with Our Cutting-Edge Technology Services',
    subtitle: 'Unlock growth with our tech services. From software to strategy, we\'ve got you covered. Stay ahead in the digital era with us.',
    cta: 'Learn More',
  },
  {
    title: 'Ignite Innovation: Explore Our Discovery Phase Services',
    subtitle: 'Unlock insights and plan for success with our Discovery Phase services. Tailored analysis to fuel your project\'s journey.',
    cta: 'Learn More',
  },
  {
    title: 'Crafting Custom Solutions: Your Software, Your Way',
    subtitle: 'Unlock your business potential with custom software solutions designed to fit. From idea to implementation, we deliver excellence.',
    cta: 'Learn More',
  },
]

const currentSlide = ref(0)
let interval = null
let isPaused = false

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

function prevSlide() {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length
}

function goToSlide(i) {
  currentSlide.value = i
}

function startAutoplay() {
  interval = setInterval(() => {
    if (!isPaused) nextSlide()
  }, 5000)
}

onMounted(() => {
  startAutoplay()
  const el = document.getElementById('hero-slider')
  if (el) {
    el.addEventListener('mouseenter', () => isPaused = true)
    el.addEventListener('mouseleave', () => isPaused = false)
  }
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})
</script>

<style scoped>
.hero-slide-enter-active,
.hero-slide-leave-active {
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  position: absolute;
}
.hero-slide-enter-from {
  opacity: 0;
  transform: translateX(40px);
}
.hero-slide-leave-to {
  opacity: 0;
  transform: translateX(-40px);
}
</style>
