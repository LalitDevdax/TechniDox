<template>
  <section
    id="use-cases"
    class="pt-16 sm:pt-24 pb-24 sm:pb-36 relative bg-white"
  >
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Header -->
      <div class="text-center mb-10 sm:mb-16">
        <span
          class="text-[11px] font-medium uppercase tracking-widest block mb-2 text-brand-accent"
        >
          USE CASES
        </span>
        <h2
          class="text-2xl sm:text-[36px] font-bold mb-3 tracking-tight leading-tight text-brand-primary px-2 sm:px-0"
        >
          Built For Every Team That Ships Code.
        </h2>
        <p class="text-[13px] sm:text-[15px] text-brand-grey leading-relaxed max-w-2xl mx-auto font-normal px-2 sm:px-0">
          Whether you're a solo OSS maintainer or a 10,000-person enterprise,
          TechniDox adapts to how your team creates and maintains documentation.
        </p>
      </div>

      <!-- Use Cases Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        <div 
          v-for="card in cards" 
          :key="card.label" 
          class="rounded-xl sm:rounded-2xl py-5 px-5 sm:py-7 sm:px-8 flex flex-col justify-between shadow-[0_0_20px_10px_rgba(0,0,0,0.05)]"
          :class="card.isDark 
            ? 'bg-brand-primary text-white' 
            : 'bg-white border border-[#868585]'
          "
        >
          <div>
            <!-- Header Row -->
            <div class="flex items-start gap-4 mb-4">
              <img :src="`/images/built_for_every_team/${card.icon}`" :alt="card.label" class="w-11 h-11 object-contain flex-shrink-0" loading="lazy" />
              <div>
                <span 
                  class="text-[10px] font-inter font-normal tracking-wider block uppercase mb-0.5"
                  :class="card.isDark ? 'text-[#EBEBEB]' : 'text-[#1A1A2E]'"
                >
                  {{ card.label }}
                </span>
                <h3 
                  class="text-[18px] font-normal leading-snug"
                  :class="card.isDark ? 'text-[#FFFFFF]' : 'text-slate-900'"
                >
                  {{ card.title }}
                </h3>
              </div>
            </div>
            
            <!-- Description -->
            <p 
              class="text-[13px] leading-relaxed mb-5 font-normal"
              :class="card.isDark ? 'text-[#EBEBEB]' : 'text-[#868585]'"
            >
              {{ card.desc }}
            </p>
          </div>

          <!-- Checklist -->
          <ul class="space-y-2.5">
            <li 
              v-for="bullet in card.bullets" 
              :key="bullet" 
              class="flex items-start gap-3 text-[13px] font-normal"
              :class="card.isDark ? 'text-[#EBEBEB]' : 'text-[#868585]'"
            >
              <img 
                src="/images/built_for_every_team/bullet_check.png" 
                alt="Check" 
                class="w-[18px] h-[18px] flex-shrink-0 mt-0.5 object-contain" 
                :class="{ 'brightness-0 invert': card.isDark }"
                loading="lazy" 
              />
              <span>{{ bullet }}</span>
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
    title: 'Ship docs as fast as you ship code',
    label: 'OPEN SOURCE TEAMS',
    desc: 'Democratize contributions with micro-tasks, voice input, and mentorship matching. Keep your community engaged with gamification that makes documentation feel like progress, not chores.',
    icon: 'open_source_icon.png',
    isDark: false,
    bullets: [
      '78% less burden on maintainers',
      'Non-technical contributors via micro-tasks',
      'Gamified streaks keep contributors returning'
    ]
  },
  {
    title: 'Onboard developers 2.3x faster',
    label: 'ENGINEERING ENABLEMENT',
    desc: 'Connect your CI/CD pipeline to TechniDox and auto-generate docs on every merge. Quality gates catch regressions before they reach production. Developers self-serve answers instead of interrupting colleagues.',
    icon: 'engineering_enablement_icon.png',
    isDark: false,
    bullets: [
      'CI/CD quality gates prevent doc regressions',
      'Auto-generated docs on every merge',
      '34% fewer "how do I..." interruptions'
    ]
  },
  {
    title: 'Documentation that scales with your APIs',
    label: 'PLATFORM TEAMS',
    desc: 'Generate API reference docs, SDK guides, and integration playbooks automatically from your codebase. Keep them in sync with confidence scoring that flags drift before your customers notice.',
    icon: 'platform_teams_icon.png',
    isDark: false,
    bullets: [
      'Auto-synced API reference on every deploy',
      'Multi-format export: OpenAPI, MDX, HTML',
      'Confidence alerts flag doc drift in real time'
    ]
  },
  {
    title: 'Documentation your auditors will approve',
    label: 'ENTERPRISE DOCUMENTATION',
    desc: 'Meet ISO, SOC2, and internal compliance requirements with automated audit trails, version control, and executive dashboards. Show documentation ROI to the C-suite with numbers that matter.',
    icon: 'enterprise_docs_icon.png',
    isDark: true,
    bullets: [
      'ISO 27001 & SOC2 compliance reporting',
      'Full audit trail for every doc change',
      'Executive ROI dashboards out of the box'
    ]
  }
]
</script>
