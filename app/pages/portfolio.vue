<!--
  Portfolio Page
  
  Displays all customer galleries using real photos from the Photos directory.
  
  Requirements: 2.1, 2.2, 2.3, 2.4, 2.5
  - No placeholder images from external URLs (2.1)
  - Displays images from 24 customer folders (2.2)
  - Serves images from public assets directory (2.3)
  - Each CustomerGallery as a separate card (2.4)
  - No customer names or identifying information (2.5)
-->
<script setup lang="ts">
import type { CustomerGallery } from '~/data/portfolioConfig'

definePageMeta({
  title: 'Portofolio - Reneo.id',
})

// Get all galleries from the composable
const { galleries } = usePortfolio()

// Lightbox state
const lightboxOpen = ref(false)
const lightboxImage = ref('')
const lightboxGallery = ref<CustomerGallery | null>(null)

/**
 * Handle image click from PortfolioCard
 * Opens the lightbox with the clicked image
 */
function handleImageClick(image: string, gallery: CustomerGallery) {
  lightboxImage.value = image
  lightboxGallery.value = gallery
  lightboxOpen.value = true
}

/**
 * Handle navigation within the lightbox
 */
function handleLightboxNavigate(direction: 'prev' | 'next') {
  if (!lightboxGallery.value) return
  
  const currentIndex = lightboxGallery.value.images.indexOf(lightboxImage.value)
  if (currentIndex === -1) return
  
  if (direction === 'prev' && currentIndex > 0) {
    lightboxImage.value = lightboxGallery.value.images[currentIndex - 1]!
  } else if (direction === 'next' && currentIndex < lightboxGallery.value.images.length - 1) {
    lightboxImage.value = lightboxGallery.value.images[currentIndex + 1]!
  }
}
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-20 bg-gray-900">
      <div class="absolute inset-0 z-0">
        <!-- Use first image from first gallery as hero background if available -->
        <img
          v-if="galleries.length > 0 && galleries[0]?.images[0]"
          :src="galleries[0].images[0]"
          alt="Hero Portofolio"
          class="w-full h-full object-cover opacity-40"
        />
        <div v-else class="w-full h-full bg-gray-800" />
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

    <!-- Portfolio Grid -->
    <section class="py-16 bg-gray-50">
      <UContainer>
        <!-- Gallery count indicator -->
        <div class="text-center mb-8">
          <p class="text-gray-600">
            Menampilkan {{ galleries.length }} galeri pernikahan
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PortfolioCard
            v-for="gallery in galleries"
            :key="gallery.id"
            :gallery="gallery"
            @image-click="handleImageClick"
          />
        </div>

        <!-- Empty State -->
        <div v-if="galleries.length === 0" class="text-center py-16">
          <UIcon name="i-heroicons-photo" class="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p class="text-gray-500 text-lg">Belum ada galeri portofolio.</p>
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
          <UButton href="https://wa.me/6285158151161" target="_blank" size="xl" color="neutral" variant="solid">
            Hubungi Kami Hari Ini
          </UButton>
        </div>
      </UContainer>
    </section>

    <!-- Lightbox for image enlargement -->
    <PortfolioLightbox
      v-model:open="lightboxOpen"
      :image="lightboxImage"
      :gallery="lightboxGallery ?? undefined"
      @navigate="handleLightboxNavigate"
    />
  </div>
</template>
