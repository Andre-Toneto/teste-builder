<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />
    
    <main class="flex-1">
      <slot />
    </main>
    
    <AppNavigation />
    <Messageapp />
  </div>
</template>

<script setup>

</script>