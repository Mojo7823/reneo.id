<script setup lang="ts">
import type { CustomerGallery } from '~/data/portfolioConfig'

definePageMeta({
  title: 'Home - Reneo.id Wedding Organizer',
})

// Portfolio composable for preview galleries
const { getPreviewGalleries } = usePortfolio()
const previewGalleries = getPreviewGalleries(12)

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

interface CarouselItem {
  src: string
  ratio: number
  naturalWidth: number
  naturalHeight: number
}

const aboutCarouselViewportRef = ref<HTMLElement | null>(null)
const aboutCarouselSegmentRefs = ref<Array<HTMLElement | null>>([null, null, null])

const sectionProgress = ref(0)
const scrollOffsetPx = ref(0)
const dragOffsetPx = ref(0)
const isDragging = ref(false)
const pointerStartX = ref(0)
const pointerStartDragOffset = ref(0)
const activePointerId = ref<number | null>(null)
const cycleWidthPx = ref(1)
const isMobileCarousel = ref(false)
const carouselScrollSensitivity = 2.4

const aboutCarouselImageSources = Array.from({ length: 9 }, (_, index) => `/karusel_1/${index + 1}.jpg`)
const fallbackAboutCarouselItems: CarouselItem[] = aboutCarouselImageSources.map((src) => ({
  src,
  naturalWidth: 1080,
  naturalHeight: 1350,
  ratio: 1080 / 1350
}))

const aboutCarouselItems = ref<CarouselItem[]>(fallbackAboutCarouselItems)

const normalizeOffset = (value: number, cycle: number) => ((value % cycle) + cycle) % cycle

const normalizedOffsetPx = computed(() => {
  const cycle = cycleWidthPx.value || 1
  return normalizeOffset(scrollOffsetPx.value + dragOffsetPx.value, cycle)
})

const trackTranslatePx = computed(() => {
  const cycle = cycleWidthPx.value || 1
  return -(cycle + normalizedOffsetPx.value)
})

const setAboutCarouselSegmentRef = (element: Element | null, index: number) => {
  aboutCarouselSegmentRefs.value[index] = element as HTMLElement | null
}

const getAboutCardStyle = (item: CarouselItem) => {
  if (isMobileCarousel.value) {
    return { width: '66vw' }
  }

  return {
    width: `calc(var(--about-carousel-card-height) * ${item.ratio.toFixed(5)})`
  }
}

const updateCarouselViewportMode = () => {
  isMobileCarousel.value = window.innerWidth < 768
}

const measureAboutCarouselCycleWidth = () => {
  const firstSegment = aboutCarouselSegmentRefs.value[0]
  const secondSegment = aboutCarouselSegmentRefs.value[1]

  if (!firstSegment || !secondSegment) return

  const measuredWidth = secondSegment.offsetLeft - firstSegment.offsetLeft
  if (measuredWidth > 0) {
    cycleWidthPx.value = measuredWidth
  }
}

const updateAboutCarouselScrollProgress = () => {
  const totalScrollableDistance = document.documentElement.scrollHeight - window.innerHeight
  if (totalScrollableDistance <= 0) {
    sectionProgress.value = 0
    scrollOffsetPx.value = 0
    return
  }

  const pageScrollTop = window.scrollY || window.pageYOffset
  const globalProgress = pageScrollTop / totalScrollableDistance
  const clampedGlobalProgress = Math.min(Math.max(globalProgress, 0), 1)

  sectionProgress.value = clampedGlobalProgress
  scrollOffsetPx.value = clampedGlobalProgress * cycleWidthPx.value * carouselScrollSensitivity
}

const updateAboutCarouselLayout = () => {
  updateCarouselViewportMode()
  measureAboutCarouselCycleWidth()
  updateAboutCarouselScrollProgress()
}

