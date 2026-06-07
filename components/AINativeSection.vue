<template>
  <section id="features" class="py-12 sm:py-16 px-4 sm:px-5 lg:px-8 bg-white">
    <div class="max-w-6xl mx-auto w-full">

      <!-- Header -->
      <div class="text-center mb-8 sm:mb-10">
        <p class="text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-2 text-brand-accent">
          AI-Native Documentation Engine
        </p>
        <h2 class="text-xl sm:text-3xl lg:text-4xl font-extrabold mb-3 text-brand-primary">
          AI-Native Documentation Engine
        </h2>
        <p class="text-[12px] sm:text-[14px] font-medium max-w-lg mx-auto leading-relaxed text-brand-grey">
          Three AI engines working together to transform how teams
          create, validate, and scale technical documentation.
        </p>
      </div>

      <!-- 3 Cards — stack on mobile, 3-col on md+ -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">

        <!-- Card 1: Purple -->
        <div class="rounded-xl sm:rounded-2xl p-4 sm:px-5 sm:py-6 flex flex-col gap-3 bg-[#F4F3FF] border border-slate-200">
          <!-- Mobile: icon + title in one row -->
          <div class="flex items-center gap-3">
            <img src="/images/ai_native/ai_generator_icon.png" alt="AI Generator" class="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 object-contain" />
            <h3 class="text-sm sm:text-base font-semibold text-[#2C2D4A] leading-tight">
              AI Documentation Generator
            </h3>
          </div>
          <p class="text-[12px] sm:text-[13px] leading-relaxed text-brand-grey">
            Automatically converts codebases into comprehensive documentation with parameter extraction, usage examples, and multi-format export.
          </p>
          <ul class="space-y-2">
            <li v-for="item in purpleFeatures" :key="item" class="flex items-center gap-2 text-[12px] sm:text-[13px] font-medium text-brand-grey">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" class="flex-shrink-0">
                <circle cx="12" cy="12" r="10" stroke="var(--brand-primary)" stroke-width="1.5"/>
                <path d="M8 12L11 15L16 9" stroke="var(--brand-primary)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              {{ item }}
            </li>
          </ul>
        </div>

        <!-- Card 2: Orange -->
        <div class="rounded-xl sm:rounded-2xl p-4 sm:px-5 sm:py-6 flex flex-col gap-3 bg-[#FFF8EC] border border-slate-200">
          <div class="flex items-center gap-3">
            <img src="/images/ai_native/ai_scorer_icon.png" alt="AI Scorer" class="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 object-contain" />
            <h3 class="text-sm sm:text-base font-semibold text-[#2C2D4A] leading-tight">
              Documentation Quality Scorer
            </h3>
          </div>
          <p class="text-[12px] sm:text-[13px] leading-relaxed text-brand-grey">
            Advanced scoring analyzing readability, inclusivity, structure, and technical accuracy with real-time quality assessment.
          </p>
          <ul class="space-y-2">
            <li v-for="item in orangeFeatures" :key="item" class="flex items-center gap-2 text-[12px] sm:text-[13px] font-medium text-brand-grey">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" class="flex-shrink-0">
                <circle cx="12" cy="12" r="10" stroke="var(--brand-accent)" stroke-width="1.5"/>
                <path d="M8 12L11 15L16 9" stroke="var(--brand-accent)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              {{ item }}
            </li>
          </ul>
        </div>

        <!-- Card 3: Green -->
        <div class="rounded-xl sm:rounded-2xl p-4 sm:px-5 sm:py-6 flex flex-col gap-3 bg-[#EDFBF5] border border-slate-200">
          <div class="flex items-center gap-3">
            <img src="/images/ai_native/human_review_icon.png" alt="Human Review" class="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 object-contain" />
            <h3 class="text-sm sm:text-base font-semibold text-[#2C2D4A] leading-tight">
              Human-in-the-Loop Review
            </h3>
          </div>
          <p class="text-[12px] sm:text-[13px] leading-relaxed text-brand-grey">
            Low-confidence content automatically routes to expert reviewers. Build trust with AI-human collaboration and community validation.
          </p>
          <ul class="space-y-2">
            <li v-for="item in greenFeatures" :key="item" class="flex items-center gap-2 text-[12px] sm:text-[13px] font-medium text-brand-grey">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" class="flex-shrink-0">
                <circle cx="12" cy="12" r="10" stroke="var(--brand-success)" stroke-width="1.5"/>
                <path d="M8 12L11 15L16 9" stroke="var(--brand-success)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              {{ item }}
            </li>
          </ul>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
const purpleFeatures = [
  'Intelligent code analysis',
  'Multi-language support',
  'Export to any format',
]

const orangeFeatures = [
  'Multi-dimensional scoring',
  'Confidence indicators',
  'Actionable recommendations',
]

const greenFeatures = [
  'Smart routing system',
  'Expert reviewer network',
  'Quality assurance workflow',
]
</script>
