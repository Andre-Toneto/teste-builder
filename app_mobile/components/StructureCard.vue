<template>
  <div class="structure-card group cursor-pointer" @click="reserveRoom">
    <div class="structure-image">
      <img 
        :src="room.image || defaultImage" 
        :alt="`Sala ${room.name}`"
        class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      
      <!-- Badge de status -->
      <div class="absolute top-3 right-3">
        <div class="status-badge" :class="statusClass">
          <div class="w-2 h-2 rounded-full mr-1.5" :class="statusDotClass"></div>
          <span class="text-xs font-medium">{{ statusText }}</span>
        </div>
      </div>
      
      <!-- Info da sala -->
      <div class="absolute bottom-3 left-3 right-3">
        <h3 class="text-white font-semibold text-sm mb-1">{{ room.name }}</h3>
        <p class="text-white/80 text-xs mb-2">{{ room.description }}</p>
        
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-2 text-white/70 text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-2.239" />
            </svg>
            <span>{{ room.capacity || 2 }} pessoas</span>
          </div>
          
          <div class="flex items-center space-x-1 text-white/70 text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{{ room.nextAvailable || 'Agora' }}</span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- CTA Button -->
    <div class="p-3">
      <button class="reserve-button w-full" :disabled="room.status === 'ocupada'">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        {{ buttonText }}
      </button>
    </div>
  </div>
</template>

<script setup>
interface Room {
  id: string
  name: string
  description: string
  image?: string
  status: 'disponivel' | 'ocupada' | 'reservada'
  capacity?: number
  nextAvailable?: string
}

interface Props {
  room: Room
}

const props = defineProps<Props>()

const defaultImage = 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=250&fit=crop&crop=center'

const statusClass = computed(() => {
  switch (props.room.status) {
    case 'disponivel':
      return 'bg-green-500 text-white'
    case 'ocupada':
      return 'bg-red-500 text-white'
    case 'reservada':
      return 'bg-yellow-500 text-white'
    default:
      return 'bg-gray-500 text-white'
  }
})

const statusDotClass = computed(() => {
  switch (props.room.status) {
    case 'disponivel':
      return 'bg-green-300 animate-pulse'
    case 'ocupada':
      return 'bg-red-300'
    case 'reservada':
      return 'bg-yellow-300'
    default:
      return 'bg-gray-300'
  }
})

const statusText = computed(() => {
  switch (props.room.status) {
    case 'disponivel':
      return 'Disponível'
    case 'ocupada':
      return 'Em uso'
    case 'reservada':
      return 'Reservada'
    default:
      return 'Indisponível'
  }
})

const buttonText = computed(() => {
  switch (props.room.status) {
    case 'disponivel':
      return 'Reservar agora'
    case 'ocupada':
      return 'Em atendimento'
    case 'reservada':
      return 'Já reservada'
    default:
      return 'Indisponível'
  }
})

const emit = defineEmits(['reserve'])

const reserveRoom = () => {
  if (props.room.status === 'disponivel') {
    emit('reserve', props.room)
  }
}
</script>

<style scoped>
.structure-card {
  @apply bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md;
}

.structure-image {
  @apply relative h-32 overflow-hidden;
}

.status-badge {
  @apply px-2 py-1 rounded-full backdrop-blur-sm flex items-center;
}

.reserve-button {
  @apply flex items-center justify-center py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200;
  @apply bg-primary-600 hover:bg-primary-700 text-white;
  @apply disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed;
}
</style>
