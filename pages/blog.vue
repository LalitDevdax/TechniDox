<template>
  <InfoPageLayout
    category="Resources"
    title="The TechniDox Blog"
    subtitle="Read about API design, documentation best practices, OpenAPI standards, and developer experience."
  >
    <div class="space-y-8">
      
      <!-- Featured Post Card -->
      <div class="relative group bg-white/80 backdrop-blur-md border border-brand-primary/20 rounded-2xl overflow-hidden shadow-lg flex flex-col md:flex-row min-h-[250px] transition-all hover:scale-[1.01] hover:border-brand-primary/40 font-inter">
        <!-- Subtle gradient element -->
        <div class="absolute -inset-10 bg-gradient-to-tr from-brand-primary/5 to-brand-accent/5 rounded-3xl opacity-20 blur-xl pointer-events-none" />
        
        <div class="p-6 md:p-8 flex flex-col justify-between flex-grow relative z-10 space-y-4">
          <span class="inline-flex items-center px-2.5 py-0.5 rounded-full bg-brand-primary/8 text-brand-primary text-[9px] font-bold uppercase tracking-wider w-fit border border-brand-primary/15">
            Featured Post
          </span>
          <div class="space-y-2">
            <h3 class="text-xl md:text-2xl font-bold tracking-tight text-slate-900 group-hover:text-brand-primary transition-colors">
              API Drift: How to Identify and Prevent Out-of-Sync Documentation
            </h3>
            <p class="text-xs text-slate-500 font-medium leading-relaxed max-w-2xl">
              Learn how parameter shifts and route changes between code updates introduce developer friction, and how automated AST parsers keep spec guides synchronized.
            </p>
          </div>
          
          <div class="flex items-center justify-between pt-4 border-t border-slate-100 text-[10px] text-slate-400 font-semibold">
            <div class="flex items-center gap-4">
              <span class="flex items-center gap-1"><Calendar class="w-3.5 h-3.5" /> June 02, 2026</span>
              <span class="flex items-center gap-1"><User class="w-3.5 h-3.5" /> Rahul Varma</span>
            </div>
            <button @click="alert('Redirecting to full blog post...')" class="flex items-center gap-1 font-bold text-brand-primary hover:text-brand-primary-dark">
              Read Article <ArrowRight class="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      <!-- Blog Posts Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 font-inter">
        <div
          v-for="(post, idx) in blogPosts"
          :key="idx"
          class="bg-slate-50 hover:bg-slate-100/70 border border-slate-200/50 rounded-2xl p-6 flex flex-col justify-between space-y-4 transition-all hover:translate-y-[-2px] hover:shadow-md"
        >
          <div class="space-y-3">
            <span class="text-[10px] font-extrabold text-brand-primary uppercase tracking-wide">
              {{ post.category }}
            </span>
            <h4 class="text-base font-bold text-slate-900 leading-snug">
              {{ post.title }}
            </h4>
            <p class="text-xs text-slate-500 font-medium leading-relaxed">
              {{ post.excerpt }}
            </p>
          </div>

          <div class="flex items-center justify-between pt-3 border-t border-slate-200/50 text-[10px] text-slate-400 font-bold">
            <span>{{ post.date }} · {{ post.readTime }}</span>
            <button @click="alert('Redirecting to full blog post...')" class="text-brand-primary hover:text-brand-primary-dark flex items-center gap-0.5">
              Read <ArrowRight class="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

    </div>
  </InfoPageLayout>
</template>

<script setup>
import { Calendar, User, ArrowRight } from 'lucide-vue-next'

const alert = (msg) => {
  window.alert(msg)
}

const blogPosts = [
  {
    title: "OpenAPI v3.1 vs v3.0: What Developers Need to Know",
    excerpt: "Explore key differences in JSON Schema compatibility, parameter descriptions, and webhook support between OpenAPI versions.",
    date: "May 28, 2026",
    author: "Rahul Varma",
    category: "Standards",
    readTime: "4 min read",
  },
  {
    title: "How NestJS Decorators Can Automate Reference Page Generation",
    excerpt: "Leverage NestJS controllers and Swagger annotations to generate robust interactive reference playbooks automatically.",
    date: "May 22, 2026",
    author: "Sneha Nair",
    category: "Guides",
    readTime: "5 min read",
  },
  {
    title: "The Cost of Poor Developer Documentation: Measuring Friction & ROI",
    excerpt: "An inside look at developer onboarding times, integration failures, and how beautiful reference docs drive enterprise software sales.",
    date: "May 15, 2026",
    author: "Dr. Anirudh Sen",
    category: "Developer UX",
    readTime: "7 min read",
  },
  {
    title: "Markdown vs MDX: Building Interactive Playgrounds for APIs",
    excerpt: "Discover the power of embedding live React/Vue components inside documentation markup sheets for premium playgrounds.",
    date: "May 08, 2026",
    author: "Rahul Varma",
    category: "Architecture",
    readTime: "3 min read",
  },
]
</script>
