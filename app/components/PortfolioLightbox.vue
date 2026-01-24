<!--
  PortfolioLightbox Component
  
  A modal component for displaying enlarged portfolio images.
  Uses Nuxt UI's UModal for the overlay and modal functionality.
  
  Requirements: 4.1, 4.2, 4.3, 4.4, 4.5
  - Opens displaying enlarged image when user clicks portfolio image (4.1)
  - Displays dark overlay behind the enlarged image (4.2)
  - Provides close button to dismiss the modal (4.3)
  - Closes when clicking outside or pressing Escape (4.4)
  - Maintains image aspect ratio when enlarged (4.5)
-->
<script setup lang="ts">
import type { CustomerGallery } from '~/data/portfolioConfig'

interface Props {
  /** Control modal visibility - use with v-model:open */
  open: boolean
  /** Current image to display */
  image: string
  /** Optional gallery for navigation within gallery */
  gallery?: CustomerGallery
}

const props = defineProps<Props>()

const emit = defineEmits<{
  /** Emitted when modal open state changes */
  (e: 'update:open', value: boolean): void
  /** Emitted when navigating within gallery */
  (e: 'navigate', direction: 'prev' | 'next'): void
}>()

/** Current index of the displayed image within the gallery */
const currentIndex = computed(() => {
  if (!props.gallery) return -1
  return props.gallery.images.indexOf(props.image)
})

/** Whether there's a previous image to navigate to */
const hasPrev = computed(() => {
  return props.gallery && currentIndex.value > 0
})

/** Whether there's a next image to navigate to */
const hasNext = computed(() => {
  return props.gallery && currentIndex.value < props.gallery.images.length - 1
})

/**
 * Navigate to previous image
 */
function navigatePrev() {
  if (hasPrev.value) {
    emit('navigate', 'prev')
  }
}

/**
 * Navigate to next image
 */
function navigateNext() {
  if (hasNext.value) {
    emit('navigate', 'next')
  }
}

/**
 * Close the lightbox
 */
function closeLightbox() {
  emit('update:open', false)
}

// Keyboard navigation
defineShortcuts({
  arrowleft: () => navigatePrev(),
  arrowright: () => navigateNext(),
})
</script>

<template>
  <UModal
    :open="open"
    :ui="{
      overlay: 'bg-black/90',
      content: 'bg-transparent shadow-none max-w-[90vw] max-h-[90vh]',
      close: 'text-white hover:bg-white/20',
    }"
    @update:open="emit('update:open', $event)"
  >
    <!-- Empty default slot - we don't need a trigger button -->
    <template #default />
    
    <template #content>
      <div class="relative flex items-center justify-center">
        <!-- Close button -->
        <button
          type="button"
          class="absolute top-2 right-2 z-10 p-2 text-white hover:bg-white/20 rounded-full transition-colors"
          aria-label="Close lightbox"
          @click="closeLightbox"
        >
          <UIcon name="i-lucide-x" class="w-6 h-6" />
        </button>
        
        <!-- Navigation: Previous -->
        <button
          v-if="gallery && gallery.imageCount > 1"
          type="button"
          class="absolute left-2 z-10 p-2 text-white hover:bg-white/20 rounded-full transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          :disabled="!hasPrev"
          aria-label="Previous image"
          @click="navigatePrev"
        >
          <UIcon name="i-lucide-chevron-left" class="w-8 h-8" />
        </button>
        
        <!-- Main image -->
        <img
          :src="image"
          alt="Enlarged portfolio image"
          class="max-w-full max-h-[85vh] object-contain rounded-lg"
        />
        
        <!-- Navigation: Next -->
        <button
          v-if="gallery && gallery.imageCount > 1"
          type="button"
          class="absolute right-2 z-10 p-2 text-white hover:bg-white/20 rounded-full transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          :disabled="!hasNext"
          aria-label="Next image"
          @click="navigateNext"
        >
          <UIcon name="i-lucide-chevron-right" class="w-8 h-8" />
        </button>
        
        <!-- Image counter -->
        <div
          v-if="gallery && gallery.imageCount > 1"
          class="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white text-sm px-3 py-1 rounded-full"
        >
          {{ currentIndex + 1 }} / {{ gallery.imageCount }}
        </div>
      </div>
    </template>
  </UModal>
</template>
