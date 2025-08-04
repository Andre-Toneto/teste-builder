<template>
  <div>
    <v-text-field v-model="formattedTime" :rules="timeRules" :label="inputName" variant="outlined" color="primary" rounded="xl" readonly @click="dialog = true">
        <template v-slot:append-inner>
            <v-icon @click="dialog = true">mdi-clock-outline</v-icon>
        </template>
    </v-text-field>

    <v-dialog v-model="dialog" max-width="200">
        <v-card>
        <v-card-title>{{ inputNameDialog }}</v-card-title>
        <v-text-field class="mx-4" v-model="formattedTime"  variant="underlined" color="secondary" readonly>

        </v-text-field>
        <v-card-text>
            <div class="d-flex justify-space-between">
              <div align="center">
                <small>Hora</small>
                <v-list class="time-list">
                    <v-list-item v-for="h in hours" :key="h" @click="selectHour(h)">
                    {{ h }}
                    </v-list-item>
                </v-list>
              </div>
              <div align="center">
                <small>Minuto</small>
                <v-list class="time-list">
                    <v-list-item v-for="m in minutes" :key="m" @click="selectMinute(m)">
                    {{ m }}
                    </v-list-item>
                </v-list>
              </div>
            </div>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red" text @click="dialog = false">Cancelar</v-btn>
            <v-btn color="primary" text @click="confirmTime">OK</v-btn>
        </v-card-actions>
        </v-card>
    </v-dialog>
  </div>
</template>
<script setup>

const emits = defineEmits(['onTime'])

const props = defineProps({
  inputName: {
    type: String,
    default: ''
  },
  inputNameDialog: {
    type: String,
    default: ''
  },
  durationBackend: {
    type: String,
    default: ''
  }
})

const dialog = ref(false);
const selectedHour = ref('00');
const selectedMinute = ref('00');
const formattedTime = ref('00:00'); // Estado reativo que pode ser alterado

const timeRules = ref([
value => {
          if (value != '00:00') return true

          return 'Selecione a duração.'
        }
])

watchEffect(() => {
  if (props.durationBackend) {
    formattedTime.value = props.durationBackend;
    const [hour, minute] = props.durationBackend.split(':');
    selectedHour.value = hour;
    selectedMinute.value = minute;
  }
});

const hours = Array.from({ length: 24 }, (_, i) => (i ).toString().padStart(2, '0'));
const minutes = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0'));

const selectHour = (hour) => {
  selectedHour.value = hour;
  updateFormattedTime();
};

const selectMinute = (minute) => {
  selectedMinute.value = minute;
  updateFormattedTime();
};

const updateFormattedTime = () => {
  formattedTime.value = `${selectedHour.value}:${selectedMinute.value}`;
};



const confirmTime = () => {
  dialog.value = false;
  emits('onTime', formattedTime)
};
</script>
<style scoped>
.time-list, .ampm-list {
  max-height: 150px;
  overflow-y: auto;
  text-align: center;
}
</style>