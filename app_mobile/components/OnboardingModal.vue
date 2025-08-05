<template>
  <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
    <!-- Modal Principal -->
    <div class="relative bg-white rounded-3xl max-w-md w-full max-h-[90vh] overflow-hidden shadow-2xl">
      
      <!-- Slide 1: Boas-vindas Personalizada -->
      <div v-show="currentSlide === 0" class="relative">
        <div class="bg-gradient-to-br from-violet-600 via-purple-600 to-pink-600 p-8 text-white text-center">
          <div class="bg-white/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h1 class="text-2xl font-bold mb-3">
            🎉 Bem-vindo(a), Dr. {{ userName }}!
          </h1>
          <p class="text-purple-100 text-sm leading-relaxed mb-6">
            <span class="font-semibold">Parabéns!</span> Você acaba de entrar na<br>
            <span class="text-lg font-bold">sua clínica particular! ✨</span>
          </p>
          <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <p class="text-white/90 text-sm">
              <span class="font-bold">🏰 A partir de agora, a Neo Viso é sua!</span><br>
              Vamos te mostrar como transformar vidas com nossa estrutura dos sonhos.
            </p>
          </div>
        </div>
      </div>

      <!-- Slide 2: Diferenciais da Neo Viso -->
      <div v-show="currentSlide === 1" class="p-8">
        <div class="text-center mb-6">
          <div class="bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h4a1 1 0 011 1v5m-6 0h6" />
            </svg>
          </div>
          <h2 class="text-xl font-bold text-gray-800 mb-2">🌟 Por que a Neo Viso é única?</h2>
          <p class="text-gray-600 text-sm">Sua clínica dos sonhos com tudo incluso!</p>
        </div>
        
        <div class="space-y-4">
          <div class="flex items-start space-x-3 p-3 bg-emerald-50 rounded-xl">
            <div class="bg-emerald-500 rounded-full p-1 flex-shrink-0 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h3 class="font-bold text-emerald-800 text-sm">💎 Consultórios Premium VIP</h3>
              <p class="text-emerald-700 text-xs">Equipamentos de última geração, ambiente climatizado e música relaxante</p>
            </div>
          </div>

          <div class="flex items-start space-x-3 p-3 bg-blue-50 rounded-xl">
            <div class="bg-blue-500 rounded-full p-1 flex-shrink-0 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h3 class="font-bold text-blue-800 text-sm">🛡️ Suporte Técnico 24/7</h3>
              <p class="text-blue-700 text-xs">Equipe especializada sempre disponível durante seus atendimentos</p>
            </div>
          </div>

          <div class="flex items-start space-x-3 p-3 bg-purple-50 rounded-xl">
            <div class="bg-purple-500 rounded-full p-1 flex-shrink-0 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h3 class="font-bold text-purple-800 text-sm">📈 Marketing de Resultados</h3>
              <p class="text-purple-700 text-xs">Estratégias para alavancar seus negócios e atrair mais pacientes</p>
            </div>
          </div>

          <div class="flex items-start space-x-3 p-3 bg-pink-50 rounded-xl">
            <div class="bg-pink-500 rounded-full p-1 flex-shrink-0 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h3 class="font-bold text-pink-800 text-sm">🎨 Produtos Premium no Local</h3>
              <p class="text-pink-700 text-xs">Linha completa de produtos estéticos à sua disposição</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Slide 3: Conceito "Sua Clínica Por Um Dia" -->
      <div v-show="currentSlide === 2" class="p-8">
        <div class="text-center mb-6">
          <div class="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <h2 class="text-xl font-bold text-gray-800 mb-2">🏰 Seja o Dono Por Um Dia!</h2>
          <p class="text-gray-600 text-sm mb-4">O conceito revolucionário da Neo Viso</p>
        </div>

        <div class="bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 rounded-2xl p-5 border border-yellow-200 mb-6">
          <h3 class="font-bold text-orange-800 mb-3 text-center">⭐ Como funciona:</h3>
          
          <div class="space-y-3">
            <div class="flex items-center space-x-3">
              <div class="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">1</div>
              <p class="text-orange-800 text-sm"><span class="font-semibold">Você reserva</span> o horário que desejar</p>
            </div>
            
            <div class="flex items-center space-x-3">
              <div class="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">2</div>
              <p class="text-orange-800 text-sm"><span class="font-semibold">Seu consultório</span> fica pronto e personalizado</p>
            </div>
            
            <div class="flex items-center space-x-3">
              <div class="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">3</div>
              <p class="text-orange-800 text-sm"><span class="font-semibold">Você atende</span> como se fosse em sua própria clínica</p>
            </div>
            
            <div class="flex items-center space-x-3">
              <div class="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">4</div>
              <p class="text-orange-800 text-sm"><span class="font-semibold">Seus pacientes</span> ficam encantados com a estrutura</p>
            </div>
          </div>
        </div>

        <div class="text-center">
          <p class="text-gray-700 text-sm font-medium mb-2">
            🎯 <span class="font-bold">Resultado:</span> Você fatura mais com menos investimento!
          </p>
          <p class="text-gray-600 text-xs">
            Sem aluguel, sem funcionários, sem dor de cabeça. <br>
            <span class="font-semibold text-purple-600">Só você, seus pacientes e o sucesso! ✨</span>
          </p>
        </div>
      </div>

      <!-- Slide 4: Call to Action -->
      <div v-show="currentSlide === 3" class="p-8 text-center">
        <div class="bg-gradient-to-br from-green-400 to-emerald-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        
        <h2 class="text-2xl font-bold text-gray-800 mb-3">🚀 Pronto para decolar?</h2>
        <p class="text-gray-600 text-sm mb-6 leading-relaxed">
          Sua estrutura dos sonhos está te esperando!<br>
          <span class="font-semibold text-emerald-600">Que tal fazer sua primeira reserva agora?</span>
        </p>

        <div class="space-y-4">
          <button 
            @click="startFirstReservation"
            class="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-4 px-6 rounded-2xl font-bold text-lg hover:from-emerald-600 hover:to-teal-600 transition-all transform hover:scale-105 shadow-xl"
          >
            ✨ Fazer minha primeira reserva!
          </button>
          
          <button 
            @click="exploreDashboard"
            class="w-full border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-2xl font-semibold hover:bg-gray-50 transition-all"
          >
            📱 Primeiro quero explorar o app
          </button>
        </div>

        <p class="text-gray-500 text-xs mt-4">
          💡 Dica: Você pode acessar este tour novamente nas configurações
        </p>
      </div>

      <!-- Navigation Dots -->
      <div class="flex justify-center space-x-2 pb-4">
        <div
          v-for="i in 4"
          :key="i"
          class="w-2 h-2 rounded-full transition-all"
          :class="currentSlide === i - 1 ? 'bg-purple-500 w-8' : 'bg-gray-300'"
        ></div>
      </div>

      <!-- Debug Info (temporary) -->
      <ClientOnly>
        <div class="text-center text-xs text-gray-500 pb-2">
          Slide atual: {{ currentSlide + 1 }} / 4
        </div>
      </ClientOnly>

      <!-- Botão de Debug (temporário) -->
      <ClientOnly>
        <div v-if="currentSlide < 3" class="text-center pb-4">
          <button
            @click="currentSlide = currentSlide + 1"
            class="bg-red-500 text-white px-4 py-2 rounded-lg text-xs font-bold"
          >
            DEBUG: Próximo ({{ currentSlide }})
          </button>
        </div>
      </ClientOnly>

      <!-- Navigation Buttons -->
      <div v-if="currentSlide < 3" class="flex justify-between items-center px-8 pb-6">
        <button
          v-if="currentSlide > 0"
          @click="prevSlide"
          class="text-gray-500 hover:text-gray-700 text-sm font-medium flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Voltar
        </button>
        <div v-else class="flex-1"></div>

        <button
          @click="nextSlide"
          style="z-index: 999; position: relative; pointer-events: auto;"
          class="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-xl text-sm font-bold hover:from-purple-600 hover:to-pink-600 transition-all flex items-center shadow-lg"
        >
          Continuar
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <!-- Close Button (em todos os slides) -->
      <button
        @click="closeOnboarding"
        class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-100 transition-all z-10"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  show: {
    type: Boolean,
    default: true
  },
  userName: {
    type: String,
    default: 'Doutor(a)'
  }
})

const emit = defineEmits(['close', 'startReservation'])

const showModal = ref(props.show)
const currentSlide = ref(0)

const nextSlide = () => {
  console.log('nextSlide called, currentSlide:', currentSlide.value)
  if (currentSlide.value < 3) {
    currentSlide.value++
    console.log('currentSlide updated to:', currentSlide.value)
  }
}

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--
  }
}

const closeOnboarding = () => {
  if (process.client) {
    localStorage.setItem('onboarding_completed', 'true')
  }
  showModal.value = false
  emit('close')
}

const startFirstReservation = () => {
  closeOnboarding()
  emit('startReservation')
  navigateTo('/appointments/new')
}

const exploreDashboard = () => {
  closeOnboarding()
}

watch(() => props.show, (newVal) => {
  showModal.value = newVal
})
</script>

<style scoped>
/* Animações suaves */
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
