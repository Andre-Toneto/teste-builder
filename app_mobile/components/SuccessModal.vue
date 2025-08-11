<template>
  <Teleport to="body">
    <div 
      v-if="show" 
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      @click="handleBackdropClick"
    >
      <div 
        class="bg-white rounded-3xl p-6 sm:p-8 max-w-sm w-full shadow-2xl transform transition-all duration-300 scale-100"
        @click.stop
      >
        <!-- Animação de confetti visual -->
        <div class="text-center relative">
          <!-- Ícone principal animado -->
          <div class="relative mx-auto mb-4">
            <div class="bg-gradient-to-br from-green-400 via-emerald-500 to-teal-500 rounded-full w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center mx-auto shadow-lg animate-pulse">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 sm:h-12 sm:w-12 text-white animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <!-- Círculos decorativos -->
            <div class="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
            <div class="absolute -bottom-1 -left-2 w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
          </div>

          <!-- Título principal -->
          <h3 class="text-xl sm:text-2xl font-bold text-gray-800 mb-3 leading-tight">
            🎉 <span class="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Agendamento confirmado!</span>
          </h3>
          
          <!-- Mensagem personalizada -->
          <div class="mb-6 space-y-2">
            <p class="text-gray-600 text-sm sm:text-base leading-relaxed">
              {{ message || `Sua sala estará prontinha e te esperando com muito carinho! 💖` }}
            </p>
            
            <div v-if="appointmentDetails" class="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-4 mt-4">
              <div class="flex items-center justify-center space-x-2 text-purple-700">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="font-semibold text-sm sm:text-base">{{ appointmentDetails.time }}:00</span>
              </div>
              <div class="flex items-center justify-center space-x-2 text-purple-600 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span class="font-medium text-sm">{{ formatDate(appointmentDetails.date) }}</span>
              </div>
            </div>
          </div>

          <!-- Mensagens motivacionais aleatórias -->
          <div class="mb-6">
            <p class="text-xs sm:text-sm text-gray-500 italic">
              {{ motivationalMessage }}
            </p>
          </div>

          <!-- Botões de ação -->
          <div class="space-y-3">
            <button 
              @click="closeModal"
              class="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 text-white px-6 py-3 sm:py-4 rounded-2xl font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 active:scale-95"
            >
              ✨ Perfeito! ✨
            </button>
            
            <button 
              v-if="showSecondaryAction"
              @click="$emit('secondary-action')"
              class="w-full bg-white border-2 border-purple-200 text-purple-600 px-6 py-2 sm:py-3 rounded-2xl font-semibold text-sm hover:bg-purple-50 transition-all duration-200"
            >
              📅 Ver minha agenda
            </button>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },
  message: {
    type: String,
    default: ''
  },
  appointmentDetails: {
    type: Object,
    default: null
  },
  showSecondaryAction: {
    type: Boolean,
    default: true
  },
  autoClose: {
    type: Number,
    default: 0 // 0 = não fecha automaticamente
  }
})

const emit = defineEmits(['close', 'secondary-action'])

const motivationalMessages = [
  "Você está construindo seu dia perfeito! 🌟",
  "Cada agendamento é um passo para seus sonhos! 🚀",
  "Sua organização é inspiradora! 💫",
  "Você está no controle do seu tempo! ⏰",
  "Que energia maravilhosa você tem! ✨",
  "Seu futuro está sendo construído agora! 🏗️",
  "Você é incrível em se organizar! 🎯",
  "Cada momento planejado é um momento bem vivido! 💖"
]

const motivationalMessage = ref("")

// Função para definir mensagem motivacional apenas no cliente
const setMotivationalMessage = () => {
  if (process.client) {
    motivationalMessage.value = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)]
  }
}

// Mensagem padrão para SSR
onMounted(() => {
  setMotivationalMessage()
})

const formatDate = (dateStr) => {
  return new Date(dateStr).toLocaleDateString('pt-BR', { 
    weekday: 'long', 
    day: 'numeric', 
    month: 'long'
  })
}

const closeModal = () => {
  emit('close')
}

const handleBackdropClick = () => {
  closeModal()
}

// Auto close se especificado
watch(() => props.show, (newValue) => {
  if (newValue && props.autoClose > 0) {
    setTimeout(() => {
      closeModal()
    }, props.autoClose)
  }
})
</script>

<style scoped>
/* Animações personalizadas */
@keyframes confetti {
  0% { transform: translateY(0) rotate(0deg); opacity: 1; }
  100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
}

.animate-confetti {
  animation: confetti 1s ease-out forwards;
}

/* Suavização para dispositivos móveis */
.transform {
  backface-visibility: hidden;
  perspective: 1000px;
}

/* Melhor experiência de toque */
button {
  touch-action: manipulation;
  user-select: none;
}
</style>
