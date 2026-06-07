<template>
  <div class="font-sans antialiased">
    <slot />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Lenis from 'lenis'

onMounted(() => {
  // Initialize Lenis for smooth scrolling
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    autoRaf: true,
  })
})
</script>
