<script setup>
import ServicesItem from './ServicesItem.vue'

const servicesItems = [
  {
    id: 'web-design',
    name: 'Website design & development',
    description: 'I create a website that reflects your brand\'s professional identity and runs perfectly on every device.',
    image: null
  },
  {
    id: 'brand-building',
    name: 'Brand building & graphic design',
    description: 'I build an identity that your customers recognize and trust. That includes branding, photography, marketing materials, and more.',
    image: null
  },
  {
    id: 'advertisement',
    name: 'Advertisement & lead optimization',
    description: 'I create and test ads and strategies to find the ones that bring the most customers into your business.',
    image: null
  }
]
</script>

<template>
  <!-- Services Section -->
  <section
    id='services'
    class='bg-orange text-white p-24 services-section flex flex-col items-center'
  >
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
  </section>
</template>

<style scoped>
.services-grid {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* TODO Set dynamically. */
  width: 1500px;
  gap: var(--article-gap);
}
</style>
