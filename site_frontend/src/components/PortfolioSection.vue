<script setup>
import railBridge from '@/assets/images/divider-rail-bridge.svg'

// TODO Compress these.
import wolfsburg from '@/assets/images/portfolio-wolfsburg.png'
import barefootpt from '@/assets/images/portfolio-barefoot.png'
import mccoy from '@/assets/images/portfolio-mccoy.png'
</script>

<template>
  <!-- Portfolio Section -->
  <!-- TODO Hook up links. -->
  <!-- TODO Animation, select state, etc. -->
  <section>
    <div class='text-white px-64 py-12'>
      <h2>Websites & Brands I Have Built</h2>
      <article>
        <div class='website-screenshot'>
          <img :src='wolfsburg'></img>
        </div>
        <div class='website-info'>
          <h3>Wolfsburg Autoworks</h3>
          <p>An auto shop in Abbotsford, BC that specializes in European vehicles.</p>
          <a
            href='https://wolfsburg.nextsyte.com/'
            class='text-title'
            target='_blank'
            rel='noopener noreferrer'
          >See Live</a>
        </div>
      </article>
      <article>
        <div class='website-screenshot'>
          <img :src='barefootpt'></img>
        </div>
        <div class='website-info'>
          <h3>The Barefoot PT</h3>
          <p>A physiotherapist focused on restoring movement and reducing pain.</p>
          <a
            href='https://thebarefootpt.com/'
            class='text-title'
            target='_blank'
            rel='noopener noreferrer'
          >See Live</a>
        </div>
      </article>
      <article>
        <div class='website-screenshot'>
          <img :src='mccoy'></img>
        </div>
        <div class='website-info'>
          <h3>The Reel McCoy</h3>
          <p>A professional photographer who builds brand visuals and visualizations.</p>
          <a
            href='https://reel-mccoy.com/'
            class='text-title'
            target='_blank'
            rel='noopener noreferrer'
          >See Live</a>
        </div>
      </article>
    </div>
    <img
      :src='railBridge'
      class='svg-section-divider origin-right mt-[5%]'
    >
  </section>
</template>

<style scoped>
article {
  display: flex;
  gap: 48px;

  padding: 64px;
  margin: 32px 0;
  color: var(--brand-white);
  border-radius: 64px;

  max-width: 1200px;

  transition: all 0.3s ease-out;


  .website-screenshot {
    flex: 1;
    height: 100%;
    transition: flex 0.3s ease-out;

    img {
      object-fit: contain;
      aspect-ratio: 4 / 3;
      overflow: hidden;
    }
  }

  .website-info {
    display: flex;
    flex-direction: column;
    gap: 16px;
    flex: 3;
    transition: flex 0.3s ease-out;


    p {
      font-size: var(--text-base);
      color: var(--brand-white-body);
    }

    a {
      display: none;
    }
  }
}

article:hover {
  background-color: var(--brand-orange);
  transform: scale(1.1);

  .website-screenshot {
    flex: 1;
  }

  .website-info {
    flex: 1;

    p {
      color: var(--brand-white-body);
    }

    a {
      display: block;
    }
  }
}
</style>
