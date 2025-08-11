<template>
  <div class="weekly-calendar bg-white rounded-2xl shadow-xl border border-purple-100 overflow-hidden">
    <!-- Header da Semana -->
    <div class="bg-gradient-to-r from-purple-500 to-pink-500 p-4 text-white">
      <div class="flex items-center justify-between mb-4">
        <button 
          @click="previousWeek"
          class="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <div class="text-center">
          <h2 class="text-lg font-bold">{{ formatWeekRange }}</h2>
          <p class="text-white/80 text-sm">Sua agenda de sucesso ✨</p>
        </div>
        
        <button 
          @click="nextWeek"
          class="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      <!-- Botões de Visualização -->
      <div class="flex space-x-2 sm:space-x-3">
        <button
          @click="viewMode = 'week'"
          :class="viewMode === 'week' ? 'bg-white text-purple-500' : 'bg-white/20 text-white'"
          class="px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-sm sm:text-base font-semibold transition-all touch-manipulation flex-1 sm:flex-none"
        >
          📅 <span class="hidden sm:inline">Semana</span>
        </button>
        <button
          @click="viewMode = 'day'"
          :class="viewMode === 'day' ? 'bg-white text-purple-500' : 'bg-white/20 text-white'"
          class="px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-sm sm:text-base font-semibold transition-all touch-manipulation flex-1 sm:flex-none"
        >
          📋 <span class="hidden sm:inline">Dia</span>
        </button>
      </div>
    </div>

    <!-- Visualização Semanal -->
    <div v-if="viewMode === 'week'" class="p-2 sm:p-4">
      <!-- Cabeçalho dos Dias -->
      <div class="grid grid-cols-4 gap-1 sm:gap-2 mb-4">
        <div
          v-for="day in weekDays"
          :key="day.date"
          class="text-center p-2 sm:p-3 rounded-lg"
          :class="isToday(day.date) ? 'bg-gradient-to-br from-purple-100 to-pink-100 text-purple-700' : 'text-gray-600'"
        >
          <div class="text-xs sm:text-sm font-medium">{{ day.dayName }}</div>
          <div class="text-sm sm:text-base font-bold mt-1">{{ day.dayNumber }}</div>
        </div>
      </div>

      <!-- Grid de Horários -->
      <div class="space-y-1 sm:space-y-2 max-h-96 overflow-y-auto">
        <div
          v-for="hour in businessHours"
          :key="hour"
          class="grid grid-cols-4 gap-1 sm:gap-2"
        >
          <div
            v-for="day in weekDays"
            :key="`${day.date}-${hour}`"
            class="relative min-h-14 sm:min-h-16 border border-gray-100 rounded-lg p-1 sm:p-2 hover:bg-purple-50 transition-all cursor-pointer touch-manipulation"
            :class="getSlotClass(day.date, hour)"
            @click="handleSlotClick(day.date, hour)"
          >
            <div class="text-xs sm:text-sm text-gray-500 mb-1 font-medium">{{ hour }}:00</div>
            <div v-if="getAppointmentForSlot(day.date, hour)" class="text-xs">
              <div class="font-semibold truncate text-white text-xs sm:text-sm">
                {{ getAppointmentForSlot(day.date, hour).subject }}
              </div>
              <div class="text-white/80 text-xs hidden sm:block">
                {{ formatAppointmentTime(getAppointmentForSlot(day.date, hour)) }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Visualiza��ão Diária -->
    <div v-if="viewMode === 'day'" class="p-2 sm:p-4">
      <!-- Seletor de Dia -->
      <div class="flex items-center justify-between mb-6">
        <button 
          @click="previousDay"
          class="text-purple-500 hover:text-purple-700 p-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <div class="text-center">
          <h3 class="text-lg font-bold text-gray-800">{{ formatSelectedDate }}</h3>
          <p class="text-sm text-gray-600">{{ getDayAppointmentsCount }} agendamentos</p>
        </div>
        
        <button 
          @click="nextDay"
          class="text-purple-500 hover:text-purple-700 p-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <!-- Lista de Horários do Dia -->
      <div class="space-y-3 max-h-96 overflow-y-auto">
        <div
          v-for="hour in businessHours"
          :key="hour"
          class="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 border border-gray-100 rounded-xl hover:bg-purple-50 transition-all cursor-pointer touch-manipulation"
          :class="getSlotClass(selectedDate, hour)"
          @click="handleSlotClick(selectedDate, hour)"
        >
          <div class="text-center min-w-16 sm:min-w-20">
            <div class="text-sm sm:text-base font-semibold text-gray-700">{{ hour }}:00</div>
            <div class="text-xs sm:text-sm text-gray-500">{{ hour + 1 }}:00</div>
          </div>
          
          <div class="flex-1">
            <div v-if="getAppointmentForSlot(selectedDate, hour)" class="bg-white rounded-lg p-3 sm:p-4">
              <div class="flex items-center justify-between">
                <div>
                  <h4 class="font-semibold text-gray-800 text-sm sm:text-base">
                    {{ getAppointmentForSlot(selectedDate, hour).subject }}
                  </h4>
                  <p class="text-xs sm:text-sm text-gray-600 mt-1">
                    {{ formatAppointmentTime(getAppointmentForSlot(selectedDate, hour)) }}
                  </p>
                </div>
                <div class="text-green-500">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
            <div v-else class="text-gray-400 text-sm sm:text-base">
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                </svg>
                <span class="hidden sm:inline">Horário disponível - Clique para agendar</span>
                <span class="sm:hidden">Disponível - Toque para agendar</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal de Confirmação -->
    <SuccessModal
      :show="showBookingFeedback"
      :appointment-details="selectedSlot"
      :message="`Perfeito! Sua sala estará prontinha e te esperando! O horário das ${selectedSlot?.time}:00 está reservado especialmente para você! 💖`"
      @close="showBookingFeedback = false"
      @secondary-action="$emit('view-appointments')"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  appointments: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['slot-click', 'appointment-click', 'view-appointments'])

