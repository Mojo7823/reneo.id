import { ref } from 'vue'

const activeSection = ref('hero')

export function useActiveSection() {
  let observer: IntersectionObserver | null = null

  const sectionIds = ['hero', 'about', 'portfolio', 'packages', 'location', 'contact']

  function setup() {
    if (typeof window === 'undefined') return

    // Clean up any previous observer before creating a new one
    teardown()

    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            activeSection.value = entry.target.id
          }
        }
      },
      {
        threshold: 0.3,
        rootMargin: '-10% 0px -10% 0px'
      }
    )

    for (const id of sectionIds) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
  }

  function teardown() {
    observer?.disconnect()
    observer = null
  }

  function reset() {
    activeSection.value = 'hero'
  }

  return {
    activeSection,
    sectionIds,
    setup,
    teardown,
    reset
  }
}
