<script setup lang="ts">
definePageMeta({
  title: 'Services - Reneo Wedding Organizer',
})

const services = [
  {
    icon: 'i-heroicons-heart',
    title: 'Full Wedding Planning',
    description: 'From the first meeting to the last dance, we handle every aspect of your wedding planning journey.',
    features: [
      'Personalized wedding concept & design',
      'Venue selection & coordination',
      'Vendor management & negotiations',
      'Budget planning & tracking',
      'Timeline creation & management',
      'Guest list & RSVP management',
    ],
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop',
  },
  {
    icon: 'i-heroicons-calendar-days',
    title: 'Day-of Coordination',
    description: 'Already planned your wedding? Let us execute it flawlessly on your big day.',
    features: [
      'Final vendor confirmations',
      'Timeline management',
      'Ceremony & reception coordination',
      'Vendor direction & supervision',
      'Problem solving & emergency handling',
      'Setup & breakdown oversight',
    ],
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop',
  },
  {
    icon: 'i-heroicons-sparkles',
    title: 'Venue Decoration',
    description: 'Transform any space into the wedding venue of your dreams with our expert decorators.',
    features: [
      'Custom floral arrangements',
      'Lighting design & installation',
      'Table settings & centerpieces',
      'Ceremony backdrop design',
      'Photo booth setup',
      'Theme-based decorations',
    ],
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop',
  },
  {
    icon: 'i-heroicons-camera',
    title: 'Photography & Videography',
    description: 'Capture every precious moment with our team of professional photographers and videographers.',
    features: [
      'Pre-wedding photoshoots',
      'Full wedding day coverage',
      'Cinematic wedding films',
      'Same-day edits',
      'Photo albums & prints',
      'Drone photography',
    ],
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=600&h=400&fit=crop',
  },
  {
    icon: 'i-heroicons-musical-note',
    title: 'Entertainment',
    description: 'Keep your guests entertained all night with our curated entertainment options.',
    features: [
      'Live band & musicians',
      'Professional DJs',
      'MC services',
      'Choreographed first dance',
      'Special performances',
      'Sound & lighting equipment',
    ],
    image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=400&fit=crop',
  },
  {
    icon: 'i-heroicons-cake',
    title: 'Catering & Cake',
    description: 'Delight your guests with exquisite culinary experiences tailored to your taste.',
    features: [
      'Menu customization',
      'Tasting sessions',
      'Custom wedding cakes',
      'Dessert tables',
      'Bar services',
      'Dietary accommodations',
    ],
    image: 'https://images.unsplash.com/photo-1546032996-6dfacbacbf3f?w=600&h=400&fit=crop',
  },
]

const packages = [
  {
    name: 'Essential',
    price: 'Starting from IDR 50M',
    description: 'Perfect for intimate weddings',
    features: [
      'Day-of coordination',
      'Basic decoration package',
      'Photography (8 hours)',
      'MC services',
      'Sound system',
    ],
    highlighted: false,
  },
  {
    name: 'Premium',
    price: 'Starting from IDR 150M',
    description: 'Our most popular package',
    features: [
      'Full wedding planning',
      'Premium decoration package',
      'Photography & videography',
      'Live band performance',
      'Catering coordination',
      'Custom wedding cake',
      'Digital invitation',
    ],
    highlighted: true,
  },
  {
    name: 'Luxury',
    price: 'Starting from IDR 300M',
    description: 'For the grandest celebrations',
    features: [
      'Everything in Premium',
      'Destination wedding support',
      'Pre-wedding photoshoot',
      'Honeymoon planning',
      'VIP guest management',
      'After-party coordination',
      'Anniversary reminder service',
    ],
    highlighted: false,
  },
]
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-24 bg-gray-50">
      <UContainer>
        <div class="text-center max-w-3xl mx-auto">
          <p class="text-primary font-semibold mb-2 uppercase tracking-wide">Our Services</p>
          <h1 class="text-4xl md:text-5xl font-bold mb-6">Everything You Need for Your Perfect Wedding</h1>
          <p class="text-xl text-gray-600">
            From planning to execution, we offer comprehensive services to make your dream wedding a reality.
          </p>
        </div>
      </UContainer>
    </section>

    <!-- Services Grid -->
    <section class="py-20">
      <UContainer>
        <div class="space-y-24">
          <div
            v-for="(service, index) in services"
            :key="service.title"
            class="grid md:grid-cols-2 gap-12 items-center"
            :class="{ 'md:grid-flow-dense': index % 2 === 1 }"
          >
            <div :class="{ 'md:col-start-2': index % 2 === 1 }">
              <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <UIcon :name="service.icon" class="w-8 h-8 text-primary" />
              </div>
              <h2 class="text-3xl font-bold mb-4">{{ service.title }}</h2>
              <p class="text-lg text-gray-600 mb-6">{{ service.description }}</p>
              <ul class="space-y-3">
                <li v-for="feature in service.features" :key="feature" class="flex items-center gap-3">
                  <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary flex-shrink-0" />
                  <span class="text-gray-700">{{ feature }}</span>
                </li>
              </ul>
            </div>
            <div :class="{ 'md:col-start-1': index % 2 === 1 }">
              <img
                :src="service.image"
                :alt="service.title"
                class="rounded-2xl shadow-xl w-full"
              >
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Packages Section -->
    <section class="py-20 bg-gray-50">
      <UContainer>
        <div class="text-center mb-16">
          <p class="text-primary font-semibold mb-2 uppercase tracking-wide">Pricing</p>
          <h2 class="text-4xl font-bold mb-4">Wedding Packages</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect package for your wedding, or let us create a custom solution just for you.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <UCard
            v-for="pkg in packages"
            :key="pkg.name"
            :class="[
              'relative',
              pkg.highlighted ? 'ring-2 ring-primary shadow-xl scale-105' : ''
            ]"
          >
            <div v-if="pkg.highlighted" class="absolute -top-4 left-1/2 -translate-x-1/2">
              <span class="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </span>
            </div>
            <div class="p-6 text-center">
              <h3 class="text-2xl font-bold mb-2">{{ pkg.name }}</h3>
              <p class="text-primary font-semibold text-lg mb-2">{{ pkg.price }}</p>
              <p class="text-gray-600 mb-6">{{ pkg.description }}</p>
              <ul class="space-y-3 text-left mb-8">
                <li v-for="feature in pkg.features" :key="feature" class="flex items-center gap-3">
                  <UIcon name="i-heroicons-check" class="w-5 h-5 text-primary flex-shrink-0" />
                  <span class="text-gray-700">{{ feature }}</span>
                </li>
              </ul>
              <UButton
                to="/contact"
                :color="pkg.highlighted ? 'primary' : 'gray'"
                :variant="pkg.highlighted ? 'solid' : 'outline'"
                block
              >
                Get Started
              </UButton>
            </div>
          </UCard>
        </div>

        <p class="text-center text-gray-600 mt-8">
          * All packages can be customized to fit your specific needs and budget.
        </p>
      </UContainer>
    </section>

    <!-- CTA Section -->
    <section class="py-20">
      <UContainer>
        <div class="bg-primary rounded-3xl p-12 text-center text-white">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Not Sure Which Service You Need?</h2>
          <p class="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Schedule a free consultation with our wedding experts and let us help you plan the perfect celebration.
          </p>
          <UButton to="/contact" size="xl" color="white">
            Schedule Free Consultation
          </UButton>
        </div>
      </UContainer>
    </section>
  </div>
</template>