const viewMode = ref('week')
const currentWeek = ref(new Date())
const selectedDate = ref(new Date())
const showBookingFeedback = ref(false)
const selectedSlot = ref(null)

const businessHours = [8, 9, 10, 11, 13, 14, 15, 16, 17, 18]

const weekDays = computed(() => {
  const start = new Date(currentWeek.value)
  const startOfWeek = start.getDate() - start.getDay()
  
  return Array.from({ length: 4 }, (_, i) => {
    const date = new Date(start.setDate(startOfWeek + i))
    return {
      date: date.toISOString().split('T')[0],
      dayName: date.toLocaleDateString('pt-BR', { weekday: 'short' }).replace('.', ''),
      dayNumber: date.getDate()
    }
  })
})

const formatWeekRange = computed(() => {
  const firstDay = weekDays.value[0]
  const lastDay = weekDays.value[3]
  return `${firstDay.dayNumber} - ${lastDay.dayNumber} de ${new Date(currentWeek.value).toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}`
})

const formatSelectedDate = computed(() => {
  return new Date(selectedDate.value).toLocaleDateString('pt-BR', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
})

const getDayAppointmentsCount = computed(() => {
  const dateStr = selectedDate.value.toISOString().split('T')[0]
  return props.appointments.filter(apt => 
    new Date(apt.startTime).toISOString().split('T')[0] === dateStr
  ).length
})

const isToday = (date) => {
  if (process.client) {
    return date === new Date().toISOString().split('T')[0]
  }
  return false
}

const getAppointmentForSlot = (date, hour) => {
  return props.appointments.find(apt => {
    const aptDate = new Date(apt.startTime)
    const aptDateStr = aptDate.toISOString().split('T')[0]
    const aptHour = aptDate.getHours()
    return aptDateStr === date && aptHour === hour
  })
}

const getSlotClass = (date, hour) => {
  const appointment = getAppointmentForSlot(date, hour)
  if (appointment) {
    const statusColors = {
      'Confirmado': 'bg-gradient-to-br from-green-400 to-emerald-500 text-white border-green-300',
      'Aberto': 'bg-gradient-to-br from-yellow-400 to-orange-500 text-white border-yellow-300',
      'Cancelado': 'bg-gradient-to-br from-red-400 to-pink-500 text-white border-red-300',
      'Realizado': 'bg-gradient-to-br from-blue-400 to-indigo-500 text-white border-blue-300'
    }
    return statusColors[appointment.status] || 'bg-gradient-to-br from-purple-400 to-pink-500 text-white'
  }
  return 'hover:bg-purple-50 border-gray-200'
}

const formatAppointmentTime = (appointment) => {
  const start = new Date(appointment.startTime)
  const end = new Date(appointment.endTime)
  return `${start.getHours()}:${start.getMinutes().toString().padStart(2, '0')} - ${end.getHours()}:${end.getMinutes().toString().padStart(2, '0')}`
}

const handleSlotClick = (date, hour) => {
  const appointment = getAppointmentForSlot(date, hour)
  
  if (appointment) {
    emit('appointment-click', appointment)
  } else {
    // Mostrar feedback de agendamento
    selectedSlot.value = { date, time: hour }
    showBookingFeedback.value = true
    
    emit('slot-click', { date, hour })
  }
}

const previousWeek = () => {
  const newDate = new Date(currentWeek.value)
  newDate.setDate(newDate.getDate() - 7)
  currentWeek.value = newDate
}

const nextWeek = () => {
  const newDate = new Date(currentWeek.value)
  newDate.setDate(newDate.getDate() + 7)
  currentWeek.value = newDate
}

const previousDay = () => {
  const newDate = new Date(selectedDate.value)
  newDate.setDate(newDate.getDate() - 1)
  selectedDate.value = newDate
}

const nextDay = () => {
  const newDate = new Date(selectedDate.value)
  newDate.setDate(newDate.getDate() + 1)
  selectedDate.value = newDate
}
</script>

<style scoped>
.weekly-calendar {
  font-family: 'Inter', system-ui, sans-serif;
}

/* Scroll suave */
.max-h-96 {
  scrollbar-width: thin;
  scrollbar-color: #e5e7eb #f3f4f6;
}

.max-h-96::-webkit-scrollbar {
  width: 6px;
}

.max-h-96::-webkit-scrollbar-track {
  background: #f3f4f6;
  border-radius: 3px;
}

.max-h-96::-webkit-scrollbar-thumb {
  background: #e5e7eb;
  border-radius: 3px;
}

.max-h-96::-webkit-scrollbar-thumb:hover {
  background: #d1d5db;
}
</style>
