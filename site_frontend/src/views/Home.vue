<script setup>
import ButtonLink from '../components/ButtonLink.vue'
</script>

<template>
  <main class='max-w-5xl mx-auto px-6 py-16 space-y-24'>
    <!-- Hero Section -->
    <section class='space-y-6'>
      <h1 class='text-5xl font-bold text-text'>
        Websites That Bring You More Local Customers
      </h1>
      <p class='text-xl text-text-muted max-w-3xl'>
        I'm Shayaan. I build fast websites and manage Google visibility for service businesses in the Fraser Valley so
        they get more calls and bookings.
      </p>
      <div class='flex gap-4 flex-wrap'>
        <ButtonLink to='/audit'>Get a Free Website & Google Audit</ButtonLink>
        <ButtonLink to='/portfolio'>See Recent Websites</ButtonLink>
      </div>
    </section>

    <!-- Proof Strip -->
    <section class='border-y border-border py-6'>
      <ul class='flex gap-8 flex-wrap justify-center text-sm text-text-muted'>
        <li>✓ Built for Fraser Valley businesses</li>
        <li>✓ Lightning-fast websites (99+ PageSpeed scores)</li>
        <li>✓ Mobile-first design</li>
        <li>✓ Local support</li>
      </ul>
    </section>

    <!-- Recent Websites -->
    <section class='space-y-6'>
      <h2 class='text-3xl font-bold'>Recent Websites</h2>
      <div class='grid md:grid-cols-3 gap-6'>
        <article class='bg-surface border border-border rounded-lg overflow-hidden'>
          <div class='aspect-video bg-surface-elevated'></div>
          <div class='p-4 space-y-1'>
            <h3 class='font-semibold text-text'>Business Name</h3>
            <p class='text-sm text-text-dimmed'>Industry</p>
            <p class='text-sm text-text-dimmed'>Location</p>
          </div>
        </article>
        <article class='bg-surface border border-border rounded-lg overflow-hidden'>
          <div class='aspect-video bg-surface-elevated'></div>
          <div class='p-4 space-y-1'>
            <h3 class='font-semibold text-text'>Business Name</h3>
            <p class='text-sm text-text-dimmed'>Industry</p>
            <p class='text-sm text-text-dimmed'>Location</p>
          </div>
        </article>
        <article class='bg-surface border border-border rounded-lg overflow-hidden'>
          <div class='aspect-video bg-surface-elevated'></div>
          <div class='p-4 space-y-1'>
            <h3 class='font-semibold text-text'>Business Name</h3>
            <p class='text-sm text-text-dimmed'>Industry</p>
            <p class='text-sm text-text-dimmed'>Location</p>
          </div>
        </article>
      </div>
      <ButtonLink to='/portfolio'>View Portfolio</ButtonLink>
    </section>

    <!-- Problem Section -->
    <section class='space-y-4'>
      <h2 class='text-3xl font-bold'>Why Most Local Business Websites Lose Customers</h2>
      <p class='text-text-muted'>Common issues:</p>
      <ul class='space-y-2 text-text-muted border-l-2 border-accent pl-6'>
        <li>Slow load speeds</li>
        <li>Confusing layout</li>
        <li>Hidden contact information</li>
        <li>Poor mobile design</li>
      </ul>
    </section>

    <!-- Solution Section -->
    <section class='space-y-8'>
      <h2 class='text-3xl font-bold'>How I Help Local Businesses Grow</h2>

      <div class='grid md:grid-cols-2 gap-6'>
        <article class='bg-surface p-6 rounded-lg border border-border'>
          <h3 class='text-xl font-semibold text-accent mb-2'>Fast Website</h3>
          <p class='text-text-muted'>Mobile-first websites built to convert visitors into calls.</p>
        </article>

        <article class='bg-surface p-6 rounded-lg border border-border'>
          <h3 class='text-xl font-semibold text-accent mb-2'>Google Visibility</h3>
          <p class='text-text-muted'>Optimize your Google Business listing so customers can find you.</p>
        </article>

        <article class='bg-surface p-6 rounded-lg border border-border'>
          <h3 class='text-xl font-semibold text-accent mb-2'>Google Ads (optional)</h3>
          <p class='text-text-muted'>Capture customers actively searching for your services.</p>
        </article>

        <article class='bg-surface p-6 rounded-lg border border-border'>
          <h3 class='text-xl font-semibold text-accent mb-2'>Ongoing Support</h3>
          <p class='text-text-muted'>Unlimited edits and support so your website stays current.</p>
        </article>
      </div>
    </section>

    <!-- Local Credibility -->
    <section class='space-y-4'>
      <h2 class='text-2xl font-semibold'>Serving businesses across the Fraser Valley</h2>
      <ul class='flex gap-4 flex-wrap text-text-muted'>
        <li>Abbotsford</li>
        <li>Langley</li>
        <li>Chilliwack</li>
        <li>Surrey</li>
      </ul>
    </section>

    <!-- Footer CTA -->
    <section class='text-center py-8'>
      <ButtonLink to='/audit'>Get a Free Website & Google Audit</ButtonLink>
    </section>
  </main>
</template>
