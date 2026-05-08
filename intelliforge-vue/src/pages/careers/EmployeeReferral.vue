<template>
  <div>
    <PageHero title="Employee Referral Program" subtitle="Empower Your Network: Refer & Earn!" :breadcrumb="[{ name: 'Home', path: '/' }, { name: 'Careers' }, { name: 'Referral Program' }]" />

    <section class="py-20"><div class="container-main max-w-4xl">
      <div class="glass-card p-8 sm:p-12 border-brand-purple/30 text-center mb-16 relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-brand-purple/10"></div>
        <div class="relative z-10">
          <h2 class="text-2xl sm:text-3xl font-extrabold mb-4 text-white">Referral Bonus</h2>
          <p class="text-5xl font-black mb-4"><span class="gradient-text">$1000</span></p>
          <p class="text-gray-300">bonus for successful eligible referrals.</p>
        </div>
      </div>

      <div class="space-y-12">
        <div v-for="(section, idx) in sections" :key="idx">
          <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-3">
            <span class="w-8 h-8 rounded-full bg-brand-blue/20 text-brand-blue flex items-center justify-center text-sm font-bold">{{ idx + 1 }}</span>
            {{ section.title }}
          </h3>
          <p class="text-gray-400 leading-relaxed pl-11">{{ section.content }}</p>
        </div>
      </div>

    </div></section>

    <CTABanner title="Ready to refer someone?" primaryButtonText="Contact HR" primaryButtonLink="/contact-us" />
    <AboutSection />
  </div>
</template>

<script setup>
import PageHero from '../../components/PageHero.vue'
import CTABanner from '../../components/CTABanner.vue'
import AboutSection from '../../components/AboutSection.vue'
document.title = 'Employee Referral Program — IntelliForge'

const sections = [
  { title: 'How It Works', content: 'At IntelliForge, we believe great people know great people. Our Employee Referral Program encourages team members to refer skilled professionals who can contribute to our mission of building innovative technology solutions.' },
  { title: 'Eligibility Rules', content: 'All active employees are eligible to submit referrals. The referred candidate must not be a current or recent contractor, and must not have applied within the last 6 months. Roles must be full-time.' },
  { title: 'Payout Terms', content: 'The referral bonus is paid out after the referred employee successfully completes 90 days of continuous employment at IntelliForge.' },
  { title: 'Why Refer', content: 'Help us build a stronger, more dynamic team. You get to work with great people you know, and you earn a generous bonus for your contribution to our growth.' },
  { title: 'Start Referring', content: 'Submit your referral\'s resume and contact information directly to our HR department via email at info@intelliforge.com with the subject line "Employee Referral: [Candidate Name]".' },
]
</script>
