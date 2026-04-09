<script setup>
import website from '@/assets/images/item-services-website.svg'
import brush from '@/assets/images/item-services-brand.svg'
import ads from '@/assets/images/item-services-ads.svg'
import citySkyline from '@/assets/images/divider-city-skyline.svg'

import ServicesItem from './ServicesItem.vue'

const servicesItems = [
  {
    id: 'web-design',
    name: 'Website design & development',
    description: 'I create a website that reflects your brand\'s professional identity and runs perfectly on every device.',
    image: website
  },
  {
    id: 'brand-building',
    name: 'Brand building & graphic design',
    description: 'I build an identity that your customers recognize and trust. That includes branding, photography, marketing materials, and more.',
    image: brush
  },
  {
    id: 'advertisement',
    name: 'Advertisement & lead optimization',
    description: 'I create and test ads and strategies to find the ones that bring the most customers into your business.',
    image: ads
  }
]
</script>

<template>
  <!-- Services Section -->
  <section
    id='services'
    class='bg-orange text-white services-section w-full'
  >
    <div class='w-full p-24 flex flex-col items-center'>
      <h2 class='py-24 text-center'>Services I Offer</h2>
      <div class='services-grid'>
        <ServicesItem
          v-for='item in servicesItems'
          :key='item.id'
          :name='item.name'
          :description='item.description'
          :image='item.image'
        />
      </div>
    </div>
    <img
      :src='citySkyline'
      class='svg-section-divider mt-[10%] mb-[5%]'
    >
  </section>
</template>

<style scoped>
.services-grid {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* TODO Set dynamically. */
  width: 1500px;
}
</style>
