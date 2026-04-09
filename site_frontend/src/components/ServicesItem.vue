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
    class='service-item'
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
      <h3 class='text-balance'>{{ name }}</h3>
      <p class='text-white-body text-pretty'>{{ description }}</p>
    </div>
  </article>
</template>

<style scoped>
.service-item {
  display: flex;
  gap: var(--article-gap);
  width: 100%;

  padding: var(--article-padding);
  margin: var(--article-margin-y) 0;
  border-radius: 48px;
  max-width: 1200px;
}

.service-image {
  flex: 0 0 clamp(200px, 30%, 324px);
  width: clamp(200px, 30%, 324px);
  /* TODO Set properly. */
}

img {
  width: 100%;
  height: auto;
  /* TODO Set properly. */
}

.service-info {
  flex: 1 1 auto;
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
    flex-direction: column;
  }

  .service-image {
    flex: 1 1 auto;
    width: 100%;
  }
}
</style>
