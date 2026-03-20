<script setup>
import { ref, onMounted, computed, watch, nextTick } from 'vue'
import { gsap } from 'gsap'

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
const selectedScreenshot = ref(null)
const isMobileView = ref(false)
const gridItems = ref([])
const hasHover = ref(true)
const isAnimated = ref(false)

const displayScreenshots = computed(() => {
  const screenshots = isMobileView.value ? props.mobileScreenshots : props.desktopScreenshots

  if (screenshots.length > 0) {
    return screenshots.slice(0, 4)
  }
  return Array(4).fill(props.image)
})

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
  selectedScreenshot.value = null
}

const closeModal = () => {
  isModalOpen.value = false
  selectedScreenshot.value = null
  isMobileView.value = false
}

const selectScreenshot = (index) => {
  selectedScreenshot.value = index
}

const toggleMobileView = () => {
  isMobileView.value = !isMobileView.value
}

watch(isModalOpen, async (newVal) => {
  if (newVal) {
    await nextTick()
    if (gridItems.value.length === 4) {
      gsap.fromTo(gridItems.value,
        {
          scale: 0,
          opacity: 0,
          x: 0,
          y: 0
        },
        {
          scale: 1,
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: 'back.out(1.7)'
        }
      )
    }
  }
})

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

  <div
    v-if='isModalOpen'
    class='modal-overlay'
    @click.self='closeModal'
  >
    <div class='modal-controls'>
      <button
        @click.stop='toggleMobileView'
        class='aspect-toggle'
      >
        {{ isMobileView ? 'Desktop' : 'Mobile' }} View
      </button>
      <button
        @click='closeModal'
        class='close-button'
      >×</button>
    </div>

    <div
      v-if='selectedScreenshot === null'
      class='screenshot-grid'
    >
      <div
        v-for='(shot, index) in displayScreenshots'
        :key='index'
        :ref='el => { if (el) gridItems[index] = el }'
        class='grid-item'
        @click='selectScreenshot(index)'
      >
        <img
          :src='shot'
          :alt='`${name} screenshot ${index + 1}`'
          :class='{ "mobile-aspect": isMobileView }'
        />
      </div>
    </div>

    <div
      v-else
      class='solo-view'
      @click='selectedScreenshot = null'
    >
      <img
        :src='displayScreenshots[selectedScreenshot]'
        :alt='`${name} screenshot ${selectedScreenshot + 1}`'
        :class='{ "mobile-aspect": isMobileView }'
        class='solo-image'
      />
    </div>
  </div>
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

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.95);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-controls {
  display: flex;
  gap: 16px;
  margin-bottom: 32px;
  align-items: center;
  position: absolute;
  top: 32px;
  right: 32px;
}

.aspect-toggle {
  background-color: var(--brand-white);
  color: var(--brand-black);
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  font-size: var(--text-base);
  font-family: inherit;

  &:hover {
    background-color: var(--brand-orange);
    color: var(--brand-white);
  }
}

.close-button {
  background: none;
  border: none;
  font-size: 48px;
  cursor: pointer;
  color: var(--brand-white);
  line-height: 1;
  padding: 0;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: var(--brand-orange);
  }
}

.screenshot-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  padding: 64px;
  max-width: 1400px;
  max-height: calc(100vh - 128px);

  .grid-item {
    cursor: pointer;
    transition: transform 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      transform: scale(1.05);
    }

    img {
      width: 100%;
      height: auto;
      max-height: calc((100vh - 200px) / 2);
      border-radius: 8px;
      aspect-ratio: 4 / 3;
      object-fit: contain;
      display: block;

      &.mobile-aspect {
        aspect-ratio: 9 / 16;
        max-height: calc((100vh - 200px) / 2);
      }
    }
  }
}

.solo-view {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .solo-image {
    max-width: 90%;
    max-height: 80vh;
    border-radius: 8px;
    object-fit: contain;
    aspect-ratio: 4 / 3;

    &.mobile-aspect {
      aspect-ratio: 9 / 16;
      max-height: 85vh;
    }
  }
}
</style>
