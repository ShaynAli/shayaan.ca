<script setup>
import { ref, computed } from 'vue'
import PortfolioScreenshotGrid from './PortfolioScreenshotGrid.vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  name: {
    type: String,
    required: true
  },
  desktopScreenshots: {
    type: Array,
    default: () => []
  },
  mobileScreenshots: {
    type: Array,
    default: () => []
  },
  fallbackImage: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['close'])

const isMobileView = ref(false)

const displayScreenshots = computed(() => {
  const screenshots = isMobileView.value ? props.mobileScreenshots : props.desktopScreenshots

  if (screenshots.length > 0) {
    return screenshots.slice(0, 4)
  }
  return Array(4).fill(props.fallbackImage)
})

const closeModal = () => {
  isMobileView.value = false
  emit('close')
}

const toggleMobileView = () => {
  isMobileView.value = !isMobileView.value
}
</script>

<template>
  <div
    v-if='isOpen'
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

    <PortfolioScreenshotGrid
      :screenshots='displayScreenshots'
      :name='name'
      :is-mobile-view='isMobileView'
    />
  </div>
</template>

<style scoped>
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
</style>
