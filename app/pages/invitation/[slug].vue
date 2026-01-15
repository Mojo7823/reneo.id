<script setup lang="ts">
// Digital Invitation - Guest-facing page
// This is a static one-pager displayed to wedding guests

const route = useRoute()
const slug = route.params.slug as string

// Theme definitions with Unsplash backgrounds
const themes = {
  elegant: {
    name: 'Elegant',
    background: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&h=1080&fit=crop',
    overlay: 'bg-black/50',
    textColor: 'text-white',
    accentColor: 'text-amber-300',
    fontFamily: 'font-serif',
  },
  romantic: {
    name: 'Romantic',
    background: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=1920&h=1080&fit=crop',
    overlay: 'bg-rose-900/40',
    textColor: 'text-white',
    accentColor: 'text-rose-200',
    fontFamily: 'font-serif',
  },
  garden: {
    name: 'Garden',
    background: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&h=1080&fit=crop',
    overlay: 'bg-emerald-900/40',
    textColor: 'text-white',
    accentColor: 'text-emerald-200',
    fontFamily: 'font-serif',
  },
  beach: {
    name: 'Beach',
    background: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&h=1080&fit=crop',
    overlay: 'bg-sky-900/30',
    textColor: 'text-white',
    accentColor: 'text-sky-200',
    fontFamily: 'font-serif',
  },
  rustic: {
    name: 'Rustic',
    background: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?w=1920&h=1080&fit=crop',
    overlay: 'bg-amber-900/40',
    textColor: 'text-white',
    accentColor: 'text-amber-200',
    fontFamily: 'font-serif',
  },
  modern: {
    name: 'Modern',
    background: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1920&h=1080&fit=crop',
    overlay: 'bg-slate-900/50',
    textColor: 'text-white',
    accentColor: 'text-slate-200',
    fontFamily: 'font-sans',
  },
}

// Sample invitation data - in production, this would come from a database/API
const invitations: Record<string, {
  bride: string
  groom: string
  date: string
  time: string
  venue: string
  venueAddress: string
  theme: keyof typeof themes
  message: string
  dressCode?: string
  rsvpDate?: string
}> = {
  'sarah-james': {
    bride: 'Sarah Anderson',
    groom: 'James Wilson',
    date: 'Saturday, March 15, 2025',
    time: '4:00 PM',
    venue: 'The Grand Bali Resort',
    venueAddress: 'Jl. Raya Uluwatu No. 88, Bali, Indonesia',
    theme: 'elegant',
    message: 'Together with their families, Sarah and James invite you to celebrate their wedding day. Your presence would make our day complete.',
    dressCode: 'Formal / Black Tie Optional',
    rsvpDate: 'February 28, 2025',
  },
  'emily-david': {
    bride: 'Emily Rodriguez',
    groom: 'David Chen',
    date: 'Sunday, April 20, 2025',
    time: '5:30 PM',
    venue: 'Sunset Beach Club',
    venueAddress: '123 Coastal Highway, Malibu, CA',
    theme: 'beach',
    message: 'Join us as we begin our journey together under the golden sunset. We would be honored to have you share in our celebration of love.',
    dressCode: 'Beach Formal / Light Colors',
    rsvpDate: 'April 5, 2025',
  },
  'michelle-ryan': {
    bride: 'Michelle Park',
    groom: 'Ryan Thompson',
    date: 'Friday, May 30, 2025',
    time: '6:00 PM',
    venue: 'Vineyard Estate',
    venueAddress: '456 Wine Country Road, Napa Valley, CA',
    theme: 'rustic',
    message: 'With joyful hearts, we invite you to witness our union. Your love and support mean the world to us.',
    dressCode: 'Semi-Formal / Earth Tones',
    rsvpDate: 'May 15, 2025',
  },
  'demo': {
    bride: 'Your Name',
    groom: 'Partner Name',
    date: 'Your Wedding Date',
    time: 'Your Wedding Time',
    venue: 'Your Dream Venue',
    venueAddress: 'Venue Address',
    theme: 'romantic',
    message: 'This is a demo invitation. Create beautiful digital invitations for your special day with Reneo.id Wedding Organizer.',
    dressCode: 'Your Dress Code',
    rsvpDate: 'RSVP Date',
  },
}

// Get invitation data or show 404
const invitation = invitations[slug]

if (!invitation) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Invitation not found',
    fatal: true,
  })
}

const currentTheme = themes[invitation.theme]

// Page metadata
definePageMeta({
  layout: false, // Use no layout for full-screen invitation
})

useHead({
  title: `${invitation.bride} & ${invitation.groom} - Wedding Invitation`,
  meta: [
    { name: 'description', content: `You are invited to celebrate the wedding of ${invitation.bride} and ${invitation.groom}` },
  ],
})
</script>

