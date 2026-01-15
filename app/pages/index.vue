<script setup lang="ts">
definePageMeta({
  title: 'Home - Reneo.id Wedding Organizer',
})

// Company statistics
const stats = [
  { label: 'Weddings Organized', value: '500+' },
  { label: 'Happy Couples', value: '500+' },
  { label: 'Years Experience', value: '10+' },
  { label: 'Team Members', value: '25+' },
]

// Team members
const team = [
  {
    name: 'Sarah Anderson',
    role: 'Founder & Lead Planner',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
    description: 'With over 15 years of experience in the wedding industry, Sarah brings creativity and passion to every celebration.',
  },
  {
    name: 'Michael Chen',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    description: 'Michael transforms wedding visions into stunning realities with his eye for design and attention to detail.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Event Coordinator',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    description: 'Emily ensures every wedding runs smoothly from start to finish with her exceptional organizational skills.',
  },
  {
    name: 'David Kim',
    role: 'Photography Director',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    description: 'David captures timeless moments with artistic excellence, preserving memories that last a lifetime.',
  },
]

// Services offered
const services = [
  {
    title: 'Full Wedding Planning',
    description: 'From concept to celebration, we handle every detail of your dream wedding. Our comprehensive planning ensures a stress-free experience.',
    icon: 'i-heroicons-calendar-days',
  },
  {
    title: 'Day-of Coordination',
    description: 'Let us manage your wedding day logistics while you focus on celebrating. We ensure everything runs seamlessly.',
    icon: 'i-heroicons-clipboard-document-check',
  },
  {
    title: 'Wedding Photography',
    description: 'Professional photography services to capture every precious moment of your special day with artistic excellence.',
    icon: 'i-heroicons-camera',
  },
  {
    title: 'Venue Selection',
    description: 'We help you find the perfect venue that matches your vision, style, and budget from our extensive network.',
    icon: 'i-heroicons-building-library',
  },
  {
    title: 'Catering & Decor',
    description: 'Exquisite cuisine and stunning decorations that create an unforgettable atmosphere for your celebration.',
    icon: 'i-heroicons-cake',
  },
  {
    title: 'Digital Invitations',
    description: 'Beautiful, interactive digital wedding invitations that your guests will love. Modern and eco-friendly.',
    icon: 'i-heroicons-envelope',
  },
]

// Portfolio items
const portfolioItems = [
  {
    title: 'Sarah & James',
    location: 'Bali Garden Wedding',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
  },
  {
    title: 'Emily & David',
    location: 'Beach Sunset Ceremony',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=600&fit=crop',
  },
  {
    title: 'Michelle & Ryan',
    location: 'Elegant Ballroom',
    image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&h=600&fit=crop',
  },
  {
    title: 'Jessica & Mark',
    location: 'Rustic Vineyard',
    image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&h=600&fit=crop',
  },
  {
    title: 'Amanda & Chris',
    location: 'Mountain Retreat',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=600&fit=crop',
  },
  {
    title: 'Nicole & Andrew',
    location: 'Classic Church Wedding',
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&h=600&fit=crop',
  },
]

