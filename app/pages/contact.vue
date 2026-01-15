<script setup lang="ts">
definePageMeta({
  title: 'Contact - Reneo Wedding Organizer',
})

const form = reactive({
  name: '',
  email: '',
  phone: '',
  weddingDate: '',
  guestCount: '',
  budget: '',
  venue: '',
  message: '',
})

const budgetOptions = [
  'Under IDR 50M',
  'IDR 50M - 100M',
  'IDR 100M - 200M',
  'IDR 200M - 500M',
  'Above IDR 500M',
]

const guestOptions = [
  'Under 50 guests',
  '50 - 100 guests',
  '100 - 200 guests',
  '200 - 500 guests',
  '500+ guests',
]

const contactInfo = [
  {
    icon: 'i-heroicons-map-pin',
    title: 'Visit Us',
    details: ['Jl. Sudirman No. 123', 'Jakarta Selatan, 12930', 'Indonesia'],
  },
  {
    icon: 'i-heroicons-phone',
    title: 'Call Us',
    details: ['+62 21 1234 5678', '+62 812 3456 7890'],
  },
  {
    icon: 'i-heroicons-envelope',
    title: 'Email Us',
    details: ['hello@reneo.id', 'wedding@reneo.id'],
  },
  {
    icon: 'i-heroicons-clock',
    title: 'Working Hours',
    details: ['Monday - Friday: 9AM - 6PM', 'Saturday: 10AM - 4PM', 'Sunday: By Appointment'],
  },
]
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-24 bg-gray-50">
      <UContainer>
        <div class="text-center max-w-3xl mx-auto">
          <p class="text-primary font-semibold mb-2 uppercase tracking-wide">Get In Touch</p>
          <h1 class="text-4xl md:text-5xl font-bold mb-6">Let's Plan Your Dream Wedding</h1>
          <p class="text-xl text-gray-600">
            Ready to start planning? Fill out the form below and one of our wedding consultants will get back to you within 24 hours.
          </p>
        </div>
      </UContainer>
    </section>

    <!-- Contact Section -->
    <section class="py-20">
      <UContainer>
        <div class="grid lg:grid-cols-3 gap-12">
          <!-- Contact Form -->
          <div class="lg:col-span-2">
            <UCard>
              <div class="p-6">
                <h2 class="text-2xl font-bold mb-6">Wedding Inquiry Form</h2>
                <form class="space-y-6">
                  <div class="grid md:grid-cols-2 gap-6">
                    <UFormGroup label="Your Name" name="name" required>
                      <UInput v-model="form.name" placeholder="Full name" size="lg" />
                    </UFormGroup>

                    <UFormGroup label="Email Address" name="email" required>
                      <UInput v-model="form.email" type="email" placeholder="your@email.com" size="lg" />
                    </UFormGroup>

                    <UFormGroup label="Phone Number" name="phone" required>
                      <UInput v-model="form.phone" type="tel" placeholder="+62 812 3456 7890" size="lg" />
                    </UFormGroup>

                    <UFormGroup label="Wedding Date" name="weddingDate">
                      <UInput v-model="form.weddingDate" type="date" size="lg" />
                    </UFormGroup>

                    <UFormGroup label="Expected Guests" name="guestCount">
                      <USelect v-model="form.guestCount" :items="guestOptions" placeholder="Select guest count" size="lg" />
                    </UFormGroup>

                    <UFormGroup label="Budget Range" name="budget">
                      <USelect v-model="form.budget" :items="budgetOptions" placeholder="Select budget range" size="lg" />
                    </UFormGroup>
                  </div>

                  <UFormGroup label="Preferred Venue (if any)" name="venue">
                    <UInput v-model="form.venue" placeholder="e.g., Beach, Garden, Hotel Ballroom, etc." size="lg" />
                  </UFormGroup>

                  <UFormGroup label="Tell Us About Your Dream Wedding" name="message" required>
                    <UTextarea
                      v-model="form.message"
                      placeholder="Share your vision, theme ideas, special requirements, or any questions you have..."
                      :rows="5"
                      size="lg"
                    />
                  </UFormGroup>

                  <UButton type="submit" color="primary" size="xl" block>
                    Send Inquiry
                  </UButton>

                  <p class="text-sm text-gray-500 text-center">
                    By submitting this form, you agree to our privacy policy. We'll never share your information.
                  </p>
                </form>
              </div>
            </UCard>
          </div>

          <!-- Contact Info Sidebar -->
          <div class="space-y-6">
            <div v-for="info in contactInfo" :key="info.title" class="bg-gray-50 rounded-2xl p-6">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <UIcon :name="info.icon" class="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 class="font-semibold text-lg mb-2">{{ info.title }}</h3>
                  <p v-for="detail in info.details" :key="detail" class="text-gray-600">
                    {{ detail }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Social Links -->
            <div class="bg-primary/5 rounded-2xl p-6">
              <h3 class="font-semibold text-lg mb-4">Follow Us</h3>
              <div class="flex gap-4">
                <UButton
                  icon="i-simple-icons-instagram"
                  color="gray"
                  variant="outline"
                  size="lg"
                  to="https://instagram.com"
                  target="_blank"
                />
                <UButton
                  icon="i-simple-icons-facebook"
                  color="gray"
                  variant="outline"
                  size="lg"
                  to="https://facebook.com"
                  target="_blank"
                />
                <UButton
                  icon="i-simple-icons-tiktok"
                  color="gray"
                  variant="outline"
                  size="lg"
                  to="https://tiktok.com"
                  target="_blank"
                />
                <UButton
                  icon="i-simple-icons-pinterest"
                  color="gray"
                  variant="outline"
                  size="lg"
                  to="https://pinterest.com"
                  target="_blank"
                />
              </div>
            </div>

            <!-- WhatsApp CTA -->
            <div class="bg-green-50 rounded-2xl p-6 text-center">
              <UIcon name="i-simple-icons-whatsapp" class="w-12 h-12 text-green-600 mx-auto mb-3" />
              <h3 class="font-semibold text-lg mb-2">Prefer WhatsApp?</h3>
              <p class="text-gray-600 mb-4">Chat with us directly for a faster response</p>
              <UButton
                href="https://wa.me/6281234567890"
                target="_blank"
                color="green"
                block
              >
                Chat on WhatsApp
              </UButton>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- FAQ Section -->
    <section class="py-20 bg-gray-50">
      <UContainer>
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p class="text-xl text-gray-600">Quick answers to common questions</p>
        </div>

        <div class="max-w-3xl mx-auto space-y-4">
          <UCard>
            <div class="p-6">
              <h3 class="font-semibold text-lg mb-2">How far in advance should we book?</h3>
              <p class="text-gray-600">We recommend booking 12-18 months in advance for full planning services, or at least 3-6 months for day-of coordination.</p>
            </div>
          </UCard>

          <UCard>
            <div class="p-6">
              <h3 class="font-semibold text-lg mb-2">Do you travel for destination weddings?</h3>
              <p class="text-gray-600">Yes! We love destination weddings and have organized celebrations across Indonesia and internationally. Travel fees may apply.</p>
            </div>
          </UCard>

          <UCard>
            <div class="p-6">
              <h3 class="font-semibold text-lg mb-2">Can we customize packages?</h3>
              <p class="text-gray-600">Absolutely! All our packages can be tailored to your specific needs and budget. We believe every wedding should be unique.</p>
            </div>
          </UCard>

          <UCard>
            <div class="p-6">
              <h3 class="font-semibold text-lg mb-2">What's included in a free consultation?</h3>
              <p class="text-gray-600">Our free consultation includes a 1-hour meeting to discuss your vision, review our services, and answer any questions. No obligations!</p>
            </div>
          </UCard>
        </div>
      </UContainer>
    </section>
  </div>
</template>
