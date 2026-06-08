<template>
  <section id="features" class="py-12 sm:py-16 px-4 sm:px-5 lg:px-8 bg-white">
    <div class="max-w-6xl mx-auto w-full">

      <!-- Header -->
      <div class="text-center mb-8 sm:mb-10">
        <p class="text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-2 text-brand-accent">
          AI-Native Documentation Engine
        </p>
        <h2 class="text-xl sm:text-3xl lg:text-4xl font-bold mb-3 text-brand-primary">
          AI-Native Documentation Engine
        </h2>
        <p class="text-[12px] sm:text-[14px] font-normal max-w-lg mx-auto leading-relaxed text-brand-grey">
          Three AI engines working together to transform how teams
          create, validate, and scale technical documentation.
        </p>
      </div>

      <!-- 3 Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
        <div 
          v-for="card in cards" 
          :key="card.title" 
          :class="['rounded-xl sm:rounded-2xl p-4 sm:px-5 sm:py-6 flex flex-col gap-3 border border-slate-200', card.bg]"
        >
          <div class="flex items-center gap-3">
            <img :src="`/images/ai_native/${card.icon}`" :alt="card.title" class="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 object-contain" loading="lazy" />
            <h3 class="text-sm sm:text-base font-semibold text-[#2C2D4A] leading-tight">
              {{ card.title }}
            </h3>
          </div>
          <p class="text-[12px] sm:text-[13px] leading-relaxed text-brand-grey">
            {{ card.desc }}
          </p>
          <ul class="space-y-2">
            <li v-for="item in card.features" :key="item" class="flex items-center gap-2 text-[12px] sm:text-[13px] font-medium text-brand-grey">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" class="flex-shrink-0">
                <circle cx="12" cy="12" r="10" :stroke="card.stroke" stroke-width="1.5"/>
                <path d="M8 12L11 15L16 9" :stroke="card.stroke" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
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
const cards = [
  {
    title: 'AI Documentation Generator',
    desc: 'Automatically converts codebases into comprehensive documentation with parameter extraction, usage examples, and multi-format export.',
    icon: 'ai_generator_icon.png',
    bg: 'bg-[#F4F3FF]',
    stroke: 'var(--brand-primary)',
    features: [
      'Intelligent code analysis',
      'Multi-language support',
      'Export to any format'
    ]
  },
  {
    title: 'Documentation Quality Scorer',
    desc: 'Advanced scoring analyzing readability, inclusivity, structure, and technical accuracy with real-time quality assessment.',
    icon: 'ai_scorer_icon.png',
    bg: 'bg-[#FFF8EC]',
    stroke: 'var(--brand-accent)',
    features: [
      'Multi-dimensional scoring',
      'Confidence indicators',
      'Actionable recommendations'
    ]
  },
  {
    title: 'Human-in-the-Loop Review',
    desc: 'Low-confidence content automatically routes to expert reviewers. Build trust with AI-human collaboration and community validation.',
    icon: 'human_review_icon.png',
    bg: 'bg-[#EDFBF5]',
    stroke: 'var(--brand-success)',
    features: [
      'Smart routing system',
      'Expert reviewer network',
      'Quality assurance workflow'
    ]
  }
]
</script>

