<template>
  <InfoPageLayout
    category="Legal"
    title="Cookie Policy"
    subtitle="Last updated: June 06, 2026. This policy explains how and why we use cookies on our developer platform and documentation portal."
    :useContainerCard="true"
  >
    <div class="space-y-8 text-slate-600 text-sm leading-relaxed font-medium font-inter">
      
      <section class="space-y-3">
        <h2 class="text-base font-bold text-slate-900 uppercase tracking-wide">1. What Are Cookies?</h2>
        <p class="text-slate-500">
          Cookies are small text files stored on your browser or device when you visit a website. They help the site recognize you and improve your browsing experience.
        </p>
      </section>

      <section class="space-y-3">
        <h2 class="text-base font-bold text-slate-900 uppercase tracking-wide">2. How We Use Cookies</h2>
        <p class="text-slate-500">
          TechniDox uses cookies for a limited number of essential purposes:
        </p>
        <ul class="list-disc pl-5 space-y-1.5 text-slate-500">
          <li>
            <strong>Authentication & Session:</strong> We use authentication cookies to keep you securely signed in to your TechniDox dashboard and to authorize access to your imported repositories.
          </li>
          <li>
            <strong>Developer Preferences:</strong> Storing layouts, theme styles (light/dark mode), and active code snippet language selectors.
          </li>
          <li>
            <strong>Performance Telemetry:</strong> Anonymized analytical cookies to trace rendering latencies and optimize documentation page speed.
          </li>
        </ul>
      </section>

      <section class="space-y-3">
        <h2 class="text-base font-bold text-slate-900 uppercase tracking-wide">3. Managing Cookie Settings</h2>
        <p class="text-slate-500">
          You can choose to disable cookies in your browser preferences. However, please note that disabling essential session cookies will prevent you from accessing private documentation portals and managing your organization settings.
        </p>
      </section>

    </div>
  </InfoPageLayout>
</template>

<script setup>
</script>
