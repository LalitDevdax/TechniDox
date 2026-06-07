<template>
  <InfoPageLayout
    category="Legal"
    title="Privacy Policy"
    subtitle="Last updated: June 06, 2026. We are committed to transparency and protecting your codebase and documentation data."
    :useContainerCard="true"
  >
    <div class="space-y-8 text-slate-600 text-sm leading-relaxed font-medium font-inter">
      
      <section class="space-y-3">
        <h2 class="text-base font-bold text-slate-900 uppercase tracking-wide">1. Information We Process</h2>
        <p class="text-slate-500">
          TechniDox operates under a security-first design model. When you link your repository or upload codebase files:
        </p>
        <ul class="list-disc pl-5 space-y-1.5 text-slate-500">
          <li>
            <strong>Read-only Access:</strong> We request read-only permissions to analyze your route structures, comments, and schemas. We never write to or modify your main branch.
          </li>
          <li>
            <strong>In-memory Parsing:</strong> AST parsing and code analysis are done securely in-memory. We do not copy, store, or train our AI models on your proprietary source code files.
          </li>
        </ul>
      </section>

      <section class="space-y-3">
        <h2 class="text-base font-bold text-slate-900 uppercase tracking-wide">2. Enterprise Documentation Hosting</h2>
        <p class="text-slate-500">
          If you host your developer portal with TechniDox:
        </p>
        <ul class="list-disc pl-5 space-y-1.5 text-slate-500">
          <li>
            Generated markdown documents, OpenAPI specifications, and API playground keys are encrypted in transit and at rest using AES-256 keys.
          </li>
          <li>
            Access to private developer portals is restricted via JWT or integrates directly with your enterprise SSO configurations.
          </li>
        </ul>
      </section>

      <section class="space-y-3">
        <h2 class="text-base font-bold text-slate-900 uppercase tracking-wide">3. Analytics and Cookies</h2>
        <p class="text-slate-500">
          We collect anonymized performance telemetry to check for sync success rates, UI crashes, and API request performance. This data does not contain any proprietary code contents or credentials.
        </p>
      </section>

      <section class="space-y-3">
        <h2 class="text-base font-bold text-slate-900 uppercase tracking-wide">4. Contact Information</h2>
        <p class="text-slate-500">
          For privacy inquiries or to request data deletion, please contact hello@technidox.com.
        </p>
      </section>

    </div>
  </InfoPageLayout>
</template>

<script setup>
</script>
