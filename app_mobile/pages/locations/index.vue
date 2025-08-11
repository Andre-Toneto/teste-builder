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
        <h2 class="text-md font-bold text-gray-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h4a1 1 0 011 1v5m-6 0h6" />
          </svg>
          Locais para chamar de seu
        </h2>
        <span class="text-sm text-emerald-600 font-medium">{{ filteredClinics.length }} unidades</span>
      </div>
      
      <div v-if="filteredClinics.length > 0" class="space-y-4">
        <div
          v-for="clinic in filteredClinics"
          :key="clinic.id"
          class="bg-white rounded-2xl p-5 shadow-lg border border-emerald-100 cursor-pointer hover:border-emerald-300 hover:shadow-xl transition-all transform hover:scale-[1.02]"
          @click="showClinicDetails(clinic)"
        >
          <div class="flex justify-between items-start">
            <div class="flex-[7]">
              <div class="flex items-center mb-2">
                <div class="bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h4a1 1 0 011 1v5m-6 0h6" />
                  </svg>
                </div>
                <h3 class="font-bold text-gray-800 text-lg">{{ clinic.company_name }}</h3>
              </div>
              <p class="text-gray-600 text-sm mb-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {{clinic.street_avenue}}, {{ clinic.number }}
              </p>
              <p class="text-gray-500 text-xs flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {{ clinic.phone }}
              </p>
            </div>
            <div class="text-center flex-[3]">
              <span class="inline-block px-1 py-1 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 rounded-full text-xs font-semibold mb-2">
                {{ clinic.city }} - {{ clinic.state }}
              </span>
              <div class="text-xs text-gray-500 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                Ver detalhes
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 rounded-2xl p-8 text-center shadow-xl border border-gray-200">
        <div class="bg-gradient-to-br from-gray-400 to-slate-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <h3 class="text-xl font-bold text-gray-700 mb-3">🔍 Nenhuma clínica encontrada</h3>
        <p class="text-gray-600 leading-relaxed">
          Não encontramos nenhuma unidade com esse filtro.<br>
          <span class="font-medium">Tente buscar por outra cidade ou nome!</span>
        </p>
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
