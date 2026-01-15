<script setup lang="ts">
definePageMeta({
  title: 'Portfolio - Reneo.id',
})

// Portfolio categories
const categories = ref(['All', 'Wedding', 'Engagement', 'Pre-wedding', 'Reception'])
const activeCategory = ref('All')

// Portfolio items
const portfolioItems = [
  {
    id: 1,
    title: 'Sarah & James',
    location: 'Bali Garden Wedding',
    category: 'Wedding',
    date: 'December 2024',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
    description: 'A magical garden wedding surrounded by tropical beauty in Bali.',
  },
  {
    id: 2,
    title: 'Emily & David',
    location: 'Beach Sunset Ceremony',
    category: 'Wedding',
    date: 'November 2024',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=600&fit=crop',
    description: 'Romantic beach ceremony with a breathtaking sunset backdrop.',
  },
  {
    id: 3,
    title: 'Michelle & Ryan',
    location: 'Elegant Ballroom',
    category: 'Reception',
    date: 'October 2024',
    image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&h=600&fit=crop',
    description: 'Sophisticated ballroom reception with elegant decor and lighting.',
  },
  {
    id: 4,
    title: 'Jessica & Mark',
    location: 'Rustic Vineyard',
    category: 'Wedding',
    date: 'September 2024',
    image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&h=600&fit=crop',
    description: 'Charming vineyard wedding with rustic touches and natural beauty.',
  },
  {
    id: 5,
    title: 'Amanda & Chris',
    location: 'Mountain Retreat',
    category: 'Pre-wedding',
    date: 'August 2024',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=600&fit=crop',
    description: 'Stunning pre-wedding photoshoot in a serene mountain setting.',
  },
  {
    id: 6,
    title: 'Nicole & Andrew',
    location: 'Classic Church Wedding',
    category: 'Wedding',
    date: 'July 2024',
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&h=600&fit=crop',
    description: 'Traditional church ceremony with timeless elegance.',
  },
  {
    id: 7,
    title: 'Rachel & Tom',
    location: 'Romantic Engagement',
    category: 'Engagement',
    date: 'June 2024',
    image: 'https://images.unsplash.com/photo-1529636798458-92182e662485?w=800&h=600&fit=crop',
    description: 'Intimate engagement session capturing the love between two souls.',
  },
  {
    id: 8,
    title: 'Sophia & Daniel',
    location: 'Luxury Resort',
    category: 'Reception',
    date: 'May 2024',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&h=600&fit=crop',
    description: 'Lavish resort reception with stunning ocean views.',
  },
  {
    id: 9,
    title: 'Grace & William',
    location: 'Garden Pre-wedding',
    category: 'Pre-wedding',
    date: 'April 2024',
    image: 'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=800&h=600&fit=crop',
    description: 'Beautiful garden pre-wedding shoot with blooming flowers.',
  },
  {
    id: 10,
    title: 'Hannah & Lucas',
    location: 'Romantic Sunset',
    category: 'Engagement',
    date: 'March 2024',
    image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=600&fit=crop',
    description: 'Golden hour engagement photos with a beautiful couple.',
  },
  {
    id: 11,
    title: 'Megan & Jake',
    location: 'Indoor Celebration',
    category: 'Reception',
    date: 'February 2024',
    image: 'https://images.unsplash.com/photo-1478146059778-26028b07395a?w=800&h=600&fit=crop',
    description: 'Elegant indoor reception with beautiful table arrangements.',
  },
  {
    id: 12,
    title: 'Olivia & Ethan',
    location: 'Tropical Paradise',
    category: 'Wedding',
    date: 'January 2024',
    image: 'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?w=800&h=600&fit=crop',
    description: 'Destination wedding in a tropical paradise.',
  },
]

// Computed filtered items
const filteredItems = computed(() => {
  if (activeCategory.value === 'All') {
    return portfolioItems
  }
  return portfolioItems.filter((item) => item.category === activeCategory.value)
})
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-20 bg-gray-900">
      <div class="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=1920&h=600&fit=crop"
          alt="Portfolio Hero"
          class="w-full h-full object-cover opacity-40"
        />
      </div>
      <UContainer class="relative z-10">
        <div class="text-center text-white">
          <h1 class="text-5xl md:text-6xl font-serif font-bold mb-4">Our Portfolio</h1>
          <p class="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
            Browse through our collection of beautiful weddings and celebrations. Each moment captured tells a unique love story.
          </p>
        </div>
      </UContainer>
    </section>

    <!-- Filter Section -->
    <section class="py-8 bg-white border-b">
      <UContainer>
        <div class="flex flex-wrap justify-center gap-2">
          <UButton
            v-for="category in categories"
            :key="category"
            :variant="activeCategory === category ? 'solid' : 'ghost'"
            :color="activeCategory === category ? 'primary' : 'gray'"
            @click="activeCategory = category"
          >
            {{ category }}
          </UButton>
        </div>
      </UContainer>
    </section>

    <!-- Portfolio Grid -->
    <section class="py-16 bg-gray-50">
      <UContainer>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="item in filteredItems"
            :key="item.id"
            class="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div class="relative overflow-hidden">
              <img
                :src="item.image"
                :alt="item.title"
                class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div class="absolute top-4 right-4">
                <span class="bg-white/90 text-gray-800 text-xs font-medium px-3 py-1 rounded-full">
                  {{ item.category }}
                </span>
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div class="absolute bottom-4 left-4 right-4 text-white">
                  <p class="text-sm opacity-90">{{ item.description }}</p>
                </div>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-1">{{ item.title }}</h3>
              <p class="text-primary font-medium text-sm mb-2">{{ item.location }}</p>
              <p class="text-gray-500 text-sm">{{ item.date }}</p>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-if="filteredItems.length === 0" class="text-center py-16">
          <UIcon name="i-heroicons-photo" class="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p class="text-gray-500 text-lg">No items found in this category.</p>
        </div>
      </UContainer>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-primary text-white">
      <UContainer>
        <div class="text-center max-w-3xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-serif font-bold mb-4">
            Want Your Wedding Featured Here?
          </h2>
          <p class="text-lg mb-8 opacity-90">
            Let us capture your special moments and create timeless memories for you to cherish forever.
          </p>
          <UButton to="/contact" size="xl" color="white" variant="solid">
            Contact Us Today
          </UButton>
        </div>
      </UContainer>
    </section>
  </div>
</template>
