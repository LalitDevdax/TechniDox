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
      title: 'TechniDox',
      meta: [
        { name: 'description', content: 'Documentation that builds itself, improves itself, and proves its value. TechniDox parses your codebase to generate and maintain beautiful, synchronized developer documentation automatically.' },
        { name: 'keywords', content: 'developer documentation, API reference, AI code-gen, swagger generator, code comments, repository sync, enterprise docs, markdown generator' },
        { property: 'og:title', content: 'TechniDox — AI-Native Developer Documentation Platform' },
        { property: 'og:description', content: 'Documentation that builds itself, improves itself, and proves its value.' },
        { property: 'og:type', content: 'website' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Sora:wght@100..800&family=Inter:wght@100..900&display=swap' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico?v=3' },
        { rel: 'apple-touch-icon', href: '/apple-icon.png?v=3' }
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
