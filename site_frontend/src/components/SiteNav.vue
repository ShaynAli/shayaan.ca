<script setup>
</script>

<template>
  <nav class='site-nav px-8 py-4 text-title text-white bg-black flex flex-col lg:flex-row gap-10 justify-end items-end'>
    <a href='#'>Home</a>
    <span class='hidden lg:block'>/</span>
    <a href='#portfolio'>Portfolio</a>
    <span class='hidden lg:block'>/</span>
    <a href='#services'>Services</a>
    <span class='hidden lg:block'>/</span>
    <a href='#audit'>Free Audit</a>
  </nav>
</template>

<style scoped>
.site-nav {
  position: sticky;
  top: 0;
  z-index: 100;
  margin-top: -96px;
}
</style>
