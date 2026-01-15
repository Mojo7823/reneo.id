<script setup lang="ts">
definePageMeta({
  title: 'Reneo Wedding Organizer - Creating Unforgettable Moments',
})

// Company statistics
const stats = [
  { number: '500+', label: 'Weddings Organized' },
  { number: '12', label: 'Years Experience' },
  { number: '50+', label: 'Team Members' },
  { number: '98%', label: 'Happy Couples' },
]

// Services offered
const services = [
  {
    icon: 'i-heroicons-heart',
    title: 'Full Wedding Planning',
    description: 'From concept to celebration, we handle every detail of your dream wedding with meticulous care and creativity.',
  },
  {
    icon: 'i-heroicons-calendar-days',
    title: 'Day-of Coordination',
    description: 'Let us manage the logistics on your big day so you can focus on making memories with your loved ones.',
  },
  {
    icon: 'i-heroicons-sparkles',
    title: 'Venue Decoration',
    description: 'Transform any space into a magical wedding wonderland with our expert decoration and styling services.',
  },
  {
    icon: 'i-heroicons-camera',
    title: 'Photography & Video',
    description: 'Capture every precious moment with our professional photography and cinematic videography team.',
  },
  {
    icon: 'i-heroicons-musical-note',
    title: 'Entertainment',
    description: 'From live bands to DJs, we curate the perfect entertainment to keep your guests dancing all night.',
  },
  {
    icon: 'i-heroicons-cake',
    title: 'Catering & Cake',
    description: 'Delight your guests with exquisite culinary experiences and stunning wedding cakes.',
  },
]

// Team members
const team = [
  {
    name: 'Sarah Anderson',
    role: 'Founder & Lead Planner',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Michael Chen',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Senior Event Coordinator',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'David Kim',
    role: 'Head Photographer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
  },
]

// Portfolio items
const portfolio = [
  {
    title: 'Garden Romance',
    category: 'Outdoor Wedding',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
  },
  {
    title: 'Classic Elegance',
    category: 'Ballroom Wedding',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
  },
  {
    title: 'Beachside Bliss',
    category: 'Destination Wedding',
    image: 'https://images.unsplash.com/photo-1546032996-6dfacbacbf3f?w=800&h=600&fit=crop',
  },
  {
    title: 'Rustic Charm',
    category: 'Barn Wedding',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop',
  },
  {
    title: 'Modern Minimalist',
    category: 'Urban Wedding',
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&h=600&fit=crop',
  },
  {
    title: 'Fairytale Castle',
    category: 'Luxury Wedding',
    image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&h=600&fit=crop',
  },
]

