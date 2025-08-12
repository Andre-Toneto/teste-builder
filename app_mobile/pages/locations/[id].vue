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
    
    <div v-if="clinic">
      
      <div class="px-4 py-5">
        <div class="mb-4">
          <h1 class="text-2xl font-semibold">{{ clinic.company_name }}</h1>
          <p class="text-gray-500">{{ clinic.street_avenue }}, {{ clinic.number }} - {{ clinic.city }} - {{ clinic.state }} </p>
          
          <div class="flex items-center mt-2">
            <!-- <div class="flex">
              <svg v-for="i in Math.floor(clinic.rating)" :key="i" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg v-if="clinic.rating % 1 >= 0.5" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg v-for="i in (5 - Math.ceil(clinic.rating))" :key="`empty-${i}`" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div> 
            <span class="text-sm text-gray-500 ml-1">({{ clinic.reviewCount }} reviews)</span>-->
          </div>
        </div>
        
        <div class="grid grid-cols-2 gap-3 mb-6">
          <a :href="`tel:${clinic.phone}`" class="btn-primary flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Ligar
          </a>
          <a 
            :href="`https://maps.google.com/?q=${clinic.street_avenue}${clinic.number}${clinic.city}`" 
            target="_blank" 
            class="btn-outline flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            Localização
          </a>
        </div>
        
        <div class="space-y-5">
          <div>
            <h2 class="text-lg font-medium mb-2">Horário de Funcionamento</h2>
            <div class="space-y-1.5">
              <div class="flex justify-between">
                <span class="text-gray-600">Segunda - Sexta</span>
                <span>9:00 - 18:00</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Sabado</span>
                <span>10:00 - 16:00</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Domingo</span>
                <span class="text-red-500">Fechado</span>
              </div>
            </div>
          </div>
          
          <div>
            <h2 class="text-lg font-medium mb-2">Contato</h2>
            <div class="space-y-1.5">
              <div class="flex">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+15551234567" class="text-primary-600">{{ clinic.phone }}</a>
              </div>
              <div class="flex">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@neoviso.com" class="text-primary-600">{{ clinic.email }}</a>
              </div>
              <div class="flex">
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M20.52 3.48A11.87 11.87 0 0012 0a11.94 11.94 0 00-10.25 17.96L0 24l6.3-1.67A11.93 11.93 0 0012 24c6.63 0 12-5.37 12-12a11.87 11.87 0 00-3.48-8.52zm-8.52 18.26a9.3 9.3 0 01-4.71-1.28l-.34-.2-3.73.99 1-3.64-.22-.37A9.37 9.37 0 1121.37 12a9.31 9.31 0 01-9.37 9.74zm5.23-6.97c-.29-.15-1.72-.85-1.99-.94s-.46-.15-.66.15-.76.94-.93 1.13-.34.22-.63.07a7.57 7.57 0 01-2.24-1.39 8.35 8.35 0 01-1.54-1.9c-.16-.28 0-.43.12-.58.12-.12.29-.34.43-.5a1.93 1.93 0 00.29-.48.51.51 0 000-.49c-.08-.15-.66-1.59-.9-2.17s-.47-.48-.66-.48h-.56a1.08 1.08 0 00-.78.36 3.26 3.26 0 00-1 2.43 5.67 5.67 0 001.2 2.91 13 13 0 005 4.5c1.86.8 2.59.86 3.52.72a2.87 2.87 0 001.88-1.31 2.36 2.36 0 00.16-1.31c-.07-.12-.26-.2-.56-.35z" />
              </svg>
                 <a 
                    :href="`https://wa.me/+55${clinic.phone}?text=Olá! Gostaria de mais informações.`" 
                    target="_blank" 
                     class="text-primary-600"
                  >{{ clinic.phone }}</a>
              </div>
              <div v-if="clinic.site" class="flex">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <a href="https://neoviso.com" target="_blank" class="text-primary-600">{{ clinic.site }}</a>
              </div>
            </div>
          </div>
          
          <!-- <div>
            <h2 class="text-lg font-medium mb-3">Available Services</h2>
            <div class="grid grid-cols-2 gap-2">
              <div v-for="(service, index) in availableServices" :key="index" class="text-sm bg-gray-100 rounded-md py-2 px-3">
                {{ service }}
              </div>
            </div>
          </div> -->
          
          <button 
            class="btn-primary w-full mt-6"
            @click="bookAppointment(clinic.id)"
          >
            Faça um Agendamento
          </button>
        </div>
      </div>
    </div>
    
    <div v-else class="flex items-center justify-center h-64">
      <p class="text-gray-500">Loading clinic details...</p>
    </div>
  </div>
</template>

<script setup>
import { useAppClinic } from '@/stores/appClinic';

const router = useRouter();
const route = useRoute();

// Mock clinic data - in a real app, this would come from an API
// const clinicId = computed(() => useAppClinic().getClinicId(route.params.id));

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
onMounted( async() => {
  clinic.value = await useAppClinic().getClinicId(route.params.id)
});

// Function to book appointment at this specific clinic
function bookAppointment() {
  router.push('/appointments/new');
}
</script>