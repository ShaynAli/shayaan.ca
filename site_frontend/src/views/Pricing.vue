<script setup>
import ButtonLink from '../components/ButtonLink.vue'
</script>

<template>
  <main class='max-w-5xl mx-auto px-6 py-16 space-y-12'>
    <div>
      <h1 class='text-4xl font-bold text-text mb-4'>Website Pricing for Fraser Valley Businesses</h1>
      <p class='text-lg text-text-muted'>Two ways to get a website depending on what works best for your business.</p>
    </div>

    <section class='grid md:grid-cols-2 gap-8'>
      <article class='bg-surface p-8 rounded-lg border-2 border-accent'>
        <h2 class='text-2xl font-bold mb-4 text-accent'>Monthly Plan</h2>
        <p class='text-3xl font-bold mb-2'>$299<span class='text-lg text-text-muted'>/month</span></p>
        <p class='text-text-dimmed mb-6'>12 month commitment</p>

        <div class='mb-6'>
          <h3 class='text-lg font-semibold mb-3 text-text'>Includes</h3>
          <ul class='space-y-2 text-text-muted'>
            <li>✓ Custom website</li>
            <li>✓ Hosting</li>
            <li>✓ Unlimited edits</li>
            <li>✓ Google Business optimization</li>
            <li>✓ Ongoing support</li>
          </ul>
        </div>

        <p class='text-sm text-text-muted mb-4'>No upfront cost. After the 12-month term you can cancel anytime.</p>

        <div class='bg-surface-elevated p-4 rounded-lg border-l-4 border-accent'>
          <h3 class='text-sm font-semibold mb-2 text-accent'>Guarantee</h3>
          <p class='text-sm text-text-muted'>If you're not happy with your website in the first 30 days, I'll keep
            improving it until you are.</p>
        </div>
      </article>

      <article class='bg-surface p-8 rounded-lg border border-border'>
        <h2 class='text-2xl font-bold mb-4 text-text'>Upfront Build</h2>
        <p class='text-3xl font-bold mb-2'>$2000<span class='text-lg text-text-muted'> setup</span></p>
        <p class='text-text-dimmed mb-6'>$35/month hosting</p>

        <div class='mb-6'>
          <h3 class='text-lg font-semibold mb-3 text-text'>Includes</h3>
          <ul class='space-y-2 text-text-muted'>
            <li>✓ Custom website</li>
            <li>✓ Hosting</li>
            <li>✓ Ongoing support</li>
          </ul>
        </div>
      </article>
    </section>

    <section class='bg-surface p-6 rounded-lg border border-border'>
      <h2 class='text-xl font-semibold mb-3 text-text'>Optional Add-ons</h2>
      <p class='text-text-muted'>Google Ads management: $300–600/month + ad spend</p>
    </section>

    <section class='text-center py-8'>
      <ButtonLink to='/audit'>Book a Call</ButtonLink>
    </section>
  </main>
</template>
