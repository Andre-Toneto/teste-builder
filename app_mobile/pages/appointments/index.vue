<template>
  <div class="page-container">
    <h1 class="page-title">Agendamentos</h1>
    
    <div class="mb-6 flex justify-between items-center">
      <button 
        v-for="tab in tabs" 
        :key="tab.value" 
        @click="activeTab = tab.value" 
        class="px-3 py-2 text-sm font-medium rounded-md"
        :class="activeTab === tab.value ? 'bg-primary-100 text-primary-700' : 'text-gray-600 hover:bg-gray-100'"
      >
        {{ tab.label }}
      </button>
    </div>
    <div class="mb-2">
      <div class="relative">
        <input 
          type="text" 
          class="input-field pl-10" 
          placeholder="Procurar por Serviço ou Data"
          v-model="searchQuery"
        />
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
    </div>
    
    <div class="mb-4">
      <button 
        class="btn-primary w-full mb-6"
        @click="navigateToNewAppointment"
      >
        Novo Agendamento
      </button>
    </div>

    <!-- Upcoming appointments section -->
    <div v-if="activeTab === 'upcoming'">
      <div v-if="filteredAppointments.length > 0">
        <AppointmentCard 
          v-for="appointment in filteredAppointments" 
          :key="appointment.id" 
          :appointment="appointment" 
          @reschedule="handleReschedule"
          @cancel="handleCancel"
          @edit="editAppointment"
        />
      </div>
      <div v-else class="text-center py-8">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto text-gray-300 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <p class="text-gray-500 mb-4">Nenhum agendamento realizado</p>
        <button class="btn-primary" @click="navigateToNewAppointment">Agendar Agora!</button>
      </div>
    </div>
    
    <!-- Past appointments section -->
    <div v-if="activeTab === 'past'">
      <div v-if="appointmentsDone.length > 0">
        <AppointmentCard 
          v-for="appointment in appointmentsDone" 
          :key="appointment.id" 
          :appointment="appointment" 
          @edit="editAppointment"
        />
      </div>
      <div v-else class="text-center py-8">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto text-gray-300 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p class="text-gray-500">Sem agendamentos realizados</p>
      </div>
    </div>
    
    <!-- Cancelled appointments section -->
    <div v-if="activeTab === 'open'">
      <div v-if="appointmentsOpen.length > 0">
        <AppointmentCard 
          v-for="appointment in appointmentsOpen" 
          :key="appointment.id" 
          :appointment="appointment" 
          @edit="editAppointment"
        />
      </div>
      <div v-else class="text-center py-8">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto text-gray-300 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
        <p class="text-gray-500">Sem agendamentos abertos</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useScheduling } from '@/stores/appScheduling';
import { useApp } from '@/stores/app';

const router = useRouter();


const searchQuery = ref('');
const activeTab = ref('upcoming');
const tabs = [
  { label: 'Todos', value: 'upcoming' },
  { label: 'Realizados', value: 'past' },
  { label: 'Abertos', value: 'open' },
];

const appointments = computed(() => {
  return [...useScheduling().datasource].sort((a, b) => {
    return new Date(b.startTime).getTime() - new Date(a.startTime).getTime()
  })
})


const matchSearch= (a) => {
  if (!searchQuery.value) return true
  const query = searchQuery.value.toLowerCase()
  const service = a.subject?.toLowerCase() || ''
  const dateStr = new Date(a.startTime).toLocaleDateString('pt-BR')
  return service.includes(query) || dateStr.includes(query)
}

const appointmentsDone = computed(() => {
  return appointments.value.filter(a => a.status === 'Realizado' && matchSearch(a))
})

const appointmentsOpen = computed(() => {
  return appointments.value.filter(a => a.status === 'Aberto' && matchSearch(a))
})

const filteredAppointments = computed(() => {
  if (!searchQuery.value) return appointments.value;

  const query = searchQuery.value.toLowerCase();

  return appointments.value.filter(a => {
    const service = a.subject?.toLowerCase() || '';
    const dateStr = new Date(a.startTime).toLocaleDateString('pt-BR'); // ou ISO se preferir
    return service.includes(query) || dateStr.includes(query);
  });
});
// Mock appointment data

function navigateToNewAppointment() {
  router.push('/appointments/new');
}

function handleReschedule(appointmentId) {
  // In a real app, this would open a reschedule UI
  alert(`Reschedule appointment ${appointmentId}`);
}

function handleCancel(appointmentId) {
  // In a real app, this would have a confirmation dialog
  alert(`Cancel appointment ${appointmentId}`);
}

const editAppointment = (id) => {
  router.push(`appointments/${id}`)
}

onMounted( async() => {

  if (useApp().user.user_type == 'P') {
    await useScheduling().getScheduleOwner(useApp().user.user_type, useApp().user.id) 
  } 
  else if (useApp().user.user_type == 'C') {
    await useScheduling().getScheduleOwner(useApp().user.user_type, useApp().user.id_clinic) 
  }
  else {
    await useScheduling().getSchedule()
  }
})
</script>