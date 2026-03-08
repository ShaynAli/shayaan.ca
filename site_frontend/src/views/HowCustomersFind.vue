<script setup>
import ButtonLink from '../components/ButtonLink.vue'
</script>

<template>
  <main class='max-w-4xl mx-auto px-6 py-16 space-y-12'>
    <div>
      <h1 class='text-4xl font-bold text-text mb-4'>How Customers Find Local Businesses on Google</h1>
      <p class='text-lg text-text-muted'>Learn how Google search, Maps, and websites work together to bring customers to
        local service businesses.</p>
    </div>

    <section class='bg-surface p-8 rounded-lg border-l-4 border-accent space-y-3'>
      <h2 class='text-2xl font-bold text-accent'>Google Search</h2>
      <p class='text-text-muted'>Customers search for services like "auto repair near me".</p>
    </section>

    <section class='bg-surface p-8 rounded-lg border-l-4 border-accent space-y-3'>
      <h2 class='text-2xl font-bold text-accent'>Google Maps</h2>
      <p class='text-text-muted'>Google Business Profile listings drive calls and visits.</p>
    </section>

    <section class='bg-surface p-8 rounded-lg border-l-4 border-accent space-y-3'>
      <h2 class='text-2xl font-bold text-accent'>Website Conversion</h2>
      <p class='text-text-muted'>Your website converts visitors into calls or bookings.</p>
    </section>

    <section class='text-center py-8 space-y-4'>
      <p class='text-xl text-text-muted'>Improve Your Online Presence</p>
      <ButtonLink to='/audit'>Get a Free Website & Google Audit</ButtonLink>
    </section>
  </main>
</template>
