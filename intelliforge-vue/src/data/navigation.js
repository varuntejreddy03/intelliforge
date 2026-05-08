export const navigation = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about-us' },
  {
    name: 'Our Products',
    children: [
      { name: 'Experiense', path: '/experiense' },
      { name: 'Servicepack', path: '/servicepack' },
    ],
  },
  {
    name: 'Our Services',
    children: [
      { name: 'Technology Services', path: '/technology-services' },
      { name: 'Discovery Phase', path: '/discovery-phase' },
      { name: 'Custom Software Development', path: '/custom-software-development' },
      { name: 'FinTech Software Development', path: '/fintech-software-development' },
      { name: 'Product Engineering', path: '/product-engineering' },
      { name: 'UI/UX Design', path: '/ui-ux-design' },
      { name: 'Web Design', path: '/web-design' },
      { name: 'Web Development', path: '/web-development' },
      { name: 'Mobile App Development', path: '/mobile-app-development' },
      { name: 'QA & Testing', path: '/qa-testing' },
      { name: 'AI & ML Development', path: '/ai-ml-development' },
      { name: 'Blockchain Development', path: '/blockchain-development' },
      { name: 'DevOps Services', path: '/devops-services' },
      { name: 'Custom CDN Integration', path: '/custom-cdn-integration' },
      { name: 'Virtual CTO Services', path: '/virtual-cto-services' },
    ],
  },
  {
    name: 'Our Solutions',
    children: [
      { name: 'CRMPro', path: '/crm-pro' },
      { name: 'HRMaster', path: '/hr-master' },
      { name: 'ProjectPlus', path: '/project-plus' },
      { name: 'InventoSync', path: '/invento-sync' },
      { name: 'SocialSync', path: '/social-sync' },
      { name: 'EcomEdge', path: '/ecom-edge' },
      { name: 'SupportGenius', path: '/support-genius' },
    ],
  },
  {
    name: 'Careers',
    children: [
      { name: 'Employee Referral Program', path: '/employee-referral-program' },
      { name: 'Jobs', path: '/jobs' },
    ],
  },
  { name: 'Contact Us', path: '/contact-us' },
]
