import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Custom composable to handle scroll interactions for navigation headers.
 * Detects scroll direction (revealing navbar on scroll-up, hiding on scroll-down)
 * and tracks scrolled state beyond a threshold.
 * 
 * @param {number} scrollThreshold - Threshold in pixels to activate styling
 * @param {number} hideThreshold - Scroll distance before hiding nav
 */
export function useScrollDirection(scrollThreshold = 20, hideThreshold = 80) {
  const isScrolled = ref(false)
  const isVisible = ref(true)
  const isMobileOpen = ref(false)
  let lastScrollY = 0

  const handleScroll = () => {
    const currentScrollY = window.scrollY

    // 1. Check if past threshold (e.g. for background color/shadow transition)
    isScrolled.value = currentScrollY > scrollThreshold

    // 2. Determine scroll direction & visibility
    if (currentScrollY <= 0) {
      isVisible.value = true // Always show at the absolute top
    } else if (currentScrollY > lastScrollY && currentScrollY > hideThreshold) {
      // Scrolling down: hide header only when mobile menu is closed
      if (!isMobileOpen.value) {
        isVisible.value = false
      }
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up: show header
      isVisible.value = true
    }

    lastScrollY = currentScrollY
  }

  onMounted(() => {
    // Read initial scroll state on mount
    isScrolled.value = window.scrollY > scrollThreshold
    window.addEventListener('scroll', handleScroll, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    isScrolled,
    isVisible,
    isMobileOpen
  }
}
