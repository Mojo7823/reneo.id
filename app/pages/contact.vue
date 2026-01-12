<script setup lang="ts">
definePageMeta({
  title: 'Contact - Reneo.id',
})

const form = reactive({
  name: '',
  email: '',
  message: '',
})
</script>

<template>
  <UContainer class="py-12">
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold mb-4">Contact Us</h1>
      <p class="text-xl text-gray-600">Get in touch for your wedding or photography needs</p>
    </div>

    <div class="max-w-2xl mx-auto">
      <UCard>
        <form class="space-y-4">
          <UFormGroup label="Name" name="name">
            <UInput v-model="form.name" placeholder="Your name" />
          </UFormGroup>

          <UFormGroup label="Email" name="email">
            <UInput v-model="form.email" type="email" placeholder="your@email.com" />
          </UFormGroup>

          <UFormGroup label="Message" name="message">
            <UTextarea v-model="form.message" placeholder="Tell us about your project..." rows="5" />
          </UFormGroup>

          <UButton type="submit" color="primary" block>
            Send Message
          </UButton>
        </form>
      </UCard>
    </div>
  </UContainer>
</template>
