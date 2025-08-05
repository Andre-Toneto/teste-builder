<template>
  <header class="relative bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 shadow-xl z-10">
    <div class="flex items-center justify-between h-16 px-4">
      <div class="flex items-center">
        <button
          class="p-2 -ml-2 hover:bg-white/20 rounded-lg transition-all"
          aria-label="Menu principal"
          @click="toggleSidebar"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <div class="flex items-center space-x-3">
        <NuxtLink to="/" class="flex items-center">
          <div class="flex items-center space-x-2">
            <div class="bg-white/20 rounded-full p-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <span class="text-white font-bold text-lg tracking-wide">Neo Viso</span>
            <span class="bg-white/20 text-white text-xs px-2 py-0.5 rounded-full font-semibold">SUA CLÍNICA</span>
          </div>
        </NuxtLink>

        <!-- Botão Tour -->
        <button
          @click="openOnboarding"
          class="bg-white/20 hover:bg-white/30 text-white px-2 py-1 rounded-lg text-xs font-bold transition-all flex items-center space-x-1"
          title="Ver tour da Neo Viso"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Tour</span>
        </button>
      </div>

      <div>
        <button
          class="p-2 -mr-2 hover:bg-white/20 rounded-lg transition-all relative"
          aria-label="Suas notificações"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <!-- Badge de notificação -->
          <div class="absolute -top-1 -right-1 bg-yellow-400 text-purple-800 text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
            ✨
          </div>
        </button>
      </div>
    </div>
  </header>

  <AppSidebar :is-open="isSidebarOpen" @close="closeSidebar" />
</template>

<script setup>
const isSidebarOpen = ref(false);

function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value;
}

function closeSidebar() {
  isSidebarOpen.value = false;
}

function openOnboarding() {
  // Emitir evento para abrir onboarding
  window.dispatchEvent(new CustomEvent('open-onboarding'))
}
</script>
