<template>
  <div v-if="!isDismissed" class="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-2xl p-4 mb-6 shadow-lg">
    <div class="flex items-start justify-between">
      <div class="flex items-start space-x-3">
        <div class="bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full p-2 flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
        <div class="flex-1">
          <h3 class="font-bold text-amber-800 text-sm mb-1 flex items-center">
            💡 {{ tipTitle }}
          </h3>
          <p class="text-amber-700 text-sm leading-relaxed">{{ tipContent }}</p>
          <div v-if="tipAction" class="mt-3">
            <button 
              @click="handleAction"
              class="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-4 py-2 rounded-lg text-xs font-bold hover:from-amber-600 hover:to-yellow-600 transition-all"
            >
              {{ tipAction.text }}
            </button>
          </div>
        </div>
      </div>
      <button 
        @click="dismissTip"
        class="text-amber-500 hover:text-amber-700 p-1 rounded-full hover:bg-amber-100 transition-all"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  tipId: {
    type: String,
    required: true
  },
  tipTitle: {
    type: String,
    required: true
  },
  tipContent: {
    type: String,
    required: true
  },
  tipAction: {
    type: Object,
    default: null
  }
})

const isDismissed = ref(false)

const checkIfDismissed = () => {
  if (process.client) {
    const dismissed = localStorage.getItem(`tip_dismissed_${props.tipId}`)
    isDismissed.value = dismissed === 'true'
  }
}

const dismissTip = () => {
  isDismissed.value = true
  if (process.client) {
    localStorage.setItem(`tip_dismissed_${props.tipId}`, 'true')
  }
}

const handleAction = () => {
  if (props.tipAction?.route) {
    navigateTo(props.tipAction.route)
  }
  if (props.tipAction?.callback) {
    props.tipAction.callback()
  }
}

onMounted(() => {
  checkIfDismissed()
})
</script>
