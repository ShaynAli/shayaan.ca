<script setup>
import { ref } from 'vue';

import { CONTACT_ENDPOINT } from '@/common.js';

const formData = ref({
  name: '',
  phone: '',
  email: '',
});

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
      body: JSON.stringify(formData.value),
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
    <h2>Get your free audit</h2>
    <form
      class='flex flex-col items-center'
      @submit.prevent='submitForm'
    >
      <input
        v-model='formData.name'
        type='text'
        placeholder='Your name'
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
        Something went wrong. Please try again or contact us directly.
      </div>
    </form>
  </section>
</template>
