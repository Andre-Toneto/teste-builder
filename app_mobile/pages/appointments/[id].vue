<template>
  <div class="page-container bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 min-h-screen">
    <!-- Header emocional e acolhedor -->
    <div class="mb-4 -mx-4 sm:-mx-6">
      <div class="bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 text-white py-4 px-6 relative overflow-hidden">
        <!-- Elementos decorativos -->
        <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full transform translate-x-8 -translate-y-8"></div>
        <div class="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/5 to-transparent rounded-full transform -translate-x-4 translate-y-4"></div>

        <div class="relative z-10">
          <!-- Botão Voltar estilizado -->
          <button @click="router.back()" class="flex items-center text-white/80 hover:text-white transition-all transform hover:scale-105">
            <div class="bg-white/20 rounded-full p-2 mr-2 backdrop-blur-sm">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <span class="font-medium">Voltar</span>
          </button>

          <div class="text-left mt-2">
            <!-- Ícone animado -->
            <div class="flex">
              <h1 class="text-xl font-bold mb-3 leading-tight">
                Monte seu dia dos sonhos! ✨
              </h1>
              <div>
                <div class="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg backdrop-blur-sm animate-pulse">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
  
              
            </div>
            <p class="text-white/90 text-md leading-relaxed">
              Cada passo te aproxima do seu consultório particular<br>
              <span class="font-medium text-yellow-300">🎯 Vamos criar algo especial juntos!</span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Progresso melhorado -->
    <div class="mb-2 bg-white rounded-2xl p-4 shadow-lg border border-purple-100">
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-lg font-bold text-gray-800">Seu progresso</h3>
        <span class="text-sm font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
          {{ currentStep + 1 }} de {{ totalSteps }}
        </span>
      </div>

      <div class="relative w-full h-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full overflow-hidden mb-4">
        <div
          class="absolute h-full bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 rounded-full transition-all duration-500 ease-out"
          :style="`width: ${(currentStep / (totalSteps - 1)) * 100}%`"
        ></div>
      </div>

      <div class="flex justify-between text-xs">
        <span
          v-for="(step, index) in dynamicSteps"
          :key="step"
          :class="index <= currentStep ? 'text-purple-600 font-semibold' : 'text-gray-500'"
          class="transition-all"
        >
          {{ formatStepLabel(step) }}
        </span>
      </div>
    </div>
        <div v-if="isStep('service')" class="space-y-6">
          <div class="bg-white rounded-3xl p-4 sm:p-6 shadow-xl border border-purple-100">
          <div class="text-center mb-6">
            <div class="bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h2 class="text-lg sm:text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
              Qual serviço você oferecerá?
            </h2>
          </div>
            <p class="text-gray-600 text-sm text-center mb-3">Escolha o procedimento que transformará vidas hoje</p>

            <div class="space-y-4">
              <div
                v-for="list in services"
                :key="list.id"
                class="p-4 rounded-2xl border-2 cursor-pointer transition-all transform hover:scale-105 hover:shadow-lg"
                :class="selectedService?.id === list.id ?
                  'border-purple-500 bg-gradient-to-r from-purple-50 to-indigo-50 shadow-lg' :
                  'border-gray-200 bg-white hover:border-purple-300 hover:bg-purple-50'"
                @click="selectService(list)"
              >
                <div class="flex justify-between items-center">
                  <div class="flex-1">
                    <div class="flex items-center space-x-3 mb-2">
                      <div
                        class="w-4 h-4 rounded-full border-2 transition-all"
                        :class="selectedService?.id === list.id ?
                          'bg-purple-500 border-purple-500' :
                          'border-gray-300'"
                      >
                        <div
                          v-if="selectedService?.id === list.id"
                          class="w-2 h-2 bg-white rounded-full m-0.5"
                        ></div>
                      </div>
                      <h4 class="font-bold text-md text-gray-800">{{ list.description }}</h4>
                    </div>
                    <p class="text-sm text-gray-600 ml-7">{{ list.period }}</p>
                  </div>
                  <div class="text-right">
                    <p class="text-lg font-bold text-purple-600">R${{ list.price }}</p>
                    <p class="text-xs text-gray-500">por sessão</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            class="w-full bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-700 text-white px-4 py-4 rounded-2xl text-lg font-bold shadow-lg transition-all transform disabled:opacity-50 disabled:cursor-not-allowed enabled:hover:scale-105 enabled:hover:shadow-xl"
            :disabled="!selectedService"
            @click="nextStep"
          >
            <span v-if="selectedService">✨ Continuar com {{ selectedService.description }} ✨</span>
            <span v-else>Selecione um serviço para continuar</span>
          </button>
        </div>
    
    <!-- Step 2: Select Location -->
    <div v-if="isStep('clinic')" class="space-y-6">
      <div class="bg-white content-center rounded-3xl p-4 sm:p-6 shadow-xl border border-purple-100">
        <div class="text-center mb-6">
          <div class="bg-gradient-to-br from-emerald-400 via-teal-500 to-blue-600 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h2 class="text-lg sm:text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
            Onde você vai brilhar?
          </h2>
        </div>
        <p class="text-gray-600">Escolha a clínica que será sua casa por um dia</p>

        <div class="space-y-4">
          <div
            v-for="clinic in clinics"
            :key="clinic.id"
            class="p-6 rounded-2xl border-2 cursor-pointer transition-all transform hover:scale-105 hover:shadow-lg"
            :class="selectedClinic?.id === clinic.id ?
              'border-emerald-500 bg-gradient-to-r from-emerald-50 to-teal-50 shadow-lg' :
              'border-gray-200 bg-white hover:border-emerald-300 hover:bg-emerald-50'"
            @click="selectClinic(clinic)"
          >
            <div class="flex items-start space-x-4">
              <div
                class="w-6 h-6 rounded-full border-2 transition-all flex-shrink-0 mt-1"
                :class="selectedClinic?.id === clinic.id ?
                  'bg-emerald-500 border-emerald-500' :
                  'border-gray-300'"
              >
                <div
                  v-if="selectedClinic?.id === clinic.id"
                  class="w-3 h-3 bg-white rounded-full m-0.5"
                ></div>
              </div>
              <div class="flex-1">
                <h4 class="font-bold text-lg text-gray-800 mb-2">{{ clinic.company_name }}</h4>
                <div class="flex items-center space-x-2 text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p class="text-sm">
                    {{ clinic.street_avenue }}, {{ clinic.number }}, {{ clinic.neighborhood }}<br>
                    {{ clinic.city }}-{{ clinic.state }}
                  </p>
                </div>
              </div>
              <div class="flex-shrink-0">
                <div class="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold">
                  Premium
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex space-x-4">
        <button
          class="flex-1 bg-white border-2 border-gray-300 text-gray-700 px-6 py-4 rounded-2xl font-semibold transition-all hover:bg-gray-50 hover:border-gray-400"
          @click="prevStep"
        >
          ← Voltar
        </button>
        <button
          class="flex-1 bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-700 text-white px-6 py-4 rounded-2xl font-bold shadow-lg transition-all transform disabled:opacity-50 disabled:cursor-not-allowed enabled:hover:scale-105 enabled:hover:shadow-xl"
          :disabled="!selectedClinic"
          @click="nextStep"
        >
          <span v-if="selectedClinic">Continuar com {{ selectedClinic.company_name }} →</span>
          <span v-else>Selecione uma clínica →</span>
        </button>
      </div>
    </div>

    <div v-if="isStep('professional')" class="space-y-6">
      <div class="bg-white rounded-3xl p-8 shadow-xl border border-purple-100">
        <div class="text-center mb-8">
          <div class="bg-gradient-to-br from-orange-400 via-red-500 to-pink-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h2 class="text-2xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-3">
            Qual profissional atenderá?
          </h2>
          <p class="text-gray-600">Escolha quem fará a diferença na vida dos pacientes</p>
        </div>

        <div class="space-y-4">
          <div
            v-for="prof in doctors"
            :key="prof.id"
            class="p-6 rounded-2xl border-2 cursor-pointer transition-all transform hover:scale-105 hover:shadow-lg"
            :class="selectedProfessional?.id === prof.id ?
              'border-orange-500 bg-gradient-to-r from-orange-50 to-pink-50 shadow-lg' :
              'border-gray-200 bg-white hover:border-orange-300 hover:bg-orange-50'"
            @click="selectProfessional(prof)"
          >
            <div class="flex items-center space-x-4">
              <div
                class="w-6 h-6 rounded-full border-2 transition-all flex-shrink-0"
                :class="selectedProfessional?.id === prof.id ?
                  'bg-orange-500 border-orange-500' :
                  'border-gray-300'"
              >
                <div
                  v-if="selectedProfessional?.id === prof.id"
                  class="w-3 h-3 bg-white rounded-full m-0.5"
                ></div>
              </div>

              <!-- Avatar placeholder -->
              <div class="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>

              <div class="flex-1">
                <h4 class="font-bold text-lg text-gray-800">{{ prof.name }}</h4>
                <div class="flex items-center space-x-2 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                  <p class="text-sm text-gray-600">{{ prof.medical_specialty }}</p>
                </div>
              </div>

              <div class="flex-shrink-0">
                <div class="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-semibold">
                  Especialista
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex space-x-4">
        <button
          class="flex-1 bg-white border-2 border-gray-300 text-gray-700 px-6 py-4 rounded-2xl font-semibold transition-all hover:bg-gray-50 hover:border-gray-400"
          @click="prevStep"
        >
          ← Voltar
        </button>
        <button
          class="flex-1 bg-gradient-to-r from-orange-600 via-red-600 to-pink-700 text-white px-6 py-4 rounded-2xl font-bold shadow-lg transition-all transform disabled:opacity-50 disabled:cursor-not-allowed enabled:hover:scale-105 enabled:hover:shadow-xl"
          :disabled="!selectedProfessional"
          @click="nextStep"
        >
          <span v-if="selectedProfessional">Continuar com Dr(a). {{ selectedProfessional.name }} →</span>
          <span v-else>Selecione um profissional →</span>
        </button>
      </div>
    </div>

    
    <!-- Step 3: Select Date & Time -->
    <div v-if="isStep('datetime')" class="space-y-6">
      <div class="bg-white rounded-3xl p-8 shadow-xl border border-purple-100">
        <div class="text-center mb-8">
          <div class="bg-gradient-to-br from-indigo-400 via-blue-500 to-cyan-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 class="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent mb-3">
            Quando será o grande dia?
          </h2>
          <p class="text-gray-600">Escolha o momento perfeito para transformar vidas</p>
        </div>

        <!-- Calendário -->
        <div class="mb-8">
          <div class="bg-gradient-to-r from-indigo-50 to-cyan-50 rounded-2xl p-6">
            <h3 class="text-lg font-semibold text-gray-800 mb-4 text-center">📅 Selecione o dia</h3>
            <div class="flex justify-center">
              <ClientOnly>
                <v-date-picker
                  v-model="selectedDate"
                  color="#8b5cf6"
                  locale="pt-BR"
                  show-adjacent-months
                  hide-header
                  class="border-0 shadow-lg rounded-2xl"
                ></v-date-picker>
                <template #fallback>
                  <div class="w-80 h-80 bg-gradient-to-r from-indigo-50 to-cyan-50 rounded-2xl flex items-center justify-center">
                    <div class="text-center">
                      <div class="animate-spin w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full mx-auto mb-4"></div>
                      <p class="text-gray-600">Carregando calendário...</p>
                    </div>
                  </div>
                </template>
              </ClientOnly>
            </div>
          </div>
        </div>

        <!-- Horários -->
        <div class="mb-8">
          <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6">
            <h3 class="text-lg font-semibold text-gray-800 mb-4 text-center">⏰ Escolha o horário</h3>
            <div class="grid grid-cols-3 gap-3">
              <button
                v-for="slot in availableTimeSlots"
                :key="slot"
                class="py-3 px-4 text-sm font-semibold rounded-xl border-2 transition-all text-center transform hover:scale-105"
                :class="selectedTime === slot ?
                  'bg-gradient-to-r from-blue-500 to-indigo-600 border-blue-500 text-white shadow-lg' :
                  'border-gray-200 text-gray-700 hover:border-blue-300 hover:bg-blue-50 bg-white'"
                @click="selectTime(slot)"
              >
                {{ slot }}
              </button>
            </div>
          </div>
        </div>

        <!-- Duração -->
        <div class="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6">
          <h3 class="text-lg font-semibold text-gray-800 mb-4 text-center">⏱️ Duração do atendimento</h3>
          <ClientOnly>
            <inputsTime
              :input-name="'Duração'"
              :input-name-dialog="'Selecionar Duração'"
              :duration-backend="selectedDuration"
              @onTime="onTime"
            />
            <template #fallback>
              <div class="p-4 bg-white rounded-xl border-2 border-purple-200">
                <p class="text-center text-gray-600">Carregando seletor de duração...</p>
              </div>
            </template>
          </ClientOnly>
        </div>
      </div>

      <div class="flex space-x-4">
        <button
          class="flex-1 bg-white border-2 border-gray-300 text-gray-700 px-6 py-4 rounded-2xl font-semibold transition-all hover:bg-gray-50 hover:border-gray-400"
          @click="prevStep"
        >
          ← Voltar
        </button>
        <button
          class="flex-1 bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-700 text-white px-6 py-4 rounded-2xl font-bold shadow-lg transition-all transform disabled:opacity-50 disabled:cursor-not-allowed enabled:hover:scale-105 enabled:hover:shadow-xl"
          :disabled="!selectedDate || !selectedTime || !selectedDuration"
          @click="nextStep"
        >
          <span v-if="selectedDate && selectedTime && selectedDuration">Continuar para confirmação →</span>
          <span v-else>Selecione data, hora e duração →</span>
        </button>
      </div>
    </div>
    
    <!-- Step 4: Confirm Booking -->
    <div v-if="isStep('confirm')" class="space-y-6">
      <div class="bg-white rounded-3xl p-8 shadow-xl border border-purple-100">
        <div class="text-center mb-8">
          <div class="bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg animate-pulse">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 class="text-2xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-3">
            Quase pronto! ✨
          </h2>
          <p class="text-gray-600">Revise os detalhes do seu dia especial</p>
        </div>

        <!-- Resumo do agendamento -->
        <div class="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 rounded-2xl p-6 border-2 border-emerald-200 mb-6">
          <div class="flex items-center justify-center mb-6">
            <div class="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-bold">
              🎯 SEU DIA DE SUCESSO
            </div>
          </div>

          <div class="space-y-4">
            <div class="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm">
              <div class="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span class="text-gray-700 font-medium">Serviço</span>
              </div>
              <span class="font-bold text-purple-600">{{ selectedService?.description }}</span>
            </div>

            <div v-if="userType === 'A' || userType === 'P'" class="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm">
              <div class="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span class="text-gray-700 font-medium">Local</span>
              </div>
              <span class="font-bold text-emerald-600">{{ selectedClinic?.company_name }}</span>
            </div>

            <div v-if="userType === 'A' || userType === 'C'" class="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm">
              <div class="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span class="text-gray-700 font-medium">Profissional</span>
              </div>
              <span class="font-bold text-orange-600">{{ selectedProfessional?.name }}</span>
            </div>

            <div class="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm">
              <div class="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span class="text-gray-700 font-medium">Data</span>
              </div>
              <span class="font-bold text-blue-600">{{ formattedDate }}</span>
            </div>

            <div class="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm">
              <div class="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="text-gray-700 font-medium">Horário</span>
              </div>
              <span class="font-bold text-indigo-600">{{ selectedTime }} ({{ selectedDuration }}h)</span>
            </div>

            <!-- Total destacado -->
            <div class="bg-gradient-to-r from-green-500 to-emerald-600 p-4 rounded-xl text-white">
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                  <span class="text-xl font-bold">Total do investimento</span>
                </div>
                <span class="text-2xl font-black">R$ {{ selectedService?.price }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex space-x-4">
        <button
          class="flex-1 bg-white border-2 border-gray-300 text-gray-700 px-6 py-4 rounded-2xl font-semibold transition-all hover:bg-gray-50 hover:border-gray-400"
          @click="prevStep"
        >
          ← Revisar
        </button>
        <button
          class="flex-1 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-700 text-white px-6 py-4 rounded-2xl font-bold shadow-lg transition-all transform hover:scale-105 hover:shadow-xl active:scale-95"
          @click="confirmBooking"
        >
          ✨ Confirmar meu dia de sucesso! ✨
        </button>
      </div>
    </div>

    <!-- Modal de sucesso para agendamento -->
    <ClientOnly>
      <AppointmentSuccessModal
        :show="showSuccessModal"
        :appointment-date="selectedDate"
        :appointment-time="selectedTime"
        :duration="selectedDuration"
        @close="handleSuccessModalClose"
        @secondary-action="handleViewAgenda"
      />
    </ClientOnly>
  </div>
</template>

<script setup>

import { useApp } from '@/stores/app';
import { useAppProducts } from '../../stores/appProducts';
import { useAppClinic } from '../../stores/appClinic';
import { useAppDoctors } from '@/stores/appDoctors';
import { useScheduling } from '../../stores/appScheduling';
import { formatarDataHoraParaISO } from "~/lib/utils";
import { calculateEndTime } from "~/lib/utils";

const router = useRouter();
const route = useRoute()

// const currentStep = ref(1);
// const totalSteps = 4;
const userType = ref('')

const dynamicSteps = computed(() => {
  const steps = ['service'];

  if (userType.value === 'A') {
    steps.push('clinic', 'professional');
  } else if (userType.value === 'P') {
    steps.push('clinic');
  } else if (userType.value === 'C') {
    steps.push('professional');
  }

  steps.push('datetime', 'confirm');
  return steps;
});

const status_page = ref("get")

const totalSteps = computed(() => dynamicSteps.value.length);

const currentStep = ref(0); // índice do step (começa em 0)


// State for appointment booking
const selectedService = ref(null);
const selectedClinic = ref(null);
const selectedProfessional = ref(null);
const selectedDate = ref(null);
const selectedTime = ref(null);
const selectedDuration = ref('')

const services = computed(() => {
  return useAppProducts().datasource
})

const clinics = computed(() => {
  return useAppClinic().datasource
})

const doctors = computed(() => {
  return useAppDoctors().datasource.filter(item => item.user_type === "P");
})

// Generate dates for the next 5 days
const availableDates = computed(() => {
  const dates = [];
  const days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
  const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  
  for (let i = 0; i < 30; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);
    
    dates.push({
      date: date.toISOString().split('T')[0],
      day: days[date.getDay()],
      number: date.getDate(),
      month: months[date.getMonth()]
    });
  }
  
  return dates;
});