const loadAboutCarouselItems = async () => {
  const loadedItems = await Promise.all(
    aboutCarouselImageSources.map((src) => new Promise<CarouselItem>((resolve) => {
      const image = new Image()

      image.onload = () => {
        const naturalWidth = image.naturalWidth || 1080
        const naturalHeight = image.naturalHeight || 1350
        resolve({
          src,
          naturalWidth,
          naturalHeight,
          ratio: naturalWidth / naturalHeight
        })
      }

      image.onerror = () => {
        resolve({
          src,
          naturalWidth: 1080,
          naturalHeight: 1350,
          ratio: 1080 / 1350
        })
      }

      image.src = src
    }))
  )

  aboutCarouselItems.value = loadedItems
}

const releasePointerCaptureSafely = (pointerId: number) => {
  const viewport = aboutCarouselViewportRef.value
  if (!viewport) return

  if (viewport.hasPointerCapture(pointerId)) {
    viewport.releasePointerCapture(pointerId)
  }
}

const onAboutCarouselPointerDown = (event: PointerEvent) => {
  if (event.pointerType === 'mouse' && event.button !== 0) return
  if (activePointerId.value !== null) return

  activePointerId.value = event.pointerId
  pointerStartX.value = event.clientX
  pointerStartDragOffset.value = dragOffsetPx.value
  isDragging.value = true

  aboutCarouselViewportRef.value?.setPointerCapture(event.pointerId)
}

const onAboutCarouselPointerMove = (event: PointerEvent) => {
  if (!isDragging.value) return
  if (activePointerId.value !== event.pointerId) return

  const deltaX = pointerStartX.value - event.clientX
  dragOffsetPx.value = pointerStartDragOffset.value + deltaX
}

const stopAboutCarouselDragging = (event?: PointerEvent) => {
  if (event && activePointerId.value !== null && event.pointerId !== activePointerId.value) return

  const pointerId = activePointerId.value
  isDragging.value = false
  activePointerId.value = null

  if (pointerId !== null) {
    releasePointerCaptureSafely(pointerId)
  }
}

