<template>
  <div class="page-container">
    <!-- Header emocional e acolhedor -->
    <div class="mb-8">
      <div class="bg-gradient-to-br from-violet-500 via-purple-500 to-pink-500 rounded-2xl p-6 text-white shadow-2xl">
        <div class="flex items-start justify-between">
          <div class="flex-1">
            <div class="flex items-center mb-3">
              <div class="bg-white/20 rounded-full p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <span class="text-white/80 text-sm font-medium">SUA CLÍNICA PARTICULAR</span>
            </div>
            <h1 class="text-2xl font-bold mb-2">Sua agenda de transformações</h1>
            <p class="text-white/90 text-sm leading-relaxed">
              Cada agendamento é uma oportunidade de realizar sonhos. <br>
              <span class="font-medium">Este é o seu espaço para brilhar! ✨</span>
            </p>
          </div>
          <div class="bg-white/10 rounded-xl px-3 py-2 backdrop-blur-sm">
            <div class="text-xs text-white/70 mb-1">Próximos dias</div>
            <div class="text-lg font-bold">{{ getTabCount('upcoming') }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Call-to-Action Emocional -->
    <div class="bg-gradient-to-r from-emerald-400 via-teal-500 to-blue-500 rounded-2xl p-5 mb-6 text-white shadow-xl">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <div class="bg-white/20 rounded-full p-3 mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <div>
            <h3 class="font-bold text-lg mb-1">Que tal mais um dia de sucesso? 🌟</h3>
            <p class="text-white/90 text-sm">Reserve seu consultório dos sonhos agora mesmo</p>
          </div>
        </div>
        <button
          class="bg-white text-emerald-600 px-6 py-3 rounded-xl text-sm font-bold hover:bg-emerald-50 transition-all transform hover:scale-105 shadow-lg"
          @click="navigateToNewAppointment"
        >
          Quero reservar! 🎯
        </button>
      </div>
    </div>

    <!-- Filtros Empáticos -->
    <div class="mb-8">
      <div class="bg-white rounded-2xl p-4 shadow-lg border border-purple-100">
        <h3 class="text-sm font-bold text-gray-700 mb-3 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
          </svg>
          Organize seus atendimentos do seu jeito
        </h3>

        <div class="flex flex-wrap gap-3 mb-4">
          <button
            v-for="tab in tabs"
            :key="tab.value"
            @click="activeTab = tab.value"
            class="px-4 py-2.5 text-sm font-semibold rounded-full transition-all transform hover:scale-105"
            :class="activeTab === tab.value ?
              'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg' :
              'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 hover:from-purple-100 hover:to-pink-100'"
          >
            {{ tab.label }}
            <span v-if="getTabCount(tab.value) > 0" class="ml-2 text-xs bg-white/30 px-2 py-0.5 rounded-full">
              {{ getTabCount(tab.value) }}
            </span>
          </button>
        </div>

        <div class="relative">
          <input
            type="text"
            class="w-full pl-12 pr-4 py-3 bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl text-gray-700 placeholder-purple-400 focus:border-purple-400 focus:outline-none transition-all"
            placeholder="🔍 Encontre seu próximo atendimento especial..."
            v-model="searchQuery"
          />
          <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
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
      <div v-else class="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-2xl p-8 text-center shadow-xl border border-purple-100">
        <div class="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </div>
        <h3 class="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3">
          🎯 Sua agenda está aberta para o sucesso!
        </h3>
        <p class="text-gray-600 mb-8 leading-relaxed text-lg">
          <span class="font-semibold">Hora de fazer a diferença!</span><br>
          Sua estrutura dos sonhos na Neo Viso está te esperando.<br>
          <span class="text-purple-600 font-medium">✨ Cada agendamento é uma vida transformada!</span>
        </p>
        <button
          class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl text-lg font-bold hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg"
          @click="navigateToNewAppointment"
        >
          🚀 Vamos começar agora!
        </button>
      </div>
    </div>
    
    <!-- Agendamentos realizados -->
    <div v-if="activeTab === 'past'">
      <div v-if="appointmentsDone.length > 0" class="space-y-3">
        <AppointmentCard
          v-for="appointment in appointmentsDone"
          :key="appointment.id"
          :appointment="appointment"
          @edit="editAppointment"
        />
      </div>
      <div v-else class="card text-center py-12">
        <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">Sem atendimentos finalizados ainda</h3>
        <p class="text-gray-500 leading-relaxed">
          Quando você realizar seus primeiros atendimentos na Neo Viso,<br>
          eles aparecerão aqui como seu histórico de sucesso.
        </p>
      </div>
    </div>

    <!-- Agendamentos em aberto -->
    <div v-if="activeTab === 'open'">
      <div v-if="appointmentsOpen.length > 0" class="space-y-3">
        <AppointmentCard
          v-for="appointment in appointmentsOpen"
          :key="appointment.id"
          :appointment="appointment"
          @edit="editAppointment"
        />
      </div>
      <div v-else class="card text-center py-12">
        <div class="bg-gradient-to-br from-blue-50 to-sky-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">Nenhum agendamento em aberto</h3>
        <p class="text-gray-500 leading-relaxed">
          Perfeito! Você está com a agenda organizada.<br>
          Todos os seus horários estão confirmados ou finalizados.
        </p>
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
  { label: '📅 Meus próximos sonhos', value: 'upcoming' },
  { label: '✨ Transformações realizadas', value: 'past' },
  { label: '⏳ Aguardando confirmação', value: 'open' },
];

// Função para contar items em cada tab
const getTabCount = (tabValue) => {
  switch (tabValue) {
    case 'upcoming':
      return filteredAppointments.value.length
    case 'past':
      return appointmentsDone.value.length
    case 'open':
      return appointmentsOpen.value.length
    default:
      return 0
  }
}

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
