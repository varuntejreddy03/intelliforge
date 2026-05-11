/**
 * generate-data.js
 * 
 * Reads ../techday_data/techday_data.json and generates:
 *   - src/data/services.js
 *   - src/data/solutions.js
 * 
 * Usage: node scripts/generate-data.js
 */

import { readFileSync, writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dataPath = resolve(__dirname, '../../techday_data/techday_data.json')
const rawData = JSON.parse(readFileSync(dataPath, 'utf-8'))

// --- URL to slug mapping ---
function urlToSlug(url) {
  return url.replace('https://thetechday.com/', '').replace('.html', '').replace(/\/$/, '')
}

// --- Fix broken encoding and branding ---
function fixEncoding(text) {
  return text
    .replace(/\u00e2\u0080\u0094/g, ', ')
    .replace(/\u00e2\u0080\u0093/g, ', ')
    .replace(/\u00e2\u0080\u0099/g, "'")
    .replace(/\u00e2\u0080\u009c/g, '"')
    .replace(/\u00e2\u0080\u009d/g, '"')
    .replace(/[\u2014\u2013]/g, ', ')
    .replace(/[\u201c\u201d]/g, '"')
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/\u00e2/g, '')
    .replace(/\u0080/g, '')
    .replace(/[\u0093\u0094\u0099\u009c\u009d]/g, '')
    .replace(/\u00c2\u00a9/g, '\u00a9')
    .replace(/\u00c2/g, '')
    .replace(/Techday/g, 'IntelliForge')
    .replace(/TechDay/g, 'IntelliForge')
    .replace(/thetechday\.com/g, 'intelliforge.com')
    .replace(/ , /g, ', ')
    .replace(/  +/g, ' ')
}

// --- Filter meaningful paragraphs (skip nav/footer junk) ---
const junkPhrases = [
  'About Us Alliances',
  'Our Products Experiense',
  'Our Services Technology',
  'Our Solutions CRM',
  'Careers Employee Referral',
  'Employee Referral Program',
  'Custom Software Development',
  'FinTech Software Development',
  'Mobile App Development',
  'Blockchain Development',
  'Custom CDN Integration',
  'Customer Relationship Management',
  'Human Resource Management',
  'Project Management Tool',
  'Inventory Management System',
  'Social Media Management Tool',
  'Customer Support Ticketing System',
  'Copyright',
]

function filterParagraphs(paragraphs) {
  return paragraphs.filter(p => {
    if (p.length < 30) return false
    return !junkPhrases.some(junk => p.startsWith(junk))
  }).map(p => fixEncoding(p))
}

// --- Service definitions (slug -> icon mapping) ---
const serviceIconMap = {
  'technology-services': 'Monitor',
  'discovery-phase': 'Search',
  'custom-software-development': 'Code2',
  'fintech-software-development': 'Landmark',
  'product-engineering': 'Cog',
  'ui-ux-design': 'Palette',
  'web-design': 'PenTool',
  'web-development': 'Globe',
  'mobile-app-development': 'Smartphone',
  'qa-testing': 'ShieldCheck',
  'ai-ml-development': 'Brain',
  'blockchain-development': 'Link2',
  'devops-services': 'GitBranch',
  'custom-cdn-integration': 'Wifi',
  'virtual-cto-services': 'UserCog',
}

// --- Solution definitions (slug -> icon mapping) ---
const solutionIconMap = {
  'customer-relationship-management': { icon: 'Users', appSlug: 'crm-pro', title: 'CRMPro' },
  'human-resource-management': { icon: 'UserCheck', appSlug: 'hr-master', title: 'HRMaster' },
  'project-management-tool': { icon: 'FolderKanban', appSlug: 'project-plus', title: 'ProjectPlus' },
  'inventory-management-system': { icon: 'Package', appSlug: 'invento-sync', title: 'InventoSync' },
  'social-media-management-tool': { icon: 'Share2', appSlug: 'social-sync', title: 'SocialSync' },
  'e-commerce-platform': { icon: 'ShoppingCart', appSlug: 'ecom-edge', title: 'EcomEdge' },
  'customer-support-ticketing-system': { icon: 'HeadphonesIcon', appSlug: 'support-genius', title: 'SupportGenius' },
}

// --- Build page lookup ---
const pageMap = {}
for (const page of rawData) {
  const slug = urlToSlug(page.url)
  if (slug) pageMap[slug] = page
}

