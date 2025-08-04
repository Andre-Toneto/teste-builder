<template>
  <header class="relative bg-white shadow-sm z-10">
    <div class="flex items-center justify-between h-14 px-4">
      <div class="flex items-center">
        <button 
          class="p-2 -ml-2" 
          aria-label="Open menu" 
          @click="toggleSidebar"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      <div>
        <NuxtLink to="/" class="flex items-center">
          <span class="text-primary-600 font-semibold text-lg">Neoviso</span>
        </NuxtLink>
      </div>
      
      <div>
        <button 
          class="p-2 -mr-2"
          aria-label="Notifications"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
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
</script>