// Testimonials
const testimonials = [
  {
    content: 'Reneo.id made our dream wedding come true! Every detail was perfect, and we could actually enjoy our special day without any stress. Highly recommend their team!',
    author: 'Jennifer & Thomas',
    role: 'Married December 2024',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
  },
  {
    content: 'The attention to detail and professionalism of the Reneo.id team exceeded all our expectations. They turned our vision into a magical reality.',
    author: 'Lisa & Robert',
    role: 'Married October 2024',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face',
  },
  {
    content: 'From planning to execution, everything was flawless. Our guests are still talking about how beautiful our wedding was. Thank you, Reneo.id!',
    author: 'Maria & Carlos',
    role: 'Married August 2024',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face',
  },
]
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&h=1080&fit=crop"
          alt="Wedding Background"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black/40"></div>
      </div>
      
      <!-- Hero Content -->
      <div class="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <p class="text-lg md:text-xl mb-4 tracking-widest uppercase">Welcome to</p>
        <h1 class="text-5xl md:text-7xl font-serif font-bold mb-6">Reneo.id</h1>
        <p class="text-xl md:text-2xl mb-4 font-light">Wedding Organizer</p>
        <p class="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Creating magical moments and unforgettable celebrations. Let us turn your wedding dreams into a beautiful reality.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <UButton to="#portfolio" size="xl" color="white" variant="solid">
            View Our Work
          </UButton>
          <UButton to="/contact" size="xl" variant="outline" color="white">
            Get in Touch
          </UButton>
        </div>
      </div>
      
      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <UIcon name="i-heroicons-chevron-down" class="w-8 h-8 text-white" />
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 bg-white">
      <UContainer>
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p class="text-primary font-medium mb-2 uppercase tracking-wide">About Us</p>
            <h2 class="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900">
              Your Story, Beautifully Told
            </h2>
            <p class="text-lg text-gray-600 mb-6">
              At Reneo.id, we believe that every love story deserves a celebration as unique as the couple themselves. Founded in 2014, we have dedicated ourselves to creating exceptional wedding experiences that reflect the personalities, dreams, and love of each couple we work with.
            </p>
            <p class="text-lg text-gray-600 mb-8">
              Our team of passionate wedding professionals brings together creativity, expertise, and meticulous attention to detail to ensure your special day is nothing short of perfect. From intimate gatherings to grand celebrations, we handle every aspect with care and dedication.
            </p>
            <div class="flex gap-4">
              <UButton to="#services" color="primary" size="lg">
                Our Services
              </UButton>
              <UButton to="#team" variant="outline" color="gray" size="lg">
                Meet Our Team
              </UButton>
            </div>
          </div>
          <div class="relative">
            <img
              src="https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=700&fit=crop"
              alt="Wedding Planning"
              class="rounded-lg shadow-2xl w-full"
            />
            <div class="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-lg shadow-xl">
              <p class="text-4xl font-bold">10+</p>
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
            <p class="text-4xl md:text-5xl font-bold text-primary mb-2">{{ stat.value }}</p>
            <p class="text-gray-600">{{ stat.label }}</p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-20 bg-white">
      <UContainer>
        <div class="text-center mb-16">
          <p class="text-primary font-medium mb-2 uppercase tracking-wide">What We Offer</p>
          <h2 class="text-4xl md:text-5xl font-serif font-bold mb-4 text-gray-900">Our Services</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive wedding planning services tailored to make your special day absolutely perfect
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <UCard
            v-for="service in services"
            :key="service.title"
            class="hover:shadow-lg transition-shadow duration-300"
          >
            <div class="text-center p-4">
              <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <UIcon :name="service.icon" class="w-8 h-8 text-primary" />
              </div>
              <h3 class="text-xl font-semibold mb-3 text-gray-900">{{ service.title }}</h3>
              <p class="text-gray-600">{{ service.description }}</p>
            </div>
          </UCard>
        </div>

        <div class="text-center mt-12">
          <UButton to="/services" color="primary" size="lg">
            View All Services
          </UButton>
        </div>
      </UContainer>
    </section>

    <!-- Team Section -->
    <section id="team" class="py-20 bg-gray-50">
      <UContainer>
        <div class="text-center mb-16">
          <p class="text-primary font-medium mb-2 uppercase tracking-wide">Our Team</p>
          <h2 class="text-4xl md:text-5xl font-serif font-bold mb-4 text-gray-900">Meet the Experts</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Our dedicated team of wedding professionals is committed to making your day extraordinary
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="member in team"
            :key="member.name"
            class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <img
              :src="member.image"
              :alt="member.name"
              class="w-full h-64 object-cover"
            />
            <div class="p-6 text-center">
              <h3 class="text-xl font-semibold text-gray-900">{{ member.name }}</h3>
              <p class="text-primary font-medium mb-3">{{ member.role }}</p>
              <p class="text-gray-600 text-sm">{{ member.description }}</p>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Portfolio Section -->
    <section id="portfolio" class="py-20 bg-white">
      <UContainer>
        <div class="text-center mb-16">
          <p class="text-primary font-medium mb-2 uppercase tracking-wide">Our Work</p>
          <h2 class="text-4xl md:text-5xl font-serif font-bold mb-4 text-gray-900">Wedding Portfolio</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse through some of our most beautiful weddings and get inspired for your special day
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="item in portfolioItems"
            :key="item.title"
            class="group relative overflow-hidden rounded-lg cursor-pointer"
          >
            <img
              :src="item.image"
              :alt="item.title"
              class="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 class="text-xl font-semibold">{{ item.title }}</h3>
                <p class="text-sm opacity-90">{{ item.location }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <UButton to="/portfolio" color="primary" size="lg">
            View Full Portfolio
          </UButton>
        </div>
      </UContainer>
    </section>

    <!-- Testimonials Section -->
    <section class="py-20 bg-gray-50">
      <UContainer>
        <div class="text-center mb-16">
          <p class="text-primary font-medium mb-2 uppercase tracking-wide">Testimonials</p>
          <h2 class="text-4xl md:text-5xl font-serif font-bold mb-4 text-gray-900">What Our Couples Say</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from the happy couples we have had the honor of working with
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <UCard
            v-for="testimonial in testimonials"
            :key="testimonial.author"
            class="hover:shadow-lg transition-shadow duration-300"
          >
            <div class="p-6">
              <div class="flex items-center mb-4">
                <UIcon name="i-heroicons-star-solid" class="w-5 h-5 text-yellow-400" />
                <UIcon name="i-heroicons-star-solid" class="w-5 h-5 text-yellow-400" />
                <UIcon name="i-heroicons-star-solid" class="w-5 h-5 text-yellow-400" />
                <UIcon name="i-heroicons-star-solid" class="w-5 h-5 text-yellow-400" />
                <UIcon name="i-heroicons-star-solid" class="w-5 h-5 text-yellow-400" />
              </div>
              <p class="text-gray-600 mb-6 italic">"{{ testimonial.content }}"</p>
              <div class="flex items-center">
                <img
                  :src="testimonial.avatar"
                  :alt="testimonial.author"
                  class="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p class="font-semibold text-gray-900">{{ testimonial.author }}</p>
                  <p class="text-sm text-gray-500">{{ testimonial.role }}</p>
                </div>
              </div>
            </div>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-primary text-white">
      <UContainer>
        <div class="text-center max-w-3xl mx-auto">
          <h2 class="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Plan Your Dream Wedding?
          </h2>
          <p class="text-xl mb-8 opacity-90">
            Let us help you create the wedding of your dreams. Contact us today for a free consultation and let's start planning your perfect day together.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <UButton to="/contact" size="xl" color="white" variant="solid">
              Schedule Consultation
            </UButton>
            <UButton href="tel:+621234567890" size="xl" variant="outline" color="white">
              Call Us: +62 123 456 7890
            </UButton>
          </div>
        </div>
      </UContainer>
    </section>
  </div>
</template>
