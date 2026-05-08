# IntelliForge Website — Complete Vue 3 Frontend-Only Development Prompt

---

## PROJECT OVERVIEW

Build a full multi-page professional website for IntelliForge, a technology services company.

The website should be frontend-only and built using Vue 3. The site structure, pages, services, solutions, products, careers, legal pages, and all content should follow the provided Techday reference data/content, but everything must be fully rebranded as IntelliForge.

The website should have a dark luxury technology aesthetic inspired by the IntelliForge logo.

Important:
- Frontend only
- No backend
- No database
- No signup
- No signin
- No forgot password
- No authentication
- No dashboard
- No admin panel
- No real payment integration
- All forms should be static frontend forms only
- Deployment should be Vercel-ready

---

## BRAND IDENTITY

Company Name: IntelliForge

Logo:
Hexagonal badge with “IF” initials, blue-to-purple gradient.
Text: “Intelli” in white bold, “Forge” in blue-purple gradient.

Color Palette:
- Primary Background: #060611
- Secondary Background / Cards: #0D0D1F
- Gradient Primary: #00B4FF → #7B2FFF
- Accent Glow: #4FC3F7
- Text Primary: #FFFFFF
- Text Secondary: #A0AEC0
- Border / Divider: rgba(255,255,255,0.08)
- CTA Button: linear-gradient(135deg, #00B4FF, #7B2FFF)
- Hover Glow: 0 0 20px rgba(0,180,255,0.35)

Typography:
- Headings: Inter or Plus Jakarta Sans — Bold / ExtraBold
- Body: Inter — Regular / Medium
- Labels / Tags: uppercase with letter-spacing 0.1em

Design Style:
- Dark luxury tech design
- Glassmorphism cards
- Subtle gradient borders
- Premium SaaS-style sections
- Clean navbar with frosted glass effect
- Smooth hover transitions
- Subtle animations
- Section dividers with thin gradient lines
- Mobile-first responsive layout

---

## TECH STACK

Use:

- Vue 3
- Vite
- Vue Router
- Tailwind CSS
- Lucide Vue Next for icons
- VueUse or simple Vue state if needed
- CSS animations or AOS-style scroll animations
- Vercel-ready deployment

Do not use:
- React
- Next.js
- Backend
- Express
- Node API
- Database
- Authentication
- Stripe real payment integration
- PayPal real payment integration

---

## IMPORTANT AUTH REMOVAL

Remove these completely:

- Sign In button from navbar
- /sign-in page
- /sign-up page
- /forgot-password page
- Username/password forms
- Account approval state
- Login/register links
- Any auth-related route
- Any auth-related component
- Any backend login logic

Navbar should not contain login/signup.

---

## SITE NAVIGATION

Sticky glassmorphism navbar:

Logo | Home | About Us | Our Products ▾ | Our Services ▾ | Our Solutions ▾ | Careers ▾ | Contact Us

No Sign In button.

Dropdown — Our Products:
- Experiense
- Servicepack

Dropdown — Our Services:
- Technology Services
- Discovery Phase
- Custom Software Development
- FinTech Software Development
- Product Engineering
- UI/UX Design
- Web Design
- Web Development
- Mobile App Development
- QA & Testing
- AI & ML Development
- Blockchain Development
- DevOps Services
- Custom CDN Integration
- Virtual CTO Services

Dropdown — Our Solutions:
- CRMPro
- HRMaster
- ProjectPlus
- InventoSync
- SocialSync
- EcomEdge
- SupportGenius

Dropdown — Careers:
- Employee Referral Program
- Jobs

---

## ROUTES TO BUILD

Create all these routes using Vue Router:

Main Pages:
- /
- /about-us
- /alliances
- /contact-us
- /our-services
- /our-solutions
- /sitemap

Service Pages:
- /technology-services
- /discovery-phase
- /custom-software-development
- /fintech-software-development
- /product-engineering
- /ui-ux-design
- /web-design
- /web-development
- /mobile-app-development
- /qa-testing
- /ai-ml-development
- /blockchain-development
- /devops-services
- /custom-cdn-integration
- /virtual-cto-services

Solution Pages:
- /crm-pro
- /hr-master
- /project-plus
- /invento-sync
- /social-sync
- /ecom-edge
- /support-genius

Product Pages:
- /experiense
- /servicepack

Career Pages:
- /jobs
- /employee-referral-program

Legal Pages:
- /privacy-policy
- /terms-conditions

Do not create:
- /sign-in
- /sign-up
- /forgot-password

---

## PAGE-BY-PAGE CONTENT

---

# 1. HOME PAGE — /

Hero Slider with 3 slides:

Slide 1:
Title:
Empower Your Vision with Our Cutting-Edge Technology Services

Subtitle:
Unlock growth with our tech services. From software to strategy, we've got you covered. Stay ahead in the digital era with us.

CTA:
Learn More

Slide 2:
Title:
Ignite Innovation: Explore Our Discovery Phase Services

Subtitle:
Unlock insights and plan for success with our Discovery Phase services. Tailored analysis to fuel your project's journey.

CTA:
Learn More

Slide 3:
Title:
Crafting Custom Solutions: Your Software, Your Way

Subtitle:
Unlock your business potential with custom software solutions designed to fit. From idea to implementation, we deliver excellence.

CTA:
Learn More

---

Services Grid — 4 Cards:

1. Web Development
Description:
Crafting digital experiences with precision and creativity to help businesses establish a powerful online presence.

2. Mobile App Development
Description:
Empower your business and engage your audience with high-performance mobile applications.

3. QA & Testing
Description:
Elevate your software quality with our comprehensive QA and testing solutions.

4. DevOps Services
Description:
Streamline your development process and accelerate deployment with efficient DevOps practices.

---

GenAI Banner Section:

Heading:
Generative Artificial Intelligence Solutions for the Future

Body:
Unlock tomorrow's potential with our innovative generative AI solutions, driving creativity and growth for your business.

Buttons:
- Consult Now
- Learn More

---

For Business Section — 4 Cards:

1. CRMPro
2. HRMaster
3. ProjectPlus
4. InventoSync

---

Social Management Banner:

Heading:
Seamless Social Management

Body:
Streamline your social media workflows and enhance engagement with smart automation and analytics.

CTA:
Find out how

---

# 2. ABOUT US — /about-us

Use IntelliForge people-first company philosophy.

Sections:

1. Our Story
Content:
At IntelliForge, we believe technology should empower people, businesses, and communities. Our journey began with a simple mission — to help organizations transform their ideas into reliable, scalable, and impactful digital solutions.

2. Our Mission
Content:
Our mission is to become a trusted technology partner for businesses by delivering innovative software, intelligent automation, and future-ready digital solutions.

3. Our Values
Include cards:
- Innovation
- Integrity
- Collaboration
- Customer Success
- Continuous Improvement

4. Why IntelliForge
Content:
We combine strategy, design, engineering, and emerging technologies to help businesses solve real problems. From startups to growing enterprises, IntelliForge acts as a trusted companion in the digital transformation journey.

---

# 3. ALLIANCES — /alliances

Heading:
Alliances

Intro:
IntelliForge partners with industry leaders to drive innovation and deliver advanced solutions, leveraging diverse expertise for the benefit of our clients.

Sections:
- Partner logo placeholder grid
- Technology partner cards
- Business solution cards
- For Business product cards: CRMPro, HRMaster, ProjectPlus, InventoSync

---

# 4. CONTACT US — /contact-us

Page Heading:
Contact Us

Contact Form:
- Name
- Email
- Subject
- Message
- Submit Button

Important:
This is frontend-only. On submit, show a simple success message:
“Thank you for contacting IntelliForge. Our team will get back to you soon.”

No backend API.

Contact Info Cards:

USA:
IntelliForge Inc  
9700 Richmond Ave. #349  
Houston, TX 77042

India:
2nd Floor, 1130, Rd Number 36  
Jubilee Hills  
Hyderabad, Telangana 500033

Phone:
832-514-3903

Fax:
832-497-1809

Email:
info@intelliforge.com

---

# 5. OUR SERVICES — /our-services

Heading:
Our Services

Subtitle:
Explore IntelliForge’s full range of technology services designed to help businesses build, scale, and transform.

Create 15 service cards:

1. Technology Services
Description:
End-to-end technology services that transform business challenges into scalable digital solutions.

2. Discovery Phase
Description:
Structured research, analysis, and planning to define project goals, features, risks, and technical direction.

3. Custom Software Development
Description:
Tailor-made software solutions designed around your business needs, workflows, and growth plans.

4. FinTech Software Development
Description:
Secure, scalable, and compliant FinTech applications for modern financial businesses.

5. Product Engineering
Description:
From idea validation to product launch, we engineer reliable and scalable digital products.

6. UI/UX Design
Description:
User-centered digital experiences that are intuitive, engaging, and business-focused.

7. Web Design
Description:
Modern, responsive, and conversion-focused website designs that strengthen your brand.

8. Web Development
Description:
High-performance web applications built using modern technologies and best practices.

9. Mobile App Development
Description:
Powerful mobile applications for iOS, Android, and cross-platform experiences.

10. QA & Testing
Description:
Comprehensive testing services to ensure performance, reliability, and security.

11. AI & ML Development
Description:
Intelligent AI and ML solutions that automate processes and unlock business insights.

12. Blockchain Development
Description:
Secure and transparent blockchain solutions for decentralized applications and digital trust.

13. DevOps Services
Description:
CI/CD, infrastructure automation, monitoring, and deployment optimization.

14. Custom CDN Integration
Description:
Improve performance, reliability, and global content delivery with custom CDN solutions.

15. Virtual CTO Services
Description:
Strategic technology leadership for startups and businesses without a full-time CTO.

Each card should include:
- Icon
- Title
- Short description
- Learn More link

---

# 6. INDIVIDUAL SERVICE PAGES

Use one reusable ServiceDetailPage.vue template.

Each service page should include:
- PageHero with title and breadcrumb
- H1
- Subtitle
- Detailed sections
- Feature cards
- CTA banner
- About IntelliForge section
- Footer

Use breadcrumb format:
Home > Services > Page Name

---

## Technology Services — /technology-services

H1:
Where Technology Transforms Possibilities into Realities!

Subheading:
Elevate your business with our comprehensive range of cutting-edge technology solutions.

Content:
IntelliForge provides complete technology services that help businesses modernize, innovate, and grow. From digital strategy and software development to cloud enablement and emerging technologies, we support every stage of the technology journey.

Key Points:
- Digital transformation consulting
- Software architecture
- Cloud-ready solutions
- Scalable application development
- Technology modernization
- Long-term product support

CTA:
Transform your business with IntelliForge's Technology Services

---

## Discovery Phase — /discovery-phase

H1:
Discovering Insights, Fueling Innovation!

Content:
Our Discovery Phase helps businesses move from idea to clarity. We analyze goals, users, features, risks, technical feasibility, timelines, and budget expectations before development begins.

Key Points:
- Requirement analysis
- Market and competitor study
- Feature planning
- Technical feasibility
- User journey mapping
- Roadmap creation
- Cost and timeline estimation

---

## Custom Software Development — /custom-software-development

H1:
Crafting Custom Solutions: Your Software, Your Way

Content:
IntelliForge builds custom software tailored to your unique workflows, customer needs, and business goals. From concept to deployment, we deliver scalable applications that improve efficiency and drive growth.

Key Points:
- Custom business applications
- SaaS platforms
- Internal tools
- Workflow automation
- API integrations
- Secure and scalable architecture

---

## FinTech Software Development — /fintech-software-development

H1:
Your Partner in FinTech Software Development!

Content:
We create secure and scalable financial technology solutions for businesses that need reliability, compliance, and modern user experiences.

Key Points:
- Digital payment systems
- Financial dashboards
- Banking integrations
- Wallet solutions
- Compliance-focused development
- Secure transaction workflows

---

## Product Engineering — /product-engineering

H1:
Let's Turn Ideas into Reality

Content:
IntelliForge helps businesses transform ideas into complete digital products. We support product strategy, design, engineering, testing, launch, and continuous improvement.

Key Points:
- Product planning
- MVP development
- Architecture design
- Agile development
- Product scaling
- Maintenance and support

---

## UI/UX Design — /ui-ux-design

H1:
User-Centered UI/UX Design Services

Content:
We design digital experiences that are visually appealing, easy to use, and aligned with business objectives.

Key Points:
- User research
- Wireframes
- Prototypes
- Design systems
- Mobile-first design
- Usability improvements

---

## Web Design — /web-design

H1:
Crafting Digital Experiences that Captivate & Connect!

Content:
Our web design services help brands create a strong digital identity with modern, responsive, and conversion-focused designs.

Key Points:
- Business website design
- Landing pages
- Responsive layouts
- Brand-focused visuals
- Conversion-focused UI
- Clean design systems

---

## Web Development — /web-development

H1:
Building Your Digital Presence from Concept to Reality!

Content:
IntelliForge develops fast, secure, and scalable web applications that help businesses grow online.

Key Points:
- Corporate websites
- Web apps
- CMS-based websites
- API integration
- Performance optimization
- SEO-friendly structure

---

## Mobile App Development — /mobile-app-development

H1:
Transforming Your Ideas into Innovative Solutions!

Content:
We build mobile applications that deliver smooth performance and engaging user experiences across iOS, Android, and cross-platform environments.

Mention:
- iOS
- Android
- React Native
- Cross-platform app development

Key Points:
- Mobile UI/UX
- App development
- API integration
- Push notifications
- Testing
- App store readiness

---

## QA & Testing — /qa-testing

H1:
Ensuring Quality and Reliability

Content:
Our QA and testing services ensure that your software performs smoothly, securely, and reliably before it reaches users.

Key Points:
- Manual testing
- Automation testing
- Functional testing
- Regression testing
- Performance testing
- Bug reporting

---

## AI & ML Development — /ai-ml-development

H1:
Harness the Power of Artificial Intelligence

Content:
IntelliForge builds AI and ML solutions that help businesses automate workflows, analyze data, and make smarter decisions.

Key Points:
- AI chatbots
- Predictive analytics
- Machine learning models
- NLP solutions
- Recommendation systems
- Business automation

---

## Blockchain Development — /blockchain-development

H1:
Building Trust Through Innovative Blockchain Solutions!

Content:
We develop blockchain-based solutions that improve transparency, security, and trust in digital systems.

Key Points:
- Smart contracts
- DApps
- Token systems
- Blockchain consulting
- Secure transaction systems
- Decentralized platforms

---

## DevOps Services — /devops-services

H1:
Where Collaboration and Efficiency Drive Your Success!

Content:
Our DevOps services improve collaboration, automation, deployment speed, and system reliability.

Mention:
- CI/CD
- Infrastructure as Code
- Containerization
- Monitoring
- Cloud deployment

Key Points:
- CI/CD pipeline setup
- Docker-based deployment
- Cloud infrastructure
- Monitoring and logging
- Release automation
- Performance optimization

---

## Custom CDN Integration — /custom-cdn-integration

H1:
Streamlining Performance with CDN Integration!

Content:
We help businesses improve website and application speed with custom CDN integration and performance optimization.

Key Points:
- Faster content delivery
- Reduced latency
- Improved uptime
- Global performance
- Security enhancement
- Caching strategies

---

## Virtual CTO Services — /virtual-cto-services

H1:
Your Trusted Partner in Technology Leadership!

Content:
IntelliForge provides strategic technology leadership for startups and growing businesses that need expert guidance without hiring a full-time CTO.

Key Points:
- Technology roadmap
- Architecture planning
- Team guidance
- Vendor selection
- Product strategy
- Long-term scaling decisions

---

# 7. OUR SOLUTIONS — /our-solutions

H1:
Comprehensive Business Solutions

Subtitle:
IntelliForge delivers ready-to-adapt business solutions that help companies manage customers, teams, projects, inventory, social media, ecommerce, and support.

Create 7 solution cards:

1. CRMPro
2. HRMaster
3. ProjectPlus
4. InventoSync
5. SocialSync
6. EcomEdge
7. SupportGenius

CTA:
Reach out to us now and let's start transforming your business together.

---

# 8. INDIVIDUAL SOLUTION PAGES

Use one reusable SolutionDetailPage.vue template.

Each solution page should include:
- PageHero
- Breadcrumb
- H1
- Description
- Feature cards
- Business benefits
- CTA banner

Breadcrumb format:
Home > Solutions > Page Name

---

## CRMPro — /crm-pro

H1:
Your Partner in Streamlining Customer Relationships!

Content:
CRMPro helps businesses manage leads, customers, sales pipelines, communication, and analytics in one place.

Key Points:
- Lead management
- Sales automation
- Customer interaction history
- Analytics dashboard
- Dedicated support
- Better customer relationships

---

## HRMaster — /hr-master

H1:
Your Compassionate Guide to Building Stronger Teams!

Content:
HRMaster simplifies human resource management from recruitment to retirement.

Key Points:
- Employee records
- Recruitment management
- Attendance tracking
- Payroll support
- Performance tracking
- HR analytics

---

## ProjectPlus — /project-plus

H1:
Your All-in-One Project Management Solution!

Content:
ProjectPlus helps teams plan, track, collaborate, and deliver projects efficiently.

Key Points:
- Task tracking
- Team collaboration
- Milestone planning
- Progress monitoring
- File sharing
- Project analytics

---

## InventoSync — /invento-sync

H1:
Your Key to Efficient and Streamlined Operations!

Content:
InventoSync helps businesses manage inventory, stock levels, forecasting, and operations.

Key Points:
- Real-time inventory tracking
- Stock alerts
- Forecasting
- Supplier management
- Reports
- Operational visibility

---

## SocialSync — /social-sync

H1:
Your Ultimate Social Media Management Companion!

Content:
SocialSync allows businesses to manage social media scheduling, analytics, engagement, and content workflows.

Key Points:
- Post scheduling
- Social analytics
- Engagement tracking
- Multi-platform support
- Campaign planning
- Performance insights

---

## EcomEdge — /ecom-edge

H1:
Where Your Online Store Dreams Take Flight!

Content:
EcomEdge helps businesses build and manage scalable ecommerce experiences.

Key Points:
- Store customization
- Product management
- Secure checkout UI
- Order management UI
- UX optimization
- Scalable ecommerce structure

Note:
Since this is frontend-only, payment UI can be static. Do not integrate real payment APIs.

---

## SupportGenius — /support-genius

H1:
Elevating Customer Support to New Heights!

Content:
SupportGenius helps businesses manage support tickets, customer conversations, automation, and analytics.

Key Points:
- Ticket management
- Customer support workflows
- Automation
- Response tracking
- Analytics
- Better customer satisfaction

---

# 9. PRODUCT PAGES

---

## Experiense — /experiense

H1:
Experiense

Content:
Introducing the world's first Virtual Sales Development Representative, a game changer in full-cycle sales automation.

Introducing world's cheapest human-like AI agents powered by generative AI. Whether it's lead qualification, lead generation, or customer service, our AI agents excel beyond expectations.

No-code setup, easy to implement, and costing just a tenth of a real agent, they deliver unmatched efficiency and performance.

CTA:
Visit www.experiense.ai

Important:
The CTA can be a normal external link button.

---

## Servicepack — /servicepack

H1:
Servicepack

Content:
An AI-powered Omni-Channel Interaction Analytics Platform.

Translating omni-channel customer calls, chat, emails, reviews, and interactions into strategic customer experience insights.

Our AI-powered platform excels in comprehending customer conversations. Leveraging modern Large Language Models, it extracts valuable business insights from every interaction, helping organizations enhance customer experiences and make data-driven decisions with confidence.

Include:
- Static pricing widget
- Quantity selector UI
- Static Stripe / PayPal option buttons only

Important:
Do not implement real payment integration.
Do not use backend.
Do not collect real payment data.
This is only frontend UI.

---

# 10. CAREERS

---

## Jobs — /jobs

H1:
Innovate, Impact, Inspire

Intro:
At IntelliForge, we're looking for passionate individuals to join our dynamic team. Dive into a culture of innovation, collaboration, and respect, where your skills and ideas are valued as you help shape the future.

Job listings as accordion or cards:

1. Software Developers — Entry to Senior
Skills:
Java, J2EE, Spring Boot, React JS, SQL, MongoDB

2. Salesforce Developers — Entry to Senior
Skills:
Apex, LWC, Visualforce, Einstein

3. SDET — Entry to Senior
Skills:
Selenium, Cucumber, Postman, REST Services

4. Software Developer — Azure Stack
Skills:
.NET Core, Angular, PowerBI, SQL Server

Apply Address:
IntelliForge Inc  
9894 Bissonnet St. Suite 815  
Houston, TX 77036

Add CTA:
Send your resume to info@intelliforge.com

---

## Employee Referral Program — /employee-referral-program

H1:
Empower Your Network: Refer & Earn!

Content:
At IntelliForge, we believe great people know great people. Our Employee Referral Program encourages team members to refer skilled professionals who can contribute to our mission of building innovative technology solutions.

Referral Bonus:
$1000 bonus for successful eligible referrals.

Sections:
- How It Works
- Eligibility Rules
- Payout Terms
- Why Refer
- Start Referring

Important:
This is static frontend content only.

---

# 11. LEGAL PAGES

---

## Privacy Policy — /privacy-policy

H1:
Privacy Policy

Sections:
1. Information We Collect
2. How We Use Information
3. Information Sharing
4. Data Security
5. Cookies and Tracking
6. Changes to This Policy
7. Contact Us

Contact:
info@intelliforge.com

---

## Terms & Conditions — /terms-conditions

H1:
Terms & Conditions

Sections:
1. Acceptance of Terms
2. Use of Website
3. Intellectual Property
4. Services Information
5. Limitation of Liability
6. Changes to Terms
7. Contact Information

Contact:
info@intelliforge.com

---

# 12. SITEMAP PAGE — /sitemap

Create a clean sitemap page listing all major website URLs grouped by section.

Groups:
- Main Pages
- Services
- Solutions
- Products
- Careers
- Legal

Do not list auth pages.

---

## REUSABLE COMPONENTS

Create these Vue components:

1. Navbar.vue
Features:
- Sticky top navbar
- Glassmorphism style
- Logo
- Desktop dropdowns
- Mobile hamburger menu
- Slide-out mobile drawer
- No Sign In button
- Active link highlighting

2. Footer.vue
6-column layout:

Column 1 — What's New:
- CRMPro
- HRMaster
- ProjectPlus
- InventoSync
- SocialSync
- EcomEdge
- SupportGenius

Column 2 — IntelliForge Services:
- Technology Services
- Discovery Phase
- Custom Software Development
- FinTech Software Development
- Product Engineering
- UI/UX Design
- View All Services

Column 3 — IntelliForge Solutions:
- CRM
- HRM
- Project Management
- Inventory
- Social Media
- E-commerce
- Support Ticketing

Column 4 — Quick Links:
- Privacy Policy
- Terms & Conditions
- Sitemap

Column 5 — Company:
- Careers
- About Us
- Privacy at IntelliForge
- Talk to Us

Column 6 — IntelliForge:
- Referral Program
- Jobs at IntelliForge
- Sitemap

Bottom Bar:
- Social icons: Facebook, Twitter/X, LinkedIn
- Copyright © 2024 All Rights Reserved - IntelliForge

3. HeroSlider.vue
Features:
- Full-width hero
- Auto-play slider
- Pause on hover
- Previous / next arrows
- Dot indicators
- Smooth transition
- Animated gradient background

4. ServiceCard.vue
Props:
- icon
- title
- description
- link

5. SolutionCard.vue
Props:
- title
- description
- link

6. CTABanner.vue
Props:
- title
- description
- primaryButtonText
- primaryButtonLink

7. PageHero.vue
Props:
- title
- breadcrumb
- subtitle

8. AboutSection.vue
Reusable short section about IntelliForge.

9. ProductCard.vue
For products if needed.

10. JobCard.vue
For career listings.

11. ContactForm.vue
Frontend-only form with success message.

---

## STANDARD INNER PAGE TEMPLATE

All inner pages should follow this structure:

PageHero with gradient overlay
↓
Breadcrumb
↓
H1 + subtitle
↓
Main content section
↓
Feature cards / content blocks
↓
CTA banner
↓
About IntelliForge section
↓
Footer

Example CTA:
Transform your business with IntelliForge.

---

## CARD DESIGN

Use this design style:

- Background: #0D0D1F
- Border: 1px solid rgba(255,255,255,0.08)
- Border radius: 16px
- Padding: 24px
- Hover: slight translateY(-4px)
- Hover border glow
- Hover box-shadow: 0 0 20px rgba(0,180,255,0.25)
- Icon with blue-purple gradient background
- Learn More link with arrow

---

## BUTTON DESIGN

Primary Button:
- Background: linear-gradient(135deg, #00B4FF, #7B2FFF)
- White text
- Rounded-lg
- px-6 py-3
- Hover glow

Secondary Button:
- Transparent background
- Gradient border
- White text
- Hover gradient fill

---

## CSS DESIGN DETAILS

Gradient Text:

Use:
background: linear-gradient(135deg, #00B4FF, #7B2FFF);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;

Glass Card:

Use:
background: rgba(13, 13, 31, 0.7);
backdrop-filter: blur(12px);
border: 1px solid rgba(255,255,255,0.08);
border-radius: 16px;

Section Spacing:
- py-20 for major sections
- py-16 for smaller sections

Container:
max-w-7xl mx-auto px-4 sm:px-6 lg:px-8

---

## DATA FILES

Create reusable data files:

src/data/navigation.js
src/data/services.js
src/data/solutions.js
src/data/products.js
src/data/jobs.js
src/data/footerLinks.js

All service and solution pages should be generated from reusable data where possible.

Avoid repeating the same layout manually too many times.

---

## VUE PROJECT FOLDER STRUCTURE

Use this folder structure:

intelliforge-vue/
├── public/
│   └── logo.png
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.vue
│   │   ├── Footer.vue
│   │   ├── HeroSlider.vue
│   │   ├── ServiceCard.vue
│   │   ├── SolutionCard.vue
│   │   ├── ProductCard.vue
│   │   ├── JobCard.vue
│   │   ├── CTABanner.vue
│   │   ├── PageHero.vue
│   │   ├── AboutSection.vue
│   │   └── ContactForm.vue
│   ├── data/
│   │   ├── navigation.js
│   │   ├── services.js
│   │   ├── solutions.js
│   │   ├── products.js
│   │   ├── jobs.js
│   │   └── footerLinks.js
│   ├── pages/
│   │   ├── Home.vue
│   │   ├── AboutUs.vue
│   │   ├── Alliances.vue
│   │   ├── ContactUs.vue
│   │   ├── Sitemap.vue
│   │   ├── services/
│   │   │   ├── OurServices.vue
│   │   │   └── ServiceDetail.vue
│   │   ├── solutions/
│   │   │   ├── OurSolutions.vue
│   │   │   └── SolutionDetail.vue
│   │   ├── products/
│   │   │   ├── Experiense.vue
│   │   │   └── Servicepack.vue
│   │   ├── careers/
│   │   │   ├── Jobs.vue
│   │   │   └── EmployeeReferral.vue
│   │   └── legal/
│   │       ├── PrivacyPolicy.vue
│   │       └── TermsConditions.vue
│   ├── router/
│   │   └── index.js
│   ├── App.vue
│   ├── main.js
│   └── style.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── package.json
└── vercel.json

---

## TAILWIND CONFIG

Extend Tailwind with:

theme: {
  extend: {
    colors: {
      brand: {
        blue: '#00B4FF',
        purple: '#7B2FFF',
        dark: '#060611',
        card: '#0D0D1F',
      }
    },
    backgroundImage: {
      'brand-gradient': 'linear-gradient(135deg, #00B4FF, #7B2FFF)',
    },
    fontFamily: {
      sans: ['Inter', 'Plus Jakarta Sans', 'sans-serif'],
    },
    boxShadow: {
      glow: '0 0 20px rgba(0,180,255,0.35)',
    }
  }
}

---

## VERCEL CONFIG

Add vercel.json for Vue Router history mode:

{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}

---

## RESPONSIVE REQUIREMENTS

The website must work perfectly on:

- Mobile
- Tablet
- Laptop
- Desktop

Navbar:
- Desktop: normal menu with dropdowns
- Mobile: hamburger menu
- Dropdowns should be usable on mobile also

Cards:
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3 or 4 columns depending on section

Hero:
- Mobile-friendly text sizes
- CTA buttons should stack on small screens

---

## SEO REQUIREMENTS

Add basic SEO-friendly structure:

- Proper page titles using document.title in route meta or simple Vue composable
- Proper H1 on every page
- Meaningful meta descriptions where possible
- Semantic HTML
- Sitemap page
- Clean URLs

---

## CONTENT RULES

Important:
- Replace all “Techday” mentions with “IntelliForge”
- Do not use lorem ipsum
- Do not use placeholder filler paragraphs
- Use professional business English
- Keep service and solution names exactly:
  - CRMPro
  - HRMaster
  - ProjectPlus
  - InventoSync
  - SocialSync
  - EcomEdge
  - SupportGenius
- Contact email must be info@intelliforge.com
- Keep Hyderabad office address
- Keep Houston office address
- No auth content anywhere

---

## FINAL DELIVERABLE

Generate a complete Vue 3 frontend-only project with:

- All pages created
- All routes configured
- Fully responsive layout
- Dark luxury IntelliForge branding
- Vue Router navigation
- Reusable components
- Reusable data files
- Contact form frontend success message
- Static Servicepack pricing UI only
- No backend
- No authentication
- No signup/signin
- No payment API
- No database
- Vercel-ready setup
- Clean beginner-readable code
- Professional production-level UI