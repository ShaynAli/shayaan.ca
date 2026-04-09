<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { gsap } from 'gsap'

const props = defineProps({
  screenshots: {
    type: Array,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  isMobileView: {
    type: Boolean,
    default: false
  }
})

const selectedScreenshot = ref(null)
const gridItems = ref([])

const selectScreenshot = (index) => {
  selectedScreenshot.value = index
}

onMounted(async () => {
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
})
</script>

<template>
  <div
    v-if='selectedScreenshot === null'
    class='screenshot-grid'
  >
    <div
      v-for='(shot, index) in screenshots'
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
      :src='screenshots[selectedScreenshot]'
      :alt='`${name} screenshot ${selectedScreenshot + 1}`'
      :class='{ "mobile-aspect": isMobileView }'
      class='solo-image'
    />
  </div>
</template>

<style scoped>
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
