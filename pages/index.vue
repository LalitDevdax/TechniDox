<template>
  <div class="relative overflow-x-hidden">
    <!-- Simulated loading screen for interactive Lottie visual (fades out on mount) -->
    <div 
      class="fixed inset-0 flex flex-col items-center justify-center bg-white z-[9999] transition-opacity duration-300 ease-out"
      :class="{ 'opacity-0 pointer-events-none': mounted }"
    >
      <lottie-player
        src="/images/lottie/loader.json"
        background="transparent"
        speed="1.2"
        style="width: 200px; height: 200px;"
        loop
        autoplay
      ></lottie-player>
    </div>

    <!-- Main page content (Rendered immediately for SEO and search bots) -->
    <main class="min-h-screen">
      <Header />
      <Hero />
      <AINativeSection />
      <EnterpriseGradeSection />
      <PlansSection />
      <BuiltForEveryTeamSection />
      <CommunityDrivenSection />
      <CTASection />
      <Footer />
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const mounted = ref(false)

onMounted(() => {
  const timer = setTimeout(() => {
    mounted.value = true
  }, 250) // Short timeout for snappy page transitions
})
</script>
