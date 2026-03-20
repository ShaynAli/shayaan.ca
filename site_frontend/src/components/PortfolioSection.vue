<script setup>
import railBridge from '@/assets/images/divider-rail-bridge.svg'
import PortfolioItem from './PortfolioItem.vue'

// TODO Compress these.
import wolfsburg from '@/assets/images/portfolio-wolfsburg.png'
import barefootpt from '@/assets/images/portfolio-barefoot.png'
import mccoy from '@/assets/images/portfolio-mccoy.png'

const portfolioItems = [
  {
    id: 'wolfsburg',
    name: 'Wolfsburg Autoworks',
    description: 'An auto shop in Abbotsford, BC that specializes in European vehicles.',
    image: wolfsburg,
    url: 'https://wolfsburg.nextsyte.com/',
    desktopScreenshots: [wolfsburg, wolfsburg, wolfsburg, wolfsburg],
    mobileScreenshots: [wolfsburg, wolfsburg, wolfsburg, wolfsburg]
  },
  {
    id: 'barefoot',
    name: 'The Barefoot PT',
    description: 'A physiotherapist focused on restoring movement and reducing pain.',
    image: barefootpt,
    url: 'https://thebarefootpt.com/',
    desktopScreenshots: [barefootpt, barefootpt, barefootpt, barefootpt],
    mobileScreenshots: [barefootpt, barefootpt, barefootpt, barefootpt]
  },
  {
    id: 'mccoy',
    name: 'The Reel McCoy',
    description: 'A professional photographer who builds brand visuals and visualizations.',
    image: mccoy,
    url: 'https://reel-mccoy.com/',
    desktopScreenshots: [mccoy, mccoy, mccoy, mccoy],
    mobileScreenshots: [mccoy, mccoy, mccoy, mccoy]
  }
]
</script>

<template>
  <!-- Portfolio Section -->
  <!-- TODO Hook up links. -->
  <section
    id='portfolio'
    class='text-white pt-24 portfolio-section'
  >
    <h2 class='py-24 text-center'>Websites & Brands I Have Built</h2>
    <div class='portfolio-grid'>
      <PortfolioItem
        v-for='item in portfolioItems'
        :key='item.id'
        :name='item.name'
        :description='item.description'
        :image='item.image'
        :url='item.url'
        :desktop-screenshots='item.desktopScreenshots'
        :mobile-screenshots='item.mobileScreenshots'
      />
    </div>
    <img
      :src='railBridge'
      class='svg-section-divider origin-right mt-[5%]'
    >
  </section>
</template>

<style scoped>
.portfolio-section {
  padding-left: var(--section-padding-x);
  padding-right: var(--section-padding-x);
}

.portfolio-grid {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
