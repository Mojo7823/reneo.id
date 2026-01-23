<template>
  <div>
    <UHeader title="Reneo.id" to="/">
      <template #right>
        <UButton
          to="/"
          color="neutral"
          variant="ghost"
          label="Beranda"
        />
        <UButton
          to="/portfolio"
          color="neutral"
          variant="ghost"
          label="Portofolio"
        />
        <UButton
          to="/services"
          color="neutral"
          variant="ghost"
          label="Layanan"
        />
        <UButton
          to="/invitation"
          color="neutral"
          variant="ghost"
          label="Undangan"
        />
        <UButton
          to="/contact"
          color="neutral"
          variant="ghost"
          label="Kontak"
        />
      </template>
    </UHeader>

    <UMain>
      <slot />
    </UMain>

    <UFooter>
      <template #left>
        <p class="text-sm text-muted">
          © {{ new Date().getFullYear() }} Reneo.id - Wedding Organizer
        </p>
      </template>
      
      <template #right>
        <UButton
          icon="i-simple-icons-instagram"
          color="neutral"
          variant="ghost"
          to="https://instagram.com"
          target="_blank"
        />
        <UButton
          icon="i-simple-icons-facebook"
          color="neutral"
          variant="ghost"
          to="https://facebook.com"
          target="_blank"
        />
      </template>
    </UFooter>
  </div>
</template>
