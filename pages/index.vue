<template>
  <div>
    <!-- Simulated loading screen for interactive Lottie visual -->
    <div v-if="!mounted" class="fixed inset-0 flex flex-col items-center justify-center bg-white z-[9999]">
      <lottie-player
        src="/images/lottie/loader.json"
        background="transparent"
        speed="1.2"
        style="width: 200px; height: 200px;"
        loop
        autoplay
      ></lottie-player>
    </div>

    <!-- Main page content -->
    <main v-else class="min-h-screen">
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
  }, 1000)
})
</script>
