<script setup lang="ts">
definePageMeta({
  title: 'Kontak - Reneo.id',
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
      <h1 class="text-4xl font-bold mb-4">Hubungi Kami</h1>
      <p class="text-xl text-muted">Hubungi kami untuk kebutuhan pernikahan atau fotografi Anda</p>
    </div>

    <div class="max-w-2xl mx-auto">
      <UCard>
        <form class="space-y-4">
          <UFormField label="Nama" name="name">
            <UInput v-model="form.name" placeholder="Nama Anda" />
          </UFormField>

          <UFormField label="Email" name="email">
            <UInput v-model="form.email" type="email" placeholder="email@anda.com" />
          </UFormField>

          <UFormField label="Pesan" name="message">
            <UTextarea v-model="form.message" placeholder="Ceritakan tentang proyek Anda..." :rows="5" />
          </UFormField>

          <UButton type="submit" color="primary" block>
            Kirim Pesan
          </UButton>
        </form>
      </UCard>
    </div>
  </UContainer>
</template>
