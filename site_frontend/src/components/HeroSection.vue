<script setup>
import heroMountain from '@/assets/images/divider-hero-mountain.svg'
</script>

<template>
  <section class='w-full h-screen bg-orange flex flex-col justify-end relative'>
    <h1 class='p-24 absolute top-0 left-0 min-w-[704px]'>
      A Website<br />
      That Brings
      <br class='block xl:hidden' />
      You <br class='hidden xl:block 2xl:hidden' />More
      <br class='block xl:hidden' />Customers
    </h1>
    <div class='p-16 text-title text-black flex flex-col lg:flex-row gap-10 justify-end items-end'>
      <router-link to='/'>Home</router-link>
      <span class='hidden lg:block'>/</span>
      <router-link to='/portfolio'>Portfolio</router-link>
      <span class='hidden lg:block'>/</span>
      <router-link to='/services'>Services</router-link>
      <span class='hidden lg:block'>/</span>
      <router-link
        to='/audit'
        class='text-white'
      >Free Audit</router-link>
    </div>
    <img
      :src='heroMountain'
      class='svg-section-divider origin-right'
    >
  </section>
</template>
