<script setup lang="ts">
definePageMeta({
  title: 'Portfolio - Reneo Wedding Organizer',
})

const categories = ['All', 'Outdoor', 'Ballroom', 'Beach', 'Rustic', 'Luxury', 'Intimate']
const selectedCategory = ref('All')

const portfolio = [
  {
    title: 'Sarah & Michael',
    category: 'Outdoor',
    location: 'Bali, Indonesia',
    date: 'December 2024',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
    featured: true,
  },
  {
    title: 'Amanda & James',
    category: 'Ballroom',
    location: 'Jakarta, Indonesia',
    date: 'November 2024',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
    featured: true,
  },
  {
    title: 'Jessica & Ryan',
    category: 'Beach',
    location: 'Lombok, Indonesia',
    date: 'October 2024',
    image: 'https://images.unsplash.com/photo-1546032996-6dfacbacbf3f?w=800&h=600&fit=crop',
    featured: false,
  },
  {
    title: 'Emily & David',
    category: 'Rustic',
    location: 'Bandung, Indonesia',
    date: 'September 2024',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop',
    featured: true,
  },
  {
    title: 'Michelle & Daniel',
    category: 'Luxury',
    location: 'Surabaya, Indonesia',
    date: 'August 2024',
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&h=600&fit=crop',
    featured: false,
  },
  {
    title: 'Lisa & John',
    category: 'Luxury',
    location: 'Yogyakarta, Indonesia',
    date: 'July 2024',
    image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&h=600&fit=crop',
    featured: true,
  },
  {
    title: 'Nina & Chris',
    category: 'Intimate',
    location: 'Ubud, Bali',
    date: 'June 2024',
    image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&h=600&fit=crop',
    featured: false,
  },
  {
    title: 'Rachel & Tom',
    category: 'Outdoor',
    location: 'Malang, Indonesia',
    date: 'May 2024',
    image: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=800&h=600&fit=crop',
    featured: false,
  },
  {
    title: 'Grace & William',
    category: 'Beach',
    location: 'Gili Islands, Indonesia',
    date: 'April 2024',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
    featured: true,
  },
  {
    title: 'Sophie & Alex',
    category: 'Ballroom',
    location: 'Semarang, Indonesia',
    date: 'March 2024',
    image: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=800&h=600&fit=crop',
    featured: false,
  },
  {
    title: 'Diana & Kevin',
    category: 'Rustic',
    location: 'Bogor, Indonesia',
    date: 'February 2024',
    image: 'https://images.unsplash.com/photo-1525772764200-be829a350797?w=800&h=600&fit=crop',
    featured: false,
  },
  {
    title: 'Olivia & Nathan',
    category: 'Intimate',
    location: 'Canggu, Bali',
    date: 'January 2024',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=600&fit=crop',
    featured: true,
  },
]

const filteredPortfolio = computed(() => {
  if (selectedCategory.value === 'All') {
    return portfolio
  }
  return portfolio.filter(item => item.category === selectedCategory.value)
})
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-24 bg-gray-50">
      <UContainer>
        <div class="text-center max-w-3xl mx-auto">
          <p class="text-primary font-semibold mb-2 uppercase tracking-wide">Our Work</p>
          <h1 class="text-4xl md:text-5xl font-bold mb-6">Wedding Portfolio</h1>
          <p class="text-xl text-gray-600">
            Browse through our collection of beautiful weddings. Each celebration tells a unique love story that we were honored to be part of.
          </p>
        </div>
      </UContainer>
    </section>

    <!-- Filter Section -->
    <section class="py-8 border-b sticky top-0 bg-white z-10">
      <UContainer>
        <div class="flex flex-wrap justify-center gap-2">
          <UButton
            v-for="category in categories"
            :key="category"
            :color="selectedCategory === category ? 'primary' : 'gray'"
            :variant="selectedCategory === category ? 'solid' : 'ghost'"
            @click="selectedCategory = category"
          >
            {{ category }}
          </UButton>
        </div>
      </UContainer>
    </section>

    <!-- Portfolio Grid -->
    <section class="py-16">
      <UContainer>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="item in filteredPortfolio"
            :key="item.title"
            class="group relative overflow-hidden rounded-2xl cursor-pointer"
          >
            <!-- Featured Badge -->
            <div
              v-if="item.featured"
              class="absolute top-4 left-4 z-10 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold"
            >
              Featured
            </div>

            <!-- Image -->
            <img
              :src="item.image"
              :alt="item.title"
              class="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-transform duration-500"
            >

            <!-- Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span class="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm mb-3">
                  {{ item.category }}
                </span>
                <h3 class="text-2xl font-bold mb-2">{{ item.title }}</h3>
                <div class="flex items-center gap-4 text-sm opacity-90">
                  <span class="flex items-center gap-1">
                    <UIcon name="i-heroicons-map-pin" class="w-4 h-4" />
                    {{ item.location }}
                  </span>
                  <span class="flex items-center gap-1">
                    <UIcon name="i-heroicons-calendar" class="w-4 h-4" />
                    {{ item.date }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-if="filteredPortfolio.length === 0" class="text-center py-16">
          <UIcon name="i-heroicons-photo" class="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 class="text-xl font-semibold text-gray-600 mb-2">No weddings found</h3>
          <p class="text-gray-500">Try selecting a different category</p>
        </div>
      </UContainer>
    </section>

    <!-- Stats Section -->
    <section class="py-16 bg-gray-50">
      <UContainer>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="text-center">
            <p class="text-4xl md:text-5xl font-bold text-primary mb-2">500+</p>
            <p class="text-gray-600">Weddings Organized</p>
          </div>
          <div class="text-center">
            <p class="text-4xl md:text-5xl font-bold text-primary mb-2">50+</p>
            <p class="text-gray-600">Venues Partners</p>
          </div>
          <div class="text-center">
            <p class="text-4xl md:text-5xl font-bold text-primary mb-2">15K+</p>
            <p class="text-gray-600">Happy Guests</p>
          </div>
          <div class="text-center">
            <p class="text-4xl md:text-5xl font-bold text-primary mb-2">12</p>
            <p class="text-gray-600">Years Experience</p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- CTA Section -->
    <section class="py-20">
      <UContainer>
        <div class="bg-primary rounded-3xl p-12 text-center text-white">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Want Your Wedding Featured Here?</h2>
          <p class="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let us create a wedding that's uniquely yours. Contact us today to start planning your dream celebration.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <UButton to="/contact" size="xl" color="white">
              Start Planning
            </UButton>
            <UButton to="/services" size="xl" variant="outline" color="white">
              View Services
            </UButton>
          </div>
        </div>
      </UContainer>
    </section>
  </div>
</template>
