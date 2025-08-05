<template>
  <div class="page-container">
    <!-- Bloco de boas-vindas personalizado -->
    <WelcomeBlock
      :user-name="useApp().user.name || 'Doutor(a)'"
      :next-appointment="getNextAppointmentTime()"
      class="mb-6"
    />

    <!-- Estruturas disponíveis -->
    <section class="mb-8">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-lg font-semibold text-gray-800">Estruturas disponíveis</h2>
        <NuxtLink to="/locations" class="text-primary-600 text-sm font-medium">Ver todas</NuxtLink>
      </div>

      <div class="grid grid-cols-1 gap-4 mb-4">
        <StructureCard
          v-for="room in availableRooms"
          :key="room.id"
          :room="room"
          @reserve="handleRoomReservation"
        />
      </div>

      <div class="bg-primary-50 border border-primary-100 rounded-xl p-4">
        <div class="flex items-start space-x-3">
          <div class="bg-primary-100 rounded-full p-2 flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p class="text-sm font-medium text-primary-800 mb-1">Sua estrutura completa te espera</p>
            <p class="text-xs text-primary-600 leading-relaxed">
              Consultórios equipados, suporte técnico e ambiente acolhedor para seus pacientes.
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <section class="mb-8">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-md font-medium">Último agendamento</h2>
        <NuxtLink to="/appointments" class="text-primary-600 text-sm font-medium">Ver todos</NuxtLink>
      </div>
      
      <div v-if="lastAppointment">
        <AppointmentCard 
          :key="lastAppointment.id" 
          :appointment="lastAppointment" 
          class="mb-3"
        />
      </div>
      <div v-else class="card flex flex-col items-center justify-center py-8">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-gray-300 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <p class="text-gray-500 mb-4">Sem agendamentos</p>
        <NuxtLink to="/appointments/new" class="btn-primary">Agende agora!</NuxtLink>
      </div>
    </section>
    
    <section class="mb-8">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-lg font-medium">Serviços em destaque</h2>
        <NuxtLink to="/appointments" class="text-primary-600 text-sm font-medium">Ver todos</NuxtLink>
      </div>
      
      <div class="grid grid-cols-2 gap-3">
        <div v-for="treatment in featuredTreatments" :key="treatment.id" class="card p-3 flex flex-col">
          <div class="h-32 mb-2 bg-gray-100 rounded-lg overflow-hidden">
            <img src="data:image/jpeg;base64,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" :alt="treatment.name" class="h-full w-full object-cover" />
          </div>
          <h3 class="text-sm font-medium mb-1">{{ treatment.description }}</h3>
          <p class="text-xs text-gray-500">{{ treatment.duration }}</p>
          <div class="mt-auto pt-2">
            <p class="text-primary-600 font-semibold">R${{ treatment.price }}</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- <section class="mb-8">
      <div class="card bg-primary-50 border border-primary-100">
        <div class="flex items-center">
          <div class="flex-shrink-0 p-3 bg-primary-100 rounded-lg mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p class="text-sm font-medium text-gray-800">Your Points</p>
            <p class="text-2xl font-semibold text-primary-700">{{ user.points }}</p>
          </div>
        </div>
      </div>
    </section> -->
    
    <!-- <section>
      <h2 class="text-lg font-medium mb-4">Nearest Clinic</h2>
      
      <div class="card">
         <div class="h-40 -mx-4 -mt-4 mb-4 bg-gray-200 relative">
          <div class="absolute inset-0 flex items-center justify-center">
            <p class="text-gray-500">Map loading...</p>
          </div>
        </div> 
        
        <h3 class="font-medium mb-1">Neoviso Downtown</h3>
        <p class="text-gray-600 text-sm mb-3">123 Beauty Ave, Suite 200</p>
        <div class="flex items-center justify-between">
          <span class="text-sm text-gray-500">1.2 miles away</span>
          <a href="tel:+15551234567" class="btn-primary text-sm py-1.5">Call Now</a>
        </div>
      </div>
    </section> -->
  </div>
</template>

<script setup>

import {useApp} from '../stores/app'
import { useAppProducts } from '../stores/appProducts';
import { useScheduling } from '@/stores/appScheduling';

// Mock user data
const user = ref({
  firstName: 'Sarah',
  lastName: 'Johnson',
  email: 'sarah.j@example.com',
  points: 1250
});

// Mock upcoming appointments
const upcomingAppointments = ref([
  {
    id: 1,
    date: '2023-05-15T10:30:00',
    service: 'Facial Treatment',
    clinic: 'Neoviso Downtown',
    status: 'confirmed'
  }
]);

// Mock featured treatments

const featuredTreatments = computed(() => {
  return useAppProducts().datasource.slice(0, 2);
});

const lastAppointment = computed(() => {
  const appointments = useScheduling().datasource;
  if (!appointments.length) return null;

  // Ordena por data em ordem decrescente e pega o primeiro
  return [...appointments]
    .sort((a, b) => new Date(b.startTime).getTime() - new Date(a.startTime).getTime())[0];
});

onMounted( async() => {
  await useAppProducts().getProducts()
  
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
