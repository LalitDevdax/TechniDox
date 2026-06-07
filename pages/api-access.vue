<template>
  <InfoPageLayout
    category="Product"
    title="Developer API & Integrations"
    subtitle="Integrate TechniDox codebase parsing and documentation sync pipelines directly into your own CI/CD webhooks or internal developer hubs."
    :useContainerCard="false"
  >
    
    <!-- ── Section 1: Introduction ── -->
    <section class="bg-white/80 backdrop-blur-md border border-slate-200/80 rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-100/50 space-y-6">
      <h2 class="text-xl md:text-2xl font-extrabold text-brand-primary tracking-tight">Documentation as an API</h2>
      <p class="text-sm leading-relaxed text-slate-500 font-medium">
        TechniDox offers developers REST API endpoints to run codebase analysis and export OpenAPI/Swagger specs. If you run a custom platform or wish to build unique dev portals, you can query our parsing pipelines directly to receive structured Markdown, schemas, or playground files.
      </p>
    </section>

    <!-- ── Section 2: Code Example Terminal Box ── -->
    <section class="space-y-4 font-inter">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <Terminal class="w-5 h-5 text-brand-primary" />
          <h3 class="text-sm font-bold text-slate-900 uppercase tracking-wider">API Request Example</h3>
        </div>
        <button
          @click="handleCopyCode"
          class="flex items-center gap-1 text-[10px] bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-[4px] px-2.5 py-1 text-slate-600 font-bold transition-all"
        >
          <template v-if="copied">
            <Check class="w-3 h-3 text-emerald-500" /> Copied!
          </template>
          <template v-else>
            <Copy class="w-3 h-3" /> Copy Snippet
          </template>
        </button>
      </div>
      
      <div class="bg-slate-50 border border-slate-200 text-slate-700 rounded-3xl p-6 shadow-sm text-xs font-mono text-left overflow-x-auto">
        <div class="text-brand-primary font-bold mb-2"># POST /v1/docs/generate</div>
        <div class="text-slate-800">curl -X POST https://api.technidox.com/v1/docs/generate \</div>
        <div class="pl-4 text-slate-800">-H "Authorization: Bearer YOUR_API_KEY" \</div>
        <div class="pl-4 text-slate-800">-F "repo_url=https://github.com/org/repo" \</div>
        <div class="pl-4 text-slate-800">-F "framework=express" \</div>
        <div class="pl-4 text-slate-800">-F "include_private=false" \</div>
        <div class="pl-4 text-slate-800">-F "generate_playground=true" \</div>
        <div class="pl-4 text-slate-800">-F "format=markdown"</div>
        
        <div class="text-brand-primary font-bold mt-5 mb-2"># RESPONSE (200 OK)</div>
        <div class="text-slate-800">{</div>
        <div class="pl-4 text-slate-800">"success": true,</div>
        <div class="pl-4 text-slate-800">"health_score": 98.5,</div>
        <div class="pl-4 text-slate-500">"endpoints_count": 42, // Compliant!</div>
        <div class="pl-4 text-slate-800">"playground_url": "https://docs.technidox.com/playgrounds/abc123_express",</div>
        <div class="pl-4 text-slate-800">"format": "markdown"</div>
        <div class="text-slate-800">}</div>
      </div>
    </section>

    <!-- ── Section 3: Integration Benefits Grid ── -->
    <section class="space-y-6">
      <div class="text-center md:text-left space-y-2">
        <h2 class="text-xl md:text-2xl font-extrabold text-brand-primary tracking-tight">API Features</h2>
        <p class="text-xs text-slate-500 font-semibold">Integrate documentation workflows in minutes.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="flex gap-4 p-6 rounded-3xl bg-white border border-slate-200 shadow-lg shadow-slate-100/40 hover:translate-y-[-2px] transition-all duration-300">
          <div class="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-brand-primary shrink-0 shadow-inner">
            <Key class="w-6 h-6" />
          </div>
          <div class="space-y-1">
            <h4 class="text-sm font-extrabold text-slate-900">Simple Authentication</h4>
            <p class="text-xs text-slate-500 font-semibold leading-relaxed">
              Generate secure API keys directly from your developer settings panel. Use standard authorization headers to authenticate request cycles.
            </p>
          </div>
        </div>

        <div class="flex gap-4 p-6 rounded-3xl bg-white border border-slate-200 shadow-lg shadow-slate-100/40 hover:translate-y-[-2px] transition-all duration-300">
          <div class="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-brand-accent shrink-0 shadow-inner">
            <Code class="w-6 h-6" />
          </div>
          <div class="space-y-1">
            <h4 class="text-sm font-extrabold text-slate-900">AST codebase Parser</h4>
            <p class="text-xs text-slate-500 font-semibold leading-relaxed">
              Send a repository URL, and our parser maps endpoints, parameter requirements, interfaces, and methods returning clean, structured metadata.
            </p>
          </div>
        </div>

        <div class="flex gap-4 p-6 rounded-3xl bg-white border border-slate-200 shadow-lg shadow-slate-100/40 hover:translate-y-[-2px] transition-all duration-300">
          <div class="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-brand-success shrink-0 shadow-inner">
            <Cpu class="w-6 h-6" />
          </div>
          <div class="space-y-1">
            <h4 class="text-sm font-extrabold text-slate-900">Low-Latency Rendering</h4>
            <p class="text-xs text-slate-500 font-semibold leading-relaxed">
              Our documentation renderer compiles markdown schemas and plays references in milliseconds, keeping your user references snappy.
            </p>
          </div>
        </div>

        <div class="flex gap-4 p-6 rounded-3xl bg-white border border-slate-200 shadow-lg shadow-slate-100/40 hover:translate-y-[-2px] transition-all duration-300">
          <div class="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-brand-primary shrink-0 shadow-inner">
            <ShieldCheck class="w-6 h-6" />
          </div>
          <div class="space-y-1">
            <h4 class="text-sm font-extrabold text-slate-900">99.8% Score Validation</h4>
            <p class="text-xs text-slate-500 font-semibold leading-relaxed">
              Verifies description coverage and checks if code updates break documentation parameters, lowering API integration friction down to 0.1%.
            </p>
          </div>
        </div>
      </div>
    </section>

  </InfoPageLayout>
</template>

<script setup>
import { Code, Terminal, Key, ShieldCheck, Cpu, Copy, Check } from 'lucide-vue-next'

const { isCopied: copied, copy } = useCopyToClipboard()

const handleCopyCode = () => {
  copy(`curl -X POST https://api.technidox.com/v1/docs/generate \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -F "repo_url=https://github.com/org/repo" \\
  -F "framework=express" \\
  -F "include_private=false" \\
  -F "generate_playground=true" \\
  -F "format=markdown"`)
}
</script>
