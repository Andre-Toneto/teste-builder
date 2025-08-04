<template>
  <div class="page-container">
    <h1 class="page-title">Clinicas</h1>
    
    <!-- Search and filter bar -->
    <div class="mb-6">
      <div class="relative">
        <input 
          type="text" 
          class="input-field pl-10" 
          placeholder="Procurar por nome ou cidade"
          v-model="searchQuery"
        />
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
    </div>

    <!-- Clinic list -->
    <div class="space-y-4">
      <h2 class="font-medium">Clinicas Disponíveis</h2>
      
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