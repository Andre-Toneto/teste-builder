<template>
  <div class="page-container">
    <!-- Header acolhedor -->
    <div class="mb-6">
      <h1 class="text-2xl font-bold text-gray-800 mb-2">Seus horários na Neo Viso</h1>
      <p class="text-gray-600">Gerencie sua agenda e escolha os melhores horários para seus atendimentos</p>
    </div>

    <!-- CTA destacado -->
    <div class="bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl p-4 mb-6 text-white">
      <div class="flex items-center justify-between">
        <div>
          <h3 class="font-semibold mb-1">Pronto para mais um dia incrível?</h3>
          <p class="text-primary-100 text-sm">Reserve seu consultório e transforme vidas</p>
        </div>
        <button
          class="bg-white text-primary-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-50 transition-colors"
          @click="navigateToNewAppointment"
        >
          Reservar horário
        </button>
      </div>
    </div>

    <!-- Filtros melhorados -->
    <div class="mb-6">
      <div class="flex flex-wrap gap-2 mb-4">
        <button
          v-for="tab in tabs"
          :key="tab.value"
          @click="activeTab = tab.value"
          class="px-4 py-2 text-sm font-medium rounded-full transition-all"
          :class="activeTab === tab.value ? 'bg-primary-600 text-white shadow-sm' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'"
        >
          {{ tab.label }}
          <span v-if="getTabCount(tab.value) > 0" class="ml-1 text-xs bg-white bg-opacity-20 px-1.5 py-0.5 rounded-full">
            {{ getTabCount(tab.value) }}
          </span>
        </button>
      </div>

      <div class="relative">
        <input
          type="text"
          class="input-field pl-10 bg-white"
          placeholder="Buscar por procedimento ou data..."
          v-model="searchQuery"
        />
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
    </div>

    <!-- Todos os agendamentos -->
    <div v-if="activeTab === 'upcoming'">
      <div v-if="filteredAppointments.length > 0" class="space-y-3">
        <AppointmentCard
          v-for="appointment in filteredAppointments"
          :key="appointment.id"
          :appointment="appointment"
          @reschedule="handleReschedule"
          @cancel="handleCancel"
          @edit="editAppointment"
        />
      </div>
      <div v-else class="card text-center py-12">
        <div class="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">Sua agenda está livre!</h3>
        <p class="text-gray-500 mb-6 leading-relaxed">
          Que tal reservar um horário na nossa estrutura completa?<br>
          A Neo Viso está pronta para receber seus pacientes.
        </p>
        <button class="btn-primary" @click="navigateToNewAppointment">
          Escolher meu horário
        </button>
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
