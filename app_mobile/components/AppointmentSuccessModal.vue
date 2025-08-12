<template>
  <Teleport to="body">
    <div 
      v-if="show" 
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      @click="handleBackdropClick"
    >
      <div 
        class="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl transform transition-all duration-500 scale-100 relative overflow-hidden"
        @click.stop
      >
        <!-- Elementos decorativos animados -->
        <div class="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full opacity-30 animate-bounce" style="animation-delay: 0ms;"></div>
        <div class="absolute -top-6 -right-8 w-16 h-16 bg-gradient-to-br from-pink-300 to-purple-400 rounded-full opacity-40 animate-bounce" style="animation-delay: 200ms;"></div>
        <div class="absolute -bottom-8 -left-6 w-14 h-14 bg-gradient-to-br from-blue-300 to-indigo-400 rounded-full opacity-35 animate-bounce" style="animation-delay: 400ms;"></div>
        <div class="absolute -bottom-4 -right-12 w-18 h-18 bg-gradient-to-br from-emerald-300 to-teal-400 rounded-full opacity-30 animate-bounce" style="animation-delay: 600ms;"></div>

        <div class="text-center relative z-10">
          <!-- Ícone principal com animação especial -->
          <div class="relative mx-auto mb-6">
            <div class="bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 rounded-full w-24 h-24 flex items-center justify-center mx-auto shadow-xl animate-pulse">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-white animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <!-- Estrelas decorativas -->
            <div class="absolute -top-2 -right-2 text-yellow-400 animate-ping">✨</div>
            <div class="absolute -bottom-1 -left-2 text-yellow-300 animate-pulse">⭐</div>
            <div class="absolute top-1 -right-4 text-yellow-500 animate-bounce" style="animation-delay: 300ms;">🌟</div>
          </div>

          <!-- Título principal emocional -->
          <h3 class="text-2xl font-bold text-gray-800 mb-4 leading-tight">
            🎉 <span class="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Pronto!</span>
          </h3>
          
          <!-- Mensagem principal personalizada -->
          <div class="mb-6 space-y-3">
            <p class="text-gray-700 text-lg leading-relaxed font-medium">
              Sua clínica para o dia <span class="font-bold text-emerald-600">{{ formattedDate }}</span>, 
              às <span class="font-bold text-emerald-600">{{ appointmentTime }}</span> já está confirmada!
            </p>
            
            <div class="bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 rounded-2xl p-5 mt-4 border-2 border-emerald-200">
              <p class="text-emerald-800 text-base leading-relaxed">
                <span class="font-bold">✨ Será um imenso prazer tê-lo(a) conosco!</span><br>
                Durante esse período, você será o verdadeiro dono da clínica. 
                Nossa equipe estará 100% dedicada ao seu sucesso, 
                <span class="font-semibold">transformando sonhos em realidade! 🌟</span>
              </p>
            </div>
          </div>

          <!-- Mensagem motivacional extra -->
          <div class="mb-6 p-4 bg-gradient-to-r from-violet-100 via-purple-100 to-pink-100 rounded-2xl border border-purple-200">
            <p class="text-purple-800 text-sm font-medium italic">
              <span v-if="!mounted">Cada paciente que você atender será tocado pela sua dedicação! 💖</span>
              <span v-else>{{ motivationalMessage }}</span>
            </p>
          </div>

          <!-- Detalhes do agendamento destacados -->
          <div class="bg-white border-2 border-emerald-200 rounded-2xl p-4 mb-6 shadow-inner">
            <div class="grid grid-cols-2 gap-4 text-sm">
              <div class="text-center">
                <div class="text-emerald-600 font-bold text-lg">{{ appointmentTime }}</div>
                <div class="text-gray-600">Horário</div>
              </div>
              <div class="text-center">
                <div class="text-emerald-600 font-bold text-lg">{{ duration }}h</div>
                <div class="text-gray-600">Duração</div>
              </div>
            </div>
          </div>

          <!-- Botões de ação -->
          <div class="space-y-3">
            <button 
              @click="closeModal"
              class="w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 active:scale-95"
            >
              🚀 Que alegria! Estou pronto(a)! 🚀
            </button>
            
            <button 
              v-if="showSecondaryAction"
              @click="$emit('secondary-action')"
              class="w-full bg-white border-2 border-emerald-200 text-emerald-700 px-6 py-3 rounded-2xl font-semibold text-base hover:bg-emerald-50 transition-all duration-200"
            >
              📋 Ver minha agenda completa
            </button>
          </div>

          <!-- Mensagem final de rodapé -->
          <div class="mt-6 text-center">
            <p class="text-xs text-gray-500 italic">
              🎯 Neoviso: Onde profissionais se tornam lendas!
            </p>
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
  appointmentDate: {
    type: String,
    required: true
  },
  appointmentTime: {
    type: String,
    required: true
  },
  duration: {
    type: [String, Number],
    default: '1'
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
  "Cada paciente que você atender será tocado pela sua dedicação! 💖",
  "Sua expertise combinada com nossa estrutura = Resultados extraordinários! ⚡",
  "O mundo precisa de profissionais como você! Brilhe! ✨",
  "Você está prestes a criar histórias de transformação incríveis! 🌈",
  "Sua paixão pela medicina vai inspirar todos ao seu redor! 🔥",
  "Este será um dia épico na sua carreira profissional! 🏆",
  "Você é a peça principal desta sinfonia de cuidado! 🎼",
  "Cada vida que você tocar hoje será para sempre grata! 🙏"
]

// Controle de hidratação
const mounted = ref(false)

// Usar mensagem fixa para evitar problemas de hidratação
const motivationalMessage = ref("Cada paciente que você atender será tocado pela sua dedicação! 💖")

// Randomizar apenas após hydratação
onMounted(() => {
  mounted.value = true
  nextTick(() => {
    motivationalMessage.value = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)]
  })
})

const formattedDate = computed(() => {
  if (!props.appointmentDate || !mounted.value || process.server) return ''

  try {
    const date = new Date(props.appointmentDate)
    return date.toLocaleDateString('pt-BR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  } catch (error) {
    return props.appointmentDate || ''
  }
})

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
/* Animações personalizadas para confetti */
@keyframes confetti-fall {
  0% { 
    transform: translateY(-100vh) rotate(0deg); 
    opacity: 1; 
  }
  100% { 
    transform: translateY(100vh) rotate(360deg); 
    opacity: 0; 
  }
}

.animate-confetti {
  animation: confetti-fall 3s ease-out forwards;
}

/* Melhor experiência de toque */
button {
  touch-action: manipulation;
  user-select: none;
}

/* Efeito suave para o modal */
.transform {
  backface-visibility: hidden;
  perspective: 1000px;
}

/* Animação especial para as estrelas */
@keyframes sparkle {
  0%, 100% { 
    transform: scale(1) rotate(0deg); 
    opacity: 1; 
  }
  50% { 
    transform: scale(1.2) rotate(180deg); 
    opacity: 0.8; 
  }
}

.animate-sparkle {
  animation: sparkle 2s ease-in-out infinite;
}
</style>
