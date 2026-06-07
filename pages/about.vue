<template>
  <InfoPageLayout
    category="Company"
    title="About TechniDox"
    subtitle="We are on a mission to build documentation that builds itself, improves itself, and proves its value."
    :useContainerCard="false"
  >
    
    <!-- ── Section 1: Our Story (Frosted Glass Card) ── -->
    <section class="bg-white/80 backdrop-blur-md border border-slate-200/80 rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-100/50 space-y-6">
      <h2 class="text-xl md:text-2xl font-extrabold text-brand-primary tracking-tight">Our Story</h2>
      <p class="text-sm leading-relaxed text-slate-500 font-medium">
        TechniDox was founded with a simple observation: writing developer documentation is tedious, and keeping it synchronized with active codebases is nearly impossible. Developers spend hours drafting API reference pages, only for them to go out of date with the next codebase push.
      </p>
      <p class="text-sm leading-relaxed text-slate-500 font-medium">
        Engineering teams waste precious hours manually translating backend changes into Markdown files, leading to out-of-sync API specs and frustrated integration partners. We built TechniDox to serve as an intelligent, automated documentation layer. By parsing your repository structures directly, our platform builds beautiful, interactive references that update automatically on every commit.
      </p>
    </section>

    <!-- ── Section 2: Our Core Values Grid (Rich Grid Cards) ── -->
    <section class="space-y-6">
      <div class="text-center md:text-left space-y-2">
        <h2 class="text-xl md:text-2xl font-extrabold text-brand-primary tracking-tight">Our Core Values</h2>
        <p class="text-xs text-slate-500 font-semibold">The principles driving our technology design.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="flex gap-4 items-start p-6 rounded-3xl bg-white border border-slate-200 shadow-lg shadow-slate-100/40 hover:translate-y-[-2px] transition-all duration-300">
          <div class="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-brand-primary shrink-0 shadow-inner">
            <Heart class="w-6 h-6" />
          </div>
          <div class="space-y-1">
            <h4 class="text-sm font-extrabold text-slate-900">Developer First</h4>
            <p class="text-xs text-slate-500 font-semibold leading-relaxed">
              We build tools that integrate natively into your existing git push pipelines. Minimal friction, zero distraction, and maximum speed.
            </p>
          </div>
        </div>

        <div class="flex gap-4 items-start p-6 rounded-3xl bg-white border border-slate-200 shadow-lg shadow-slate-100/40 hover:translate-y-[-2px] transition-all duration-300">
          <div class="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-brand-accent shrink-0 shadow-inner">
            <ShieldCheck class="w-6 h-6" />
          </div>
          <div class="space-y-1">
            <h4 class="text-sm font-extrabold text-slate-900">Privacy & Security</h4>
            <p class="text-xs text-slate-500 font-semibold leading-relaxed">
              We access code repositories using read-only API permissions. We parse structures in-memory without storing your proprietary source files.
            </p>
          </div>
        </div>

        <div class="flex gap-4 items-start p-6 rounded-3xl bg-white border border-slate-200 shadow-lg shadow-slate-100/40 hover:translate-y-[-2px] transition-all duration-300">
          <div class="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 shadow-inner">
            <Zap class="w-6 h-6" />
          </div>
          <div class="space-y-1">
            <h4 class="text-sm font-extrabold text-slate-900">Continuous Sync</h4>
            <p class="text-xs text-slate-500 font-semibold leading-relaxed">
              Manual updates belong to the past. TechniDox triggers automatic documentation rebuilds on every commit, pull request, or package release.
            </p>
          </div>
        </div>

        <div class="flex gap-4 items-start p-6 rounded-3xl bg-white border border-slate-200 shadow-lg shadow-slate-100/40 hover:translate-y-[-2px] transition-all duration-300">
          <div class="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-brand-primary shrink-0 shadow-inner">
            <Users class="w-6 h-6" />
          </div>
          <div class="space-y-1">
            <h4 class="text-sm font-extrabold text-slate-900">Open Specifications</h4>
            <p class="text-xs text-slate-500 font-semibold leading-relaxed">
              We embrace industry-standard specs like OpenAPI 3.0, Swagger, GraphQL schemas, and markdown outputs for full interoperability.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Section 3: Our Impact statistics (Light Card) ── -->
    <section class="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden">
      <div class="absolute -right-20 -bottom-20 w-80 h-80 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center relative z-10">
        <div class="space-y-2">
          <div class="text-3xl md:text-4xl font-extrabold text-brand-primary font-mono">10M+</div>
          <div class="text-xs text-slate-500 font-bold uppercase tracking-wider">Lines of Code Parsed</div>
        </div>
        <div class="space-y-2 border-t sm:border-t-0 sm:border-x border-slate-200 pt-6 sm:pt-0 sm:px-4">
          <div class="text-3xl md:text-4xl font-extrabold text-brand-accent font-mono">99.8%</div>
          <div class="text-xs text-slate-500 font-bold uppercase tracking-wider">Doc Health Score</div>
        </div>
        <div class="space-y-2 border-t sm:border-t-0 border-slate-200 pt-6 sm:pt-0">
          <div class="text-3xl md:text-4xl font-extrabold text-emerald-600 font-mono">&lt; 3m</div>
          <div class="text-xs text-slate-500 font-bold uppercase tracking-wider">Average Sync Time</div>
        </div>
      </div>
    </section>

  </InfoPageLayout>
</template>

<script setup>
import { Heart, ShieldCheck, Zap, Users } from 'lucide-vue-next'
</script>
