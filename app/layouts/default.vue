<script setup lang="ts">
import { ref, watch } from 'vue'

const route = useRoute()
const router = useRouter()
const isLoading = ref(false)

// Watch for route changes to trigger loading animation
router.beforeEach((to, from) => {
  if (to.path !== from.path) {
    isLoading.value = true
  }
})

router.afterEach(() => {
  // Small delay to ensure the page content is ready
  setTimeout(() => {
    isLoading.value = false
  }, 400)
})

// Also handle initial page load
const nuxtApp = useNuxtApp()
nuxtApp.hook('page:start', () => {
  isLoading.value = true
})
nuxtApp.hook('page:finish', () => {
  setTimeout(() => {
    isLoading.value = false
  }, 300)
})

// Scroll to section function for navigation
const scrollToSection = (sectionId: string) => {
  // If not on home page, navigate to home first then scroll
  if (route.path !== '/') {
    router.push('/').then(() => {
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        } else if (sectionId === 'hero') {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      }, 100)
    })
  } else {
    // Already on home page, just scroll
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
}
</script>

<template>
  <div>
    <!-- Page Transition Loading Overlay -->
    <div 
      class="page-transition-overlay"
      :class="{ active: isLoading }"
    >
      <div class="page-spinner"></div>
    </div>

    <UHeader title="Reneo.id" to="/">
      <template #right>
        <UButton
          to="/#hero"
          color="neutral"
          variant="ghost"
          label="Beranda"
          @click.prevent="scrollToSection('hero')"
        />
        <UButton
          to="/#about"
          color="neutral"
          variant="ghost"
          label="Tentang Kami"
          @click.prevent="scrollToSection('about')"
        />
        <UButton
          to="/portfolio"
          color="neutral"
          variant="ghost"
          label="Portofolio"
        />
        <UButton
          to="/#packages"
          color="neutral"
          variant="ghost"
          label="Paket"
          @click.prevent="scrollToSection('packages')"
        />
        <UButton
          to="/#location"
          color="neutral"
          variant="ghost"
          label="Lokasi"
          @click.prevent="scrollToSection('location')"
        />
      </template>
    </UHeader>

    <UMain>
      <div 
        class="page-content"
        :class="{ loading: isLoading }"
      >
        <slot />
      </div>
    </UMain>

    <UFooter>
      <template #left>
        <p class="text-sm text-muted">
          © {{ new Date().getFullYear() }} Reneo.id - Wedding Organizer
        </p>
      </template>
      
      <template #right>
        <UButton
          icon="i-simple-icons-instagram"
          color="neutral"
          variant="ghost"
          to="https://instagram.com"
          target="_blank"
        />
        <UButton
          icon="i-simple-icons-facebook"
          color="neutral"
          variant="ghost"
          to="https://facebook.com"
          target="_blank"
        />
      </template>
    </UFooter>

    <!-- Floating WhatsApp Button -->
    <a
      href="https://wa.me/6285158151161"
      target="_blank"
      rel="noopener noreferrer"
      class="whatsapp-float"
      aria-label="Chat via WhatsApp"
      title="Chat via WhatsApp"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
  </div>
</template>