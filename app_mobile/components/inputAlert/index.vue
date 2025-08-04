<template>
  <div class="text-center pa-4">
    <v-dialog
      v-model="props.showDialog"
      width="auto"
    >
      <v-card class=" text-center items-center align-items-center"
        width="400"
      >
        <v-icon  icon="mdi-alert-outline" size="100" color="tertiary"></v-icon>
        <v-card-text class="text-subtitle-1 font-weight-bold text-primary">
          {{ props.text }}
        </v-card-text>
          <v-progress-linear
            v-model="progress"
            color="secondary"
            height="5"
          ></v-progress-linear>

          <v-btn
            class="ms-auto"
            text="Ok"
            variant="tonal"
            width="100%"
            color="primary"
            @click="onClose"
          ></v-btn>
      </v-card>
    </v-dialog>
  </div>
 
</template>

<script setup>
import { ref, watch } from "vue";


const timeout = ref(null)

const emit = defineEmits(['OnClose']);
const props = defineProps({
  showDialog: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  },
  text: {
    type: String,
    default: ''
  }
})

const progress = ref(100); // Começa com 100%
let timer = null;

const onClose = () => {
  emit('OnClose', false);
  clearTimeout(timeout.value)
  resetProgress();
}

const startProgress = () => {
  progress.value = 100; // Inicia com a barra cheia
  let intervalTime = 100; // Intervalo de 100ms
  let maxDuration = 5000; // Duração de 10 segundos (5000ms)
  let decrement = (100 / maxDuration) * intervalTime;

  timer = setInterval(() => {
    if (progress.value > 0) {
      progress.value -= decrement; // Decrementa o valor
    } else {
      clearInterval(timer); // Para o timer quando chegar a 0
    }
  }, intervalTime);
}

const resetProgress = () => {
  if (timer) {
    clearInterval(timer);
    progress.value = 100; // Reseta para 100% quando o modal fechar
  }
}

watch(() => props.showDialog, (newValue) => {
  if (newValue) {
    startProgress();
    timeout.value = setTimeout(() => {
      onClose();
    }, 5000); // Fecha o modal após 10 segundos
  } else {
    resetProgress();
  }
});
</script>

<style scoped>
  </style>

