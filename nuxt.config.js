import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2026-06-06',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ['lottie-player'].includes(tag)
    }
  },
  vite: {
    plugins: [
      tailwindcss()
    ]
  },
  app: {
    head: {
      title: 'TechniDox — AI-Native Developer Documentation Platform',
      meta: [
        { name: 'description', content: 'Documentation that builds itself, improves itself, and proves its value. TechniDox parses your codebase to generate and maintain beautiful, synchronized developer documentation automatically.' },
        { name: 'keywords', content: 'developer documentation, API reference, AI code-gen, swagger generator, code comments, repository sync, enterprise docs, markdown generator' },
        { property: 'og:title', content: 'TechniDox — AI-Native Developer Documentation Platform' },
        { property: 'og:description', content: 'Documentation that builds itself, improves itself, and proves its value.' },
        { property: 'og:type', content: 'website' }
      ],
      script: [
        {
          src: 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js',
          defer: true
        }
      ]
    }
  }
})
