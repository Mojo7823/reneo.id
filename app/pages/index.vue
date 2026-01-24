<script setup lang="ts">
import type { CustomerGallery } from '~/data/portfolioConfig'

definePageMeta({
  title: 'Home - Reneo.id Wedding Organizer',
})

// Portfolio composable for preview galleries
const { getPreviewGalleries } = usePortfolio()
const previewGalleries = getPreviewGalleries(6)

// Lightbox state for portfolio
const lightboxOpen = ref(false)
const lightboxImage = ref('')
const lightboxGallery = ref<CustomerGallery | null>(null)

/**
 * Handle image click from PortfolioCard to open lightbox
 */
function handleImageClick(image: string, gallery: CustomerGallery) {
  lightboxImage.value = image
  lightboxGallery.value = gallery
  lightboxOpen.value = true
}

/**
 * Handle navigation within lightbox
 */
function handleLightboxNavigate(direction: 'prev' | 'next') {
  if (!lightboxGallery.value) return
  
  const currentIndex = lightboxGallery.value.images.indexOf(lightboxImage.value)
  if (currentIndex === -1) return
  
  const newIndex = direction === 'prev' ? currentIndex - 1 : currentIndex + 1
  if (newIndex >= 0 && newIndex < lightboxGallery.value.images.length) {
    lightboxImage.value = lightboxGallery.value.images[newIndex]!
  }
}

// Carousel for About section - using real portfolio images
const carouselSlides = [
  {
    image: '/portfolio/customer_1/2026-01-04_07-04-19_UTC_1.jpg',
    title: 'Sejak 2023 di Surabaya',
    description: 'Membantu pasangan menciptakan pernikahan bermakna dan tak terlupakan'
  },
  {
    image: '/portfolio/customer_10/2025-07-13_12-50-51_UTC_2.jpg',
    title: 'Tradisi & Kreativitas',
    description: 'Memadukan nilai-nilai tradisional dengan inovasi modern untuk momen pernikahan yang unik'
  },
  {
    image: '/portfolio/customer_15/2025-06-22_08-05-41_UTC_1.jpg',
    title: 'Tim Profesional',
    description: 'Dari tim kecil penuh semangat menjadi tim profesional yang berdedikasi untuk Anda'
  },
  {
    image: '/portfolio/customer_5/2025-12-04_03-54-58_UTC_3.jpg',
    title: 'Re + Neo',
    description: 'Nilai fundamental yang teruji bertemu dengan inovasi yang terus berkembang'
  },
]

const currentSlide = ref(0)
let slideInterval: ReturnType<typeof setInterval> | null = null

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % carouselSlides.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + carouselSlides.length) % carouselSlides.length
}

const goToSlide = (index: number) => {
  currentSlide.value = index
}

const startAutoSlide = () => {
  slideInterval = setInterval(nextSlide, 5000)
}

const stopAutoSlide = () => {
  if (slideInterval) {
    clearInterval(slideInterval)
    slideInterval = null
  }
}

// Scroll down function
const scrollToAbout = () => {
  const aboutSection = document.getElementById('about')
  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: 'smooth' })
  }
}

// Scroll animation observer
const observeElements = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  )

  const animatedElements = document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale')
  animatedElements.forEach((el) => observer.observe(el))
}

onMounted(() => {
  startAutoSlide()
  observeElements()
  fetchReviews()
})

onUnmounted(() => {
  stopAutoSlide()
})




// Google Maps configuration
const mapsConfig = {
  embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.6!2d112.75!3d-7.29!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMTcnMjQuMCJTIDExMsKwNDUnMDAuMCJF!5e0!3m2!1sen!2sid!4v1234567890',
  placeUrl: 'https://maps.app.goo.gl/YgQcDsoE1JfFFR9p7',
  placeName: 'Reneo.id Wedding Organizer',
}

const mapsLoaded = ref(true)

const handleMapsError = () => {
  mapsLoaded.value = false
  console.warn('Google Maps embed failed to load')
}

