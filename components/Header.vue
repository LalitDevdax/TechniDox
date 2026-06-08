<template>
  <!-- Fixed header bar -->
  <header
    class="fixed top-0 left-0 right-0 z-[60] transition-all duration-300 transform"
    :class="[
      isScrolled || isMobileOpen
        ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/60 shadow-[0_2px_16px_rgba(66,56,158,0.07)]'
        : 'bg-transparent border-b border-transparent shadow-none',
      (isVisible || isMobileOpen) ? 'translate-y-0' : '-translate-y-full'
    ]"
  >
    <div class="w-full mx-auto" style="padding-left: calc(100% / 19 * 0.85); padding-right: calc(100% / 19 * 0.85);">
      <div class="flex items-center justify-between h-16 px-4 sm:px-0">

        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center flex-shrink-0 z-[70] relative">
          <img src="/images/logos/technidox_logo.png" alt="TechniDox" class="h-7 sm:h-8 w-auto" />
        </NuxtLink>

        <!-- Desktop Nav -->
        <nav class="hidden md:flex items-center gap-8 h-6">
          <a
            v-for="link in navLinks"
            :key="link.label"
            href="#"
            @click.prevent
            class="text-sm font-medium text-brand-primary/80 hover:text-brand-primary transition-all duration-150 nav-link-hover"
          >
            {{ link.label }}
          </a>
        </nav>

        <!-- Desktop CTA -->
        <div class="hidden md:flex items-center gap-2">
          <a
            href="#"
            @click.prevent
            class="px-5 py-2.5 bg-brand-primary text-white text-xs font-bold rounded-[4px] hover:bg-brand-primary-dark transition-all shadow-sm btn-shimmer-primary"
          >
            Get Started
          </a>
        </div>

        <!-- Hamburger Button (mobile only) -->
        <button
          id="mobile-menu-toggle"
          @click="toggleMenu"
          class="md:hidden relative z-[70] w-10 h-10 flex flex-col items-center justify-center rounded-xl focus:outline-none"
          :aria-label="isMobileOpen ? 'Close menu' : 'Open menu'"
        >
          <span class="hamburger-bar" :class="isMobileOpen ? 'bar-top-open' : 'bar-top-closed'" />
          <span class="hamburger-bar" :class="isMobileOpen ? 'bar-mid-open' : 'bar-mid-closed'" />
          <span class="hamburger-bar" :class="isMobileOpen ? 'bar-bot-open' : 'bar-bot-closed'" />
        </button>
      </div>
    </div>
  </header>

  <!-- Full-screen mobile overlay -->
  <Transition name="mobile-menu">
    <div
      v-if="isMobileOpen"
      class="fixed inset-0 z-[55] md:hidden overflow-hidden"
    >
      <!-- Solid opaque background — prevents seeing/scrolling behind -->
      <div class="absolute inset-0" style="background: linear-gradient(160deg, #ffffff 0%, #f6f5fc 55%, #eeeaf8 100%);" />

      <!-- Content -->
      <div class="relative z-10 flex flex-col h-full pt-20 px-7 pb-8">

        <!-- Nav Links -->
        <nav class="flex-1 flex flex-col justify-center gap-0">
          <a
            v-for="(link, i) in navLinks"
            :key="link.label"
            href="#"
            @click.prevent="closeMenu"
            class="mobile-nav-link"
            :style="{ '--delay': `${i * 70}ms` }"
          >
            <span class="mobile-nav-number">0{{ i + 1 }}</span>
            <span class="mobile-nav-label">{{ link.label }}</span>
            <span class="mobile-nav-arrow">→</span>
          </a>
        </nav>

        <!-- Divider -->
        <div class="mobile-menu-divider" />

        <!-- Bottom CTA -->
        <div class="pt-5 pb-2">
          <a
            href="#"
            @click.prevent="closeMenu"
            class="mobile-cta-btn btn-shimmer-primary"
          >
            Get Started Free
          </a>
          <p class="text-center text-[11px] text-slate-400 mt-2.5 font-medium">No credit card required</p>
        </div>

        <!-- Decorative blobs -->
        <div class="absolute bottom-0 right-0 w-56 h-56 rounded-full opacity-[0.07] pointer-events-none"
          style="background: radial-gradient(circle, #42389E 0%, transparent 70%); transform: translate(30%, 30%);" />
        <div class="absolute top-20 left-0 w-40 h-40 rounded-full opacity-[0.06] pointer-events-none"
          style="background: radial-gradient(circle, #F9A71E 0%, transparent 70%); transform: translate(-40%, 0);" />
      </div>
    </div>
  </Transition>
