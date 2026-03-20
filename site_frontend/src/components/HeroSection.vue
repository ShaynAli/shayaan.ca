<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import heroMountainBg from '@/assets/images/divider-hero-mountain-bg.svg'
import heroMountainFg from '@/assets/images/divider-hero-mountain-fg.svg'

gsap.registerPlugin(ScrollTrigger)

const heroSection = ref(null)
const mountainBg = ref(null)

onMounted(() => {
  // Parallax effect for background mountain.
  gsap.to(mountainBg.value, {
    y: 180,
    ease: 'none',
    scrollTrigger: {
      trigger: heroSection.value,
      start: 'top top',
      end: 'bottom top',
      scrub: true
    }
  })
})
</script>

<template>
  <section
    ref='heroSection'
    class='w-full h-screen bg-orange flex flex-col justify-end relative'
  >
    <h1 class='p-24 absolute top-0 left-0 min-w-176'>
      A Website<br />
      That Brings
      <br class='block xl:hidden' />
      You <br class='hidden xl:block 2xl:hidden' />More
      <br class='block xl:hidden' />Customers
    </h1>
    <div class='svg-section-divider absolute inset-0 overflow-hidden pointer-events-none'>
      <img
        ref='mountainBg'
        :src='heroMountainBg'
        class='absolute bottom-10 left-0 w-full'
      >
      <img
        :src='heroMountainFg'
        class='absolute bottom-0 left-0 w-full'
      >
    </div>
  </section>
</template>
