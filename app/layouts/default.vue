<template>
  <div>
    <UHeader title="Reneo.id" to="/">
      <template #right>
        <UButton
          to="/"
          color="neutral"
          variant="ghost"
          label="Home"
        />
        <UButton
          to="/portfolio"
          color="neutral"
          variant="ghost"
          label="Portfolio"
        />
        <UButton
          to="/services"
          color="neutral"
          variant="ghost"
          label="Services"
        />
        <UButton
          to="/invitation"
          color="neutral"
          variant="ghost"
          label="Invitation"
        />
        <UButton
          to="/contact"
          color="neutral"
          variant="ghost"
          label="Contact"
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
