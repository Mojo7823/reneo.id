<script setup lang="ts">
definePageMeta({
  title: 'Digital Invitation - Reneo.id',
})

// Theme previews with Unsplash backgrounds
const themes = [
  {
    name: 'Elegant',
    slug: 'elegant',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop',
    description: 'Timeless elegance with sophisticated styling',
  },
  {
    name: 'Romantic',
    slug: 'romantic',
    image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600&h=400&fit=crop',
    description: 'Soft and dreamy with romantic touches',
  },
  {
    name: 'Garden',
    slug: 'garden',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop',
    description: 'Natural beauty with lush greenery',
  },
  {
    name: 'Beach',
    slug: 'beach',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop',
    description: 'Coastal vibes for destination weddings',
  },
  {
    name: 'Rustic',
    slug: 'rustic',
    image: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?w=600&h=400&fit=crop',
    description: 'Warm and cozy with rustic charm',
  },
  {
    name: 'Modern',
    slug: 'modern',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&h=400&fit=crop',
    description: 'Clean and contemporary design',
  },
]

// Features list
const features = [
  {
    icon: 'i-heroicons-paint-brush',
    title: 'Beautiful Themes',
    description: 'Choose from multiple stunning themes with Unsplash backgrounds',
  },
  {
    icon: 'i-heroicons-device-phone-mobile',
    title: 'Mobile Friendly',
    description: 'Looks perfect on any device - phones, tablets, and desktops',
  },
  {
    icon: 'i-heroicons-globe-alt',
    title: 'Easy Sharing',
    description: 'Share your invitation link with guests anywhere in the world',
  },
  {
    icon: 'i-heroicons-heart',
    title: 'Personalized',
    description: 'Customize every detail to match your wedding style',
  },
  {
    icon: 'i-heroicons-clock',
    title: 'Quick Setup',
    description: 'Get your digital invitation ready in minutes',
  },
  {
    icon: 'i-heroicons-sparkles',
    title: 'Eco-Friendly',
    description: 'Beautiful invitations with zero paper waste',
  },
]
</script>

<template>
  <div>
    <!-- Hero Section with Unsplash Background -->
    <section class="relative py-20 bg-gray-900">
      <div class="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1920&h=600&fit=crop"
          alt="Digital Invitation Hero"
          class="w-full h-full object-cover opacity-40"
        />
      </div>
      <UContainer class="relative z-10">
        <div class="text-center text-white">
          <h1 class="text-5xl md:text-6xl font-serif font-bold mb-4">Digital Wedding Invitations</h1>
          <p class="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto mb-8">
            Create stunning, eco-friendly digital invitations that your guests will love. Beautiful themes with Unsplash backgrounds.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <UButton to="/invitation/demo" size="xl" color="white" variant="solid">
              View Demo Invitation
            </UButton>
            <UButton to="/contact" size="xl" variant="outline" color="white">
              Get Started
            </UButton>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Features Section -->
    <section class="py-16 bg-white">
      <UContainer>
        <div class="text-center mb-12">
          <p class="text-primary font-medium mb-2 uppercase tracking-wide">Features</p>
          <h2 class="text-4xl font-serif font-bold mb-4 text-gray-900">Why Choose Digital Invitations?</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Modern, beautiful, and convenient invitations for your special day
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="text-center p-6"
          >
            <div class="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <UIcon :name="feature.icon" class="w-7 h-7 text-primary" />
            </div>
            <h3 class="text-lg font-semibold mb-2 text-gray-900">{{ feature.title }}</h3>
            <p class="text-gray-600">{{ feature.description }}</p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Themes Gallery -->
    <section class="py-16 bg-gray-50">
      <UContainer>
        <div class="text-center mb-12">
          <p class="text-primary font-medium mb-2 uppercase tracking-wide">Themes</p>
          <h2 class="text-4xl font-serif font-bold mb-4 text-gray-900">Beautiful Theme Collection</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our curated selection of wedding invitation themes with stunning Unsplash backgrounds
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="theme in themes"
            :key="theme.slug"
            class="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div class="relative overflow-hidden">
              <img
                :src="theme.image"
                :alt="theme.name"
                class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div class="absolute bottom-4 left-4 right-4 text-white text-center">
                  <UButton to="/invitation/demo" size="sm" color="white" variant="solid">
                    Preview Theme
                  </UButton>
                </div>
              </div>
            </div>
            <div class="p-4 text-center">
              <h3 class="text-lg font-semibold text-gray-900">{{ theme.name }}</h3>
              <p class="text-gray-600 text-sm">{{ theme.description }}</p>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Sample Invitations -->
    <section class="py-16 bg-white">
      <UContainer>
        <div class="text-center mb-12">
          <p class="text-primary font-medium mb-2 uppercase tracking-wide">Examples</p>
          <h2 class="text-4xl font-serif font-bold mb-4 text-gray-900">Sample Invitations</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            See how beautiful your invitation could look
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <NuxtLink
            to="/invitation/sarah-james"
            class="group bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div class="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop"
                alt="Sarah & James Wedding"
                class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span class="text-white font-medium">View Invitation</span>
              </div>
            </div>
            <div class="p-4 text-center">
              <h3 class="text-lg font-semibold text-gray-900">Sarah & James</h3>
              <p class="text-gray-600 text-sm">Elegant Theme</p>
            </div>
          </NuxtLink>

          <NuxtLink
            to="/invitation/emily-david"
            class="group bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div class="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop"
                alt="Emily & David Wedding"
                class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span class="text-white font-medium">View Invitation</span>
              </div>
            </div>
            <div class="p-4 text-center">
              <h3 class="text-lg font-semibold text-gray-900">Emily & David</h3>
              <p class="text-gray-600 text-sm">Beach Theme</p>
            </div>
          </NuxtLink>

          <NuxtLink
            to="/invitation/michelle-ryan"
            class="group bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div class="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1510076857177-7470076d4098?w=600&h=400&fit=crop"
                alt="Michelle & Ryan Wedding"
                class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span class="text-white font-medium">View Invitation</span>
              </div>
            </div>
            <div class="p-4 text-center">
              <h3 class="text-lg font-semibold text-gray-900">Michelle & Ryan</h3>
              <p class="text-gray-600 text-sm">Rustic Theme</p>
            </div>
          </NuxtLink>
        </div>
      </UContainer>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-primary text-white">
      <UContainer>
        <div class="text-center max-w-3xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-serif font-bold mb-4">
            Ready to Create Your Invitation?
          </h2>
          <p class="text-lg mb-8 opacity-90">
            Let us help you create a beautiful digital invitation that your guests will love. Contact us to get started.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <UButton to="/contact" size="xl" color="white" variant="solid">
              Contact Us
            </UButton>
            <UButton to="/invitation/demo" size="xl" variant="outline" color="white">
              View Demo
            </UButton>
          </div>
        </div>
      </UContainer>
    </section>
  </div>
</template>
