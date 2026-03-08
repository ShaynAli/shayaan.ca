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
        title: metaTitle(
          'Freelance Web Developer in Vancouver | Professional Websites for Businesses',
        ),
        description: defaultDescription,
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
  isRouteLoading.value = false

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
