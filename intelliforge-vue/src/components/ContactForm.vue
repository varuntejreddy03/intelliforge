<template>
  <div class="glass-card p-8 max-w-2xl mx-auto" id="contact-form">
    <form @submit.prevent="handleSubmit" v-if="!submitted">
      <div class="space-y-5">
        <div>
          <label class="block text-sm font-medium text-gray-300 mb-2">Name</label>
          <input v-model="form.name" type="text" required class="form-input" placeholder="Your name" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-300 mb-2">Email</label>
          <input v-model="form.email" type="email" required class="form-input" placeholder="you@example.com" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-300 mb-2">Subject</label>
          <input v-model="form.subject" type="text" required class="form-input" placeholder="Subject" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-300 mb-2">Message</label>
          <textarea v-model="form.message" rows="5" required class="form-input resize-none" placeholder="Your message..."></textarea>
        </div>
        <button type="submit" class="btn-primary w-full justify-center">
          Send Message <Send class="w-4 h-4" />
        </button>
      </div>
    </form>
    <div v-else class="text-center py-12">
      <div class="icon-gradient w-16 h-16 mx-auto mb-6"><CheckCircle class="w-8 h-8 text-green-400" /></div>
      <h3 class="text-xl font-bold text-white mb-3">Thank You!</h3>
      <p class="text-gray-300">Thank you for contacting IntelliForge. Our team will get back to you soon.</p>
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