// Google Reviews from Featurable API
interface FeaturableReview {
  id: string
  author: {
    name: string
    avatarUrl?: string
  }
  text: string
  originalText?: string
  rating: {
    value: number
    max: number
  }
  publishedAt: string
}

interface FeaturableResponse {
  success: boolean
  widget: {
    reviews: FeaturableReview[]
  }
}

interface DisplayReview {
  reviewer_name: string
  reviewer_photo?: string
  rating: number
  text: string
  relative_time?: string
}

const reviews = ref<DisplayReview[]>([])
const reviewsLoading = ref(true)
const reviewsError = ref(false)
const placeRating = ref<number | null>(null)
const totalReviews = ref<number | null>(null)

// Calculate relative time from date
const getRelativeTime = (dateString: string): string => {
  const date = new Date(dateString)
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
  
  if (diffDays < 1) return 'Hari ini'
  if (diffDays === 1) return 'Kemarin'
  if (diffDays < 7) return `${diffDays} hari lalu`
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} minggu lalu`
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} bulan lalu`
  return `${Math.floor(diffDays / 365)} tahun lalu`
}

const fetchReviews = async () => {
  try {
    reviewsLoading.value = true
    reviewsError.value = false
    const response = await fetch('https://featurable.com/api/v2/widgets/220e1c90-ea54-4916-b648-8a3c1c62f8eb')
    if (!response.ok) throw new Error('Failed to fetch reviews')
    const data: FeaturableResponse = await response.json()
    
    if (data.success && data.widget?.reviews) {
      // Map Featurable reviews to our display format
      reviews.value = data.widget.reviews.map((r: FeaturableReview) => ({
        reviewer_name: r.author.name,
        reviewer_photo: r.author.avatarUrl,
        rating: r.rating.value,
        text: r.originalText || r.text, // Prefer original Indonesian text
        relative_time: getRelativeTime(r.publishedAt)
      }))
      
      // Calculate average rating
      if (reviews.value.length > 0) {
        const avgRating = reviews.value.reduce((sum, r) => sum + r.rating, 0) / reviews.value.length
        placeRating.value = avgRating
        totalReviews.value = reviews.value.length
      }
      
      // Re-observe elements after reviews are rendered
      nextTick(() => {
        observeElements()
      })
    }
  } catch (error) {
    console.warn('Failed to fetch Google reviews:', error)
    reviewsError.value = true
  } finally {
    reviewsLoading.value = false
  }
}

// Generate star rating display
const getStars = (rating: number) => {
  return Array.from({ length: 5 }, (_, i) => i < Math.round(rating))
}

