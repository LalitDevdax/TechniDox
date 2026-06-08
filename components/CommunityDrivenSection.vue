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
          
          <!-- Item 1: Gamified Contributions -->
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-2xl bg-[#EEECFC] flex items-center justify-center flex-shrink-0 mt-0.5">
              <img 
                src="/images/community_driven/gamified_icon.png" 
                alt="Gamified Contributions" 
                class="w-6 h-6 object-contain" 
                loading="lazy"
              />
            </div>
            <div>
              <h3 class="text-[17px] font-normal text-slate-900 mb-1">
                Gamified Contributions
              </h3>
              <p class="text-[13px] text-slate-500 leading-relaxed font-normal">
                Streak tracking, impact badges, and achievement systems that reward quality contributions and retain community members.
              </p>
            </div>
          </div>

          <!-- Item 2: Micro-Contribution Architecture -->
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-2xl bg-[#FFF5E5] flex items-center justify-center flex-shrink-0 mt-0.5">
              <img 
                src="/images/community_driven/micro_tasks_icon.png" 
                alt="Micro-Contribution Architecture" 
                class="w-6 h-6 object-contain" 
                loading="lazy"
              />
            </div>
            <div>
              <h3 class="text-[17px] font-normal text-slate-900 mb-1">
                Micro-Contribution Architecture
              </h3>
              <p class="text-[13px] text-slate-500 leading-relaxed font-normal">
                Complex tasks broken into 5-10 minute contributions, making open source accessible to everyone regardless of time or expertise.
              </p>
            </div>
          </div>

          <!-- Item 3: Mentorship Matching -->
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-2xl bg-[#E6F9EC] flex items-center justify-center flex-shrink-0 mt-0.5">
              <img 
                src="/images/community_driven/mentorship_icon.png" 
                alt="Mentorship Matching" 
                class="w-6 h-6 object-contain" 
                loading="lazy"
              />
            </div>
            <div>
              <h3 class="text-[17px] font-normal text-slate-900 mb-1">
                Mentorship Matching
              </h3>
              <p class="text-[13px] text-slate-500 leading-relaxed font-normal">
                AI-powered pairing of experienced contributors with newcomers, fostering knowledge transfer and building stronger communities.
              </p>
            </div>
          </div>

          <!-- Item 4: Peer Validation Network -->
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-2xl bg-[#EEECFC] flex items-center justify-center flex-shrink-0 mt-0.5">
              <img 
                src="/images/community_driven/peer_validation_icon.png" 
                alt="Peer Validation Network" 
                class="w-6 h-6 object-contain" 
                loading="lazy"
              />
            </div>
            <div>
              <h3 class="text-[17px] font-normal text-slate-900 mb-1">
                Peer Validation Network
              </h3>
              <p class="text-[13px] text-slate-500 leading-relaxed font-normal">
                Accept, edit, and reject workflows that improve AI models over time through community-driven quality signals.
              </p>
            </div>
          </div>

        </div>

        <!-- Right Column: Mock UI Container -->
        <div class="border border-[#868585] rounded-xl sm:rounded-2xl bg-white p-4 sm:p-6 lg:p-8 shadow-[0_0_20px_10px_rgba(0,0,0,0.05)]">
          <div class="space-y-4">
            
            <!-- Step 1 -->
            <div class="p-4 border border-[#AEADAD] bg-[#F5F4F4] rounded-lg flex items-center justify-between gap-4">
              <div class="flex items-center gap-3">
                <div class="w-7 h-7 rounded-full bg-[#EEECFC] flex items-center justify-center text-xs font-bold text-brand-primary flex-shrink-0">
                  1
                </div>
                <div>
                  <div class="font-sans text-sm font-semibold leading-snug text-[#1A1A2E]">
                    AI generates documentation
                  </div>
                  <div class="font-inter text-xs font-normal text-[#868585] mt-0.5">
                    From codebase analysis
                  </div>
                </div>
              </div>
              <img 
                src="/images/community_driven/validated_check_icon.png" 
                alt="Validated" 
                class="w-5 h-5 flex-shrink-0" 
                loading="lazy"
              />
            </div>

            <!-- Step 2 -->
            <div class="p-4 border border-[#AEADAD] bg-[#F5F4F4] rounded-lg flex items-center justify-between gap-4">
              <div class="flex items-center gap-3">
                <div class="w-7 h-7 rounded-full bg-[#FFF5E5] flex items-center justify-center text-xs font-bold text-brand-accent flex-shrink-0">
                  2
                </div>
                <div>
                  <div class="font-sans text-sm font-semibold leading-snug text-[#1A1A2E]">
                    Quality scoring & routing
                  </div>
                  <div class="font-inter text-xs font-normal text-[#868585] mt-0.5">
                    Confidence: 72% - Review needed
                  </div>
                </div>
              </div>
              <span class="px-2 py-0.5 text-[10px] font-semibold text-brand-accent bg-[#FFF5E5] border border-brand-accent/20 rounded-[4px] select-none font-inter">
                Review
              </span>
            </div>

            <!-- Step 3 -->
            <div class="p-4 border border-[#AEADAD] bg-[#F5F4F4] rounded-lg flex items-center justify-between gap-4">
              <div class="flex items-center gap-3">
                <div class="w-7 h-7 rounded-full bg-[#E6F9EC] flex items-center justify-center text-xs font-bold text-brand-success flex-shrink-0">
                  3
                </div>
                <div>
                  <div class="font-sans text-sm font-semibold leading-snug text-[#1A1A2E]">
                    Community review
                  </div>
                  <div class="font-inter text-xs font-normal text-[#868585] mt-0.5">
                    3 contributors validated
                  </div>
                </div>
              </div>
              <img 
                src="/images/community_driven/validated_check_icon.png" 
                alt="Validated" 
                class="w-5 h-5 flex-shrink-0" 
                loading="lazy"
              />
            </div>

            <!-- Step 4 -->
            <div class="p-4 border border-[#AEADAD] bg-[#F5F4F4] rounded-lg flex items-center justify-between gap-4">
              <div class="flex items-center gap-3">
                <div class="w-7 h-7 rounded-full bg-[#24BD2E] flex items-center justify-center flex-shrink-0 text-white">
                  <svg 
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
                </div>
                <div>
                  <div class="font-sans text-sm font-semibold leading-snug text-[#1A1A2E]">
                    Published & improving
                  </div>
                  <div class="font-inter text-xs font-normal text-[#868585] mt-0.5">
                    AI learns from feedback
                  </div>
                </div>
              </div>
              <img 
                src="/images/community_driven/completion_star_icon.png" 
                alt="Star rating" 
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
// No extra setup required
</script>
