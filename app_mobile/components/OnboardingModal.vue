<template>
  <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center p-4">
    <!-- Backdrop -->
    <div class="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
    
    <!-- Modal -->
    <div class="relative bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
      <!-- Header -->
      <div class="bg-gradient-to-br from-primary-600 to-primary-700 p-6 text-white rounded-t-2xl">
        <div class="flex items-center justify-between mb-4">
          <div class="bg-white bg-opacity-20 rounded-full p-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3.5M3 16.5h18" />
            </svg>
          </div>
          <button @click="closeModal" class="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <h2 class="text-xl font-bold mb-2">Bem-vindo(a) à Neo Viso!</h2>
        <p class="text-primary-100 text-sm">Sua nova clínica particular te espera</p>
      </div>
      
      <!-- Content -->
      <div class="p-6">
        <!-- Slides -->
        <div class="space-y-6">
          <div v-show="currentSlide === 0" class="text-center">
            <div class="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-6 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-primary-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h4a1 1 0 011 1v5m-6 0h6" />
              </svg>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Estrutura completa</h3>
              <p class="text-sm text-gray-600">Consultórios totalmente equipados, ambiente acolhedor e toda infraestrutura que você precisa</p>
            </div>
          </div>
          
          <div v-show="currentSlide === 1" class="text-center">
            <div class="bg-gradient-to-br from-secondary-50 to-accent-50 rounded-xl p-6 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-secondary-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Suporte técnico 24/7</h3>
              <p class="text-sm text-gray-600">Equipe especializada sempre disponível para te apoiar em todos os procedimentos</p>
            </div>
          </div>
          
          <div v-show="currentSlide === 2" class="text-center">
            <div class="bg-gradient-to-br from-accent-50 to-primary-50 rounded-xl p-6 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-accent-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Reserve com facilidade</h3>
              <p class="text-sm text-gray-600">Sistema simples para agendar seus horários e escolher o consultório ideal</p>
            </div>
            
            <div class="mt-6 p-4 bg-primary-50 rounded-xl border border-primary-100">
              <h4 class="font-medium text-primary-800 mb-2">Como começar:</h4>
              <ul class="text-sm text-primary-700 space-y-1">
                <li class="flex items-center">
                  <span class="w-5 h-5 bg-primary-500 text-white rounded-full text-xs flex items-center justify-center mr-2">1</span>
                  Toque em "Nova reserva"
                </li>
                <li class="flex items-center">
                  <span class="w-5 h-5 bg-primary-500 text-white rounded-full text-xs flex items-center justify-center mr-2">2</span>
                  Escolha data e horário
                </li>
                <li class="flex items-center">
                  <span class="w-5 h-5 bg-primary-500 text-white rounded-full text-xs flex items-center justify-center mr-2">3</span>
                  Confirme e chegue para brilhar!
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <!-- Navigation -->
        <div class="flex items-center justify-between mt-8">
          <div class="flex space-x-2">
            <div v-for="i in 3" :key="i" class="w-2 h-2 rounded-full" :class="currentSlide === i - 1 ? 'bg-primary-500' : 'bg-gray-300'"></div>
          </div>
          
          <div class="flex items-center space-x-3">
            <button v-if="currentSlide > 0" @click="prevSlide" class="text-gray-500 hover:text-gray-700 text-sm font-medium">
              Voltar
            </button>
            <button 
              v-if="currentSlide < 2" 
              @click="nextSlide" 
              class="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Próximo
            </button>
            <button 
              v-else 
              @click="finishOnboarding" 
              class="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Começar agora!
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
interface Props {
  show?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  show: true
})

const emit = defineEmits(['close'])

const showModal = ref(props.show)
const currentSlide = ref(0)

const nextSlide = () => {
  if (currentSlide.value < 2) {
    currentSlide.value++
  }
}

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--
  }
}

const closeModal = () => {
  showModal.value = false
  emit('close')
}

const finishOnboarding = () => {
  localStorage.setItem('onboarding_completed', 'true')
  closeModal()
}

watch(() => props.show, (newVal) => {
  showModal.value = newVal
})
</script>

<style scoped>
/* Smooth transitions for slides */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
