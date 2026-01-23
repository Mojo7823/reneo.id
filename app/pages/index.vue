<script setup lang="ts">
definePageMeta({
  title: 'Home - Reneo.id Wedding Organizer',
})

// Company statistics
const stats = [
  { label: 'Pernikahan Diselenggarakan', value: '500+' },
  { label: 'Pasangan Bahagia', value: '500+' },
  { label: 'Tahun Pengalaman', value: '10+' },
  { label: 'Anggota Tim', value: '25+' },
]

// Team members
const team = [
  {
    name: 'Sarah Anderson',
    role: 'Pendiri & Perencana Utama',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    description: 'Dengan pengalaman lebih dari 15 tahun di industri pernikahan, Sarah membawa kreativitas dan passion ke setiap perayaan.',
  },
  {
    name: 'Michael Chen',
    role: 'Direktur Kreatif',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    description: 'Michael mengubah visi pernikahan menjadi kenyataan menakjubkan dengan mata desain dan perhatian terhadap detail.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Koordinator Acara',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    description: 'Emily memastikan setiap pernikahan berjalan lancar dari awal hingga akhir dengan kemampuan organisasi yang luar biasa.',
  },
  {
    name: 'David Kim',
    role: 'Direktur Fotografi',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    description: 'David mengabadikan momen tak terlupakan dengan keunggulan artistik, menyimpan kenangan yang abadi seumur hidup.',
  },
]

// Services offered
const services = [
  {
    title: 'Perencanaan Pernikahan Lengkap',
    description: 'Dari konsep hingga perayaan, kami menangani setiap detail pernikahan impian Anda. Perencanaan komprehensif kami memastikan pengalaman tanpa stres.',
    icon: 'i-heroicons-calendar-days',
  },
  {
    title: 'Koordinasi Hari-H',
    description: 'Biarkan kami mengatur logistik hari pernikahan Anda sementara Anda fokus merayakan. Kami memastikan semuanya berjalan lancar.',
    icon: 'i-heroicons-clipboard-document-check',
  },
  {
    title: 'Fotografi Pernikahan',
    description: 'Layanan fotografi profesional untuk mengabadikan setiap momen berharga di hari spesial Anda dengan keunggulan artistik.',
    icon: 'i-heroicons-camera',
  },
  {
    title: 'Pemilihan Venue',
    description: 'Kami membantu Anda menemukan venue sempurna yang sesuai dengan visi, gaya, dan anggaran dari jaringan luas kami.',
    icon: 'i-heroicons-building-library',
  },
  {
    title: 'Katering & Dekorasi',
    description: 'Hidangan lezat dan dekorasi menakjubkan yang menciptakan suasana tak terlupakan untuk perayaan Anda.',
    icon: 'i-heroicons-cake',
  },
  {
    title: 'Undangan Digital',
    description: 'Undangan pernikahan digital yang indah dan interaktif yang akan disukai tamu Anda. Modern dan ramah lingkungan.',
    icon: 'i-heroicons-envelope',
  },
]

