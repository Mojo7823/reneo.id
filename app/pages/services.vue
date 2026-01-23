<script setup lang="ts">
definePageMeta({
  title: 'Layanan - Reneo.id',
})
</script>

<template>
  <UContainer class="py-12">
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold mb-4">Layanan Kami</h1>
      <p class="text-xl text-muted">Layanan pernikahan dan fotografi profesional</p>
    </div>

    <div class="grid md:grid-cols-3 gap-6">
      <UCard>
        <template #header>
          <h3 class="text-xl font-semibold">Fotografi Pernikahan</h3>
        </template>
        <p class="text-muted">
          Liputan lengkap hari pernikahan dengan fotografer profesional yang mengabadikan setiap momen berharga.
        </p>
      </UCard>

      <UCard>
        <template #header>
          <h3 class="text-xl font-semibold">Sesi Portofolio</h3>
        </template>
        <p class="text-muted">
          Sesi fotografi portofolio pribadi dan profesional yang disesuaikan dengan kebutuhan Anda.
        </p>
      </UCard>

      <UCard>
        <template #header>
          <h3 class="text-xl font-semibold">Undangan Digital</h3>
        </template>
        <p class="text-muted">
          Undangan pernikahan digital khusus dengan desain indah dan fitur interaktif.
        </p>
      </UCard>
    </div>
  </UContainer>
</template>
