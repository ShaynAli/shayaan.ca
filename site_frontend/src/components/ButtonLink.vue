<template>
  <router-link
    :to='to'
    class='inline-block px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-hover transition-colors'
  >
    <slot />
  </router-link>
</template>

<script setup>
defineProps({
  to: {
    type: String,
    required: true,
  },
})
</script>
