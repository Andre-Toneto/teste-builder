<template>
  <Teleport to="body">
    <div 
      v-if="show" 
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      @click="handleBackdropClick"
    >
      <div 
        class="bg-white rounded-3xl p-3 max-w-md w-full shadow-2xl transform transition-all duration-500 scale-100 relative overflow-hidden"
        style="max-height: 525px;"
      >
        <!-- Elementos decorativos animados (reduzidos) -->
        <div class="absolute -top-6 -left-6 w-14 h-14 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full opacity-30 animate-bounce"></div>
        <div class="absolute -top-4 -right-6 w-12 h-12 bg-gradient-to-br from-pink-300 to-purple-400 rounded-full opacity-40 animate-bounce"></div>
        <div class="absolute -bottom-6 -left-4 w-10 h-10 bg-gradient-to-br from-blue-300 to-indigo-400 rounded-full opacity-35 animate-bounce"></div>
        <div class="absolute -bottom-3 -right-8 w-12 h-12 bg-gradient-to-br from-emerald-300 to-teal-400 rounded-full opacity-30 animate-bounce"></div>

        <div class="text-center relative z-10">
          <!-- Ícone principal menor -->
          <div class="relative mx-auto mb-4">
            <div class="bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto shadow-xl animate-pulse">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div class="absolute -top-1 -right-1 text-yellow-400 animate-ping text-sm">✨</div>
            <div class="absolute bottom-0 -left-1 text-yellow-300 animate-pulse text-sm">⭐</div>
            <div class="absolute top-0 -right-3 text-yellow-500 animate-bounce text-sm">🌟</div>
          </div>

          <!-- Título menor -->
          <h3 class="text-base font-bold text-gray-800 mb-3 leading-tight">
            🎉 <span class="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Pronto!</span>
          </h3>
          
          <!-- Mensagem principal -->
          <div class="mb-2 space-y-2">
            <p class="text-gray-700 text-[13px] leading-snug font-medium">
              Sua clínica para o dia <span class="font-bold text-emerald-600">{{ formattedDate }}</span>, 
              às <span class="font-bold text-emerald-600">{{ appointmentTime }}</span> já está confirmada!
            </p>
            
            <div class="bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 rounded-xl p-3 mt-2 border border-emerald-200">
              <p class="text-emerald-800 text-[11px] leading-snug">
                <span class="font-bold">✨ Será um prazer tê-lo(a) conosco!</span><br>
                Durante esse período, você será o verdadeiro dono da clínica. 
                      Nossa equipe estará 100% dedicada ao seu sucesso,
                <span class="font-semibold text-[11px]">transformando sonhos em realidade! 🌟</span>

              </p>
            </div>
          </div>

          <!-- Mensagem motivacional -->
          <div class="mb-2 p-3 bg-gradient-to-r from-violet-100 via-purple-100 to-pink-100 rounded-xl border border-purple-200">
            <p class="text-purple-800 text-[11px] font-medium italic">
              {{ motivationalMessage }}
            </p>
          </div>

          <!-- Detalhes -->
          <div class="bg-white border border-emerald-200 rounded-xl p-2 mb-4 shadow-inner">
            <div class="grid grid-cols-2 gap-2 text-[11px]">
              <div class="text-center">
                <div class="text-emerald-600 font-bold text-base">{{ appointmentTime }}</div>
                <div class="text-gray-600">Horário</div>
              </div>
              <div class="text-center">
                <div class="text-emerald-600 font-bold text-base">{{ duration }}h</div>
                <div class="text-gray-600">Duração</div>
              </div>
            </div>
          </div>

          <!-- Botões -->
          <div class="space-y-2">
            <button 
              @click="closeModal"
              class="w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 active:scale-95"
            >
              🚀 Que alegria! Estou pronto(a)! 🚀
            </button>
            
            <button 
              v-if="showSecondaryAction"
              @click="$emit('secondary-action')"
              class="w-full bg-white border border-emerald-200 text-emerald-700 px-4 py-2 rounded-xl font-semibold text-xs hover:bg-emerald-50 transition-all duration-200"
            >
              📋 Ver minha agenda completa
            </button>
          </div>

          <!-- Rodapé -->
          <div class="mb-1 text-center">
            <p class="text-[10px] text-gray-500 italic">
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
