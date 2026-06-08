<template>
  <footer
    class="pt-12 sm:pt-16 pb-8 bg-[#EAE9F5]"
  >
    <div class="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
        
        <!-- Brand / Left Column -->
        <div class="md:col-span-4 space-y-4">
          <a href="#" @click.prevent class="flex items-center flex-shrink-0">
            <img src="/images/logos/technidox_logo.png" alt="TechniDox" class="h-8 w-auto" loading="lazy" />
          </a>
          <p 
            class="text-[13px] leading-relaxed max-w-xs text-slate-800 font-inter font-normal"
          >
            AI-native documentation infrastructure for engineering teams that demand quality, speed, and measurable impact.
          </p>
          
          <!-- Social Icons (Solid Brand SVGs) -->
          <div class="flex items-center gap-4 pt-2">
            <a href="#" class="hover:opacity-85 transition-opacity" aria-label="LinkedIn">
              <!-- LinkedIn Solid -->
              <svg class="w-5 h-5 text-brand-primary" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" class="hover:opacity-85 transition-opacity" aria-label="Facebook">
              <!-- Facebook Solid -->
              <svg class="w-5 h-5 text-brand-primary" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"/>
              </svg>
            </a>
            <a href="#" class="hover:opacity-85 transition-opacity" aria-label="Instagram">
              <!-- Instagram Solid -->
              <svg class="w-5 h-5 text-brand-primary" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204 0-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Right Columns: Company, Resources, Legal -->
        <div
          class="md:col-span-7 md:col-start-6 lg:col-span-6 lg:col-start-7 grid grid-cols-1 sm:grid-cols-3 gap-8 font-sora"
        >
          
          <!-- Company -->
          <div>
            <h4 class="text-sm font-semibold text-slate-800 mb-4 tracking-tight">
              Company
            </h4>
            <ul class="space-y-2.5 font-inter">
              <li><a href="#" @click.prevent class="text-[13px] text-slate-500 hover:text-brand-primary transition-colors">About Us</a></li>
              <li><a href="#" @click.prevent class="text-[13px] text-slate-500 hover:text-brand-primary transition-colors">Careers</a></li>
              <li><a href="#" @click.prevent class="text-[13px] text-slate-500 hover:text-brand-primary transition-colors">Blog</a></li>
              <li><a href="#" @click.prevent class="text-[13px] text-slate-500 hover:text-brand-primary transition-colors">Partnerships</a></li>
            </ul>
          </div>

          <!-- Resources -->
          <div>
            <h4 class="text-sm font-semibold text-slate-800 mb-4 tracking-tight">
              Resources
            </h4>
            <ul class="space-y-2.5 font-inter">
              <li><a href="#" @click.prevent class="text-[13px] text-slate-500 hover:text-brand-primary transition-colors">Help Center</a></li>
              <li><a href="#" @click.prevent class="text-[13px] text-slate-500 hover:text-brand-primary transition-colors">Fees & Limits</a></li>
              <li><a href="#" @click.prevent class="text-[13px] text-slate-500 hover:text-brand-primary transition-colors">System Status</a></li>
            </ul>
          </div>

          <!-- Legal & Compliance -->
          <div>
            <h4 class="text-sm font-semibold text-slate-800 mb-4 tracking-tight">
              Legal & Compliance
            </h4>
            <ul class="space-y-2.5 font-inter">
              <li><a href="#" @click.prevent class="text-[13px] text-slate-500 hover:text-brand-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" @click.prevent class="text-[13px] text-slate-500 hover:text-brand-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" @click.prevent class="text-[13px] text-slate-500 hover:text-brand-primary transition-colors">Risk Disclosure</a></li>
              <li><a href="#" @click.prevent class="text-[13px] text-slate-500 hover:text-brand-primary transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

        </div>

      </div>

    </div>
  </footer>
</template>
