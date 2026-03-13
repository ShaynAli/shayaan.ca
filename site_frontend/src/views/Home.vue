<script setup>
import heroMountain from '@/assets/images/hero-mountain.svg'
import heroLake from '@/assets/images/hero-lake.svg'
import railBridge from '@/assets/images/rail-bridge.svg'
import lakeTreeline from '@/assets/images/lake-treeline.svg'
</script>

<template>
  <main>
    <section class='w-full h-screen bg-orange flex flex-col justify-end relative'>
      <h1 class='p-16 absolute top-0 left-0 min-w-[704px]'>
        A Website<br />
        That Brings
        <br class='block lg:hidden' />
        You <br class='hidden lg:block xl:hidden' />More
        <br class='block lg:hidden' />Customers
      </h1>
      <div class='p-16 text-title text-black flex flex-col lg:flex-row gap-10 justify-end items-end'>
        <router-link to='/'>Home</router-link>
        <span class='hidden lg:block'>/</span>
        <router-link to='/portfolio'>Portfolio</router-link>
        <span class='hidden lg:block'>/</span>
        <router-link to='/services'>Services</router-link>
        <span class='hidden lg:block'>/</span>
        <router-link to='/about'>About</router-link>
        <span class='hidden lg:block'>/</span>
        <router-link
          to='/audit'
          class='text-white'
        >Free Audit</router-link>
      </div>
      <!-- TODO Overdraw the SVGs to avoid gaps at the ends and between sections. -->
      <img
        :src='heroMountain'
        class='w-full bg-orange'
      >
    </section>
    <img
      :src='heroLake'
      class='w-full bg-orange'
    >

    <section class='bg-orange text-white px-16 py-12 relative'>
      <h2>Made for Fraser Valley Businesses</h2>
      <h2>Lightning-fast and visually unique</h2>
      <h2>Only pay if you love it</h2>
      <img
        :src='lakeTreeline'
        class='w-full absolute bottom-0 left-0'
      >
    </section>

    <!-- Portfolio Section -->
    <!-- TODO Animation/etc. -->
    <section class='text-white px-16 py-12'>
      <h2>Websites & Brands I Have Built</h2>

      <article class='bg-orange rounded-3xl p-8 my-8'>
        <div class='flex gap-8'>
          <div class='flex-1'>
            <!-- Placeholder for screenshot -->
            <div class='bg-gray-300 aspect-video'></div>
          </div>
          <div class='flex-1'>
            <h3>Wolfsburg Autoworks</h3>
            <p>An auto shop in Abbotsford, BC that specializes in European vehicles.</p>
            <a href='#'>See Live</a>
          </div>
        </div>
      </article>

      <article class='text-white rounded-lg p-8 my-8'>
        <div class='flex gap-8'>
          <div class='flex-1'>
            <!-- Placeholder for screenshot -->
            <div class='bg-gray-300 aspect-video'></div>
          </div>
          <div class='flex-1'>
            <h3>The Barefoot PT</h3>
            <p>A physiotherapist focused on restoring movement and reducing pain.</p>
          </div>
        </div>
      </article>

      <article class='text-white p-8 my-8'>
        <div class='flex gap-8'>
          <div class='flex-1'>
            <!-- Placeholder for screenshot -->
            <div class='bg-gray-300 aspect-video'></div>
          </div>
          <div class='flex-1'>
            <h3>The Reel McCoy</h3>
            <p>A professional photographer who builds brand visuals and visualizations.</p>
          </div>
        </div>
      </article>
    </section>

    <img
      :src='railBridge'
      class='w-full bg-black'
    >

    <!-- Services Section -->
    <section class='bg-orange text-white px-16 py-12'>
      <h2>Services I Offer</h2>

      <article class='my-8'>
        <div class='flex gap-4 items-start'>
          <!-- Icon placeholder -->
          <div class='w-16 h-16 bg-black'></div>
          <div>
            <h3>Website design & development</h3>
            <p>Custom websites built for speed, conversions, and SEO. Modern, mobile-first design that makes your
              business stand out.</p>
          </div>
        </div>
      </article>

      <article class='my-8'>
        <div class='flex gap-4 items-start'>
          <!-- Icon placeholder -->
          <div class='w-16 h-16 bg-black'></div>
          <div>
            <h3>Brand building & graphic design</h3>
            <p>From logos to full brand identities. Clean, professional designs that reflect your business values and
              attract the right customers.</p>
          </div>
        </div>
      </article>

      <article class='my-8'>
        <div class='flex gap-4 items-start'>
          <!-- Icon placeholder -->
          <div class='w-16 h-16 bg-black'></div>
          <div>
            <h3>Advertisement & lead optimization</h3>
            <p>Google Ads and landing pages designed to convert visitors into customers. Track what works and scale what
              brings results.</p>
          </div>
        </div>
      </article>
    </section>

    <!-- CTA Section -->
    <section class='bg-black text-white px-16 py-24 text-center'>
      <router-link
        to='/audit'
        class='text-orange'
      >
        <h2>Get your free audit</h2>
      </router-link>
    </section>

  </main>
</template>
