<script setup>
import ButtonLink from '../components/ButtonLink.vue'
</script>

<template>
  <main class='max-w-5xl mx-auto px-6 py-16 space-y-16'>
    <section>
      <h1 class='text-4xl font-bold text-text mb-4'>Websites and Google Growth for Fraser Valley Businesses</h1>
    </section>

    <section class='space-y-6'>
      <h2 class='text-3xl font-bold'>Website Design</h2>
      <p class='text-text-muted text-lg'>Fast, mobile-first websites designed to convert visitors into customers.</p>

      <div>
        <h3 class='text-xl font-semibold mb-3 text-accent'>Technical credibility</h3>
        <ul class='space-y-2 text-text-muted'>
          <li>✓ Loads in under 1 second</li>
          <li>✓ Mobile-first layout</li>
          <li>✓ Clear call-to-action buttons</li>
          <li>✓ Optimized for Google search</li>
        </ul>
      </div>
    </section>

    <section class='space-y-6'>
      <h2 class='text-3xl font-bold'>Google Business Profile Optimization</h2>
      <p class='text-text-muted text-lg'>Improve your visibility in Google Maps and local search results.</p>

      <div>
        <h3 class='text-xl font-semibold mb-3 text-accent'>Benefits</h3>
        <ul class='space-y-2 text-text-muted'>
          <li>✓ Better map rankings</li>
          <li>✓ More customer calls</li>
          <li>✓ Improved business credibility</li>
        </ul>
      </div>
    </section>

    <section class='space-y-6'>
      <h2 class='text-3xl font-bold'>Google Ads Management</h2>
      <p class='text-text-muted text-lg'>Capture customers who are actively searching for your services.</p>

      <div>
        <h3 class='text-xl font-semibold mb-3 text-accent'>Benefits</h3>
        <ul class='space-y-2 text-text-muted'>
          <li>✓ Immediate search visibility</li>
          <li>✓ Highly targeted local traffic</li>
          <li>✓ Measurable results</li>
        </ul>
      </div>
    </section>

    <section class='text-center py-8'>
      <ButtonLink to='/audit'>Request a Free Website Audit</ButtonLink>
    </section>
  </main>
</template>
