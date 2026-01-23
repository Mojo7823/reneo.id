<script setup lang="ts">
definePageMeta({
  title: 'Portofolio - Reneo.id',
})

// Portfolio categories
const categories = ref(['Semua', 'Pernikahan', 'Pertunangan', 'Prewedding', 'Resepsi'])
const activeCategory = ref('Semua')

// Portfolio items
const portfolioItems = [
  {
    id: 1,
    title: 'Sarah & James',
    location: 'Pernikahan Taman Bali',
    category: 'Pernikahan',
    date: 'Desember 2024',
    image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Pernikahan taman ajaib dikelilingi keindahan tropis di Bali.',
  },
  {
    id: 2,
    title: 'Emily & David',
    location: 'Upacara Pantai Sunset',
    category: 'Pernikahan',
    date: 'November 2024',
    image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Upacara pantai romantis dengan latar belakang sunset memukau.',
  },
  {
    id: 3,
    title: 'Michelle & Ryan',
    location: 'Ballroom Elegan',
    category: 'Resepsi',
    date: 'Oktober 2024',
    image: 'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Resepsi ballroom elegan dengan dekorasi dan pencahayaan mewah.',
  },
  {
    id: 4,
    title: 'Jessica & Mark',
    location: 'Kebun Anggur Rustic',
    category: 'Pernikahan',
    date: 'September 2024',
    image: 'https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Pernikahan kebun anggur menawan dengan sentuhan rustic dan keindahan alami.',
  },
  {
    id: 5,
    title: 'Amanda & Chris',
    location: 'Retreat Pegunungan',
    category: 'Prewedding',
    date: 'Agustus 2024',
    image: 'https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Sesi foto prewedding menakjubkan di suasana pegunungan yang tenang.',
  },
  {
    id: 6,
    title: 'Nicole & Andrew',
    location: 'Pernikahan Gereja Klasik',
    category: 'Pernikahan',
    date: 'Juli 2024',
    image: 'https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Upacara gereja tradisional dengan keanggunan abadi.',
  },
  {
    id: 7,
    title: 'Rachel & Tom',
    location: 'Pertunangan Romantis',
    category: 'Pertunangan',
    date: 'Juni 2024',
    image: 'https://images.pexels.com/photos/1456613/pexels-photo-1456613.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Sesi pertunangan intim mengabadikan cinta antara dua jiwa.',
  },
  {
    id: 8,
    title: 'Sophia & Daniel',
    location: 'Resort Mewah',
    category: 'Resepsi',
    date: 'Mei 2024',
    image: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Resepsi resort mewah dengan pemandangan laut menakjubkan.',
  },
  {
    id: 9,
    title: 'Grace & William',
    location: 'Prewedding Taman',
    category: 'Prewedding',
    date: 'April 2024',
    image: 'https://images.pexels.com/photos/1035665/pexels-photo-1035665.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Sesi prewedding taman indah dengan bunga-bunga bermekaran.',
  },
  {
    id: 10,
    title: 'Hannah & Lucas',
    location: 'Sunset Romantis',
    category: 'Pertunangan',
    date: 'Maret 2024',
    image: 'https://images.pexels.com/photos/1589216/pexels-photo-1589216.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Foto pertunangan golden hour dengan pasangan cantik.',
  },
  {
    id: 11,
    title: 'Megan & Jake',
    location: 'Perayaan Indoor',
    category: 'Resepsi',
    date: 'Februari 2024',
    image: 'https://images.pexels.com/photos/1045541/pexels-photo-1045541.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Resepsi indoor elegan dengan penataan meja yang indah.',
  },
  {
    id: 12,
    title: 'Olivia & Ethan',
    location: 'Surga Tropis',
    category: 'Pernikahan',
    date: 'Januari 2024',
    image: 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Pernikahan destinasi di surga tropis.',
  },
]

// Computed filtered items
const filteredItems = computed(() => {
  if (activeCategory.value === 'Semua') {
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
          src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop"
          alt="Hero Portofolio"
          class="w-full h-full object-cover opacity-40"
        />
      </div>
      <UContainer class="relative z-10">
        <div class="text-center text-white">
          <h1 class="text-5xl md:text-6xl font-serif font-bold mb-4">Portofolio Kami</h1>
          <p class="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
            Jelajahi koleksi pernikahan dan perayaan indah kami. Setiap momen yang diabadikan menceritakan kisah cinta yang unik.
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
            :color="activeCategory === category ? 'primary' : 'neutral'"
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
          <p class="text-gray-500 text-lg">Tidak ada item ditemukan di kategori ini.</p>
        </div>
      </UContainer>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-primary text-white">
      <UContainer>
        <div class="text-center max-w-3xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-serif font-bold mb-4">
            Ingin Pernikahan Anda Ditampilkan Di Sini?
          </h2>
          <p class="text-lg mb-8 opacity-90">
            Biarkan kami mengabadikan momen spesial Anda dan menciptakan kenangan abadi untuk Anda hargai selamanya.
          </p>
          <UButton to="/contact" size="xl" color="white" variant="solid">
            Hubungi Kami Hari Ini
          </UButton>
        </div>
      </UContainer>
    </section>
  </div>
</template>
