<template>
  <nav class="fixed inset-x-0 bottom-0 bg-white shadow-2xl border-t-4 border-gradient-to-r from-purple-400 to-pink-400 z-10">
    <div class="bg-gradient-to-r from-purple-50 via-pink-50 to-indigo-50 px-2 py-1">
      <div class="grid grid-cols-4 h-16">
        <NuxtLink to="/" class="nav-item-gradient" :class="{ 'nav-active': route.path === '/' }">
          <div class="flex flex-col items-center justify-center h-full">
            <div class="nav-icon-wrapper mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <span class="text-xs font-medium">💖 Meu cantinho</span>
          </div>
        </NuxtLink>

        <NuxtLink to="/appointments" class="nav-item-gradient" :class="{ 'nav-active': route.path.includes('/appointments') }">
          <div class="flex flex-col items-center justify-center h-full">
            <div class="nav-icon-wrapper mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <span class="text-xs font-medium">📅 Minha agenda</span>
          </div>
        </NuxtLink>

        <NuxtLink to="/appointments/new" class="nav-item-gradient nav-cta" :class="{ 'nav-active': route.path.includes('/appointments/new') }">
          <div class="flex flex-col items-center justify-center h-full">
            <div class="bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full p-2 mb-1 shadow-lg transform hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <span class="text-xs font-bold text-emerald-600">🚀 Montar dia!</span>
          </div>
        </NuxtLink>

        <NuxtLink to="/locations" class="nav-item-gradient" :class="{ 'nav-active': route.path.includes('/locations') }">
          <div class="flex flex-col items-center justify-center h-full">
            <div class="nav-icon-wrapper mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h4a1 1 0 011 1v5m-6 0h6" />
              </svg>
            </div>
            <span class="text-xs font-medium">🏢 Minha clínica</span>
          </div>
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
const route = useRoute();
</script>