// Portfolio items
const portfolioItems = [
  {
    title: 'Sarah & James',
    location: 'Pernikahan Taman Bali',
    image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  },
  {
    title: 'Emily & David',
    location: 'Upacara Pantai Sunset',
    image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  },
  {
    title: 'Michelle & Ryan',
    location: 'Ballroom Elegan',
    image: 'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  },
  {
    title: 'Jessica & Mark',
    location: 'Kebun Anggur Rustic',
    image: 'https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  },
  {
    title: 'Amanda & Chris',
    location: 'Retreat Pegunungan',
    image: 'https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  },
  {
    title: 'Nicole & Andrew',
    location: 'Pernikahan Gereja Klasik',
    image: 'https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  },
]

// Testimonials
const testimonials = [
  {
    content: 'Reneo.id mewujudkan pernikahan impian kami! Setiap detail sempurna, dan kami bisa menikmati hari spesial tanpa stres. Sangat merekomendasikan tim mereka!',
    author: 'Jennifer & Thomas',
    role: 'Menikah Desember 2024',
    avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
  },
  {
    content: 'Perhatian terhadap detail dan profesionalisme tim Reneo.id melebihi semua ekspektasi kami. Mereka mengubah visi kami menjadi kenyataan yang ajaib.',
    author: 'Lisa & Robert',
    role: 'Menikah Oktober 2024',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
  },
  {
    content: 'Dari perencanaan hingga eksekusi, semuanya sempurna. Tamu-tamu kami masih membicarakan betapa indahnya pernikahan kami. Terima kasih, Reneo.id!',
    author: 'Maria & Carlos',
    role: 'Menikah Agustus 2024',
    avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
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
          <UButton href="#portfolio" size="xl" color="white" variant="solid">
            Lihat Portofolio Kami
          </UButton>
          <UButton to="/contact" size="xl" variant="outline" color="white">
            Hubungi Kami
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
            <p class="text-primary font-medium mb-2 uppercase tracking-wide">Tentang Kami</p>
            <h2 class="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900">
              Kisah Anda, Diceritakan dengan Indah
            </h2>
            <p class="text-lg text-gray-600 mb-6">
              Di Reneo.id, kami percaya bahwa setiap kisah cinta layak mendapat perayaan yang unik seperti pasangan itu sendiri. Didirikan pada tahun 2014, kami telah mendedikasikan diri untuk menciptakan pengalaman pernikahan luar biasa yang mencerminkan kepribadian, impian, dan cinta setiap pasangan yang kami tangani.
            </p>
            <p class="text-lg text-gray-600 mb-8">
              Tim profesional pernikahan kami yang bersemangat menyatukan kreativitas, keahlian, dan perhatian teliti terhadap detail untuk memastikan hari spesial Anda tidak kurang dari sempurna. Dari pertemuan intim hingga perayaan besar, kami menangani setiap aspek dengan kepedulian dan dedikasi.
            </p>
            <div class="flex gap-4">
              <UButton href="#services" color="primary" size="lg">
                Layanan Kami
              </UButton>
              <UButton href="#team" variant="outline" color="gray" size="lg">
                Temui Tim Kami
              </UButton>
            </div>
          </div>
          <div class="relative">
            <img
              src="https://images.pexels.com/photos/1456613/pexels-photo-1456613.jpeg?auto=compress&cs=tinysrgb&w=600&h=700&fit=crop"
              alt="Perencanaan Pernikahan"
              class="rounded-lg shadow-2xl w-full"
            />
            <div class="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-lg shadow-xl">
              <p class="text-4xl font-bold">10+</p>
              <p class="text-sm">Tahun Keunggulan</p>
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
          <p class="text-primary font-medium mb-2 uppercase tracking-wide">Yang Kami Tawarkan</p>
          <h2 class="text-4xl md:text-5xl font-serif font-bold mb-4 text-gray-900">Layanan Kami</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Layanan perencanaan pernikahan komprehensif yang disesuaikan untuk membuat hari spesial Anda benar-benar sempurna
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
            Lihat Semua Layanan
          </UButton>
        </div>
      </UContainer>
    </section>

    <!-- Team Section -->
    <section id="team" class="py-20 bg-gray-50">
      <UContainer>
        <div class="text-center mb-16">
          <p class="text-primary font-medium mb-2 uppercase tracking-wide">Tim Kami</p>
          <h2 class="text-4xl md:text-5xl font-serif font-bold mb-4 text-gray-900">Temui Para Ahli</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Tim profesional pernikahan kami yang berdedikasi berkomitmen untuk membuat hari Anda luar biasa
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
          <p class="text-primary font-medium mb-2 uppercase tracking-wide">Karya Kami</p>
          <h2 class="text-4xl md:text-5xl font-serif font-bold mb-4 text-gray-900">Portofolio Pernikahan</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Jelajahi beberapa pernikahan terindah kami dan dapatkan inspirasi untuk hari spesial Anda
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
            Lihat Portofolio Lengkap
          </UButton>
        </div>
      </UContainer>
    </section>

    <!-- Testimonials Section -->
    <section class="py-20 bg-gray-50">
      <UContainer>
        <div class="text-center mb-16">
          <p class="text-primary font-medium mb-2 uppercase tracking-wide">Testimoni</p>
          <h2 class="text-4xl md:text-5xl font-serif font-bold mb-4 text-gray-900">Apa Kata Pasangan Kami</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Dengarkan dari pasangan bahagia yang telah kami layani dengan penuh kehormatan
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
            Siap Merencanakan Pernikahan Impian Anda?
          </h2>
          <p class="text-xl mb-8 opacity-90">
            Biarkan kami membantu Anda menciptakan pernikahan impian. Hubungi kami hari ini untuk konsultasi gratis dan mari mulai merencanakan hari sempurna Anda bersama.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <UButton to="/contact" size="xl" color="white" variant="solid">
              Jadwalkan Konsultasi
            </UButton>
            <UButton href="tel:+621234567890" size="xl" variant="outline" color="white">
              Hubungi Kami: +62 123 456 7890
            </UButton>
          </div>
        </div>
      </UContainer>
    </section>
  </div>
</template>