// Testimonials
const testimonials = [
  {
    quote: 'Reneo made our dream wedding a reality. Every detail was perfect, and we could just enjoy our special day without any stress.',
    author: 'Jessica & Ryan',
    location: 'Bali Wedding, 2024',
    image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=200&h=200&fit=crop',
  },
  {
    quote: 'The team went above and beyond our expectations. Their creativity and attention to detail made our wedding truly magical.',
    author: 'Amanda & James',
    location: 'Jakarta Wedding, 2024',
    image: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=200&h=200&fit=crop',
  },
  {
    quote: 'Professional, creative, and incredibly supportive throughout the entire planning process. We couldn\'t have asked for better planners.',
    author: 'Michelle & Daniel',
    location: 'Yogyakarta Wedding, 2023',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=200&h=200&fit=crop',
  },
]
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&h=1080&fit=crop"
          alt="Beautiful wedding ceremony"
          class="w-full h-full object-cover"
        >
        <div class="absolute inset-0 bg-black/40" />
      </div>

      <!-- Hero Content -->
      <div class="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <p class="text-lg md:text-xl mb-4 tracking-widest uppercase">Welcome to</p>
        <h1 class="text-5xl md:text-7xl font-bold mb-6">
          Reneo Wedding Organizer
        </h1>
        <p class="text-xl md:text-2xl mb-8 opacity-90">
          Creating unforgettable moments for your most special day
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <UButton to="/contact" size="xl" color="white">
            Start Planning
          </UButton>
          <UButton to="#portfolio" size="xl" variant="outline" color="white">
            View Our Work
          </UButton>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce">
        <UIcon name="i-heroicons-chevron-down" class="w-8 h-8" />
      </div>
    </section>

    <!-- About Section -->
    <section class="py-20 bg-white">
      <UContainer>
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p class="text-primary font-semibold mb-2 uppercase tracking-wide">About Us</p>
            <h2 class="text-4xl font-bold mb-6">Your Dream Wedding, Our Passion</h2>
            <p class="text-lg text-gray-600 mb-6">
              For over 12 years, Reneo Wedding Organizer has been transforming couples' dreams into breathtaking celebrations. We believe every love story deserves a unique celebration that reflects the couple's personality and vision.
            </p>
            <p class="text-lg text-gray-600 mb-8">
              Our dedicated team of experienced planners, designers, and coordinators work tirelessly to ensure every detail is perfect. From intimate gatherings to grand celebrations, we bring creativity, expertise, and heart to every wedding we plan.
            </p>
            <UButton to="/about" variant="outline" color="primary">
              Learn More About Us
            </UButton>
          </div>
          <div class="relative">
            <img
              src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&h=700&fit=crop"
              alt="Wedding planning team"
              class="rounded-2xl shadow-2xl"
            >
            <div class="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-xl shadow-xl">
              <p class="text-4xl font-bold">12+</p>
              <p class="text-sm">Years of Excellence</p>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Statistics Section -->
    <section class="py-16 bg-gray-50">
      <UContainer>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="stat in stats" :key="stat.label" class="text-center">
            <p class="text-4xl md:text-5xl font-bold text-primary mb-2">{{ stat.number }}</p>
            <p class="text-gray-600">{{ stat.label }}</p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Services Section -->
    <section class="py-20 bg-white">
      <UContainer>
        <div class="text-center mb-16">
          <p class="text-primary font-semibold mb-2 uppercase tracking-wide">What We Offer</p>
          <h2 class="text-4xl font-bold mb-4">Our Services</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive wedding services tailored to make your special day absolutely perfect
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <UCard v-for="service in services" :key="service.title" class="hover:shadow-lg transition-shadow">
            <div class="text-center p-4">
              <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <UIcon :name="service.icon" class="w-8 h-8 text-primary" />
              </div>
              <h3 class="text-xl font-semibold mb-3">{{ service.title }}</h3>
              <p class="text-gray-600">{{ service.description }}</p>
            </div>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- Team Section -->
    <section class="py-20 bg-gray-50">
      <UContainer>
        <div class="text-center mb-16">
          <p class="text-primary font-semibold mb-2 uppercase tracking-wide">Meet Our Team</p>
          <h2 class="text-4xl font-bold mb-4">The People Behind Your Perfect Day</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Our passionate team of wedding experts is dedicated to making your dreams come true
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="member in team" :key="member.name" class="text-center group">
            <div class="relative mb-4 overflow-hidden rounded-2xl">
              <img
                :src="member.image"
                :alt="member.name"
                class="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
              >
            </div>
            <h3 class="text-xl font-semibold">{{ member.name }}</h3>
            <p class="text-gray-600">{{ member.role }}</p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Portfolio Section -->
    <section id="portfolio" class="py-20 bg-white">
      <UContainer>
        <div class="text-center mb-16">
          <p class="text-primary font-semibold mb-2 uppercase tracking-wide">Our Work</p>
          <h2 class="text-4xl font-bold mb-4">Wedding Portfolio</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse through some of our most memorable weddings and get inspired for your own celebration
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="item in portfolio"
            :key="item.title"
            class="group relative overflow-hidden rounded-2xl cursor-pointer"
          >
            <img
              :src="item.image"
              :alt="item.title"
              class="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-transform duration-500"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p class="text-sm uppercase tracking-wide mb-1">{{ item.category }}</p>
                <h3 class="text-2xl font-bold">{{ item.title }}</h3>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <UButton to="/portfolio" size="lg" variant="outline" color="primary">
            View Full Portfolio
          </UButton>
        </div>
      </UContainer>
    </section>

    <!-- Testimonials Section -->
    <section class="py-20 bg-gray-50">
      <UContainer>
        <div class="text-center mb-16">
          <p class="text-primary font-semibold mb-2 uppercase tracking-wide">Testimonials</p>
          <h2 class="text-4xl font-bold mb-4">What Our Couples Say</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from the happy couples we've helped
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <UCard v-for="testimonial in testimonials" :key="testimonial.author" class="relative">
            <div class="p-6">
              <UIcon name="i-heroicons-chat-bubble-bottom-center-text" class="w-10 h-10 text-primary/20 mb-4" />
              <p class="text-gray-600 mb-6 italic">"{{ testimonial.quote }}"</p>
              <div class="flex items-center gap-4">
                <img
                  :src="testimonial.image"
                  :alt="testimonial.author"
                  class="w-12 h-12 rounded-full object-cover"
                >
                <div>
                  <p class="font-semibold">{{ testimonial.author }}</p>
                  <p class="text-sm text-gray-500">{{ testimonial.location }}</p>
                </div>
              </div>
            </div>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- CTA Section -->
    <section class="relative py-24 overflow-hidden">
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=1920&h=600&fit=crop"
          alt="Wedding celebration"
          class="w-full h-full object-cover"
        >
        <div class="absolute inset-0 bg-primary/80" />
      </div>

      <UContainer class="relative z-10">
        <div class="text-center text-white max-w-3xl mx-auto">
          <h2 class="text-4xl md:text-5xl font-bold mb-6">Ready to Plan Your Dream Wedding?</h2>
          <p class="text-xl mb-8 opacity-90">
            Let's create something beautiful together. Contact us today for a free consultation and start your journey to the perfect wedding.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <UButton to="/contact" size="xl" color="white">
              Get Free Consultation
            </UButton>
            <UButton href="https://wa.me/6281234567890" size="xl" variant="outline" color="white" target="_blank">
              <UIcon name="i-simple-icons-whatsapp" class="w-5 h-5 mr-2" />
              WhatsApp Us
            </UButton>
          </div>
        </div>
      </UContainer>
    </section>
  </div>
</template>

<style scoped>
@keyframes bounce {
  0%, 100% {
    transform: translateY(0) translateX(-50%);
  }
  50% {
    transform: translateY(-10px) translateX(-50%);
  }
}

.animate-bounce {
  animation: bounce 2s infinite;
}
</style>