// Mock time slots
const availableTimeSlots = ref([
  '9:00', '9:30', '10:00', '10:30', '11:00', '11:30',
  '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
  '16:00', '16:30'
]);

// Controle de hidratação
const isMounted = ref(false)

// Formatted selected date
const formattedDate = computed(() => {
  if (!selectedDate.value || !isMounted.value || process.server) return '';

  try {
    const date = new Date(selectedDate.value);
    return date.toLocaleDateString('pt-BR', { weekday: 'long', month: 'long', day: 'numeric' });
  } catch (error) {
    return selectedDate.value || '';
  }
});


const isStep = (name) => {
  return dynamicSteps.value[currentStep.value] === name;
}

const formatStepLabel = (step) => {
   switch (step) {
    case 'service': return 'Serviço';
    case 'clinic': return 'Clínica';
    case 'professional': return 'Profissional';
    case 'datetime': return 'Dia & Hora';
    case 'confirm': return 'Confirmar';
    default: return step;
  }
}

const onTime = (value) => {
  selectedDuration.value = value.value
}

// Navigation functions
const nextStep = () => {
  // if (currentStep.value < totalSteps) {
  //   currentStep.value++;
  // }
  if (currentStep.value < totalSteps.value - 1) {
    currentStep.value++;
  }
}

