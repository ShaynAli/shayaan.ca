import { createRouter, createWebHistory } from 'vue-router'

const metaTitle = (page) => `${page} | shayaan.ca`
const defaultTitle = 'shayaan.ca'
const defaultDescription =
  'Freelance web developer serving Vancouver and the Lower Mainland. I build fast, SEO-optimized websites with modern design and high performance to help businesses attract more customers and grow online.'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
      meta: {
        title: 'Fraser Valley Websites That Bring You More Customers | Shayaan',
        description:
          'Fast, modern websites and Google growth for service businesses in the Fraser Valley. Built to convert visitors into calls and customers.',
      },
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/Services.vue'),
      meta: {
        title: metaTitle('Websites and Google Growth for Fraser Valley Businesses'),
        description:
          'Custom websites, Google Business optimization, and Google Ads management for Fraser Valley service businesses.',
      },
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('../views/Portfolio.vue'),
      meta: {
        title: metaTitle('Websites Built for Local Businesses'),
        description:
          'Examples of fast, modern websites built for service businesses in the Fraser Valley.',
      },
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: () => import('../views/Pricing.vue'),
      meta: {
        title: metaTitle('Website Pricing for Fraser Valley Businesses'),
        description:
          'Flexible website pricing for local service businesses. Monthly plans or upfront builds available.',
      },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue'),
      meta: {
        title: metaTitle('About Shayaan | Fraser Valley Web Developer'),
        description:
          'Meet Shayaan, a developer helping Fraser Valley businesses grow online with fast, high-performing websites.',
      },
    },
    {
      path: '/audit',
      name: 'audit',
      component: () => import('../views/Audit.vue'),
      meta: {
        title: metaTitle('Free Website & Google Audit for Fraser Valley Businesses'),
        description:
          'Get a free audit of your website and Google presence to see how you can get more customers from Google.',
      },
    },
    {
      path: '/how-customers-find-local-businesses',
      name: 'how-customers-find',
      component: () => import('../views/HowCustomersFind.vue'),
      meta: {
        title: metaTitle('How Customers Find Local Businesses on Google'),
        description:
          'Learn how Google search, Maps, and websites work together to bring customers to local service businesses.',
      },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFound.vue'),
      meta: {
        title: metaTitle('Page Not Found'),
        description: 'The page you are looking for could not be found.',
      },
    },
  ],
})

router.afterEach((to) => {
  // Update meta information
  document.title = to.meta.title || defaultTitle
  const description = to.meta.description || defaultDescription
  let metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription) {
    metaDescription.setAttribute('content', description)
  } else {
    metaDescription = document.createElement('meta')
    metaDescription.name = 'description'
    metaDescription.content = description
    document.head.appendChild(metaDescription)
  }
})

export default router
