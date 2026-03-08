<template>
  <header class='border-b border-border bg-surface/50 backdrop-blur-sm sticky top-0 z-50'>
    <nav class='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
      <router-link
        to='/'
        class='text-xl font-bold text-accent hover:text-accent-hover transition-colors'
      >
        shayaan.ca
      </router-link>
      <ul class='flex gap-6'>
        <li><router-link
            to='/services'
            class='text-text-muted hover:text-text transition-colors'
          >Services</router-link></li>
        <li><router-link
            to='/portfolio'
            class='text-text-muted hover:text-text transition-colors'
          >Portfolio</router-link></li>
        <li><router-link
            to='/pricing'
            class='text-text-muted hover:text-text transition-colors'
          >Pricing</router-link></li>
        <li><router-link
            to='/about'
            class='text-text-muted hover:text-text transition-colors'
          >About</router-link></li>
        <li><router-link
            to='/audit'
            class='text-accent hover:text-accent-hover transition-colors'
          >Free Audit</router-link></li>
      </ul>
    </nav>
  </header>
</template>