<template>
  <div class="min-h-screen relative">
    <!-- Background Image from Unsplash -->
    <div class="fixed inset-0 z-0">
      <img
        :src="currentTheme.background"
        :alt="`${currentTheme.name} wedding theme background`"
        class="w-full h-full object-cover"
      />
      <div :class="['absolute inset-0', currentTheme.overlay]"></div>
    </div>

    <!-- Invitation Content -->
    <div :class="['relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12', currentTheme.textColor, currentTheme.fontFamily]">
      <div class="max-w-2xl w-full text-center space-y-8">
        <!-- Header -->
        <div class="space-y-4">
          <p :class="['text-sm md:text-base tracking-[0.3em] uppercase', currentTheme.accentColor]">
            You Are Cordially Invited To
          </p>
          <p class="text-lg md:text-xl tracking-wider">The Wedding Celebration of</p>
        </div>

        <!-- Couple Names -->
        <div class="space-y-2">
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wide">
            {{ invitation.bride.split(' ')[0] }}
          </h1>
          <p :class="['text-2xl md:text-3xl', currentTheme.accentColor]">&</p>
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wide">
            {{ invitation.groom.split(' ')[0] }}
          </h1>
        </div>

        <!-- Decorative Divider -->
        <div class="flex items-center justify-center space-x-4">
          <div :class="['w-16 md:w-24 h-px', currentTheme.accentColor.replace('text-', 'bg-')]"></div>
          <UIcon name="i-heroicons-heart-solid" :class="['w-5 h-5', currentTheme.accentColor]" />
          <div :class="['w-16 md:w-24 h-px', currentTheme.accentColor.replace('text-', 'bg-')]"></div>
        </div>

        <!-- Personal Message -->
        <p class="text-base md:text-lg opacity-90 max-w-xl mx-auto leading-relaxed italic">
          "{{ invitation.message }}"
        </p>

        <!-- Event Details -->
        <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8 space-y-6">
          <!-- Date & Time -->
          <div class="space-y-2">
            <div class="flex items-center justify-center space-x-2">
              <UIcon name="i-heroicons-calendar-days" :class="['w-5 h-5', currentTheme.accentColor]" />
              <span class="text-lg md:text-xl font-medium">{{ invitation.date }}</span>
            </div>
            <div class="flex items-center justify-center space-x-2">
              <UIcon name="i-heroicons-clock" :class="['w-5 h-5', currentTheme.accentColor]" />
              <span class="text-base md:text-lg">{{ invitation.time }}</span>
            </div>
          </div>

          <!-- Venue -->
          <div class="space-y-2">
            <div class="flex items-center justify-center space-x-2">
              <UIcon name="i-heroicons-map-pin" :class="['w-5 h-5', currentTheme.accentColor]" />
              <span class="text-lg md:text-xl font-medium">{{ invitation.venue }}</span>
            </div>
            <p class="text-sm md:text-base opacity-80">{{ invitation.venueAddress }}</p>
          </div>

          <!-- Dress Code -->
          <div v-if="invitation.dressCode" class="pt-4 border-t border-white/20">
            <div class="flex items-center justify-center space-x-2">
              <UIcon name="i-heroicons-sparkles" :class="['w-5 h-5', currentTheme.accentColor]" />
              <span class="text-sm md:text-base">Dress Code: {{ invitation.dressCode }}</span>
            </div>
          </div>
        </div>

        <!-- RSVP Section -->
        <div v-if="invitation.rsvpDate" class="space-y-2">
          <p class="text-sm md:text-base opacity-80">
            Kindly RSVP by {{ invitation.rsvpDate }}
          </p>
        </div>

        <!-- Footer -->
        <div class="pt-8 space-y-4">
          <p :class="['text-lg md:text-xl italic', currentTheme.accentColor]">
            We look forward to celebrating with you!
          </p>
          <div class="flex items-center justify-center space-x-4">
            <div :class="['w-8 md:w-12 h-px', currentTheme.accentColor.replace('text-', 'bg-')]"></div>
            <UIcon name="i-heroicons-heart" :class="['w-4 h-4', currentTheme.accentColor]" />
            <div :class="['w-8 md:w-12 h-px', currentTheme.accentColor.replace('text-', 'bg-')]"></div>
          </div>
        </div>

        <!-- Powered by -->
        <div class="pt-12">
          <NuxtLink
            to="/"
            class="text-xs opacity-50 hover:opacity-75 transition-opacity"
          >
            Created with love by Reneo.id
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Smooth font rendering for better text quality */
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
