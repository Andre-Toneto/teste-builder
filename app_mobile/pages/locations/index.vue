<template>
  <div class="page-container">
    <!-- Header emocional -->
    <div class="mb-8">
      <div class="bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 rounded-2xl p-6 text-white shadow-2xl">
        <div class="flex items-center mb-4">
          <div class="bg-white/20 rounded-full p-3 mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <h1 class="text-2xl font-bold mb-2">Escolha onde você quer brilhar ✨</h1>
            <p class="text-white/90 text-sm">Sua estrutura dos sonhos está te esperando em várias localidades</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Search and filter bar -->
    <div class="mb-6">
      <div class="bg-white rounded-2xl p-4 shadow-lg border border-emerald-100">
        <h3 class="text-sm font-bold text-gray-700 mb-3 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          Encontre a unidade mais próxima de você
        </h3>
        <div class="relative">
          <input
            type="text"
            class="w-full pl-12 pr-4 py-3 bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-xl text-gray-700 placeholder-emerald-400 focus:border-emerald-400 focus:outline-none transition-all"
            placeholder="🔍 Digite o nome da clínica ou cidade..."
            v-model="searchQuery"
          />
          <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Clinic list -->
    <div class="space-y-4">
      <div class="flex items-center justify-between">
        <h2 class="text-lg font-bold text-gray-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h4a1 1 0 011 1v5m-6 0h6" />
          </svg>
          Estruturas disponíveis para você
        </h2>
        <span class="text-sm text-emerald-600 font-medium">{{ filteredClinics.length }} unidades</span>
      </div>
      
      <div v-if="filteredClinics.length > 0" class="space-y-3">
        <div 
          v-for="clinic in filteredClinics" 
          :key="clinic.id" 
          class="card cursor-pointer hover:border-primary-300 transition-all"
          @click="showClinicDetails(clinic)"
        >
          <div class="flex justify-between">
            <div>
              <h3 class="font-medium">{{ clinic.company_name }}</h3>
              <p class="text-sm text-gray-500">{{clinic.street_avenue}}, {{ clinic.number }}</p>
            </div>
            <div class="w-50 text-right flex flex-col justify-between items-end">
              <span class="text-xs text-gray-500">{{ clinic.phone }}</span>
              <span class="text-xs mt-2 px-2 py-1 bg-primary-100 text-primary-700 rounded-full">{{ clinic.city }} - {{ clinic.state }}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div v-else class="text-center py-8">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto text-gray-300 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <p class="text-gray-500">No clinics found nearby</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAppClinic } from '@/stores/appClinic';
const searchQuery = ref('');

const router = useRouter()

const clinics = computed(() => {
  return useAppClinic().datasource
})

// Filtered clinics based on search
const filteredClinics = computed(() => {
  if (!searchQuery.value) return clinics.value;
  
  const query = searchQuery.value.toLowerCase();
  return clinics.value.filter(clinic => 
    clinic.company_name.toLowerCase().includes(query) ||
    clinic.city.toLocaleLowerCase().includes(query)
  );
});

// Function to show clinic details
function showClinicDetails(clinic) {
  // In a real app, this would navigate to a clinic detail page or open a modal
  router.push(`/locations/${clinic.id}`);
}

onMounted( async() => {
  await useAppClinic().getClinics()
})

</script>
