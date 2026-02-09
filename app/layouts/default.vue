<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const route = useRoute()
const router = useRouter()
const isLoading = ref(false)
const mobileMenuOpen = ref(false)

const { activeSection, setup: setupObserver, teardown: teardownObserver, reset: resetActiveSection } = useActiveSection()

onMounted(() => {
  setupObserver()
})

onUnmounted(() => {
  teardownObserver()
})

// Loading transitions
router.beforeEach((to, from) => {
  if (to.path !== from.path) {
    isLoading.value = true
  }
})

router.afterEach((to) => {
  setTimeout(() => {
    isLoading.value = false
  }, 400)

  // Re-observe sections after page change since DOM has changed
  if (to.path === '/') {
    resetActiveSection()
    nextTick(() => {
      setTimeout(() => setupObserver(), 200)
    })
  }
})

const nuxtApp = useNuxtApp()
nuxtApp.hook('page:start', () => {
  isLoading.value = true
})
nuxtApp.hook('page:finish', () => {
  setTimeout(() => {
    isLoading.value = false
  }, 300)
})

interface NavItem {
  label: string
  sectionId: string
  route?: string
}

const navItems: NavItem[] = [
  { label: 'Beranda', sectionId: 'hero' },
  { label: 'Tentang Kami', sectionId: 'about' },
  { label: 'Portofolio', sectionId: 'portfolio', route: '/portfolio' },
  { label: 'Paket', sectionId: 'packages' },
  { label: 'Lokasi', sectionId: 'location' },
  { label: 'Hubungi Kami', sectionId: 'contact' }
]

function scrollToSection(sectionId: string) {
  mobileMenuOpen.value = false

  if (sectionId === 'portfolio') {
    router.push('/portfolio')
    return
  }

  if (route.path !== '/') {
    router.push('/').then(() => {
      setTimeout(() => {
        doScroll(sectionId)
      }, 150)
    })
  } else {
    doScroll(sectionId)
  }
}

function doScroll(sectionId: string) {
  if (sectionId === 'hero') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
  const el = document.getElementById(sectionId)
  if (el) {
    const headerHeight = 64
    const top = el.getBoundingClientRect().top + window.scrollY - headerHeight
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

function isActive(item: NavItem): boolean {
  if (item.route && route.path === '/portfolio') return true
  if (route.path !== '/' && !item.route) return false
  return activeSection.value === item.sectionId
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

    <!-- Header -->
    <header class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 h-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/" class="text-xl font-bold text-gray-900 shrink-0" @click.prevent="scrollToSection('hero')">
          Reneo.id
        </NuxtLink>

        <!-- Desktop Nav -->
        <nav class="hidden lg:flex items-center gap-1">
          <button
            v-for="item in navItems"
            :key="item.sectionId"
            class="nav-link"
            :class="{ 'nav-link-active': isActive(item) }"
            @click="scrollToSection(item.sectionId)"
          >
            {{ item.label }}
          </button>
        </nav>

        <!-- Mobile burger -->
        <button
          class="lg:hidden p-2 -mr-2 text-gray-700 hover:text-gray-900 transition-colors"
          aria-label="Menu"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <Transition name="mobile-menu">
        <div
          v-if="mobileMenuOpen"
          class="lg:hidden bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-lg"
        >
          <nav class="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-1">
            <button
              v-for="item in navItems"
              :key="item.sectionId"
              class="mobile-nav-link"
              :class="{ 'mobile-nav-link-active': isActive(item) }"
              @click="scrollToSection(item.sectionId)"
            >
              {{ item.label }}
            </button>
          </nav>
        </div>
      </Transition>
    </header>

    <!-- Spacer for fixed header -->
    <div class="h-16"></div>

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
        <div>
          <p class="text-sm text-muted">
            © {{ new Date().getFullYear() }} Reneo.id - Wedding Organizer
          </p>
          <p class="text-[10px] text-gray-300 mt-0.5">Nymbx Dev.</p>
        </div>
      </template>

      <template #right>
        <UButton
          icon="i-simple-icons-instagram"
          color="neutral"
          variant="ghost"
          to="https://instagram.com/reneo.planner"
          target="_blank"
        />
        <UButton
          icon="i-simple-icons-whatsapp"
          color="neutral"
          variant="ghost"
          to="https://wa.me/6285158151161"
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
