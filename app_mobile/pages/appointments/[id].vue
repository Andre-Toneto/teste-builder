<template>
  <div class="page-container">
    <div class="mb-6">
      <button @click="router.back()" class="flex items-center text-gray-600">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        Voltar
      </button>
    </div>
    
    <h1 class="page-title">Agende um Serviço</h1>
    
    <div class="mb-6">
      <div class="relative w-full h-1 bg-gray-200 rounded-full overflow-hidden mb-2">
        <div class="absolute h-full bg-primary-500" :style="`width: ${(currentStep / (totalSteps - 1)) * 100}%`"></div>
      </div>
      <div class="flex justify-between text-xs text-gray-500">
        <span v-for="step in dynamicSteps" :key="step">
          {{ formatStepLabel(step) }}
        </span>
      </div>
    </div>
        <div v-if="isStep('service')" class="space-y-4">
          <h2 class="text-lg font-medium mb-4">Selecione um serviço</h2>
            <div class="space-y-3">
              <div 
                v-for="list in services" 
                :key="list.id" 
                class="card cursor-pointer transition-all"
                :class="selectedService?.id === list.id ? 'border-2 border-primary-500' : ''"
                @click="selectService(list)"
              >
              <div class="flex justify-between">
                <div>
                  <h4 class="font-medium">{{ list.description }}</h4>
                  <p class="text-sm text-gray-500">{{ list.period }}</p>
                </div>
                <div class="text-right">
                  <p class="font-medium">R${{ list.price }}</p>
                  <!-- <p v-if="service.points" class="text-xs text-primary-600">+ {{ service.points }} points</p> -->
                </div>
            </div>
        </div>
      </div>
      
      <button 
        class="btn-primary w-full mt-6" 
        :disabled="!selectedService" 
        :class="{'opacity-50 cursor-not-allowed': !selectedService}"
        @click="nextStep"
      >
        Continue
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