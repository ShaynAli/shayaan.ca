<script setup>
import ButtonLink from '../components/ButtonLink.vue'
</script>

<template>
  <main class='max-w-5xl mx-auto px-6 py-16 space-y-12'>
    <h1 class='text-4xl font-bold text-text'>Websites Built for Local Businesses</h1>

    <p class='text-lg text-text-muted'>Examples of websites I've built for local businesses. Each site is designed to
      load quickly, look great on mobile, and convert visitors into customers.</p>

    <section class='space-y-8'>
      <article class='bg-surface border border-border rounded-lg overflow-hidden'>
        <div class='aspect-video bg-surface-elevated'></div>
        <div class='p-6 space-y-4'>
          <div>
            <h2 class='text-2xl font-semibold text-text'>Business Name</h2>
            <p class='text-text-dimmed'>Industry</p>
            <p class='text-text-dimmed'>Location</p>
          </div>

          <div>
            <h3 class='text-lg font-semibold text-accent mb-2'>Performance</h3>
            <ul class='space-y-1 text-text-muted'>
              <li class='flex items-center gap-2'>
                <span class='text-2xl font-bold text-success'>96</span>
                <span>PageSpeed</span>
              </li>
              <li>✓ Mobile optimized</li>
              <li>✓ Loads in under 1 second</li>
            </ul>
          </div>

          <div>
            <h3 class='text-lg font-semibold text-accent mb-2'>What the website focuses on</h3>
            <ul class='space-y-1 text-text-muted'>
              <li>✓ Clear service descriptions</li>
              <li>✓ Easy phone contact</li>
              <li>✓ Mobile-friendly layout</li>
            </ul>
          </div>
        </div>
      </article>
    </section>

    <section class='text-center py-8 space-y-4'>
      <p class='text-xl text-text-muted'>Want a site like this?</p>
      <ButtonLink to='/audit'>Get a Free Website Audit</ButtonLink>
    </section>
  </main>
</template>
