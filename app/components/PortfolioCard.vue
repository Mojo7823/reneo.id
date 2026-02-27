<!--
  PortfolioCard Component
  
  A reusable card component displaying a customer gallery with carousel.
  Uses Nuxt UI's UCarousel for swipeable image navigation.
  
  Requirements: 2.4, 2.5, 3.1, 3.2, 3.3, 5.6
  - Displays each CustomerGallery as a separate card (2.4)
  - Does NOT display any customer names (2.5, 5.6)
  - Carousel with swipeable slides for multi-image galleries (3.1)
  - Navigation arrows for moving between images (3.2)
  - Dot indicators showing current slide position (3.3)
  
  UX Improvements:
  - Navigation arrows overlay on the image (not outside)
  - Arrows appear on hover for desktop users
  - Touch swipe works immediately without click for mobile
-->
<script setup lang="ts">
import type { CustomerGallery } from '~/data/portfolioConfig'

interface Props {
  /** Gallery data to display */
  gallery: CustomerGallery
  /** Compact variant used on homepage dense layout */
  compact?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  compact: false,
})

const emit = defineEmits<{
  /** Emitted when an image is clicked for lightbox trigger */
  (e: 'imageClick', image: string, gallery: CustomerGallery): void
}>()

// Track hover state for showing arrows
const isHovered = ref(false)

/**
 * Handle image click for lightbox trigger
 */
function handleImageClick(image: string) {
  emit('imageClick', image, props.gallery)
}
</script>

<template>
  <div
    class="portfolio-card transition-all duration-300"
    :class="props.compact ? 'portfolio-card--compact' : 'portfolio-card--default'"
    :data-gallery-id="gallery.id"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div class="portfolio-media relative overflow-hidden">
      <!-- Single image display when gallery has only one image -->
      <template v-if="gallery.imageCount === 1">
        <img
          :src="gallery.images[0]"
          :alt="`Portfolio image`"
          class="portfolio-image w-full object-cover cursor-pointer transition-transform duration-500"
          :class="props.compact ? 'h-56 sm:h-60 hover:scale-[1.02]' : 'h-64 hover:scale-105'"
          @click="handleImageClick(gallery.images[0]!)"
        />
      </template>
      
      <!-- Carousel for multi-image galleries -->
      <template v-else>
        <UCarousel
          :items="gallery.images"
          arrows
          dots
          class="portfolio-carousel w-full"
          :ui="{
            root: 'relative',
            item: 'basis-full',
          }"
        >
          <template #default="{ item: image, index }">
            <img
              :src="image"
              :alt="`Portfolio image ${index + 1}`"
              class="portfolio-image w-full object-cover cursor-pointer"
              :class="props.compact ? 'h-56 sm:h-60' : 'h-64'"
              @click="handleImageClick(image)"
            />
          </template>
        </UCarousel>
      </template>
      
      <!-- Image count badge -->
      <div class="absolute top-3 right-3 z-20">
        <span
          class="text-white text-xs font-medium px-2 py-1 rounded-full"
          :class="props.compact ? 'bg-black/55' : 'bg-black/60'"
        >
          {{ gallery.imageCount }} foto
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.portfolio-card--default {
  background: #fff;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 10px 26px rgba(15, 23, 42, 0.11);
}

.portfolio-card--default:hover {
  box-shadow: 0 16px 36px rgba(15, 23, 42, 0.16);
}

.portfolio-card--compact {
  background: transparent;
  border-radius: 0.375rem;
  box-shadow: none;
}

.portfolio-card--compact .portfolio-media {
  border: 1px solid #d4d4d8;
  border-radius: 0.375rem;
  background: #fff;
}

/* Carousel viewport and container */
.portfolio-card :deep(.embla__viewport),
.portfolio-card :deep([data-slot="viewport"]) {
  overflow: hidden;
}

.portfolio-card :deep(.embla__container),
.portfolio-card :deep([data-slot="container"]) {
  display: flex;
  /* Enable touch swipe without requiring click first */
  touch-action: pan-y pinch-zoom;
}

/* Make carousel root relative for absolute positioning of controls */
.portfolio-carousel {
  position: relative;
}

/* Position the controls container to overlay the carousel */
.portfolio-carousel :deep([data-slot="controls"]) {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 10;
}

/* Arrow container - position arrows on left and right edges */
.portfolio-carousel :deep([data-slot="arrows"]) {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5rem;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;
}

/* Show arrows on hover */
.portfolio-card:hover .portfolio-carousel :deep([data-slot="arrows"]) {
  opacity: 1;
}

.portfolio-card--compact .portfolio-carousel :deep([data-slot="arrows"]) {
  padding: 0 0.35rem;
}

/* Style individual arrow buttons - override Nuxt UI positioning */
.portfolio-carousel :deep([data-slot="arrows"] button) {
  pointer-events: auto;
  position: relative !important;
  inset: auto !important;
  transform: none !important;
  background: rgba(255, 255, 255, 0.9) !important;
  border-radius: 9999px !important;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06) !important;
  width: 2.25rem !important;
  height: 2.25rem !important;
  padding: 0.375rem !important;
}

.portfolio-carousel :deep([data-slot="arrows"] button:hover:not(:disabled)) {
  background: white !important;
}

.portfolio-carousel :deep([data-slot="arrows"] button:disabled) {
  opacity: 0.4;
}

.portfolio-card--compact .portfolio-carousel :deep([data-slot="arrows"] button) {
  width: 2rem !important;
  height: 2rem !important;
  box-shadow: 0 2px 8px rgba(17, 24, 39, 0.16) !important;
}

/* Dots container - positioned at bottom of image */
.portfolio-carousel :deep([data-slot="dots"]) {
  position: absolute !important;
  bottom: 0.75rem !important;
  left: 50% !important;
  right: auto !important;
  transform: translateX(-50%) !important;
  pointer-events: auto;
  z-index: 10;
  gap: 0.375rem !important;
}

/* Style individual dots */
.portfolio-carousel :deep([data-slot="dot"]) {
  width: 0.5rem !important;
  height: 0.5rem !important;
  background: rgba(255, 255, 255, 0.5) !important;
}

.portfolio-carousel :deep([data-slot="dot"][data-state="active"]) {
  background: white !important;
  transform: scale(1.2);
}
</style>
