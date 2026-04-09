<script setup>
import { ref, onMounted, computed } from 'vue'
import { gsap } from 'gsap'
import PortfolioScreenshotGrid from './PortfolioScreenshotGrid.vue'
import PortfolioModal from './PortfolioModal.vue'

const props = defineProps({
  name: String,
  description: String,
  image: String,
  url: String,
  desktopScreenshots: {
    type: Array,
    default: () => []
  },
  mobileScreenshots: {
    type: Array,
    default: () => []
  }
})

const article = ref(null)
const screenshot = ref(null)
const img = ref(null)
const actionButtons = ref(null)
const isModalOpen = ref(false)
const hasHover = ref(true)
const isAnimated = ref(false)

const stackScreenshot1 = computed(() => {
  const screenshots = props.desktopScreenshots
  return screenshots.length > 0 ? screenshots[0] : props.image
})

const stackScreenshot2 = computed(() => {
  const screenshots = props.desktopScreenshots
  return screenshots.length > 1 ? screenshots[1] : props.image
})

const openModal = () => {
  isModalOpen.value = true
}

onMounted(() => {
  if (!article.value) return

  // Detect hover capability
  hasHover.value = window.matchMedia('(hover: hover)').matches

  const timeline = gsap.timeline({ paused: true })

  timeline
    .to(article.value, {
      backgroundColor: 'var(--brand-orange)',
      scale: 1.125,
      transformOrigin: 'center center',
      zIndex: 10,
      duration: 0.4,
      ease: 'power2.out'
    }, 0)

  if (img.value) {
    timeline.to(img.value, {
      filter: 'grayscale(0%)',
      duration: 0.4,
      ease: 'power2.out'
    }, 0)
  }

  if (screenshot.value) {
    timeline.to(screenshot.value, {
      '--stack-1-x': '16px',
      '--stack-1-y': '12px',
      '--stack-2-x': '32px',
      '--stack-2-y': '24px',
      duration: 0.4,
      ease: 'power2.out'
    }, 0)
  }

  if (actionButtons.value) {
    timeline.to(actionButtons.value, {
      opacity: 1,
      duration: 0.3,
      ease: 'power2.out'
    }, 0)
  }

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
  <article ref='article'>
    <div
      ref='screenshot'
      class='website-screenshot'
      :style="{
        '--stack-1-url': `url(${stackScreenshot1})`,
        '--stack-2-url': `url(${stackScreenshot2})`
      }"
      @click='openModal'
    >
      <img
        ref='img'
        :src='image'
        :alt='name'
      ></img>
    </div>
    <div class='website-info'>
      <h3>{{ name }}</h3>
      <p>{{ description }}</p>
      <div
        ref='actionButtons'
        class='action-buttons'
      >
        <button
          @click='openModal'
          class='text-title view-screenshots-btn'
        >View Screenshots</button>
        <a
          :href='url'
          class='text-title'
          target='_blank'
          rel='noopener noreferrer'
        >See Live</a>
      </div>
    </div>
  </article>

  <PortfolioModal
    :is-open='isModalOpen'
    :name='name'
    :desktop-screenshots='desktopScreenshots'
    :mobile-screenshots='mobileScreenshots'
    :fallback-image='image'
    @close='isModalOpen = false'
  />
</template>

<style scoped>
article {
  display: flex;
  align-items: center;
  gap: var(--article-gap);

  padding: var(--article-padding);
  margin: var(--article-margin-y) 0;
  color: var(--brand-white);
  border-radius: 48px;

  max-width: 1200px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  .website-screenshot {
    flex: 1;
    height: 100%;
    position: relative;
    cursor: pointer;
    overflow: visible;
    --stack-1-x: 8px;
    --stack-1-y: 6px;
    --stack-2-x: 16px;
    --stack-2-y: 12px;

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      aspect-ratio: 4 / 3;
      filter: grayscale(100%);
      z-index: -1;
      pointer-events: none;
    }

    &::before {
      background-image: var(--stack-1-url);
      transform: translate(var(--stack-1-x), var(--stack-1-y));
    }

    &::after {
      background-image: var(--stack-2-url);
      transform: translate(var(--stack-2-x), var(--stack-2-y));
      z-index: -2;
    }

    img {
      position: relative;
      z-index: 1;
      object-fit: contain;
      aspect-ratio: 4 / 3;
      overflow: hidden;
      filter: grayscale(100%);
    }
  }

  .website-info {
    display: flex;
    flex-direction: column;
    gap: 16px;
    flex: 3;

    p {
      font-size: var(--text-base);
      color: var(--brand-white-body);
    }

    .action-buttons {
      display: flex;
      gap: var(--button-gap);
      opacity: 0;

      button,
      a {
        background: none;
        border: none;
        color: var(--brand-white);
        cursor: pointer;
        padding: 0;
      }
    }
  }
}
</style>
