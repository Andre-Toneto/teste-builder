<template>
  <nav class="fixed inset-x-0 bottom-0 bg-white shadow-lg border-t border-gray-200 z-10">
    <div class="grid grid-cols-4 h-16">
      <NuxtLink to="/" class="bottom-nav-item" :class="{ 'active': route.path === '/' }">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 22V12h6v10" />
        </svg>
        <span class="text-xs">Dashboard</span>
      </NuxtLink>

      <NuxtLink to="/appointments" class="bottom-nav-item" :class="{ 'active': route.path.includes('/appointments') }">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span class="text-xs">Meus horários</span>
      </NuxtLink>

      <NuxtLink to="/appointments/new" class="bottom-nav-item" :class="{ 'active': route.path.includes('/appointments/new') }">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
        </svg>
        <span class="text-xs">Nova reserva</span>
      </NuxtLink>

      <NuxtLink to="/locations" class="bottom-nav-item" :class="{ 'active': route.path.includes('/locations') }">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h4a1 1 0 011 1v5m-6 0h6" />
        </svg>
        <span class="text-xs">Estruturas</span>
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup>
const route = useRoute();
</script>
