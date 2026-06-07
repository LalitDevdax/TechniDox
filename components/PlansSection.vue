<template>
  <section
    id="pricing"
    class="py-14 sm:py-20 px-4 bg-white text-center"
  >
    <div class="max-w-4xl mx-auto flex flex-col items-center">
      
      <!-- Heading -->
      <h2 
        class="text-2xl sm:text-[36px] font-bold mb-8 tracking-tight text-brand-primary px-2 sm:px-0"
      >
        Plans Built For Every Stage Of Growth
      </h2>

      <!-- Pricing Tag Image with Text Overlay -->
      <div class="relative inline-block select-none mb-10">
        <!-- Spacing placeholder (invisible) -->
        <img 
          src="/images/pricing/pricing_swinging_tag.png" 
          alt="pricing-placeholder" 
          class="h-[210px] w-auto mx-auto opacity-0 block pointer-events-none"
        />

        <!-- Static Rope -->
        <img 
          src="/images/pricing/pricing_static_rope.png" 
          alt="Rope" 
          class="h-[210px] w-auto mx-auto absolute inset-0 pointer-events-none"
        />

        <!-- Swinging Tag & Text Overlay -->
        <div class="animate-swing-tag absolute inset-0">
          <img 
            src="/images/pricing/pricing_swinging_tag.png" 
            alt="Pricing starts at $499/month" 
            class="h-[210px] w-auto mx-auto block"
          />
          <div class="absolute inset-x-0 bottom-[64px] flex flex-col items-center justify-center text-center">
            <p 
              class="text-[11px] font-semibold tracking-wide mb-2 text-brand-grey"
            >
              Prices starts at
            </p>
            <div 
              class="flex items-baseline justify-center font-bold text-slate-950"
            >
              <span class="text-[16px] font-bold mr-1 relative -top-[12px] select-none">$</span>
              <span class="text-[38px] font-black tracking-tight leading-none">499</span>
              <span class="text-[12px] font-semibold text-slate-800 ml-1">/month</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Button -->
      <a 
        href="#"
        @click.prevent
        class="inline-flex items-center justify-center px-6 py-3 bg-brand-primary hover:bg-brand-primary-dark text-white text-xs font-bold rounded-[4px] shadow-sm transition-all duration-200"
      >
        View Subscription Details
      </a>

    </div>
  </section>
</template>

<script setup>
// No extra setup required
</script>