</template>

<script setup>
const { isScrolled, isVisible, isMobileOpen } = useScrollDirection()

const navLinks = [
  { label: 'Home' },
  { label: 'About Us' },
  { label: 'Docs' },
  { label: 'Pricing' },
]

let savedScrollY = 0

function lockScroll() {
  if (!process.client) return
  savedScrollY = window.scrollY
  document.body.style.position = 'fixed'
  document.body.style.top = `-${savedScrollY}px`
  document.body.style.left = '0'
  document.body.style.right = '0'
  document.body.style.overflow = 'hidden'
}

function unlockScroll() {
  if (!process.client) return
  document.body.style.position = ''
  document.body.style.top = ''
  document.body.style.left = ''
  document.body.style.right = ''
  document.body.style.overflow = ''
  window.scrollTo(0, savedScrollY)
}

function toggleMenu() {
  isMobileOpen.value = !isMobileOpen.value
  isMobileOpen.value ? lockScroll() : unlockScroll()
}

function closeMenu() {
  isMobileOpen.value = false
  unlockScroll()
}
</script>

<style scoped>
/* ── Hamburger bars ─────────────────────────────────── */
.hamburger-bar {
  display: block;
  width: 22px;
  height: 2px;
  border-radius: 9999px;
  background: #42389E;
  transition: transform 0.38s cubic-bezier(0.23, 1, 0.32, 1),
              opacity 0.25s ease;
  transform-origin: center;
  margin: 3px 0;
}

/* Closed */
.bar-top-closed { transform: translateY(0); }
.bar-mid-closed { transform: translateY(0); opacity: 1; }
.bar-bot-closed { transform: translateY(0); }

/* Open → X morph */
.bar-top-open   { transform: translateY(8px) rotate(45deg); }
.bar-mid-open   { transform: scaleX(0); opacity: 0; }
.bar-bot-open   { transform: translateY(-8px) rotate(-45deg); }

/* ── Overlay transition ──────────────────────────────── */
.mobile-menu-enter-active {
  transition: opacity 0.3s ease, transform 0.38s cubic-bezier(0.23, 1, 0.32, 1);
}
.mobile-menu-leave-active {
  transition: opacity 0.25s ease, transform 0.3s cubic-bezier(0.55, 0, 1, 0.45);
}
.mobile-menu-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}

/* ── Nav links ──────────────────────────────────────── */
.mobile-nav-link {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px 0;
  border-bottom: 1px solid rgba(66, 56, 158, 0.07);
  text-decoration: none;
  cursor: pointer;
  animation: slideInLink 0.45s cubic-bezier(0.23, 1, 0.32, 1) both;
  animation-delay: var(--delay, 0ms);
  -webkit-tap-highlight-color: transparent;
}

@keyframes slideInLink {
  from { opacity: 0; transform: translateX(-20px); }
  to   { opacity: 1; transform: translateX(0); }
}

.mobile-nav-link:active .mobile-nav-label { color: #42389E; }

.mobile-nav-number {
  font-size: 10px;
  font-weight: 700;
  color: #42389E;
  opacity: 0.35;
  letter-spacing: 0.1em;
  min-width: 20px;
}

.mobile-nav-label {
  flex: 1;
  font-size: 26px;
  font-weight: 700;
  color: #1f2937;
  letter-spacing: -0.02em;
  transition: color 0.15s ease;
}

.mobile-nav-arrow {
  font-size: 16px;
  color: #cbd5e1;
  transition: transform 0.2s ease;
}

/* ── Divider ────────────────────────────────────────── */
.mobile-menu-divider {
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(66, 56, 158, 0.12), transparent);
  margin-top: 4px;
}

/* ── CTA button ─────────────────────────────────────── */
.mobile-cta-btn {
  display: block;
  width: 100%;
  text-align: center;
  padding: 14px;
  background: #42389E;
  color: white;
  font-size: 14px;
  font-weight: 700;
  border-radius: 8px;
  text-decoration: none;
  animation: slideInLink 0.45s cubic-bezier(0.23, 1, 0.32, 1) 0.28s both;
  box-shadow: 0 6px 20px -4px rgba(66, 56, 158, 0.4);
  -webkit-tap-highlight-color: transparent;
}
.mobile-cta-btn:active {
  transform: scale(0.98);
}
</style>