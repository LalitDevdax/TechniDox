<template>
  <section
    id="analytics"
    class="py-14 sm:py-20 px-4 lg:px-8 bg-white"
  >
    <div class="max-w-7xl mx-auto w-full">
      
      <!-- ================= HEADER SECTION ================= -->
      <div class="text-center mb-10 sm:mb-12 space-y-2 sm:space-y-3">
        <p class="text-xs font-bold tracking-widest uppercase text-brand-accent">
          ROI & Analytics
        </p>
        <h2 class="text-2xl sm:text-[40px] leading-tight font-bold text-brand-primary px-2 sm:px-0">
          Enterprise-Grade ROI And Analytics
        </h2>
        <p class="text-[13px] sm:text-[15px] font-normal max-w-2xl mx-auto leading-relaxed text-brand-grey px-2 sm:px-0">
          The first documentation platform with measurable business impact. Track time saved,
          productivity gains, and documentation health in real-time.
        </p>
      </div>

      <!-- ================= EXECUTIVE ROI DASHBOARD CONTAINER ================= -->
      <div 
        class="relative rounded-[24px] p-6 lg:p-8 overflow-hidden shadow-2xl border border-slate-900/10 dashboard-card-bg"
        style="background-image: linear-gradient(135deg, rgba(24, 30, 84, 0.75) 0%, rgba(11, 12, 36, 0.94) 100%), url('/images/dashboard/executive_dashboard_bg.png'); background-size: cover; background-position: center;"
      >
        <!-- Top Row Header inside Dashboard -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h3 class="text-lg font-normal text-white tracking-tight">Executive ROI Dashboard</h3>
            <p class="text-xs text-slate-400">Real-time documentation impact metrics</p>
          </div>
          <!-- Live Data Indicator Badge -->
          <div class="self-start sm:self-auto flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span class="text-[11px] font-bold text-emerald-400 tracking-wide uppercase">Live Data</span>
          </div>
        </div>

        <!-- ================= MAIN STATS ROW (TOP 4 CARDS) ================= -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          
          <!-- Card 1: Time Saved -->
          <div class="rounded-xl p-4 border border-white/[0.08] flex flex-col justify-between min-h-[115px] dashboard-item-bg">
            <div class="flex items-center gap-2">
              <img src="/images/enterprise_grade/time_saved_icon.png" alt="Time Saved" class="w-4 h-4 object-contain flex-shrink-0" loading="lazy" />
              <span class="text-xs font-medium tracking-wide text-[#AEADAD]">Time Saved</span>
            </div>
            <div class="mt-3">
              <div class="text-3xl font-medium tracking-tight text-white">847h</div>
              <div class="flex items-center gap-1 text-[11px] font-semibold mt-0.5 text-[#66DB3A]">
                <span>↑ 23% this month</span>
              </div>
            </div>
          </div>

          <!-- Card 2: Productivity Gain -->
          <div class="rounded-xl p-4 border border-white/[0.08] flex flex-col justify-between min-h-[115px] dashboard-item-bg">
            <div class="flex items-center gap-2">
              <img src="/images/enterprise_grade/productivity_gain_icon.png" alt="Productivity Gain" class="w-4 h-4 object-contain flex-shrink-0" loading="lazy" />
              <span class="text-xs font-medium tracking-wide text-[#AEADAD]">Productivity Gain</span>
            </div>
            <div class="mt-3">
              <div class="text-3xl font-medium tracking-tight text-white">+34%</div>
              <div class="flex items-center gap-1 text-[11px] font-semibold mt-0.5 text-[#66DB3A]">
                <span>↑ 12% vs baseline</span>
              </div>
            </div>
          </div>

          <!-- Card 3: Support Tickets -->
          <div class="rounded-xl p-4 border border-white/[0.08] flex flex-col justify-between min-h-[115px] dashboard-item-bg">
            <div class="flex items-center gap-2">
              <img src="/images/enterprise_grade/support_tickets_icon.png" alt="Support Tickets" class="w-4 h-4 object-contain flex-shrink-0" loading="lazy" />
              <span class="text-xs font-medium tracking-wide text-[#AEADAD]">Support Tickets</span>
            </div>
            <div class="mt-3">
              <div class="text-3xl font-medium tracking-tight text-white">-42%</div>
              <div class="flex items-center gap-1 text-[11px] font-semibold mt-0.5 text-[#66DB3A]">
                <span>↓ 156 tickets/month</span>
              </div>
            </div>
          </div>

          <!-- Card 4: Onboarding Speed -->
          <div class="rounded-xl p-4 border border-white/[0.08] flex flex-col justify-between min-h-[115px] dashboard-item-bg">
            <div class="flex items-center gap-2">
              <img src="/images/enterprise_grade/onboarding_speed_icon.png" alt="Onboarding Speed" class="w-4 h-4 object-contain flex-shrink-0" loading="lazy" />
              <span class="text-xs font-medium tracking-wide text-[#AEADAD]">Onboarding Speed</span>
            </div>
            <div class="mt-3">
              <div class="text-[32px] font-medium tracking-tight text-white">3.2d</div>
              <div class="flex items-center gap-1 text-[11px] font-semibold mt-0.5 text-[#66DB3A]">
                <span>↓ 64% faster</span>
              </div>
            </div>
          </div>

        </div>

        <!-- ================= LOWER ADVANCED METRICS ROW (3 CARDS) ================= -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <!-- Card 5: Documentation Health -->
          <div class="rounded-xl p-4 border border-white/[0.08] flex flex-col justify-between min-h-[120px] dashboard-item-bg">
            <div class="flex items-center justify-between w-full">
              <span class="text-xs font-medium tracking-wide text-[#AEADAD]">Documentation Health</span>
              <img src="/images/enterprise_grade/doc_health_icon.png" alt="Documentation Health" class="w-4 h-4 object-contain flex-shrink-0" loading="lazy" />
            </div>
            <div class="mt-3 space-y-2.5">
              <div class="text-3xl font-medium tracking-tight text-white">
                94<span class="text-sm font-medium text-[#AEADAD]">/100</span>
              </div>
              <div class="w-full h-1.5 rounded-full bg-white/10 overflow-hidden relative">
                <div class="absolute top-0 left-0 h-full w-[80%] rounded-full bg-gradient-to-r from-[#66DB3A] to-brand-primary" />
              </div>
            </div>
          </div>

          <!-- Card 6: Support Tickets (Compliance) -->
          <div class="rounded-xl p-4 border border-white/[0.08] flex flex-col justify-between min-h-[120px] dashboard-item-bg">
            <div class="flex items-center justify-between w-full">
              <span class="text-xs font-medium tracking-wide text-[#AEADAD]">Support Tickets</span>
              <img src="/images/enterprise_grade/support_tickets_icon.png" alt="Support Tickets" class="w-4 h-4 object-contain flex-shrink-0" loading="lazy" />
            </div>
            <div class="mt-2.5">
              <div class="flex items-baseline gap-2">
                <span class="text-3xl font-medium tracking-tight text-white">98%</span>
                <div class="flex flex-col justify-center text-[8px] font-bold leading-none text-[#66DB3A]">
                  <span>ISO/</span>
                  <span>SOC2</span>
                </div>
              </div>
              <div class="flex items-center gap-1.5 text-[11px] font-semibold mt-2 text-[#66DB3A]">
                <CheckCircle2 class="w-3.5 h-3.5 text-[#66DB3A]" />
                <span>Audit ready</span>
              </div>
            </div>
          </div>

          <!-- Card 7: Active Contributors Stack -->
          <div class="rounded-xl p-4 border border-white/[0.08] flex flex-col justify-between min-h-[120px] dashboard-item-bg">
            <div class="flex items-center justify-between w-full">
              <span class="text-xs font-medium tracking-wide text-[#AEADAD]">Active Contributors</span>
              <img src="/images/enterprise_grade/contributors_icon.png" alt="Active Contributors" class="w-4 h-4 object-contain flex-shrink-0" loading="lazy" />
            </div>
            <div class="mt-3 space-y-2.5">
              <div class="text-[32px] font-medium tracking-tight leading-none text-white">143</div>
              
              <!-- Custom Avatars image from user upload -->
              <div class="pt-0.5">
                <img 
                  src="/images/dashboard/contributor_avatars_row.png" 
                  alt="Contributors Avatars" 
                  class="h-6 w-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { CheckCircle2 } from 'lucide-vue-next'
</script>
