import { createRouter, createWebHistory } from 'vue-router'
import { services } from '../data/services.js'
import { solutions } from '../data/solutions.js'

import Home from '../pages/Home.vue'
import AboutUs from '../pages/AboutUs.vue'
import Alliances from '../pages/Alliances.vue'
import ContactUs from '../pages/ContactUs.vue'
import Sitemap from '../pages/Sitemap.vue'

import OurServices from '../pages/services/OurServices.vue'
import ServiceDetail from '../pages/services/ServiceDetail.vue'

import OurSolutions from '../pages/solutions/OurSolutions.vue'
import SolutionDetail from '../pages/solutions/SolutionDetail.vue'

import Experiense from '../pages/products/Experiense.vue'
import Servicepack from '../pages/products/Servicepack.vue'

import Jobs from '../pages/careers/Jobs.vue'
import EmployeeReferral from '../pages/careers/EmployeeReferral.vue'

import PrivacyPolicy from '../pages/legal/PrivacyPolicy.vue'
import TermsConditions from '../pages/legal/TermsConditions.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about-us', component: AboutUs },
  { path: '/alliances', component: Alliances },
  { path: '/contact-us', component: ContactUs },
  { path: '/sitemap', component: Sitemap },

  { path: '/our-services', component: OurServices },
  ...services.map(s => ({
    path: `/${s.slug}`,
    component: ServiceDetail,
  })),

  { path: '/our-solutions', component: OurSolutions },
  ...solutions.map(s => ({
    path: `/${s.slug}`,
    component: SolutionDetail,
  })),

  { path: '/experiense', component: Experiense },
  { path: '/servicepack', component: Servicepack },

  { path: '/jobs', component: Jobs },
  { path: '/employee-referral-program', component: EmployeeReferral },

  { path: '/privacy-policy', component: PrivacyPolicy },
  { path: '/terms-conditions', component: TermsConditions },
  
  // Catch all
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

export default router