// --- Extract clean key points from content ---
function extractKeyPoints(paragraphs, slug) {
  const keyPointsMap = {
    'technology-services': ['Digital transformation consulting', 'Custom software development', 'Cloud migration & enablement', 'Cybersecurity solutions', 'Strategic IT consulting', 'Ongoing support & maintenance'],
    'discovery-phase': ['Requirement analysis & research', 'Market & competitor study', 'Feature prioritization', 'Technical feasibility assessment', 'User journey mapping', 'Roadmap & timeline creation'],
    'custom-software-development': ['Custom business applications', 'SaaS platforms', 'Internal tools & portals', 'Workflow automation', 'API integrations', 'Secure & scalable architecture'],
    'fintech-software-development': ['Digital payment systems', 'Financial dashboards', 'Banking integrations', 'Wallet & transaction solutions', 'Compliance-focused development', 'Risk management systems'],
    'product-engineering': ['Product strategy & planning', 'MVP development', 'Architecture design', 'Agile development sprints', 'Product scaling', 'Maintenance & support'],
    'ui-ux-design': ['User research & personas', 'Wireframes & prototypes', 'Design systems', 'Mobile-first design', 'Usability testing', 'Accessibility compliance'],
    'web-design': ['Brand-focused visual design', 'Responsive layouts', 'Landing page design', 'Conversion-focused UI', 'Design systems', 'Cross-browser compatibility'],
    'web-development': ['Corporate websites & portals', 'Progressive web apps', 'CMS-based websites', 'API development & integration', 'Performance optimization', 'SEO-friendly architecture'],
    'mobile-app-development': ['iOS & Android native apps', 'Cross-platform (React Native)', 'Mobile UI/UX design', 'Push notifications & analytics', 'App store optimization', 'Ongoing maintenance'],
    'qa-testing': ['Manual & automation testing', 'Functional & regression testing', 'Performance & load testing', 'Security testing', 'CI/CD integration', 'Bug tracking & reporting'],
    'ai-ml-development': ['AI chatbots & assistants', 'Predictive analytics', 'Machine learning models', 'NLP & text processing', 'Recommendation engines', 'Computer vision solutions'],
    'blockchain-development': ['Smart contract development', 'DApp development', 'Token & NFT systems', 'Blockchain consulting', 'Secure transaction systems', 'Decentralized platforms'],
    'devops-services': ['CI/CD pipeline setup', 'Docker & Kubernetes', 'Infrastructure as Code', 'Cloud deployment (AWS/Azure)', 'Monitoring & logging', 'Release automation'],
    'custom-cdn-integration': ['Global content delivery', 'Latency reduction', 'Edge server configuration', 'Caching optimization', 'DDoS protection', 'Performance monitoring'],
    'virtual-cto-services': ['Technology roadmap planning', 'Architecture decisions', 'Team building & guidance', 'Vendor evaluation', 'Budget & resource planning', 'Long-term scaling strategy'],
  }
  return keyPointsMap[slug] || ['Enterprise-grade solutions', 'Scalable architecture', 'Expert team delivery', 'Ongoing support', 'Modern tech stack', 'Agile methodology']
}

// --- Generate services ---
function generateServices() {
  const services = []

  // Fallback data for pages not in scraped data
  const fallbacks = {
    'custom-software-development': {
      title: 'Custom Software Development',
      h1: 'Crafting Custom Solutions: Your Software, Your Way',
      subtitle: 'Unlock your business potential with custom software solutions designed to fit.',
      content: 'IntelliForge builds custom software tailored to your unique workflows, customer needs, and business goals. From concept to deployment, we deliver scalable applications that improve efficiency and drive growth.',
      keyPoints: ['Custom business applications', 'SaaS platforms', 'Internal tools', 'Workflow automation', 'API integrations', 'Secure and scalable architecture'],
    },
  }

  for (const [slug, iconName] of Object.entries(serviceIconMap)) {
    const page = pageMap[slug]
    if (!page) {
      const fb = fallbacks[slug]
      if (fb) {
        services.push({ slug, title: fb.title, icon: iconName, shortDesc: fb.subtitle, h1: fb.h1, subtitle: fb.subtitle, content: fb.content, keyPoints: fb.keyPoints, cta: `Transform your business with IntelliForge's ${fb.title}` })
        continue
      }
      console.warn(`⚠ Service page not found: ${slug}`)
      continue
    }

    const paragraphs = filterParagraphs(page.paragraphs || [])
    const h1 = fixEncoding(page.headings?.[0]?.text || page.title || slug)
    const subtitle = paragraphs[0] || ''
    const content = paragraphs.slice(1, 4).join(' ') || subtitle
    const shortDesc = subtitle.length > 120 ? subtitle.substring(0, 117) + '...' : subtitle

    // Extract clean key points
    const keyPoints = extractKeyPoints(paragraphs, slug)

    services.push({
      slug,
      title: fixEncoding(page.title?.replace(' - Techday', '').replace(' - IntelliForge', '') || slug),
      icon: iconName,
      shortDesc,
      h1,
      subtitle,
      content,
      keyPoints: keyPoints.length ? keyPoints : [
        'Enterprise-grade solutions',
        'Scalable architecture',
        'Expert team delivery',
        'Ongoing support',
        'Modern tech stack',
        'Agile methodology',
      ],
      cta: `Transform your business with IntelliForge's ${page.title?.replace(' - Techday', '') || slug}`,
    })
  }

  return services
}

