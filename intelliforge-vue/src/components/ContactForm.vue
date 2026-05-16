<template>
  <div class="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-6 sm:p-8" id="contact-form">
    <form @submit.prevent="handleSubmit" v-if="!submitted" class="space-y-5">
      <div>
        <label class="block text-[13px] font-semibold text-gray-200 mb-2">Name</label>
        <input
          v-model="form.name"
          type="text"
          required
          placeholder="Your name"
          class="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-[14px] placeholder-gray-500 outline-none focus:border-brand-blue/50 focus:bg-white/[0.05] transition-all duration-300"
        />
      </div>
      <div>
        <label class="block text-[13px] font-semibold text-gray-200 mb-2">Email</label>
        <input
          v-model="form.email"
          type="email"
          required
          placeholder="you@example.com"
          class="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-[14px] placeholder-gray-500 outline-none focus:border-brand-blue/50 focus:bg-white/[0.05] transition-all duration-300"
        />
      </div>
      <div>
        <label class="block text-[13px] font-semibold text-gray-200 mb-2">Subject</label>
        <input
          v-model="form.subject"
          type="text"
          required
          placeholder="How can we help?"
          class="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-[14px] placeholder-gray-500 outline-none focus:border-brand-blue/50 focus:bg-white/[0.05] transition-all duration-300"
        />
      </div>
      <div>
        <label class="block text-[13px] font-semibold text-gray-200 mb-2">Message</label>
        <textarea
          v-model="form.message"
          rows="4"
          required
          placeholder="Tell us about your project..."
          class="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-[14px] placeholder-gray-500 outline-none focus:border-brand-blue/50 focus:bg-white/[0.05] transition-all duration-300 resize-none"
        ></textarea>
      </div>
      <button type="submit" class="btn-primary w-full justify-center !py-3 !text-[14px]">
        <span>Send Message</span>
        <Send class="w-4 h-4" />
      </button>
      <p class="text-[11px] text-gray-500 text-center">We'll respond within 24 hours</p>
    </form>

    <div v-else class="text-center py-10">
      <div class="w-14 h-14 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-4">
        <CheckCircle class="w-7 h-7 text-green-400" />
      </div>
      <h3 class="text-lg font-bold text-white mb-2">Message Sent!</h3>
      <p class="text-[13px] text-gray-400">Thank you for reaching out. We'll get back to you soon.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { Send, CheckCircle } from 'lucide-vue-next'
const submitted = ref(false)
const form = reactive({ name: '', email: '', subject: '', message: '' })
function handleSubmit() { submitted.value = true }
</script>
