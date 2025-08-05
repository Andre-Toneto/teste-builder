<template>
  <div>
    <!-- Backdrop -->
    <div 
      v-show="isOpen" 
      class="fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity" 
      :class="{'opacity-100': isOpen, 'opacity-0': !isOpen}"
      @click="$emit('close')"
    ></div>
    
    <!-- Sidebar -->
    <aside 
      class="fixed top-0 left-0 z-30 h-full w-72 bg-white transform transition-transform duration-300 ease-in-out shadow-xl"
      :class="{'translate-x-0': isOpen, '-translate-x-full': !isOpen}"
    >
      <div class="flex flex-col h-full">
        <!-- User profile section -->
        <div class="px-6 py-8 bg-primary-600">
          <ClientOnly>
            <div v-if="useApp().logged && useApp().user.name" class="flex items-center">
              <div class="flex-shrink-0 h-12 w-12 rounded-full bg-white text-primary-600 flex items-center justify-center text-xl font-bold">
                {{ useApp().user.name.charAt(0) }}
              </div>
              <div class="ml-4 text-white">
                <div class="font-medium text-lg">{{ useApp().user.name }}</div>
                <div class="text-sm opacity-80">{{ useApp().user.email }}</div>
              </div>
            </div>
            <div v-else class="flex flex-col space-y-3">
              <p class="text-white font-medium">Bem-vindo à Neo Viso</p>
              <NuxtLink
                to="/auth/login"
                class="btn-outline bg-white text-primary-600 border-none text-center"
                @click="$emit('close')"
              >
                Entrar
              </NuxtLink>
            </div>
            <template #fallback>
              <div class="flex flex-col space-y-3">
                <p class="text-white font-medium">Bem-vindo à Neo Viso</p>
              </div>
            </template>
          </ClientOnly>
        </div>
        
        <!-- Menu items -->
        <nav class="flex-1 py-4 overflow-y-auto">
          <div class="px-4 mb-2 text-sm font-semibold text-gray-500">MENU</div>
          
          <template v-for="(item, i) in menuItems" :key="i">
            <NuxtLink 
              :to="item.to" 
              class="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100"
              @click="$emit('close')"
            >
              <span class="w-6 h-6 mr-3 text-gray-500">
                <component :is="item.icon" />
              </span>
              <span>{{ item.label }}</span>
            </NuxtLink>
          </template>

          <ClientOnly>
            <div v-if="useApp().logged" class="px-6 pt-6">
              <button
                class="w-full btn-outline flex items-center justify-center"
                @click="handleLogout"
              >
                <span class="w-5 h-5 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                </span>
                Sair
              </button>
            </div>
          </ClientOnly>
        </nav>
      </div>
    </aside>
  </div>
</template>

<script setup>

import { useApp } from '@/stores/app';

const router = useRouter()

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
});

defineEmits(['close']);

// Menu items
const menuItems = [
  { 
    label: 'Início', 
    to: '/',
    icon: defineComponent({
      template: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      `
    })
  },
  { 
    label: 'Agendamentos', 
    to: '/appointments',
    icon: defineComponent({
      template: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      `
    })
  },
  { 
    label: 'Locais', 
    to: '/locations',
    icon: defineComponent({
      template: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      `
    })
  },
];

const handleLogout = () => {
  if (process.client) {
    useApp().logged = false;
    localStorage.setItem("logged", 'false');
    localStorage.removeItem("user");
    localStorage.removeItem("password");
    router.push('/auth/login')
  }
}
</script>
