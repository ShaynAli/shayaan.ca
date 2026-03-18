<script setup>
import heroLake from '@/assets/images/divider-hero-lake.svg'
import lakeTreeline from '@/assets/images/divider-lake-treeline.svg'
</script>

<template>
  <section class='bg-orange text-white flex flex-col'>
    <img
      :src='heroLake'
      class='svg-section-divider origin-right mb-[5%]'
    >
    <div class='py-16 px-64 flex flex-col gap-12'>
      <h2 class='title-lg'>Made for Fraser Valley Businesses</h2>
      <h2 class='title-lg'>Lightning-fast and visually unique</h2>
      <h2 class='title-lg'>Only pay if you love it</h2>
    </div>
    <img
      :src='lakeTreeline'
      class='svg-section-divider origin-right -mt-[5%]'
    >
  </section>
</template>
