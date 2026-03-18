<script setup>
import { ref } from 'vue'

import HeroSection from '@/components/HeroSection.vue'
import ValuePropsSection from '@/components/ValuePropsSection.vue'
import PortfolioSection from '@/components/PortfolioSection.vue'
import ServicesSection from '@/components/ServicesSection.vue'
import AuditCTASection from '@/components/AuditCTASection.vue'

const selected = ref(null);
</script>

<template>
  <main>
    <HeroSection />
    <ValuePropsSection />
    <PortfolioSection />
    <ServicesSection />
    <AuditCTASection />
  </main>
</template>
