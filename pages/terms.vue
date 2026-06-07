<template>
  <InfoPageLayout
    category="Legal"
    title="Terms of Service"
    subtitle="Last updated: June 06, 2026. Please read these terms carefully before accessing or using the TechniDox platform."
    :useContainerCard="true"
  >
    <div class="space-y-8 text-slate-600 text-sm leading-relaxed font-medium font-inter">
      
      <section class="space-y-3">
        <h2 class="text-base font-bold text-slate-900 uppercase tracking-wide">1. Acceptance of Terms</h2>
        <p class="text-slate-500">
          By creating an account or using TechniDox, you agree to comply with and be bound by these terms. If you do not agree to these terms, please do not use our services.
        </p>
      </section>

      <section class="space-y-3">
        <h2 class="text-base font-bold text-slate-900 uppercase tracking-wide">2. API Specs & Sync Disclaimer</h2>
        <p class="text-slate-500">
          TechniDox is a developer productivity tool built to parse codebase structures. While we make every effort to maintain correct, functional documentation generation:
        </p>
        <ul class="list-disc pl-5 space-y-1.5 text-slate-500">
          <li>
            We do not guarantee that generated interactive playgrounds or OpenAPI spec schemas will match your production API execution behaviors 100% of the time.
          </li>
          <li>
            TechniDox is not responsible for repository webhooks downtime, sync failures, or deployment delays. Developers must manually verify generated schemas before publishing production endpoints.
          </li>
        </ul>
      </section>

      <section class="space-y-3">
        <h2 class="text-base font-bold text-slate-900 uppercase tracking-wide">3. Fair Use & subscription plans</h2>
        <p class="text-slate-500">
          Free users receive access to limited codebase imports and weekly sync cycles. Pro and Enterprise users access real-time git hooks, Swagger/OpenAPI exports, role access, and SSO integrations. API keys used for bulk traffic overloading or abusive queries may be suspended.
        </p>
      </section>

      <section class="space-y-3">
        <h2 class="text-base font-bold text-slate-900 uppercase tracking-wide">4. Limitation of Liability</h2>
        <p class="text-slate-500">
          TechniDox is provided "as is" without warranties. In no event shall TechniDox or its operators be liable for direct, indirect, or consequential damages resulting from your use of this service.
        </p>
      </section>

    </div>
  </InfoPageLayout>
</template>

<script setup>
</script>
