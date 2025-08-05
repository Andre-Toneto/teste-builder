<template>
  <div class="welcome-card">
    <div class="flex items-start space-x-4">
      <div class="welcome-icon">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      
      <div class="flex-1">
        <h2 class="text-lg font-semibold text-white mb-1">
          {{ getGreeting() }}, {{ userName }}!
        </h2>
        <p class="text-primary-100 text-sm leading-relaxed mb-3">
          {{ getWelcomeMessage() }}
        </p>
        
        <div class="flex items-center space-x-2">
          <div class="flex items-center space-x-1">
            <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span class="text-primary-100 text-xs">Estrutura disponível</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="mt-4 pt-4 border-t border-primary-500 border-opacity-30">
      <div class="flex items-center justify-between">
        <div class="text-primary-100 text-xs">
          <span class="font-medium">Próximo horário:</span>
          <span class="ml-1">{{ nextAppointment || 'Livre para reservar' }}</span>
        </div>
        <NuxtLink 
          to="/appointments/new" 
          class="bg-white bg-opacity-20 hover:bg-opacity-30 text-white text-xs px-3 py-1.5 rounded-full transition-all duration-200"
        >
          Reservar agora
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
interface Props {
  userName?: string
  nextAppointment?: string
}

const props = withDefaults(defineProps<Props>(), {
  userName: 'Doutor(a)',
  nextAppointment: ''
})

const getGreeting = () => {
  const hour = new Date().getHours()
  if (hour < 12) return 'Bom dia'
  if (hour < 18) return 'Boa tarde'
  return 'Boa noite'
}

const getWelcomeMessage = () => {
  const messages = [
    'Hoje a clínica Neo Viso é sua! Nossa estrutura te espera.',
    'Sua estrutura de atendimento está pronta. É só chegar e brilhar.',
    'Monte seu dia com todo conforto da Neo Viso.',
    'Escolha seu consultório e transforme vidas hoje.'
  ]
  
  const hour = new Date().getHours()
  if (hour < 9) return messages[0]
  if (hour < 14) return messages[1]
  if (hour < 18) return messages[2]
  return messages[3]
}
</script>

<style scoped>
.welcome-card {
  @apply bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl p-5 shadow-lg;
}

.welcome-icon {
  @apply bg-white bg-opacity-20 rounded-full p-2 flex-shrink-0;
}
</style>