// Wedding Packages - No pricing information included
const packages = [
  {
    name: 'Prajurit Package',
    guestRange: '100-300 Tamu',
    features: [
      'Konsultasi Wedding Unlimited',
      'Koordinasi Vendor (H-30 hari)',
      'Rundown Acara Detail',
      'Technical Meeting 2x',
      '4 Jam Acara',
      '3 Crew di Hari-H',
    ],
    freeItems: ['Used Nampan Melati'],
  },
  {
    name: 'Abdi Dalem Package',
    guestRange: '400-800 Tamu',
    features: [
      'Konsultasi Wedding Unlimited',
      'Koordinasi Vendor (H-60 hari)',
      'Rundown Acara Detail',
      'Technical Meeting 3x',
      '6 Jam Acara',
      '5 Crew di Hari-H',
      'Koordinasi Akad & Resepsi',
    ],
    freeItems: ['Used Nampan Melati', 'Kotak Angpao'],
  },
  {
    name: 'Sultan Package',
    guestRange: '800-1200 Tamu',
    features: [
      'Konsultasi Wedding Unlimited',
      'Koordinasi Vendor (H-90 hari)',
      'Rundown Acara Detail',
      'Technical Meeting 5x',
      '8 Jam Acara',
      '8 Crew di Hari-H',
      'Koordinasi Akad & Resepsi',
      'Koordinasi Prewedding',
      'Vendor Recommendation Premium',
    ],
    freeItems: ['Used Nampan Melati', 'Kotak Angpao', 'Buku Tamu Premium'],
  },
]
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section id="hero" class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Latar Belakang Pernikahan"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black/40"></div>
      </div>
      
      <!-- Hero Content -->
      <div class="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <p class="text-lg md:text-xl mb-4 tracking-widest uppercase">Selamat Datang di</p>
        <h1 class="text-5xl md:text-7xl font-serif font-bold mb-6">Reneo.id</h1>
        <p class="text-xl md:text-2xl mb-4 font-light">Wedding Organizer</p>
        <p class="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Menciptakan momen ajaib dan perayaan tak terlupakan. Biarkan kami mewujudkan impian pernikahan Anda menjadi kenyataan indah.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <UButton href="#portfolio" size="xl" color="neutral" variant="solid">
            Lihat Portofolio Kami
          </UButton>
          <UButton href="#location" size="xl" variant="outline" color="neutral">
            Hubungi Kami
          </UButton>
        </div>
      </div>
      
      <!-- Scroll Indicator - Clickable -->
      <button 
        @click="scrollToAbout" 
        class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce scroll-down-btn focus:outline-none"
        aria-label="Scroll ke bawah"
      >
        <UIcon name="i-heroicons-chevron-down" class="w-10 h-10 text-white hover:text-primary transition-colors" />
      </button>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 bg-white">
      <UContainer>
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="scroll-animate-left">
            <p class="text-primary font-medium mb-2 uppercase tracking-wide">Tentang Kami</p>
            <h2 class="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900">
              Kisah Anda, Diceritakan dengan Indah
            </h2>
            <p class="text-lg text-gray-600 mb-6">
              Reneo.id didirikan pada tahun 2023 di Surabaya dengan visi membantu pasangan menciptakan pernikahan yang bermakna dan tak terlupakan. Berawal dari tim kecil yang penuh semangat, kami telah berkembang menjadi tim profesional yang berdedikasi untuk mewujudkan pernikahan impian setiap pasangan.
            </p>
            <p class="text-lg text-gray-600 mb-4">
              Nama "Reneo" memiliki filosofi mendalam: "Re" melambangkan nilai-nilai fundamental yang telah teruji, sementara "Neo" merepresentasikan inovasi yang terus berkembang. Kami percaya bahwa pernikahan yang sempurna adalah perpaduan antara tradisi yang bermakna dan kreativitas yang segar.
            </p>
            <p class="text-lg text-gray-600 mb-8">
              Dengan menggabungkan tradisi dan kreativitas, kami berkomitmen untuk menciptakan momen pernikahan yang unik dan berkesan bagi setiap pasangan yang kami tangani.
            </p>
            <div class="flex gap-4">
              <UButton href="#portfolio" color="primary" size="lg">
                Lihat Portofolio
              </UButton>
            </div>
          </div>
          
          <!-- Carousel -->
          <div 
            class="scroll-animate-right carousel-container"
            @mouseenter="stopAutoSlide"
            @mouseleave="startAutoSlide"
          >
            <div 
              class="carousel-track"
              :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
            >
              <div 
                v-for="(slide, index) in carouselSlides" 
                :key="index"
                class="carousel-slide"
              >
                <img
                  :src="slide.image"
                  :alt="slide.title"
                  class="carousel-image"
                />
                <div class="carousel-overlay">
                  <div class="carousel-caption">
                    <h3>{{ slide.title }}</h3>
                    <p>{{ slide.description }}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Navigation Arrows -->
            <button class="carousel-nav prev" @click="prevSlide" aria-label="Slide sebelumnya">
              <UIcon name="i-heroicons-chevron-left" class="w-6 h-6 text-gray-700" />
            </button>
            <button class="carousel-nav next" @click="nextSlide" aria-label="Slide selanjutnya">
              <UIcon name="i-heroicons-chevron-right" class="w-6 h-6 text-gray-700" />
            </button>
            
            <!-- Dots -->
            <div class="carousel-dots">
              <button
                v-for="(slide, index) in carouselSlides"
                :key="index"
                class="carousel-dot"
                :class="{ active: currentSlide === index }"
                @click="goToSlide(index)"
                :aria-label="`Go to slide ${index + 1}`"
              ></button>
            </div>
          </div>
        </div>
      </UContainer>
    </section>


    <!-- Portfolio Section -->
    <section id="portfolio" class="py-20 bg-white">
      <UContainer>
        <div class="text-center mb-16 scroll-animate">
          <p class="text-primary font-medium mb-2 uppercase tracking-wide">Karya Kami</p>
          <h2 class="text-4xl md:text-5xl font-serif font-bold mb-4 text-gray-900">Portofolio Pernikahan</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Jelajahi beberapa pernikahan terindah kami dan dapatkan inspirasi untuk hari spesial Anda
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <PortfolioCard
            v-for="(gallery, index) in previewGalleries"
            :key="gallery.id"
            :gallery="gallery"
            class="scroll-animate-scale"
            :class="`delay-${((index % 3) + 1) * 100}`"
            @image-click="handleImageClick"
          />
        </div>

        <div class="text-center mt-12 scroll-animate">
          <UButton to="/portfolio" color="primary" size="lg">
            Lihat Portofolio Lengkap
          </UButton>
        </div>
      </UContainer>
      
      <!-- Portfolio Lightbox -->
      <PortfolioLightbox
        v-model:open="lightboxOpen"
        :image="lightboxImage"
        :gallery="lightboxGallery ?? undefined"
        @navigate="handleLightboxNavigate"
      />
    </section>

    <!-- Instagram Section -->
    <section id="instagram" class="py-20 bg-gray-50">
      <UContainer>
        <div class="text-center mb-12 scroll-animate">
          <p class="text-primary font-medium mb-2 uppercase tracking-wide">Ikuti Kami</p>
          <h2 class="text-4xl md:text-5xl font-serif font-bold mb-4 text-gray-900">
            Instagram Kami
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            Ikuti perjalanan kami dan lihat momen-momen indah dari pernikahan yang telah kami tangani
          </p>
          <UButton
            href="https://www.instagram.com/reneo.planner/"
            target="_blank"
            rel="noopener noreferrer"
            color="primary"
            variant="outline"
            size="lg"
            class="mb-8"
          >
            <UIcon name="i-simple-icons-instagram" class="w-5 h-5 mr-2" />
            @reneo.planner
          </UButton>
        </div>
        
        <!-- Instagram Embed -->
        <div class="scroll-animate max-w-4xl mx-auto">
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
            <iframe
              src="https://www.instagram.com/reneo.planner/embed"
              class="w-full border-0"
              style="min-height: 600px;"
              scrolling="no"
              allowtransparency="true"
              title="Instagram Feed Reneo.planner"
            ></iframe>
          </div>
          
          <!-- Fallback link if embed doesn't load -->
          <div class="text-center mt-6">
            <p class="text-gray-500 text-sm mb-3">Tidak dapat melihat feed? Kunjungi langsung:</p>
            <UButton
              href="https://www.instagram.com/reneo.planner/"
              target="_blank"
              rel="noopener noreferrer"
              color="neutral"
              variant="ghost"
            >
              <UIcon name="i-heroicons-arrow-top-right-on-square" class="w-4 h-4 mr-2" />
              Buka Instagram
            </UButton>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Packages Section -->
    <section id="packages" class="py-20 bg-white">
      <UContainer>
        <div class="text-center mb-16 scroll-animate">
          <p class="text-primary font-medium mb-2 uppercase tracking-wide">Paket Kami</p>
          <h2 class="text-4xl md:text-5xl font-serif font-bold mb-4 text-gray-900">
            Paket Layanan Kami
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan pernikahan Anda
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <UCard
            v-for="(pkg, index) in packages"
            :key="pkg.name"
            class="hover:shadow-lg transition-shadow duration-300 scroll-animate"
            :class="`delay-${(index + 1) * 100}`"
          >
            <div class="p-6">
              <div class="text-center mb-6">
                <h3 class="text-2xl font-serif font-bold text-gray-900 mb-2">{{ pkg.name }}</h3>
                <p class="text-primary font-medium text-lg">{{ pkg.guestRange }}</p>
              </div>
              
              <ul class="space-y-3 mb-6">
                <li
                  v-for="feature in pkg.features"
                  :key="feature"
                  class="flex items-start"
                >
                  <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                  <span class="text-gray-600">{{ feature }}</span>
                </li>
              </ul>
              
              <div class="border-t pt-4">
                <p class="text-sm font-medium text-gray-900 mb-2">Gratis:</p>
                <ul class="space-y-2">
                  <li
                    v-for="freeItem in pkg.freeItems"
                    :key="freeItem"
                    class="flex items-center"
                  >
                    <UIcon name="i-heroicons-gift" class="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    <span class="text-sm text-gray-600">{{ freeItem }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </UCard>
        </div>

        <div class="text-center mt-12 scroll-animate">
          <UButton href="#location" color="primary" size="lg">
            Konsultasi Paket
          </UButton>
        </div>
      </UContainer>
    </section>

    <!-- Maps & Reviews Section -->
    <section id="location" class="py-20 bg-white">
      <UContainer>
        <div class="text-center mb-16 scroll-animate">
          <p class="text-primary font-medium mb-2 uppercase tracking-wide">Temukan Kami</p>
          <h2 class="text-4xl md:text-5xl font-serif font-bold mb-4 text-gray-900">
            Lokasi & Ulasan Kami
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Kunjungi kantor kami atau lihat ulasan dari pasangan yang telah kami bantu
          </p>
        </div>

        <!-- Overall Rating Summary -->
        <div v-if="placeRating && totalReviews" class="text-center mb-12 scroll-animate">
          <div class="inline-flex items-center gap-4 bg-gray-50 rounded-2xl px-8 py-4">
            <div class="flex items-center gap-1">
              <UIcon 
                v-for="(filled, i) in getStars(placeRating)" 
                :key="i"
                :name="filled ? 'i-heroicons-star-solid' : 'i-heroicons-star'" 
                class="w-6 h-6"
                :class="filled ? 'text-yellow-400' : 'text-gray-300'"
              />
            </div>
            <div class="text-left">
              <p class="text-2xl font-bold text-gray-900">{{ placeRating.toFixed(1) }}</p>
              <p class="text-sm text-gray-600">{{ totalReviews }} ulasan di Google</p>
            </div>
          </div>
        </div>

        <!-- Reviews Grid -->
        <div class="mb-12">
          <!-- Loading State -->
          <div v-if="reviewsLoading" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="i in 3" :key="i" class="bg-gray-100 rounded-lg p-6 animate-pulse">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-12 h-12 bg-gray-200 rounded-full"></div>
                <div class="flex-1">
                  <div class="h-4 bg-gray-200 rounded w-24 mb-2"></div>
                  <div class="h-3 bg-gray-200 rounded w-16"></div>
                </div>
              </div>
              <div class="space-y-2">
                <div class="h-3 bg-gray-200 rounded"></div>
                <div class="h-3 bg-gray-200 rounded w-5/6"></div>
                <div class="h-3 bg-gray-200 rounded w-4/6"></div>
              </div>
            </div>
          </div>

          <!-- Reviews Display -->
          <div v-else-if="reviews.length > 0" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <UCard
              v-for="(review, index) in reviews.slice(0, 6)"
              :key="index"
              class="hover:shadow-lg transition-shadow duration-300 scroll-animate"
              :class="`delay-${((index % 3) + 1) * 100}`"
            >
              <div class="p-4">
                <!-- Reviewer Info -->
                <div class="flex items-center gap-3 mb-4">
                  <img
                    v-if="review.reviewer_photo"
                    :src="review.reviewer_photo"
                    :alt="review.reviewer_name"
                    class="w-12 h-12 rounded-full object-cover"
                  />
                  <div v-else class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span class="text-primary font-semibold text-lg">{{ review.reviewer_name.charAt(0) }}</span>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="font-semibold text-gray-900 truncate">{{ review.reviewer_name }}</p>
                    <div class="flex items-center gap-1">
                      <UIcon 
                        v-for="(filled, i) in getStars(review.rating)" 
                        :key="i"
                        :name="filled ? 'i-heroicons-star-solid' : 'i-heroicons-star'" 
                        class="w-4 h-4"
                        :class="filled ? 'text-yellow-400' : 'text-gray-300'"
                      />
                    </div>
                  </div>
                </div>
                
                <!-- Review Text -->
                <p class="text-gray-600 text-sm line-clamp-4">{{ review.text }}</p>
                
                <!-- Time -->
                <p v-if="review.relative_time" class="text-xs text-gray-400 mt-3">
                  {{ review.relative_time }}
                </p>
              </div>
            </UCard>
          </div>

          <!-- Error/Fallback State -->
          <div v-else-if="reviewsError" class="text-center py-8">
            <UIcon name="i-heroicons-exclamation-circle" class="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p class="text-gray-600 mb-4">Tidak dapat memuat ulasan</p>
            <UButton
              :href="mapsConfig.placeUrl"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
              variant="outline"
            >
              Lihat Ulasan di Google Maps
            </UButton>
          </div>
        </div>

        <!-- Map and Contact Info -->
        <div class="grid lg:grid-cols-2 gap-8 items-start">
          <!-- Google Maps Embed -->
          <div class="scroll-animate-left">
            <div v-if="mapsLoaded" class="rounded-lg overflow-hidden shadow-lg">
              <iframe
                :src="mapsConfig.embedUrl"
                width="100%"
                height="350"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                @error="handleMapsError"
                title="Lokasi Reneo.id Wedding Organizer"
              ></iframe>
            </div>
            <!-- Fallback if maps fails to load -->
            <div v-else class="rounded-lg bg-gray-100 p-8 text-center h-[350px] flex flex-col items-center justify-center">
              <UIcon name="i-heroicons-map-pin" class="w-16 h-16 text-gray-400 mb-4" />
              <p class="text-gray-600 mb-4">Peta tidak dapat dimuat</p>
              <UButton
                :href="mapsConfig.placeUrl"
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
                variant="outline"
              >
                <UIcon name="i-heroicons-arrow-top-right-on-square" class="w-4 h-4 mr-2" />
                Buka di Google Maps
              </UButton>
            </div>
          </div>

          <!-- Contact Info & More Reviews Link -->
          <div class="scroll-animate-right">
            <UCard class="h-full">
              <div class="p-6">
                <div class="flex items-center mb-6">
                  <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <UIcon name="i-heroicons-map-pin" class="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-gray-900">{{ mapsConfig.placeName }}</h3>
                    <p class="text-gray-600">Surabaya, Jawa Timur</p>
                  </div>
                </div>

                <p class="text-gray-600 mb-6">
                  Kunjungi kantor kami untuk konsultasi langsung atau lihat lebih banyak ulasan dari pasangan yang telah kami bantu di Google Maps.
                </p>

                <div class="space-y-3">
                  <UButton
                    :href="mapsConfig.placeUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="primary"
                    size="lg"
                    class="w-full justify-center"
                  >
                    <UIcon name="i-heroicons-star" class="w-5 h-5 mr-2" />
                    Lihat Semua Ulasan
                  </UButton>

                  <UButton
                    :href="mapsConfig.placeUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    color="neutral"
                    size="lg"
                    class="w-full justify-center"
                  >
                    <UIcon name="i-heroicons-map-pin" class="w-5 h-5 mr-2" />
                    Petunjuk Arah
                  </UButton>
                </div>
              </div>
            </UCard>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-primary text-white">
      <UContainer>
       <div class="text-center max-w-3xl mx-auto scroll-animate">
          <h2 class="text-4xl md:text-5xl font-serif font-bold mb-6">
            Siap Merencanakan Pernikahan Impian Anda?
          </h2>
          <p class="text-xl mb-8 opacity-90">
            Biarkan kami membantu Anda menciptakan pernikahan impian. Hubungi kami hari ini untuk konsultasi gratis dan mari mulai merencanakan hari sempurna Anda bersama.
          </p>
          <div class="flex justify-center">
            <UButton href="https://wa.me/6285158151161" target="_blank" size="xl" color="neutral" variant="solid">
              Jadwalkan Konsultasi
            </UButton>
          </div>
        </div>
      </UContainer>
    </section>
  </div>
</template>
