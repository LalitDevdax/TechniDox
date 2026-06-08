<template>
  <section
    id="testimonials"
    class="py-24 relative bg-white"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="text-center mb-10 sm:mb-16">
        <span
          class="text-[11px] font-bold uppercase tracking-widest block mb-2 text-brand-accent"
        >
          AI-NATIVE DOCUMENTATION ENGINE
        </span>
        <h2
          class="text-2xl sm:text-[36px] font-bold mb-3 tracking-tight leading-tight text-brand-primary px-2 sm:px-0"
        >
          Community-Driven Improvement At Scale
        </h2>
        <p class="text-[13px] sm:text-[15px] text-brand-grey leading-relaxed max-w-2xl mx-auto font-normal px-2 sm:px-0">
          Democratize documentation contributions with gamified workflows, micro-tasks, mentorship
          matching, and peer validation systems that keep contributors engaged long-term.
        </p>
      </div>

      <!-- Split Layout Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        <!-- Left Column: 4 Feature Items -->
        <div class="space-y-8">
          <div 
            v-for="feat in features" 
            :key="feat.title" 
            class="flex items-start gap-4"
          >
            <div class="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 mt-0.5" :class="feat.bg">
              <img 
                :src="`/images/community_driven/${feat.icon}`" 
                :alt="feat.title" 
                class="w-6 h-6 object-contain" 
                loading="lazy"
              />
            </div>
            <div>
              <h3 class="text-[17px] font-normal text-slate-900 mb-1">
                {{ feat.title }}
              </h3>
              <p class="text-[13px] text-slate-500 leading-relaxed font-normal">
                {{ feat.desc }}
              </p>
            </div>
          </div>
        </div>

        <!-- Right Column: Mock UI Container -->
        <div class="border border-[#868585] rounded-xl sm:rounded-2xl bg-white p-4 sm:p-6 lg:p-8 shadow-[0_0_20px_10px_rgba(0,0,0,0.05)]">
          <div class="space-y-4">
            
            <!-- Step cards styled per Figma specs -->
            <div 
              v-for="step in steps" 
              :key="step.title" 
              class="p-4 border border-[#AEADAD] bg-[#F5F4F4] rounded-lg flex items-center justify-between gap-4"
            >
              <div class="flex items-center gap-3">
                <div 
                  class="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0" 
                  :class="[step.numBg, step.numText]"
                >
                  <svg 
                    v-if="step.isSvg"
                    class="w-4 h-4" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    stroke-width="2.5" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="8 12 11 15 16 9" />
                  </svg>
                  <template v-else>{{ step.num }}</template>
                </div>
                <div>
                  <div class="font-sans text-sm font-semibold leading-snug text-[#1A1A2E]">
                    {{ step.title }}
                  </div>
                  <div class="font-inter text-xs font-normal text-[#868585] mt-0.5">
                    {{ step.desc }}
                  </div>
                </div>
              </div>

              <!-- Right badge or icon -->
              <span 
                v-if="step.badge" 
                class="px-2 py-0.5 text-[10px] font-semibold text-brand-accent bg-[#FFF5E5] border border-brand-accent/20 rounded-[4px] select-none font-inter"
              >
                {{ step.badge }}
              </span>
              <img 
                v-else-if="step.rightIcon" 
                :src="`/images/community_driven/${step.rightIcon}`" 
                :alt="step.title" 
                class="w-5 h-5 flex-shrink-0" 
                loading="lazy"
              />
            </div>

          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
const features = [
  {
    title: 'Gamified Contributions',
    desc: 'Streak tracking, impact badges, and achievement systems that reward quality contributions and retain community members.',
    icon: 'gamified_icon.png',
    bg: 'bg-[#EEECFC]'
  },
  {
    title: 'Micro-Contribution Architecture',
    desc: 'Complex tasks broken into 5-10 minute contributions, making open source accessible to everyone regardless of time or expertise.',
    icon: 'micro_tasks_icon.png',
    bg: 'bg-[#FFF5E5]'
  },
  {
    title: 'Mentorship Matching',
    desc: 'AI-powered pairing of experienced contributors with newcomers, fostering knowledge transfer and building stronger communities.',
    icon: 'mentorship_icon.png',
    bg: 'bg-[#E6F9EC]'
  },
  {
    title: 'Peer Validation Network',
    desc: 'Accept, edit, and reject workflows that improve AI models over time through community-driven quality signals.',
    icon: 'peer_validation_icon.png',
    bg: 'bg-[#EEECFC]'
  }
]

const steps = [
  {
    num: 1,
    numBg: 'bg-[#EEECFC]',
    numText: 'text-brand-primary',
    title: 'AI generates documentation',
    desc: 'From codebase analysis',
    rightIcon: 'validated_check_icon.png'
  },
  {
    num: 2,
    numBg: 'bg-[#FFF5E5]',
    numText: 'text-brand-accent',
    title: 'Quality scoring & routing',
    desc: 'Confidence: 72% - Review needed',
    badge: 'Review'
  },
  {
    num: 3,
    numBg: 'bg-[#E6F9EC]',
    numText: 'text-brand-success',
    title: 'Community review',
    desc: '3 contributors validated',
    rightIcon: 'validated_check_icon.png'
  },
  {
    num: 4,
    numBg: 'bg-[#24BD2E]',
    numText: 'text-white',
    isSvg: true,
    title: 'Published & improving',
    desc: 'AI learns from feedback',
    rightIcon: 'completion_star_icon.png'
  }
]
</script>