// Scroll down function
const scrollToAbout = () => {
  const aboutSection = document.getElementById('about')
  if (aboutSection) {
    const headerElement = document.querySelector('.site-header') as HTMLElement | null
    const headerOffset = headerElement?.offsetHeight ?? 0
    const top = aboutSection.getBoundingClientRect().top + window.scrollY - headerOffset
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' })
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

onMounted(async () => {
  await loadAboutCarouselItems()
  await nextTick()
  updateAboutCarouselLayout()

  observeElements()
  fetchReviews()

  window.addEventListener('scroll', updateAboutCarouselScrollProgress, { passive: true })
  window.addEventListener('resize', updateAboutCarouselLayout, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateAboutCarouselScrollProgress)
  window.removeEventListener('resize', updateAboutCarouselLayout)
  stopAboutCarouselDragging()
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
    image: '/paket/prajurit.jpg',
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
    image: '/paket/abdidalem.jpg',
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
    image: '/paket/sultan.jpg',
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
    <section id="hero" class="relative min-h-[72vh] md:min-h-[74vh] flex items-center overflow-hidden">
      <!-- Background Video -->
      <div class="absolute inset-0 z-0">
        <video
          class="w-full h-full object-cover"
          autoplay
          muted
          loop
          playsinline
          preload="metadata"
        >
          <source src="/video_cover/cover.mp4" type="video/mp4" />
        </video>
        <div class="absolute inset-0 bg-black/45"></div>
      </div>

      <!-- Hero Content -->
      <UContainer class="relative z-10 w-full">
        <div class="hero-copy text-white max-w-2xl">
          <p class="hero-kicker">Selamat Datang di</p>
          <h1 class="hero-title">RENEO.ID</h1>
          <p class="hero-subtitle">Wedding Organizer</p>
          <p class="hero-description">
            Menciptakan momen dan perayaan tak terlupakan. Biarkan kami mewujudkan impian pernikahan Anda menjadi kenyataan.
          </p>
        </div>
      </UContainer>
      
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
    <section id="about" class="about-editorial section-tone section-tone-about">
      <div class="about-carousel-section">
        <div class="about-carousel-sticky">
          <UContainer class="about-editorial-copy-wrap">
            <div class="about-editorial-copy scroll-animate">
              <p class="about-editorial-jargon">
                <span class="about-editorial-line about-editorial-line-primary">
                  Reneo Planner mewujudkan hari sempurna Anda dengan nyata —
                </span>
                <span class="about-editorial-line about-editorial-line-secondary">
                  Nilai klasik, awal yang baru. Bersama, kita ubah visi Anda menjadi kenyataan.
                </span>
              </p>
            </div>
          </UContainer>

          <div
            ref="aboutCarouselViewportRef"
            class="about-carousel-viewport"
            :class="{ 'is-dragging': isDragging }"
            @pointerdown="onAboutCarouselPointerDown"
            @pointermove="onAboutCarouselPointerMove"
            @pointerup="stopAboutCarouselDragging"
            @pointercancel="stopAboutCarouselDragging"
            @lostpointercapture="stopAboutCarouselDragging"
            @dragstart.prevent
          >
            <div class="about-carousel-track" :style="{ transform: `translate3d(${trackTranslatePx}px, 0, 0)` }">
              <div
                v-for="segmentIndex in 3"
                :key="`about-segment-${segmentIndex}`"
                :ref="(element) => setAboutCarouselSegmentRef(element as Element | null, segmentIndex - 1)"
                class="about-carousel-segment"
              >
                <article
                  v-for="(item, imageIndex) in aboutCarouselItems"
                  :key="`about-card-${segmentIndex}-${item.src}`"
                  class="about-carousel-card"
                  :style="getAboutCardStyle(item)"
                >
                  <img
                    :src="item.src"
                    :alt="`Galeri Reneo ${imageIndex + 1}`"
                    class="about-carousel-image"
                    loading="lazy"
                    decoding="async"
                    draggable="false"
                  />
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- Portfolio Section -->
    <section id="portfolio" class="py-20 section-tone section-tone-portfolio">
      <UContainer>
        <div class="text-center mb-10 scroll-animate">
          <p class="section-script-kicker">Portofolio Kami</p>
        </div>
      </UContainer>

      <div class="portfolio-wide-wrap">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5">
          <PortfolioCard
            v-for="(gallery, index) in previewGalleries"
            :key="gallery.id"
            :gallery="gallery"
            compact
            class="scroll-animate-scale"
            :class="`delay-${((index % 4) + 1) * 100}`"
            @image-click="handleImageClick"
          />
        </div>
      </div>

      <UContainer>
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
    <section id="instagram" class="py-20 section-tone section-tone-instagram">
      <UContainer>
        <div class="text-center mb-12 scroll-animate">
          <p class="section-script-kicker">Ikuti Kami</p>
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
    <section id="packages" class="py-20 section-tone section-tone-packages">
      <UContainer>
        <div class="text-center mb-16 scroll-animate">
          <p class="section-script-kicker">Paket Kami</p>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan pernikahan Anda
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <UCard
            v-for="(pkg, index) in packages"
            :key="pkg.name"
            class="h-full overflow-hidden bg-transparent ring-0 shadow-lg hover:shadow-xl transition-shadow duration-300 scroll-animate"
            :class="`delay-${(index + 1) * 100}`"
            :ui="{ body: 'h-full p-0 sm:p-0' }"
          >
            <div class="relative flex h-full min-h-[34rem] flex-col">
              <img
                :src="pkg.image"
                :alt="`Ilustrasi ${pkg.name}`"
                class="absolute inset-0 h-full w-full object-cover object-center blur-[1px] scale-[1.03]"
                loading="lazy"
                decoding="async"
              />
              <div class="absolute inset-0 bg-black/55"></div>
              <div class="relative z-10 flex h-full flex-col p-6">
                <div class="text-center mb-6">
                  <h3 class="text-2xl font-serif font-bold text-white mb-2">{{ pkg.name }}</h3>
                  <p class="font-medium text-lg text-white/95">{{ pkg.guestRange }}</p>
                </div>

                <ul class="space-y-3 mb-6">
                  <li
                    v-for="feature in pkg.features"
                    :key="feature"
                    class="flex items-start"
                  >
                    <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-white mt-0.5 mr-3 flex-shrink-0" />
                    <span class="text-white/90">{{ feature }}</span>
                  </li>
                </ul>

                <div class="mt-auto border-t border-white/35 pt-4">
                  <p class="text-sm font-medium text-white mb-2">Gratis:</p>
                  <ul class="space-y-2">
                    <li
                      v-for="freeItem in pkg.freeItems"
                      :key="freeItem"
                      class="flex items-center"
                    >
                      <UIcon name="i-heroicons-gift" class="w-4 h-4 text-white mr-2 flex-shrink-0" />
                      <span class="text-sm text-white/85">{{ freeItem }}</span>
                    </li>
                  </ul>
                </div>
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
    <section id="location" class="py-20 section-tone section-tone-location">
      <UContainer>
        <div class="text-center mb-16 scroll-animate">
          <p class="section-script-kicker">Temukan Kami</p>
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
                :class="filled ? 'text-gray-800' : 'text-gray-300'"
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
                        :class="filled ? 'text-gray-800' : 'text-gray-300'"
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

    <!-- Contact / Hubungi Kami Section -->
    <section id="contact" class="py-20 section-tone section-tone-contact">
      <UContainer>
        <div class="text-center mb-16 scroll-animate">
          <p class="section-script-kicker">Hubungi Kami</p>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Hubungi kami untuk konsultasi gratis dan mari mulai merencanakan hari sempurna Anda bersama.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <!-- WhatsApp -->
          <a
            href="https://wa.me/6285158151161"
            target="_blank"
            rel="noopener noreferrer"
            class="scroll-animate delay-100"
          >
            <UCard class="h-full hover:shadow-lg transition-shadow duration-300 text-center">
              <div class="p-6">
                <div class="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UIcon name="i-simple-icons-whatsapp" class="w-7 h-7 text-primary" />
                </div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">Telp / WhatsApp</h3>
                <p class="text-gray-600">085158151161</p>
              </div>
            </UCard>
          </a>

          <!-- Instagram -->
          <a
            href="https://instagram.com/reneo.planner"
            target="_blank"
            rel="noopener noreferrer"
            class="scroll-animate delay-200"
          >
            <UCard class="h-full hover:shadow-lg transition-shadow duration-300 text-center">
              <div class="p-6">
                <div class="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UIcon name="i-simple-icons-instagram" class="w-7 h-7 text-primary" />
                </div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">Instagram</h3>
                <p class="text-gray-600">RENEO.PLANNER</p>
              </div>
            </UCard>
          </a>

          <!-- Address -->
          <a
            href="https://maps.google.com/?q=Gembili+Raya+No+11b+Surabaya"
            target="_blank"
            rel="noopener noreferrer"
            class="scroll-animate delay-300 md:col-span-2 lg:col-span-1"
          >
            <UCard class="h-full hover:shadow-lg transition-shadow duration-300 text-center">
              <div class="p-6">
                <div class="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UIcon name="i-heroicons-map-pin" class="w-7 h-7 text-primary" />
                </div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">Alamat</h3>
                <p class="text-gray-600">Gembili Raya No 11b,<br>Surabaya, Indonesia</p>
              </div>
            </UCard>
          </a>
        </div>

        <!-- CTA Button -->
        <div class="text-center mt-12 scroll-animate">
          <UButton
            href="https://wa.me/6285158151161"
            target="_blank"
            size="xl"
            color="neutral"
            variant="solid"
          >
            Jadwalkan Konsultasi
          </UButton>
        </div>
      </UContainer>
    </section>
  </div>
</template>
