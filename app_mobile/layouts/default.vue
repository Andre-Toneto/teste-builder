<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <AppHeader />

    <main class="flex-1 pb-20 sm:pb-24">
      <div class="px-2 sm:px-4 py-2 sm:py-4">
        <slot />
      </div>
    </main>

    <AppNavigation />
    <Messageapp />
  </div>
</template>

<script setup>

</script>
