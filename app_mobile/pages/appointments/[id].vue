<template>
  <div class="page-container bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 min-h-screen">
    <!-- Header emocional e acolhedor -->
    <div class="mb-8 -mx-4 sm:-mx-6">
      <div class="bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 text-white py-8 px-6 relative overflow-hidden">
        <!-- Elementos decorativos -->
        <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full transform translate-x-8 -translate-y-8"></div>
        <div class="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/5 to-transparent rounded-full transform -translate-x-4 translate-y-4"></div>

        <div class="relative z-10">
          <!-- Botão Voltar estilizado -->
          <button @click="router.back()" class="flex items-center text-white/80 hover:text-white mb-6 transition-all transform hover:scale-105">
            <div class="bg-white/20 rounded-full p-2 mr-2 backdrop-blur-sm">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <span class="font-medium">Voltar</span>
          </button>

          <div class="text-center">
            <!-- Ícone animado -->
            <div class="mb-6">
              <div class="bg-white/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto shadow-lg backdrop-blur-sm animate-pulse">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>

            <h1 class="text-3xl font-bold mb-3 leading-tight">
              Monte seu dia dos sonhos! ✨
            </h1>
            <p class="text-white/90 text-lg leading-relaxed">
              Cada passo te aproxima do seu consultório particular<br>
              <span class="font-medium text-yellow-300">🎯 Vamos criar algo especial juntos!</span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Progresso melhorado -->
    <div class="mb-8 bg-white rounded-2xl p-6 shadow-lg border border-purple-100">
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-lg font-bold text-gray-800">Seu progresso</h3>
        <span class="text-sm font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
          {{ currentStep + 1 }} de {{ totalSteps }}
        </span>
      </div>

      <div class="relative w-full h-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full overflow-hidden mb-4">
        <div
          class="absolute h-full bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 rounded-full transition-all duration-500 ease-out"
          :style="`width: ${(currentStep / (totalSteps - 1)) * 100}%`"
        ></div>
      </div>

      <div class="flex justify-between text-xs">
        <span
          v-for="(step, index) in dynamicSteps"
          :key="step"
          :class="index <= currentStep ? 'text-purple-600 font-semibold' : 'text-gray-500'"
          class="transition-all"
        >
          {{ formatStepLabel(step) }}
        </span>
      </div>
    </div>
        <div v-if="isStep('service')" class="space-y-6">
          <div class="bg-white rounded-3xl p-8 shadow-xl border border-purple-100">
            <div class="text-center mb-8">
              <div class="bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h2 class="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3">
                Qual serviço você oferecerá?
              </h2>
              <p class="text-gray-600">Escolha o procedimento que transformará vidas hoje</p>
            </div>

            <div class="space-y-4">
              <div
                v-for="list in services"
                :key="list.id"
                class="p-6 rounded-2xl border-2 cursor-pointer transition-all transform hover:scale-105 hover:shadow-lg"
                :class="selectedService?.id === list.id ?
                  'border-purple-500 bg-gradient-to-r from-purple-50 to-indigo-50 shadow-lg' :
                  'border-gray-200 bg-white hover:border-purple-300 hover:bg-purple-50'"
                @click="selectService(list)"
              >
                <div class="flex justify-between items-center">
                  <div class="flex-1">
                    <div class="flex items-center space-x-3 mb-2">
                      <div
                        class="w-4 h-4 rounded-full border-2 transition-all"
                        :class="selectedService?.id === list.id ?
                          'bg-purple-500 border-purple-500' :
                          'border-gray-300'"
                      >
                        <div
                          v-if="selectedService?.id === list.id"
                          class="w-2 h-2 bg-white rounded-full m-0.5"
                        ></div>
                      </div>
                      <h4 class="font-bold text-lg text-gray-800">{{ list.description }}</h4>
                    </div>
                    <p class="text-sm text-gray-600 ml-7">{{ list.period }}</p>
                  </div>
                  <div class="text-right">
                    <p class="text-2xl font-bold text-purple-600">R${{ list.price }}</p>
                    <p class="text-xs text-gray-500">por sessão</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            class="w-full bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-700 text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-lg transition-all transform disabled:opacity-50 disabled:cursor-not-allowed enabled:hover:scale-105 enabled:hover:shadow-xl"
            :disabled="!selectedService"
            @click="nextStep"
          >
            <span v-if="selectedService">✨ Continuar com {{ selectedService.description }} ✨</span>
            <span v-else>Selecione um serviço para continuar</span>
          </button>
        </div>
    
    <!-- Step 2: Select Location -->
    <div v-if="isStep('clinic')" class="space-y-4">
      <h2 class="text-lg font-medium mb-4">Selecione a Clinica</h2>
      <div class="space-y-3">
        <div 
          v-for="clinic in clinics" 
          :key="clinic.id" 
          class="card cursor-pointer transition-all"
          :class="selectedClinic?.id === clinic.id ? 'border-2 border-primary-500' : ''"
          @click="selectClinic(clinic)"
        >
          <div class="flex justify-between">
            <div>
              <h4 class="font-medium">{{ clinic.company_name }}</h4>
              <p class="text-sm text-gray-500">
                {{ clinic.street_avenue }}, {{ clinic.number }}, {{ clinic.neighborhood }}, {{ clinic.city }}-{{ clinic.state }} 
              </p>
            </div>
            <div class="text-right">
              <!-- <p class="text-sm text-gray-500">{{ clinic.distance }}</p> -->
            </div>
          </div>
        </div>
      </div>
      
      <div class="flex space-x-3 mt-6">
        <button class="btn-outline flex-1" @click="prevStep">Voltar</button>
        <button 
          class="btn-primary flex-1" 
          :disabled="!selectedClinic" 
          :class="{'opacity-50 cursor-not-allowed': !selectedClinic}"
          @click="nextStep"
        >
          Continue
        </button>
      </div>
    </div>

    <div v-if="isStep('professional')" class="space-y-4">
      <h2 class="text-lg font-medium mb-4">Selecione um Profissional</h2>
      <div class="space-y-3">
        <div 
          v-for="prof in doctors" 
          :key="prof.id" 
          class="card cursor-pointer transition-all"
          :class="selectedProfessional?.id === prof.id ? 'border-2 border-primary-500' : ''"
          @click="selectProfessional(prof)"
        >
          <div class="flex justify-between">
            <div>
              <h4 class="font-medium">{{ prof.name }}</h4>
              <p class="text-sm text-gray-500">{{ prof.medical_specialty }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex space-x-3 mt-6">
        <button class="btn-outline flex-1" @click="prevStep">Voltar</button>
        <button 
          class="btn-primary flex-1" 
          :disabled="!selectedProfessional" 
          :class="{'opacity-50 cursor-not-allowed': !selectedProfessional}"
          @click="nextStep"
        >
          Continue
        </button>
      </div>
    </div>

    
    <!-- Step 3: Select Date & Time -->
    <div v-if="isStep('datetime')" class="space-y-4">
      <h2 class="text-lg font-medium mb-4">Selecione Dia & Hora</h2>
      
      <div class="mb-6">
        <!-- Simple date selector with 5 days -->
        <div class="flex space-x-3 overflow-x-auto  justify-center">
          <div>
            <v-date-picker
              v-model="selectedDate"
              color="#8b5cf6"
               locale="pt-BR"
              show-adjacent-months
              hide-header
            ></v-date-picker>

          </div>
        </div>
      </div>
      
      <div class="space-y-3">
        <p class="text-sm text-gray-600 font-medium">Horários disponíveis</p>
        <div class="grid grid-cols-3 gap-3">
          <button 
            v-for="slot in availableTimeSlots" 
            :key="slot"
            class="py-2 px-2 text-sm rounded-md border transition-all text-center"
            :class="selectedTime === slot ? 'bg-primary-100 border-primary-300 text-primary-700' : 'border-gray-200 text-gray-700 hover:bg-gray-50'"
            @click="selectTime(slot)"
          >
            {{ slot }}
          </button>
        </div>
      </div>
       <div class="space-y-3">
        <p class="text-sm text-gray-600 font-medium">Selecione a Duração</p>
        <div class="grid grid-cols-1 ">
          <inputsTime 
                :input-name="'Duração'" 
                :input-name-dialog="'Selecionar Hora'" 
                :duration-backend="selectedDuration" 
                @onTime="onTime" />
        </div>
      </div>
      
      <div class="flex space-x-3 mt-6">
        <button class="btn-outline flex-1" @click="prevStep">Voltar</button>
        <button 
          class="btn-primary flex-1" 
          :disabled="!selectedDate || !selectedTime || !selectedDuration" 
          :class="{'opacity-50 cursor-not-allowed': !selectedDate || !selectedTime || !selectedDuration}"
          @click="nextStep"
        >
          Continue
        </button>
      </div>
    </div>
    
    <!-- Step 4: Confirm Booking -->
    <div v-if="isStep('confirm')" class="space-y-4">
      <h2 class="text-lg font-medium mb-4">Confirme seu Agendamento</h2>
      
      <div class="card border border-gray-200 mb-6">
        <div class="border-b border-gray-200 pb-3 mb-3">
          <h3 class="font-medium">Detalhes do Agendamento</h3>
        </div>
        
        <div class="space-y-3">
          <div class="flex justify-between">
            <span class="text-gray-600">Serviço:</span>
            <span class="font-medium">{{ selectedService?.description }}</span>
          </div>
          <div v-if="userType === 'A' || userType === 'P'" class="flex justify-between" >
            <span class="text-gray-600">Local:</span>
            <span class="font-medium">{{ selectedClinic?.company_name }}</span>
          </div>
          <div v-if="userType === 'A' || userType === 'C'" class="flex justify-between">
            <span class="text-gray-600">Profissional:</span>
            <span class="font-medium">{{ selectedProfessional?.name }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-600">Dia:</span>
            <span class="font-medium">{{ formattedDate }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-600">Hora:</span>
            <span class="font-medium">{{ selectedTime }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-600">Duração:</span>
            <span class="font-medium">{{ selectedDuration }} hr</span>
          </div>
          <div class="border-t border-gray-200 pt-3 mt-3 flex justify-between">
            <span class="font-medium">Total:</span>
            <span class="font-semibold">R${{ selectedService?.price }}</span>
          </div>
        </div>
      </div>
      
      <div class="flex space-x-3">
        <button class="btn-outline flex-1" @click="prevStep">Voltar</button>
        <button 
          class="btn-primary flex-1"
          @click="confirmBooking"
        >
          Confirmar Agendamento
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>

import { useApp } from '@/stores/app';
import { useAppProducts } from '../../stores/appProducts';
import { useAppClinic } from '../../stores/appClinic';
import { useAppDoctors } from '@/stores/appDoctors';
import { useScheduling } from '../../stores/appScheduling';
import { formatarDataHoraParaISO } from "~/lib/utils";
import { calculateEndTime } from "~/lib/utils";

const router = useRouter();
const route = useRoute()

// const currentStep = ref(1);
// const totalSteps = 4;
const userType = ref('')

const dynamicSteps = computed(() => {
  const steps = ['service'];

  if (userType.value === 'A') {
    steps.push('clinic', 'professional');
  } else if (userType.value === 'P') {
    steps.push('clinic');
  } else if (userType.value === 'C') {
    steps.push('professional');
  }

  steps.push('datetime', 'confirm');
  return steps;
});

const status_page = ref("get")

const totalSteps = computed(() => dynamicSteps.value.length);

const currentStep = ref(0); // índice do step (começa em 0)


// State for appointment booking
const selectedService = ref(null);
const selectedClinic = ref(null);
const selectedProfessional = ref(null);
const selectedDate = ref(null);
const selectedTime = ref(null);
const selectedDuration = ref('')

const services = computed(() => {
  return useAppProducts().datasource
})

const clinics = computed(() => {
  return useAppClinic().datasource
})

const doctors = computed(() => {
  return useAppDoctors().datasource.filter(item => item.user_type === "P");
})

// Generate dates for the next 5 days
const availableDates = computed(() => {
  const dates = [];
  const days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
  const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  
  for (let i = 0; i < 30; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);
    
    dates.push({
      date: date.toISOString().split('T')[0],
      day: days[date.getDay()],
      number: date.getDate(),
      month: months[date.getMonth()]
    });
  }
  
  return dates;
});

// Mock time slots
const availableTimeSlots = ref([
  '9:00', '9:30', '10:00', '10:30', '11:00', '11:30',
  '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
  '16:00', '16:30'
]);

// Formatted selected date
const formattedDate = computed(() => {
  if (!selectedDate.value) return '';
  
  const date = new Date(selectedDate.value);
  return date.toLocaleDateString('pt-BR', { weekday: 'long', month: 'long', day: 'numeric' });
});


const isStep = (name) => {
  return dynamicSteps.value[currentStep.value] === name;
}

const formatStepLabel = (step) => {
   switch (step) {
    case 'service': return 'Serviço';
    case 'clinic': return 'Clínica';
    case 'professional': return 'Profissional';
    case 'datetime': return 'Dia & Hora';
    case 'confirm': return 'Confirmar';
    default: return step;
  }
}

const onTime = (value) => {
  selectedDuration.value = value.value
}

// Navigation functions
const nextStep = () => {
  // if (currentStep.value < totalSteps) {
  //   currentStep.value++;
  // }
  if (currentStep.value < totalSteps.value - 1) {
    currentStep.value++;
  }
}

const prevStep = () => {
  if (currentStep.value > 0) {
    currentStep.value--;
  }
}

// Selection functions
function selectService(service) {
  selectedService.value = service;
}

function selectClinic(clinic) {
  selectedClinic.value = clinic;
}

function selectProfessional(prof) {
  selectedProfessional.value = prof;
}

function selectTime(time) {
  selectedTime.value = time;
}

const confirmBooking = () => {

  let startTimeFormatted = formatarDataHoraParaISO(selectedDate.value, selectedTime.value)

  let valueToInsert = {
        "startTime": startTimeFormatted,
        "endTime": calculateEndTime(startTimeFormatted, selectedDuration.value),
        "id_clinic": userType.value == 'C' ? useApp().user.clinic : selectedClinic.value.id,
        "id_professional": userType.value == "P" ? useApp().user.id : selectedProfessional.value.id,
        "id_product": selectedService.value.id,
        "duration": selectedDuration.value
      };
  
      if(status_page.value == "insert") {
        useScheduling().createSchedule(valueToInsert).then(async () => {
            useApp().message.show = true;
            useApp().message.text = "Agendamento criado com sucesso!";
            useApp().message.color = "success";
        })

      } else if(status_page.value == "edit") {
        useScheduling().updateSchedule(route.params.id, valueToInsert).then(async () => {
          useApp().message.show = true;
          useApp().message.text = "Agendamento editado com sucesso!";
          useApp().message.color = "success";
        })
      }

  router.push('/appointments');
}

onBeforeMount(async() => { 
  await useAppProducts().getProducts()
  await useAppClinic().getClinics()
  await useAppDoctors().getDoctors();

  userType.value = useApp().user.user_type

  if (route.params.id == "new") {
    status_page.value = "insert"
  } else {
    status_page.value = "edit"

    useScheduling().getScheduleId(route.params.id).then((res) => {
      selectedService.value = services.value.find(service => service.id === res.id_product)
      selectedClinic.value = clinics.value.find(clinic => clinic.id === res.id_clinic)
      selectedProfessional.value = doctors.value.find(doc => doc.id === res.id_professional)

      selectedDate.value = new Date(res.startTime)
      selectedTime.value = new Date(res.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      selectedDuration.value = res.duration
    })

  }
})

</script>
