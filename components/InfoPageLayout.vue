<template>
  <div class="min-h-screen flex flex-col relative bg-transparent font-sans">
    <Header />
    
    <!-- Spacer for fixed Header -->
    <div class="h-16" />

    <!-- Hero Section -->
    <section class="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <!-- Subtle decorative background gradients -->
      <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div class="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div class="max-w-7xl mx-auto text-center relative z-10 space-y-4">
        <span class="inline-flex items-center px-3 py-1 rounded-full bg-brand-primary/8 border border-brand-primary/20 text-brand-primary text-[10px] font-bold uppercase tracking-wider">
          {{ category }}
        </span>
        <h1 class="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          {{ title }}
        </h1>
        <p class="text-base md:text-lg text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
          {{ subtitle }}
        </p>
      </div>
    </section>

    <!-- Main Content Area -->
    <section class="flex-grow pb-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="max-w-7xl mx-auto">
        <div v-if="useContainerCard" class="bg-white/80 backdrop-blur-md border border-slate-200/80 rounded-3xl p-6 md:p-12 shadow-xl shadow-slate-100/50">
          <slot />
        </div>
        <div v-else class="space-y-16">
          <slot />
        </div>

        <!-- Premium Bottom Call-to-Action Panel -->
        <div class="mt-16 bg-brand-primary/4 border border-brand-primary/15 rounded-3xl p-8 md:p-10 text-center relative overflow-hidden shadow-sm font-inter">
          <!-- Background elements -->
          <div class="absolute -inset-10 bg-gradient-to-tr from-brand-primary/10 to-brand-accent/10 rounded-3xl opacity-30 blur-xl pointer-events-none" />
          <div class="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:16px_16px] opacity-15 pointer-events-none" />

          <div class="relative z-10 max-w-lg mx-auto space-y-5">
            <h3 class="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
              Ready to automate your developer documentation?
            </h3>
            <p class="text-xs text-slate-500 font-semibold leading-relaxed">
              Skip the manual writing. TechniDox generates, compiles, and syncs your repository docs in seconds.
            </p>
            <div class="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                :href="actionHref"
                class="w-full sm:w-auto px-6 py-3 bg-brand-primary hover:bg-brand-primary-dark text-white text-xs font-bold rounded-xl shadow-md transition-all text-center hover:scale-[1.02]"
              >
                {{ actionLabel }}
              </a>
              <a
                href="/#pricing"
                class="w-full sm:w-auto px-6 py-3 bg-white hover:bg-slate-50 border border-slate-200 text-slate-600 text-xs font-bold rounded-xl transition-all text-center"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  actionLabel: {
    type: String,
    default: 'Get Started Free'
  },
  actionHref: {
    type: String,
    default: '#'
  },
  useContainerCard: {
    type: Boolean,
    default: false
  }
})
</script>
