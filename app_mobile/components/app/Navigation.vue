<template>
  <nav class="fixed inset-x-0 bottom-0 bg-white shadow-2xl border-t-4 border-gradient-to-r from-purple-400 to-pink-400 z-10">
    <div class="bg-gradient-to-r from-purple-50 via-pink-50 to-indigo-50 px-1 sm:px-2 py-1 sm:py-2">
      <div class="grid grid-cols-4 h-18 sm:h-20">
        <NuxtLink to="/" class="nav-item-gradient" :class="{ 'nav-active': route.path === '/' }">
          <div class="flex flex-col items-center justify-center h-full p-1">
            <div class="nav-icon-wrapper mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 sm:h-7 sm:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <span class="text-xs sm:text-sm font-medium text-center leading-tight">💖 <span class="hidden xs:inline">Meu cantinho</span><span class="xs:hidden">Home</span></span>
          </div>
        </NuxtLink>

        <NuxtLink to="/appointments" class="nav-item-gradient" :class="{ 'nav-active': route.path.includes('/appointments') }">
          <div class="flex flex-col items-center justify-center h-full p-1">
            <div class="nav-icon-wrapper mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 sm:h-7 sm:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <span class="text-xs sm:text-sm font-medium text-center leading-tight">📅 <span class="hidden xs:inline">Minha agenda</span><span class="xs:hidden">Agenda</span></span>
          </div>
        </NuxtLink>

        <NuxtLink to="/appointments/new" class="nav-item-gradient nav-cta" :class="{ 'nav-active': route.path.includes('/appointments/new') }">
          <div class="flex flex-col items-center justify-center h-full p-1">
            <div class="bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full p-2 sm:p-3 mb-1 shadow-lg transform hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <span class="text-xs sm:text-sm font-bold text-emerald-600 text-center leading-tight">🚀 <span class="hidden xs:inline">Montar dia!</span><span class="xs:hidden">Novo</span></span>
          </div>
        </NuxtLink>

        <NuxtLink to="/locations" class="nav-item-gradient" :class="{ 'nav-active': route.path.includes('/locations') }">
          <div class="flex flex-col items-center justify-center h-full p-1">
            <div class="nav-icon-wrapper mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 sm:h-7 sm:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h4a1 1 0 011 1v5m-6 0h6" />
              </svg>
            </div>
            <span class="text-xs sm:text-sm font-medium text-center leading-tight">🏢 <span class="hidden xs:inline">Estruturas</span><span class="xs:hidden">Local</span></span>
          </div>
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
const route = useRoute();
</script>

<style scoped>
.nav-item-gradient {
  @apply relative transition-all duration-200 ease-in-out rounded-lg mx-1 hover:bg-gradient-to-br from-white/50 to-white/30;
  min-height: 4rem;
  touch-action: manipulation;
}

.nav-active {
  @apply bg-gradient-to-br from-purple-100 to-pink-100;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(139, 92, 246, 0.15);
}

.nav-icon-wrapper {
  @apply transition-transform duration-200;
}

.nav-item-gradient:active {
  transform: translateY(1px);
}

.nav-item-gradient:active .nav-icon-wrapper {
  transform: scale(0.95);
}

/* Responsive utilities */
@media (max-width: 375px) {
  .xs\:hidden {
    display: none;
  }
  .xs\:inline {
    display: inline;
  }
}

@media (min-width: 376px) {
  .xs\:hidden {
    display: inline;
  }
  .xs\:inline {
    display: none;
  }
}
</style>
