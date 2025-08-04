<template>
  <nav class="fixed inset-x-0 bottom-0 bg-white shadow-lg border-t border-gray-200 z-10">
    <div class="grid grid-cols-3 h-16">
      <NuxtLink to="/appointments" class="bottom-nav-item" :class="{ 'active': route.path.includes('/appointments') }">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span>Agendamentos</span>
      </NuxtLink>
      
      <NuxtLink to="/" class="bottom-nav-item" :class="{ 'active': route.path === '/' }">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 22V12h6v10" />
        </svg>
        <span>Início</span>
      </NuxtLink>
      
      <NuxtLink to="/locations" class="bottom-nav-item" :class="{ 'active': route.path.includes('/locations') }">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span>Locais</span>
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup>
const route = useRoute();
</script>