<template>
  <button 
    @click="reopenOnboarding"
    class="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-2 rounded-lg text-xs font-bold hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg flex items-center space-x-1"
    title="Ver tour da Neo Viso novamente"
  >
    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <span>Tour</span>
  </button>
</template>

<script setup>
const emit = defineEmits(['open-onboarding'])

const reopenOnboarding = () => {
  emit('open-onboarding')
}
</script>
