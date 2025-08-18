<template>
  <div class="page-container">
    <!-- Header de volta estilizado -->
    <div class="mb-6">
      <button 
        @click="router.back()" 
        class="flex items-center text-white bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        <span class="font-medium">Voltar</span>
      </button>
    </div>
    
    <div v-if="clinic">
      <!-- Header emocional da clínica -->
      <div class="bg-gradient-to-br from-violet-600 via-purple-600 to-pink-600 rounded-2xl p-4 xs:p-6 text-white shadow-2xl mb-6">
        <div class="relative">
          <!-- Decoração de fundo -->
          <div class="absolute top-0 right-0 -mt-2 -mr-2 w-16 h-16 xs:w-20 xs:h-20 bg-white/10 rounded-full"></div>
          <div class="absolute bottom-0 left-0 -mb-4 -ml-4 w-20 h-20 xs:w-24 xs:h-24 bg-white/5 rounded-full"></div>

          <div class="relative z-10">
            <!-- Ícone e badge -->
            <div class="flex items-center mb-4">
              <div class="bg-white/20 rounded-full p-3 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 xs:h-7 xs:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h4a1 1 0 011 1v5m-6 0h6" />
                </svg>
              </div>
              <span class="bg-green-500 text-white text-xs px-3 py-1 rounded-full font-semibold">✨ DISPONÍVEL AGORA</span>
            </div>

            <!-- Nome e endereço -->
            <h1 class="text-xl xs:text-2xl font-bold mb-2">🏰 {{ clinic.company_name }}</h1>
            <div class="bg-white/10 backdrop-blur-sm rounded-xl p-3 mb-4">
              <p class="text-white/90 text-sm xs:text-base leading-relaxed">
                📍 {{ clinic.street_avenue }}, {{ clinic.number }} <br>
                {{ clinic.city }} - {{ clinic.state }}
              </p>
              <p class="text-white/80 text-xs xs:text-sm mt-2">
                💫 Sua estrutura premium te espera para transformar vidas!
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Botões de ação principais -->
      <div class="grid grid-cols-2 gap-3 xs:gap-4 mb-6">
        <a 
          :href="`tel:${clinic.phone}`" 
          class="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-3 xs:py-4 rounded-xl text-sm xs:text-base font-bold hover:from-emerald-600 hover:to-teal-600 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Ligar
        </a>
        <a 
          :href="`https://maps.google.com/?q=${clinic.street_avenue}${clinic.number}${clinic.city}`" 
          target="_blank" 
          class="bg-white border-2 border-purple-200 text-purple-600 px-4 py-3 xs:py-4 rounded-xl text-sm xs:text-base font-bold hover:bg-purple-50 hover:border-purple-300 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
          Ver no Mapa
        </a>
      </div>

      <!-- Informações em cards -->
      <div class="space-y-4 xs:space-y-6">
        <!-- Horário de Funcionamento -->
        <div class="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-4 xs:p-6 border border-blue-100 shadow-lg">
          <div class="flex items-center mb-4">
            <div class="bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full p-2 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 xs:h-6 xs:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 class="text-lg xs:text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              🕒 Horário de Funcionamento
            </h2>
          </div>
          <div class="space-y-2 xs:space-y-3">
            <div class="flex justify-between items-center p-2 xs:p-3 bg-white/50 rounded-lg">
              <span class="text-blue-700 font-medium text-sm xs:text-base">Segunda - Sexta</span>
              <span class="text-blue-800 font-semibold text-sm xs:text-base">9:00 - 18:00</span>
            </div>
            <div class="flex justify-between items-center p-2 xs:p-3 bg-white/50 rounded-lg">
              <span class="text-blue-700 font-medium text-sm xs:text-base">Sábado</span>
              <span class="text-blue-800 font-semibold text-sm xs:text-base">10:00 - 16:00</span>
            </div>
            <div class="flex justify-between items-center p-2 xs:p-3 bg-white/50 rounded-lg">
              <span class="text-blue-700 font-medium text-sm xs:text-base">Domingo</span>
              <span class="text-red-500 font-semibold text-sm xs:text-base">Fechado</span>
            </div>
          </div>
        </div>
        
        <!-- Contato -->
        <div class="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 rounded-2xl p-4 xs:p-6 border border-emerald-100 shadow-lg">
          <div class="flex items-center mb-4">
            <div class="bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full p-2 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 xs:h-6 xs:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h2 class="text-lg xs:text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              📞 Entre em Contato
            </h2>
          </div>
          <div class="space-y-3 xs:space-y-4">
            <div class="flex items-center p-2 xs:p-3 bg-white/60 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a :href="`tel:${clinic.phone}`" class="text-emerald-700 font-semibold text-sm xs:text-base">{{ clinic.phone }}</a>
            </div>
            <div class="flex items-center p-2 xs:p-3 bg-white/60 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a :href="`mailto:${clinic.email}`" class="text-emerald-700 font-semibold text-sm xs:text-base truncate">{{ clinic.email }}</a>
            </div>
            <div class="flex items-center p-2 xs:p-3 bg-white/60 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.52 3.48A11.87 11.87 0 0012 0a11.94 11.94 0 00-10.25 17.96L0 24l6.3-1.67A11.93 11.93 0 0012 24c6.63 0 12-5.37 12-12a11.87 11.87 0 00-3.48-8.52zm-8.52 18.26a9.3 9.3 0 01-4.71-1.28l-.34-.2-3.73.99 1-3.64-.22-.37A9.37 9.37 0 1121.37 12a9.31 9.31 0 01-9.37 9.74zm5.23-6.97c-.29-.15-1.72-.85-1.99-.94s-.46-.15-.66.15-.76.94-.93 1.13-.34.22-.63.07a7.57 7.57 0 01-2.24-1.39 8.35 8.35 0 01-1.54-1.9c-.16-.28 0-.43.12-.58.12-.12.29-.34.43-.5a1.93 1.93 0 00.29-.48.51.51 0 000-.49c-.08-.15-.66-1.59-.9-2.17s-.47-.48-.66-.48h-.56a1.08 1.08 0 00-.78.36 3.26 3.26 0 00-1 2.43 5.67 5.67 0 001.2 2.91 13 13 0 005 4.5c1.86.8 2.59.86 3.52.72a2.87 2.87 0 001.88-1.31 2.36 2.36 0 00.16-1.31c-.07-.12-.26-.2-.56-.35z" />
              </svg>
              <a 
                :href="`https://wa.me/+55${clinic.phone}?text=Olá! Gostaria de mais informações sobre a clínica.`" 
                target="_blank" 
                class="text-emerald-700 font-semibold text-sm xs:text-base"
              >
                WhatsApp
              </a>
            </div>
            <div v-if="clinic.site" class="flex items-center p-2 xs:p-3 bg-white/60 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              <a :href="clinic.site" target="_blank" class="text-emerald-700 font-semibold text-sm xs:text-base truncate">{{ clinic.site }}</a>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Principal -->
      <div class="mt-6 xs:mt-8">
        <div class="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 rounded-2xl p-4 xs:p-6 text-white shadow-2xl">
          <div class="text-center">
            <div class="bg-white/20 rounded-full w-16 h-16 xs:w-20 xs:h-20 flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 xs:h-10 xs:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-lg xs:text-xl font-bold mb-2">🌟 Reserve seu espaço dos sonhos!</h3>
            <p class="text-white/90 text-sm xs:text-base mb-4 leading-relaxed">
              Transforme vidas com toda estrutura premium<br>
              <span class="font-medium">Você é o dono por um dia! ✨</span>
            </p>
            <button 
              class="bg-white text-purple-600 px-6 xs:px-8 py-3 xs:py-4 rounded-xl text-sm xs:text-base font-bold hover:bg-purple-50 transition-all transform hover:scale-105 shadow-lg w-full xs:w-auto"
              @click="bookAppointment(clinic.id)"
            >
              🚀 Fazer Agendamento Agora
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <div v-else class="flex items-center justify-center h-64">
      <div class="text-center">
        <div class="bg-gradient-to-r from-purple-100 to-pink-100 rounded-full w-16 h-16 xs:w-20 xs:h-20 flex items-center justify-center mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 xs:h-10 xs:w-10 text-purple-600 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </div>
        <p class="text-gray-600 text-sm xs:text-base">Carregando sua clínica...</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAppClinic } from '@/stores/appClinic';

const router = useRouter();
const route = useRoute();

const clinic = ref(null);

// Simulate API fetch
onMounted(async () => {
  clinic.value = await useAppClinic().getClinicId(route.params.id)
});

// Function to book appointment at this specific clinic
function bookAppointment() {
  router.push('/appointments/new');
}
</script>
