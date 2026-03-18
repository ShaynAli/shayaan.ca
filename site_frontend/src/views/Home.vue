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
        <router-link to='/about'>About</router-link>
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

    <!-- Portfolio Section -->
    <!-- TODO Hook up links. -->
    <!-- TODO Animation, select state, etc. -->
    <section>
      <div class='text-white px-64 py-12'>
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
              <router-link
                to='#'
                class='text-title'
              >See Live</router-link>
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
      </div>
      <img
        :src='railBridge'
        class='svg-section-divider origin-right mt-[5%]'
      >
    </section>


    <!-- Services Section -->
    <section class='bg-orange text-white px-64 py-12'>
      <h2>Services I Offer</h2>
      <div class='p-16 grid grid-cols-[324px_auto] gap-16'>
        <article class='col-span-2 grid grid-cols-subgrid items-start'>
          <div class='w-full h-full bg-black'></div>
          <div>
            <h3>Website design & development</h3>
            <p>
              I create a website that reflects your brand's professional identity and runs perfectly on every device.
            </p>
          </div>
        </article>

        <article class='col-span-2 grid grid-cols-subgrid items-start'>
          <div class='w-full h-full bg-black'></div>
          <div>
            <h3>Brand building & graphic design</h3>
            <p>
              I build an identity that your customers recognize and trust. That includes branding, photography,
              marketing materials, and more.
            </p>
          </div>
        </article>

        <article class='col-span-2 grid grid-cols-subgrid items-start'>
          <div class='w-full h-full bg-black'></div>
          <div>
            <h3>Advertisement & lead optimization</h3>
            <p>
              I create and test ads and strategies to find the ones that bring the most customers into your business.
            </p>
          </div>
        </article>
      </div>
    </section>

    <!-- CTA Section -->
    <!-- TODO Hook this up -->
    <section class='bg-black text-white px-16 py-24 text-center'>
      <h2>Get your free audit</h2>
      <form class='flex flex-col items-center'>
        <input
          type='tel'
          placeholder='Phone number'
          class='p-4 rounded-lg text-black bg-white w-full max-w-md mx-auto my-4'
        >
        <input
          type='email'
          placeholder='Email address'
          class='p-4 rounded-lg text-black bg-white w-full max-w-md mx-auto my-4'
        >
        <button
          type='submit'
          class='bg-orange text-white px-8 py-4 rounded-lg mt-4 cursor-pointer text-title'
        >Get Started</button>
      </form>
    </section>

  </main>
</template>
