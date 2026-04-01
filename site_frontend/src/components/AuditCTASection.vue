<script setup>
import { ref } from 'vue';

import { CONTACT_ENDPOINT } from '@/common.js';

const formData = ref({
  name: '',
  phone: '',
  email: '',
});

const auditType = ref('audit');

const STATE = {
  default: 'default',
  success: 'success',
  error: 'error',
  loading: 'loading',
};
const formState = ref(STATE.default);

const submitForm = async () => {
  formState.value = STATE.loading;

  try {
    const response = await fetch(CONTACT_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...formData.value,
        auditType: auditType.value,
      }),
    });

    if (!response.ok) {
      formState.value = STATE.error;
      throw new Error(`Server returned ${response.status}`);
    }
    formState.value = STATE.success;

  } catch (error) {
    console.error('Error submitting contact form:', error);
    formState.value = STATE.error;
  }
};
</script>

<template>
  <!-- CTA Section -->
  <section
    id='audit'
    class='bg-black text-white px-16 py-24 text-center'
  >
    <h2>Get your free audit / Get in touch</h2>
    <form
      class='flex flex-col items-center'
      @submit.prevent='submitForm'
    >
      <div class='audit-type-selector'>
        <div class='selector-track'>
          <button
            type='button'
            @click='auditType = "audit"'
            :class='{ active: auditType === "audit" }'
            :disabled='formState === STATE.loading'
            class='selector-option text-title'
          >
            I want a free audit
          </button>
          <button
            type='button'
            @click='auditType = "other"'
            :class='{ active: auditType === "other" }'
            :disabled='formState === STATE.loading'
            class='selector-option text-title'
          >
            I want something else
          </button>
          <div
            class='slider-background'
            :class='auditType'
          ></div>
        </div>
      </div>
      <input
        v-model='formData.name'
        type='text'
        placeholder='Name'
        required
        :disabled='formState === STATE.loading'
        class='p-4 rounded-lg text-black bg-white w-full max-w-md mx-auto my-4 disabled:opacity-50 disabled:cursor-not-allowed'
      >
      <input
        v-model='formData.phone'
        type='tel'
        placeholder='Phone number'
        required
        :disabled='formState === STATE.loading'
        class='p-4 rounded-lg text-black bg-white w-full max-w-md mx-auto my-4 disabled:opacity-50 disabled:cursor-not-allowed'
      >
      <input
        v-model='formData.email'
        type='email'
        placeholder='Email address'
        required
        :disabled='formState === STATE.loading'
        class='p-4 rounded-lg text-black bg-white w-full max-w-md mx-auto my-4 disabled:opacity-50 disabled:cursor-not-allowed'
      >
      <button
        type='submit'
        :disabled='formState === STATE.loading'
        class='bg-orange text-white px-8 py-4 rounded-lg mt-4 cursor-pointer text-title disabled:opacity-50 disabled:cursor-not-allowed'
      >
        {{ formState === STATE.loading ? 'Submitting' : 'Get Started' }}
      </button>

      <div
        v-if='formState === STATE.success'
        class='mt-6 p-4 bg-green-600 text-white rounded-lg max-w-md'
      >
        Thanks! We'll be in touch soon.
      </div>

      <div
        v-if='formState === STATE.error'
        class='mt-6 p-4 bg-red-600 text-white rounded-lg max-w-md'
      >
        Something went wrong. Please contact me directly: 669 291 6589.
      </div>
    </form>
  </section>
</template>

<style scoped>
.audit-type-selector {
  --track-padding: 4px;
  --track-gap: 4px;
  --track-radius: 8px;
  --option-padding: 16px;
  --option-radius: 6px;
  --selector-margin-bottom: 32px;

  width: 100%;
  /* TODO Mobile scaling/etc */
  max-width: 768px;
  margin: 0 auto var(--selector-margin-bottom);
}

.selector-track {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: var(--track-radius);
  padding: var(--track-padding);
  gap: var(--track-gap);
}

.selector-option {
  position: relative;
  z-index: 2;
  padding: var(--option-padding);
  border: none;
  background: transparent;
  color: var(--brand-white);
  cursor: pointer;
  border-radius: var(--option-radius);
  font-weight: 500;
  transition: opacity 0.3s ease;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.selector-option:not(.active) {
  opacity: 0.5;
}

.selector-option:hover:not(:disabled) {
  opacity: 0.8;
}

.selector-option.active {
  opacity: 1;
}

.selector-option:disabled {
  cursor: not-allowed;
}

.slider-background {
  position: absolute;
  top: var(--track-padding);
  left: var(--track-padding);
  width: calc(50% - var(--track-padding));
  height: calc(100% - var(--track-padding) * 2);
  background: var(--brand-orange);
  border-radius: var(--option-radius);
  transition: transform 0.3s ease;
  z-index: 1;
}

.slider-background.other {
  transform: translateX(100%);
}
</style>
