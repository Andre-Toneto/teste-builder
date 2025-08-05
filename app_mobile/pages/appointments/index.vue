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
            <h1 class="text-2xl font-bold mb-2">Monte seu dia com a estrutura da Neo Viso</h1>
            <p class="text-white/90 text-sm leading-relaxed">
              Cada dia que você reserva é uma oportunidade de transformar vidas. <br>
              <span class="font-medium">Sua agenda, seu consultório, seu sucesso! ✨</span>
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
            <h3 class="font-bold text-lg mb-1">Escolha seu dia de atuação 🌟</h3>
            <p class="text-white/90 text-sm">Reserve seu consultório particular e transforme vidas</p>
          </div>
        </div>
        <button
          class="bg-white text-emerald-600 px-6 py-3 rounded-xl text-sm font-bold hover:bg-emerald-50 transition-all transform hover:scale-105 shadow-lg"
          @click="navigateToNewAppointment"
        >
          Montar meu dia! 🎯
        </button>
      </div>
    </div>

    <!-- Dica Neo Viso -->
    <NeoVisoTip
      tip-id="appointments_concept"
      tip-title="Conceito Neo Viso: Sua clínica por um dia!"
      tip-content="Aqui você não está apenas alugando uma sala. Você se torna o dono da clínica durante seu atendimento! Estrutura completa, produtos premium e suporte 24/7 para você brilhar."
      :tip-action="{ text: '🎯 Ver como funciona', callback: () => navigateTo('/') }"
    />

    <!-- Filtros Empáticos e Controles de Visualização -->
    <div class="mb-8">
      <div class="bg-white rounded-2xl p-4 shadow-lg border border-purple-100">
        <h3 class="text-sm font-bold text-gray-700 mb-3 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
          </svg>
          Como você prefere ver seus dias de trabalho?
        </h3>

        <!-- Seletor de Visualização -->
        <div class="flex space-x-2 mb-4">
          <button
            @click="viewMode = 'list'"
            :class="viewMode === 'list' ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-purple-100'"
            class="px-4 py-2 rounded-lg text-sm font-semibold transition-all"
          >
            📋 Meus dias
          </button>
          <button
            @click="viewMode = 'calendar'"
            :class="viewMode === 'calendar' ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-purple-100'"
            class="px-4 py-2 rounded-lg text-sm font-semibold transition-all"
          >
            📅 Agenda
          </button>
        </div>

        <div v-if="viewMode === 'list'" class="flex flex-wrap gap-3 mb-4">
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

        <div v-if="viewMode === 'list'" class="relative">
          <input
            type="text"
            class="w-full pl-12 pr-4 py-3 bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl text-gray-700 placeholder-purple-400 focus:border-purple-400 focus:outline-none transition-all"
            placeholder="🔍 Procurar por um dia específico ou procedimento..."
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

    <!-- Visualização de Agenda (Calendário) -->
    <div v-if="viewMode === 'calendar'">
      <WeeklyCalendar
        :appointments="appointments"
        @slot-click="handleSlotClick"
        @appointment-click="handleAppointmentClick"
      />
    </div>

    <!-- Visualização em Lista -->
    <div v-if="viewMode === 'list'">
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
            🎯 Pronto para montar seus próximos dias?
          </h3>
          <p class="text-gray-600 mb-8 leading-relaxed text-lg">
            <span class="font-semibold">Sua agenda está livre para você escolher!</span><br>
            Reserve seus dias na Neo Viso e transforme vidas com nossa estrutura.<br>
            <span class="text-purple-600 font-medium">✨ Cada dia de trabalho é uma oportunidade de brilhar!</span>
          </p>
          <button
            class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl text-lg font-bold hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg"
            @click="navigateToNewAppointment"
          >
            🚀 Escolher meu dia!
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
        <div v-else class="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 rounded-2xl p-8 text-center shadow-xl border border-emerald-100">
          <div class="bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-500 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-3">
            🏆 Seus dias de sucesso aparecerão aqui!
          </h3>
          <p class="text-gray-600 leading-relaxed text-lg">
            <span class="font-semibold">Este será seu histórico de conquistas! 🌟</span><br>
            Cada dia de trabalho na Neo Viso vira uma<br>
            <span class="text-emerald-600 font-medium">lembrança especial para celebrar!</span>
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
        <div v-else class="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-8 text-center shadow-xl border border-blue-100">
          <div class="bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-500 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
            ✅ Organização em dia = Sucesso garantido!
          </h3>
          <p class="text-gray-600 leading-relaxed text-lg">
            <span class="font-semibold">Parabéns, profissional! 🎉</span><br>
            Sua agenda está 100% organizada.<br>
            <span class="text-blue-600 font-medium">✨ Tudo confirmado para o seu sucesso!</span>
          </p>
        </div>
      </div>
    </div>

    <!-- Feedback de Confirmação -->
    <div v-if="showConfirmationFeedback" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div class="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl">
        <div class="text-center">
          <div class="bg-gradient-to-br from-green-400 to-emerald-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h3 class="text-xl font-bold text-gray-800 mb-3">
            🎉 Perfeito! Seu dia foi montado!
          </h3>

          <div class="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 mb-6">
            <p class="text-gray-700 text-sm mb-3">
              <span class="font-semibold text-purple-600">Sua estrutura dos sonhos estará pronta para você brilhar!</span>
            </p>
            <div class="space-y-2 text-xs text-gray-600">
              <div class="flex items-center justify-between">
                <span>📅 Data:</span>
                <span class="font-semibold">{{ confirmationDetails.date }}</span>
              </div>
              <div class="flex items-center justify-between">
                <span>⏰ Horário:</span>
                <span class="font-semibold">{{ confirmationDetails.time }}</span>
              </div>
              <div class="flex items-center justify-between">
                <span>🏢 Consultório:</span>
                <span class="font-semibold">Premium VIP</span>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-3 mb-6 border border-yellow-200">
            <p class="text-orange-800 text-sm">
              💡 <span class="font-semibold">Lembre-se:</span> Durante este horário, a clínica é sua! Produtos premium, suporte 24/7 e toda estrutura à sua disposição.
            </p>
          </div>

          <div class="space-y-3">
            <button
              @click="navigateToNewAppointment"
              class="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-3 px-6 rounded-xl font-bold hover:from-emerald-600 hover:to-teal-600 transition-all transform hover:scale-105"
            >
              ✨ Fazer outro agendamento
            </button>

            <button
              @click="showConfirmationFeedback = false"
              class="w-full border-2 border-gray-300 text-gray-700 py-2 px-6 rounded-xl font-semibold hover:bg-gray-50 transition-all"
            >
              📱 Voltar para agenda
            </button>
          </div>
        </div>
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
const viewMode = ref('list'); // 'list' or 'calendar'
const showConfirmationFeedback = ref(false);
const confirmationDetails = ref({});

const tabs = [
  { label: '📅 Próximos dias de trabalho', value: 'upcoming' },
  { label: '✨ Dias já realizados', value: 'past' },
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

// Funções para manuseio da agenda
const handleSlotClick = (slotData) => {
  // Mostrar feedback de confirmação
  const date = new Date(slotData.date)
  confirmationDetails.value = {
    date: date.toLocaleDateString('pt-BR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
    time: `${slotData.hour}:00 - ${slotData.hour + 1}:00`
  }
  showConfirmationFeedback.value = true
}

const handleAppointmentClick = (appointment) => {
  // Editar agendamento existente
  editAppointment(appointment.id)
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