const prevStep = () => {
  if (currentStep.value > 0) {
    currentStep.value--;
  }
}

// Selection functions
function selectService(service) {
  selectedService.value = service;
}

function selectClinic(clinic) {
  selectedClinic.value = clinic;
}

function selectProfessional(prof) {
  selectedProfessional.value = prof;
}

function selectTime(time) {
  selectedTime.value = time;
}

const showSuccessModal = ref(false)

const confirmBooking = () => {

  let startTimeFormatted = formatarDataHoraParaISO(selectedDate.value, selectedTime.value)

  let valueToInsert = {
        "startTime": startTimeFormatted,
        "endTime": calculateEndTime(startTimeFormatted, selectedDuration.value),
        "id_clinic": userType.value == 'C' ? useApp().user.clinic : selectedClinic.value.id,
        "id_professional": userType.value == "P" ? useApp().user.id : selectedProfessional.value.id,
        "id_product": selectedService.value.id,
        "duration": selectedDuration.value
      };

      if(status_page.value == "insert") {
        useScheduling().createSchedule(valueToInsert).then(async () => {
            // Mostrar modal de sucesso em vez da mensagem simples
            showSuccessModal.value = true
        })

      } else if(status_page.value == "edit") {
        useScheduling().updateSchedule(route.params.id, valueToInsert).then(async () => {
          useApp().message.show = true;
          useApp().message.text = "Agendamento editado com sucesso!";
          useApp().message.color = "success";
          router.push('/appointments');
        })
      }
}

const handleSuccessModalClose = () => {
  showSuccessModal.value = false
  router.push('/appointments')
}

const handleViewAgenda = () => {
  showSuccessModal.value = false
  router.push('/appointments')
}

onMounted(() => {
  isMounted.value = true
})

onBeforeMount(async() => {
  await useAppProducts().getProducts()
  await useAppClinic().getClinics()
  await useAppDoctors().getDoctors();

  userType.value = useApp().user.user_type

  if (route.params.id == "new") {
    status_page.value = "insert"
  } else {
    status_page.value = "edit"

    useScheduling().getScheduleId(route.params.id).then((res) => {
      selectedService.value = services.value.find(service => service.id === res.id_product)
      selectedClinic.value = clinics.value.find(clinic => clinic.id === res.id_clinic)
      selectedProfessional.value = doctors.value.find(doc => doc.id === res.id_professional)

      selectedDate.value = new Date(res.startTime)
      selectedTime.value = new Date(res.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      selectedDuration.value = res.duration
    })

  }
})

</script>
