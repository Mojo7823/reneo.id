<script setup lang="ts">
definePageMeta({
  title: 'Home - Reneo.id',
})
</script>

<template>
  <div>
    <!-- Hero Section -->
    <ULandingHero
      :title="{ base: 'Reneo.id', highlight: 'Wedding & Photography' }"
      description="Professional wedding photography and digital invitation services. Capturing your most precious moments with artistic excellence."
    >
      <template #links>
        <UButton to="/portfolio" size="xl" color="primary">
          View Portfolio
        </UButton>
        <UButton to="/contact" size="xl" variant="outline" color="gray">
          Get in Touch
        </UButton>
      </template>
    </ULandingHero>

    <!-- Services Section -->
    <UContainer class="py-20">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold mb-4">Our Services</h2>
        <p class="text-xl text-gray-600">Everything you need for your special day</p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <ULandingCard
          title="Wedding Photography"
          description="Professional photography services to capture every moment of your special day with artistic excellence."
          icon="i-heroicons-camera"
          to="/services"
        />

        <ULandingCard
          title="Portfolio Shoots"
          description="Personal and professional photography sessions tailored to showcase your unique style and personality."
          icon="i-heroicons-user-circle"
          to="/services"
        />

        <ULandingCard
          title="Digital Invitations"
          description="Beautiful, interactive digital wedding invitations that your guests will love. Modern and eco-friendly."
          icon="i-heroicons-envelope"
          to="/invitation"
        />
      </div>
    </UContainer>

    <!-- CTA Section -->
    <ULandingSection
      title="Ready to Create Something Beautiful?"
      description="Contact us today to discuss your wedding photography or digital invitation needs."
    >
      <template #links>
        <UButton to="/contact" size="xl" color="primary">
          Contact Us
        </UButton>
      </template>
    </ULandingSection>
  </div>
</template>
