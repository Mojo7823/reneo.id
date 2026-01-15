<script setup lang="ts">
definePageMeta({
  title: 'Services - Reneo.id',
})
</script>

<template>
  <UContainer class="py-12">
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold mb-4">Our Services</h1>
      <p class="text-xl text-muted">Professional wedding and photography services</p>
    </div>

    <div class="grid md:grid-cols-3 gap-6">
      <UCard>
        <template #header>
          <h3 class="text-xl font-semibold">Wedding Photography</h3>
        </template>
        <p class="text-muted">
          Complete wedding day coverage with professional photographers capturing every precious moment.
        </p>
      </UCard>

      <UCard>
        <template #header>
          <h3 class="text-xl font-semibold">Portfolio Shoots</h3>
        </template>
        <p class="text-muted">
          Personal and professional portfolio photography sessions tailored to your needs.
        </p>
      </UCard>

      <UCard>
        <template #header>
          <h3 class="text-xl font-semibold">Digital Invitations</h3>
        </template>
        <p class="text-muted">
          Custom digital wedding invitations with beautiful designs and interactive features.
        </p>
      </UCard>
    </div>
  </UContainer>
</template>
