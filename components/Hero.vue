<template>
  <section class="relative overflow-hidden ui-hero-bg min-h-screen flex items-center pt-20 pb-12 sm:pt-24 sm:pb-16">
    
    <!-- Radial glow over grid -->
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.55)_0%,transparent_65%)] pointer-events-none z-0" />

    <!-- Floating cards — xl only -->
    <img src="/images/hero/hero_documentation_preview.png" alt="Documentation card" class="absolute hidden xl:block pointer-events-none z-20 drop-shadow-xl" style="width:230px;left:18px;top:160px;" loading="eager" fetchpriority="high" />
    <img src="/images/hero/hero_interactive_guide.png"     alt="Guide preview"       class="absolute hidden xl:block pointer-events-none z-10 drop-shadow-lg"  style="width:210px;left:-8px;top:290px;" loading="eager" fetchpriority="high" />
    <img src="/images/hero/hero_api_list_card.png"         alt="API card"            class="absolute hidden xl:block pointer-events-none z-20 drop-shadow-xl" style="width:230px;right:18px;top:160px;" loading="eager" fetchpriority="high" />
    <img src="/images/hero/hero_roi_analytics_preview.png" alt="Analytics card"      class="absolute hidden xl:block pointer-events-none z-10 drop-shadow-lg"  style="width:210px;right:-8px;top:290px;" loading="eager" fetchpriority="high" />

    <!-- Center content -->
    <div class="relative z-30 w-full max-w-[820px] mx-auto px-5 sm:px-6 lg:px-8 text-center">

      <!-- Heading -->
      <h1
        class="text-[30px] leading-[1.2] sm:text-5xl lg:text-[50px] lg:leading-[54px] font-bold text-[#2C2D4A] tracking-tight opacity-0 animate-fade-in-up"
        style="animation-delay:0.1s;"
      >
        <span class="italic font-bold text-brand-primary">Documentation</span>
        <span class="text-brand-grey"> that</span>
        <span class="text-brand-accent"> builds</span>
        <span class="text-brand-grey"> itself,</span><br class="hidden sm:inline" />
        <span class="text-brand-accent"> improves</span>
        <span class="text-brand-grey"> itself, and proves its</span>
        <span class="text-brand-accent"> value</span>
      </h1>

      <!-- Subheading -->
      <p
        class="text-[13px] sm:text-sm lg:text-[16px] leading-relaxed opacity-0 animate-fade-in-up font-normal max-w-[680px] mx-auto mt-4 sm:mt-4 text-brand-grey"
        style="animation-delay:0.2s;"
      >
        AI-native platform that generates documentation from code, scores quality in real-time, routes low
        confidence content to expert review, and delivers measurable ROI for enterprise teams.
      </p>

      <!-- CTA Buttons -->
      <div
        class="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 opacity-0 animate-fade-in-up mt-8"
        style="animation-delay:0.4s;"
      >
        <a
          href="#"
          @click.prevent
          class="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-white font-semibold rounded-[4px] hover:opacity-95 transition-all duration-200 text-[13px] sm:text-sm gap-2 bg-gradient-to-br from-brand-primary-light to-brand-primary border border-brand-primary shadow-[0_4px_6px_-4px_rgba(66,56,158,0.4),0_10px_15px_-3px_rgba(66,56,158,0.2)] font-inter btn-shimmer-primary"
        >
          <span>Book a Demo</span>
          <img src="/images/hero/arrow_right_icon.png" alt="" class="h-3 w-auto flex-shrink-0" />
        </a>
        <a
          href="#"
          @click.prevent
          class="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 bg-white text-brand-primary font-semibold rounded-[4px] border border-brand-primary hover:bg-slate-50 transition-all duration-200 text-[13px] sm:text-sm font-inter btn-shimmer-secondary"
        >
          Join Enterprise Waitlist
        </a>
      </div>

      <!-- Trust signals -->
      <div
        class="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px] sm:text-[13px] font-semibold opacity-0 animate-fade-in mt-5 text-brand-primary"
        style="animation-delay:0.55s;"
      >
        <span v-for="signal in trustSignals" :key="signal" class="flex items-center gap-1.5">
          <svg class="w-3.5 h-3.5 sm:w-[17px] sm:h-[17px] text-[#10B981] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
          {{ signal }}
        </span>
      </div>

    </div>
  </section>
</template>

<script setup>
const trustSignals = [
  'AI-generated docs in minutes',
  'Confidence scoring built in',
  'Enterprise-grade compliance',
]
</script>