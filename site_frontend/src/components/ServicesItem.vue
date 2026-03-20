<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const props = defineProps({
  name: String,
  description: String,
  image: String
})

const article = ref(null)
const imageContainer = ref(null)
const info = ref(null)
const hasHover = ref(true)
const isAnimated = ref(false)

onMounted(() => {
  if (!article.value) return

  // Detect hover capability
  hasHover.value = window.matchMedia('(hover: hover)').matches

  const timeline = gsap.timeline({ paused: true })

  timeline.to(article.value, {
    scale: 1.05,
    duration: 0.4,
    ease: 'power2.out'
  })

  if (hasHover.value) {
    // Hover-enabled devices: use mouse events
    article.value.addEventListener('mouseenter', () => timeline.play())
    article.value.addEventListener('mouseleave', () => timeline.reverse())
  } else {
    // Non-hover devices: use scroll-based animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isAnimated.value) {
            timeline.play()
            isAnimated.value = true
          }
        })
      },
      {
        threshold: 0.5
      }
    )
    observer.observe(article.value)
  }
})
</script>

<template>
  <article
    ref='article'
    class='service-item col-span-2 grid grid-cols-subgrid items-start'
  >
    <div
      ref='imageContainer'
      class='service-image'
    >
      <img
        v-if='image'
        :src='image'
        :alt='name'
      ></img>
      <div
        v-else
        class='placeholder-svg'
      >
        <span>Image placeholder</span>
      </div>
    </div>
    <div
      ref='info'
      class='service-info'
    >
      <h3>{{ name }}</h3>
      <p class='text-white-body'>{{ description }}</p>
    </div>
  </article>
</template>

<style scoped>
.service-image {
  width: 100%;
  height: 100%;
}

img {
  width: 100%;
  height: auto;
}

.placeholder-svg {
  width: 100%;
  height: 100%;
  background: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  color: #666666;
}

@media (max-width: 768px) {
  .service-item {
    grid-column: span 1;
    display: flex;
    flex-direction: column;
    gap: var(--article-gap);
  }
}
</style>