// --- Solution key points ---
const solutionKeyPointsMap = {
  'crm-pro': ['Lead & contact management', 'Sales pipeline automation', 'Customer interaction history', 'Analytics dashboard', 'Email campaign integration', 'Custom reporting'],
  'hr-master': ['Employee records management', 'Recruitment workflows', 'Attendance & leave tracking', 'Payroll integration', 'Performance reviews', 'HR analytics'],
  'project-plus': ['Task & milestone tracking', 'Team collaboration tools', 'Gantt charts & timelines', 'File sharing & docs', 'Progress monitoring', 'Resource allocation'],
  'invento-sync': ['Real-time stock tracking', 'Low stock alerts', 'Demand forecasting', 'Supplier management', 'Barcode/SKU support', 'Multi-warehouse support'],
  'social-sync': ['Multi-platform scheduling', 'Content calendar', 'Engagement analytics', 'Audience insights', 'Campaign management', 'Team collaboration'],
  'ecom-edge': ['Store customization', 'Product catalog management', 'Secure checkout', 'Order tracking', 'Inventory sync', 'SEO optimization'],
  'support-genius': ['Ticket management system', 'Multi-channel support', 'Auto-routing & escalation', 'Customer profiles', 'SLA tracking', 'Performance analytics'],
}

// --- Generate solutions ---
function generateSolutions() {
  const solutions = []

  for (const [techdaySlug, config] of Object.entries(solutionIconMap)) {
    const page = pageMap[techdaySlug]
    if (!page) {
      console.warn(`⚠ Solution page not found: ${techdaySlug}`)
      continue
    }

    const paragraphs = filterParagraphs(page.paragraphs || [])
    const h1 = fixEncoding(page.headings?.[0]?.text || config.title)
    const subtitle = paragraphs[0] || ''
    const content = paragraphs.slice(1, 3).join(' ') || subtitle
    const shortDesc = subtitle.length > 120 ? subtitle.substring(0, 117) + '...' : subtitle

    const keyPoints = solutionKeyPointsMap[config.appSlug] || ['Real-time dashboard', 'Automated workflows', 'Multi-user access', 'Analytics & reports', 'API integrations', 'Cloud-native platform']

    solutions.push({
      slug: config.appSlug,
      title: config.title,
      icon: config.icon,
      shortDesc,
      h1,
      subtitle,
      content,
      keyPoints: keyPoints.length ? keyPoints : [
        'Cloud-native platform',
        'Real-time analytics',
        'Seamless integration',
        'Automated workflows',
        'Dedicated support',
        'Scalable infrastructure',
      ],
      benefits: [
        'Increased operational efficiency',
        'Better decision making',
        'Reduced manual effort',
        'Improved customer satisfaction',
      ],
    })
  }

  return solutions
}

// --- Write services.js ---
const services = generateServices()
const servicesOutput = `import {
  Monitor, Search, Code2, Landmark, Cog, Palette, PenTool,
  Globe, Smartphone, ShieldCheck, Brain, Link2, GitBranch,
  Wifi, UserCog
} from 'lucide-vue-next'

export const services = ${JSON.stringify(services, null, 2)
  .replace(/"icon": "(\w+)"/g, '"icon": $1')}

export function getServiceBySlug(slug) {
  return services.find(s => s.slug === slug)
}
`

writeFileSync(resolve(__dirname, '../src/data/services.js'), servicesOutput, 'utf-8')
console.log(`✅ Generated services.js (${services.length} services)`)

// --- Write solutions.js ---
const solutions = generateSolutions()
const solutionsOutput = `import {
  Users, UserCheck, FolderKanban, Package,
  Share2, ShoppingCart, HeadphonesIcon
} from 'lucide-vue-next'

export const solutions = ${JSON.stringify(solutions, null, 2)
  .replace(/"icon": "(\w+)"/g, '"icon": $1')}

export function getSolutionBySlug(slug) {
  return solutions.find(s => s.slug === slug)
}
`

writeFileSync(resolve(__dirname, '../src/data/solutions.js'), solutionsOutput, 'utf-8')
console.log(`✅ Generated solutions.js (${solutions.length} solutions)`)
console.log('\n🎉 Data generation complete!')
