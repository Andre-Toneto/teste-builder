<template>
  <div class="page-container min-h-screen bg-gradient-to-b from-gray-50 to-white">
    <!-- Header com estilo emocional -->
    <div class="mb-6">
      <button 
        @click="router.back()" 
        class="flex items-center text-white bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-xl font-medium hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        ✨ Voltar ao reino
      </button>
    </div>
    
    <div v-if="clinic">
      <!-- Cabeçalho principal da clínica -->
      <div class="relative overflow-hidden bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 rounded-2xl gradient-section text-white mb-8 shadow-2xl">
        <!-- Decoração de fundo -->
        <div class="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white/10 rounded-full"></div>
        <div class="absolute bottom-0 left-0 -mb-8 -ml-8 w-32 h-32 bg-white/5 rounded-full"></div>
        
        <div class="relative z-10">
          <div class="flex items-center mb-4">
            <div class="bg-white/20 rounded-full p-3 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h4a1 1 0 011 1v5m-6 0h6" />
              </svg>
            </div>
            <div class="flex-1">
              <div class="text-white/80 text-xs font-semibold tracking-wider uppercase mb-1">SEU CASTELO PARTICULAR 🏰</div>
              <h1 class="text-2xl font-bold">{{ clinic.company_name }}</h1>
            </div>
          </div>

          <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <div class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 mt-0.5 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div class="flex-1">
                <p class="text-white text-sm font-medium">📍 {{ clinic.street_avenue }}, {{ clinic.number }}</p>
                <p class="text-white/80 text-xs">{{ clinic.city }} - {{ clinic.state }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Ações principais -->
      <div class="grid grid-cols-2 gap-4 mb-8">
        <a 
          :href="`tel:${clinic.phone}`" 
          class="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-4 rounded-xl text-center font-bold hover:from-green-600 hover:to-emerald-600 transition-all transform hover:scale-105 shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          📞 Ligar agora
        </a>
        <a 
          :href="`https://maps.google.com/?q=${clinic.street_avenue}${clinic.number}${clinic.city}`" 
          target="_blank" 
          class="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-4 rounded-xl text-center font-bold hover:from-blue-600 hover:to-indigo-600 transition-all transform hover:scale-105 shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
          🗺️ Ver no mapa
        </a>
      </div>

      <!-- Informações organizadas em cards emocionais -->
      <div class="space-y-6">
        <!-- Horário de funcionamento -->
        <div class="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-100 shadow-lg">
          <div class="flex items-center mb-4">
            <div class="bg-gradient-to-r from-amber-400 to-orange-500 rounded-full p-3 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h2 class="text-lg font-bold text-amber-800">⏰ Horários dos sonhos</h2>
              <p class="text-amber-600 text-sm">Quando a magia acontece!</p>
            </div>
          </div>
          
          <div class="space-y-3">
            <div class="flex justify-between items-center bg-white/50 rounded-lg p-3">
              <span class="font-medium text-amber-800">📅 Segunda - Sexta</span>
              <span class="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">9:00 - 18:00</span>
            </div>
            <div class="flex justify-between items-center bg-white/50 rounded-lg p-3">
              <span class="font-medium text-amber-800">📅 Sábado</span>
              <span class="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">10:00 - 16:00</span>
            </div>
            <div class="flex justify-between items-center bg-white/50 rounded-lg p-3">
              <span class="font-medium text-amber-800">📅 Domingo</span>
              <span class="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">Fechado</span>
            </div>
          </div>
        </div>

        <!-- Contatos -->
        <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100 shadow-lg">
          <div class="flex items-center mb-4">
            <div class="bg-gradient-to-r from-purple-400 to-pink-500 rounded-full p-3 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div>
              <h2 class="text-lg font-bold text-purple-800">💬 Vamos conversar?</h2>
              <p class="text-purple-600 text-sm">Todos os canais para te atender!</p>
            </div>
          </div>
          
          <div class="space-y-4">
            <a :href="`tel:${clinic.phone}`" class="flex items-center bg-white/50 rounded-lg p-4 hover:bg-white/70 transition-all group">
              <div class="bg-green-500 rounded-full p-2 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div class="flex-1">
                <div class="font-bold text-purple-800 group-hover:text-purple-900">📞 Telefone</div>
                <div class="text-purple-600 text-sm">{{ clinic.phone }}</div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-purple-400 group-hover:text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>

            <a :href="`mailto:${clinic.email}`" class="flex items-center bg-white/50 rounded-lg p-4 hover:bg-white/70 transition-all group">
              <div class="bg-blue-500 rounded-full p-2 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div class="flex-1">
                <div class="font-bold text-purple-800 group-hover:text-purple-900">📧 E-mail</div>
                <div class="text-purple-600 text-sm">{{ clinic.email }}</div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-purple-400 group-hover:text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>

            <a 
              :href="`https://wa.me/+55${clinic.phone}?text=Olá! Gostaria de mais informações sobre os serviços da Neoviso.`" 
              target="_blank" 
              class="flex items-center bg-white/50 rounded-lg p-4 hover:bg-white/70 transition-all group"
            >
              <div class="bg-green-600 rounded-full p-2 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.52 3.48A11.87 11.87 0 0012 0a11.94 11.94 0 00-10.25 17.96L0 24l6.3-1.67A11.93 11.93 0 0012 24c6.63 0 12-5.37 12-12a11.87 11.87 0 00-3.48-8.52zm-8.52 18.26a9.3 9.3 0 01-4.71-1.28l-.34-.2-3.73.99 1-3.64-.22-.37A9.37 9.37 0 1121.37 12a9.31 9.31 0 01-9.37 9.74zm5.23-6.97c-.29-.15-1.72-.85-1.99-.94s-.46-.15-.66.15-.76.94-.93 1.13-.34.22-.63.07a7.57 7.57 0 01-2.24-1.39 8.35 8.35 0 01-1.54-1.9c-.16-.28 0-.43.12-.58.12-.12.29-.34.43-.5a1.93 1.93 0 00.29-.48.51.51 0 000-.49c-.08-.15-.66-1.59-.9-2.17s-.47-.48-.66-.48h-.56a1.08 1.08 0 00-.78.36 3.26 3.26 0 00-1 2.43 5.67 5.67 0 001.2 2.91 13 13 0 005 4.5c1.86.8 2.59.86 3.52.72a2.87 2.87 0 001.88-1.31 2.36 2.36 0 00.16-1.31c-.07-.12-.26-.2-.56-.35z" />
                </svg>
              </div>
              <div class="flex-1">
                <div class="font-bold text-purple-800 group-hover:text-purple-900">💚 WhatsApp</div>
                <div class="text-purple-600 text-sm">{{ clinic.phone }}</div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-purple-400 group-hover:text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>

            <a v-if="clinic.site" :href="clinic.site" target="_blank" class="flex items-center bg-white/50 rounded-lg p-4 hover:bg-white/70 transition-all group">
              <div class="bg-indigo-500 rounded-full p-2 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <div class="flex-1">
                <div class="font-bold text-purple-800 group-hover:text-purple-900">🌐 Site</div>
                <div class="text-purple-600 text-sm">{{ clinic.site }}</div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-purple-400 group-hover:text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Botão de agendamento principal -->
      <div class="mt-8 mb-8">
        <div class="bg-gradient-to-br from-rose-500 via-pink-500 to-purple-600 rounded-2xl p-6 text-white shadow-2xl">
          <div class="text-center">
            <div class="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 class="text-xl font-bold mb-2">🎯 Pronto para sua transformação?</h2>
            <p class="text-white/90 text-sm mb-6 leading-relaxed">
              Reserve agora seu espaço neste consultório dos sonhos e<br>
              <span class="font-semibold">comece a construir seu império estético!</span>
            </p>
            <button 
              @click="bookAppointment(clinic.id)"
              class="bg-white text-pink-600 px-8 py-4 rounded-xl text-lg font-bold hover:bg-pink-50 transition-all transform hover:scale-105 shadow-lg inline-flex items-center"
            >
              ✨ Reservar este castelo!
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <div v-else class="flex items-center justify-center h-64">
      <div class="text-center">
        <div class="bg-gradient-to-r from-purple-400 to-pink-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </div>
        <p class="text-gray-500">✨ Carregando seu castelo...</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAppClinic } from '@/stores/appClinic';

const router = useRouter();
const route = useRoute();

// Fetch clinic based on ID
const clinic = ref(null);

// Mock available services
const availableServices = ref([
  'Facials',
  'Botox',
  'Fillers',
  'Chemical Peels',
  'Laser Treatment',
  'Microneedling'
]);

// Simulate API fetch
onMounted(async () => {
  clinic.value = await useAppClinic().getClinicId(route.params.id)
});

// Function to book appointment at this specific clinic
function bookAppointment() {
  router.push('/appointments/new');
}
</script>

<style scoped>
/* Responsividade otimizada para iPhone 12 Pro (390x844) */
@media (max-width: 390px) {
  .page-container {
    padding: 1rem;
  }
  
  .grid-cols-2 {
    gap: 0.75rem;
  }
  
  .text-2xl {
    font-size: 1.4rem;
  }
  
  .p-6 {
    padding: 1rem;
  }
  
  .p-4 {
    padding: 0.875rem;
  }
}

/* Animações suaves */
.transition-all {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.transform:hover {
  transform: translateY(-2px);
}

/* Gradientes personalizados */
.bg-gradient-to-br {
  background: linear-gradient(to bottom right, var(--tw-gradient-stops));
}
</style>
