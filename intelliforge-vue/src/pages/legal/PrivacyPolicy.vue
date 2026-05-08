<template>
  <div>
    <PageHero title="Privacy Policy" :breadcrumb="[{ name: 'Home', path: '/' }, { name: 'Privacy Policy' }]" />

    <section class="py-20"><div class="container-main max-w-4xl prose prose-invert prose-brand">
      <p class="text-gray-400 mb-8">Last updated: May 16, 2024</p>
      
      <p>IntelliForge is committed to protecting the privacy of our users. This Privacy Policy outlines the types of personal information we collect, how it is used, and your choices regarding your information.</p>
      
      <h2 class="text-xl font-bold text-white mt-8 mb-4">1. Information We Collect</h2>
      <p class="text-gray-300 leading-relaxed mb-4">We collect personal information that you provide to us voluntarily, such as your name, email address, and any other information you choose to provide when using our services or contacting us through our website.</p>
      
      <h2 class="text-xl font-bold text-white mt-8 mb-4">2. How We Use Information</h2>
      <p class="text-gray-300 leading-relaxed mb-4">We use the information we collect for various purposes, including:</p>
      <ul class="list-disc pl-6 text-gray-300 mb-4 space-y-2">
        <li>Providing and improving our services</li>
        <li>Communicating with you</li>
        <li>Customizing your experience</li>
        <li>Analyzing usage of our services</li>
        <li>Protecting our rights and the rights of others</li>
      </ul>
      
      <h2 class="text-xl font-bold text-white mt-8 mb-4">3. Information Sharing</h2>
      <p class="text-gray-300 leading-relaxed mb-4">We may share your information with third parties for the purposes outlined in this Privacy Policy or with your consent. We do not sell your personal information to third parties.</p>
      
      <h2 class="text-xl font-bold text-white mt-8 mb-4">4. Data Security</h2>
      <p class="text-gray-300 leading-relaxed mb-4">We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure.</p>
      
      <h2 class="text-xl font-bold text-white mt-8 mb-4">5. Cookies and Tracking</h2>
      <p class="text-gray-300 leading-relaxed mb-4">We may use cookies and similar tracking technologies to track activity on our website and hold certain information to improve your experience.</p>
      
      <h2 class="text-xl font-bold text-white mt-8 mb-4">6. Changes to This Policy</h2>
      <p class="text-gray-300 leading-relaxed mb-4">We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
      
      <h2 class="text-xl font-bold text-white mt-8 mb-4">7. Contact Us</h2>
      <p class="text-gray-300 leading-relaxed">If you have any questions about this Privacy Policy, please contact us at <a href="mailto:info@intelliforge.com" class="text-brand-blue hover:underline">info@intelliforge.com</a>.</p>
    </div></section>
  </div>
</template>

<script setup>
import PageHero from '../../components/PageHero.vue'
document.title = 'Privacy Policy — IntelliForge'
</script>
