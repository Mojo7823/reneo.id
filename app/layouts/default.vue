<template>
  <div>
    <UHeader>
      <template #logo>
        <NuxtLink to="/" class="text-2xl font-bold">
          Reneo.id
        </NuxtLink>
      </template>
      
      <template #right>
        <UButton
          to="/"
          color="gray"
          variant="ghost"
          label="Home"
        />
        <UButton
          to="/about"
          color="gray"
          variant="ghost"
          label="About"
        />
        <UButton
          to="/services"
          color="gray"
          variant="ghost"
          label="Services"
        />
        <UButton
          to="/portfolio"
          color="gray"
          variant="ghost"
          label="Portfolio"
        />
        <UButton
          to="/contact"
          color="gray"
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
        <p class="text-sm text-gray-500">
          © {{ new Date().getFullYear() }} Reneo Wedding Organizer - Creating Unforgettable Moments
        </p>
      </template>
      
      <template #right>
        <UButton
          icon="i-simple-icons-instagram"
          color="gray"
          variant="ghost"
          to="https://instagram.com"
          target="_blank"
        />
        <UButton
          icon="i-simple-icons-facebook"
          color="gray"
          variant="ghost"
          to="https://facebook.com"
          target="_blank"
        />
      </template>
    </UFooter>
  </div>
</template>
