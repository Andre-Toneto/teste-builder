<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
    <!-- Header emocional e acolhedor -->
    <div class="relative overflow-hidden">
      <div class="bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 text-white py-12 px-6 relative">
        <!-- Elementos decorativos -->
        <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full transform translate-x-8 -translate-y-8"></div>
        <div class="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/5 to-transparent rounded-full transform -translate-x-4 translate-y-4"></div>

        <div class="relative z-10 text-center">
          <!-- Ícone animado -->
          <div class="mb-6">
            <div class="bg-white/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto shadow-lg backdrop-blur-sm animate-pulse">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
          </div>

          <h1 class="text-3xl font-bold mb-3 leading-tight">
            Bem-vindo(a) de volta! 🌟
          </h1>
          <p class="text-white/90 text-lg leading-relaxed">
            Sua clínica particular te espera na Neo Viso<br>
            <span class="font-medium text-yellow-300">✨ Pronto para transformar vidas hoje?</span>
          </p>

          <!-- Detalhe visual -->
          <div class="flex justify-center mt-6 space-x-2">
            <div class="w-2 h-2 bg-white/60 rounded-full animate-bounce" style="animation-delay: 0ms;"></div>
            <div class="w-2 h-2 bg-white/60 rounded-full animate-bounce" style="animation-delay: 150ms;"></div>
            <div class="w-2 h-2 bg-white/60 rounded-full animate-bounce" style="animation-delay: 300ms;"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex-1 p-6 space-y-8">
      <!-- Formulário melhorado -->
      <div class="bg-white rounded-3xl p-8 shadow-xl border border-purple-100">
        <div class="text-center mb-8">
          <h2 class="text-xl font-bold text-gray-800 mb-2">Acesse sua conta</h2>
          <p class="text-gray-600">Entre e comece a criar momentos especiais</p>
        </div>

        <form @submit.prevent="handleLogin" class="space-y-6">
          <div class="space-y-2">
            <label for="email" class="block text-sm font-semibold text-gray-700">Seu usuário</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <input
                id="email"
                type="text"
                v-model="userLogin"
                class="w-full pl-12 pr-4 py-4 bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl text-gray-800 placeholder-purple-400 focus:border-purple-400 focus:outline-none focus:ring-4 focus:ring-purple-100 transition-all"
                placeholder="Digite seu usuário"
                required
              />
            </div>
          </div>

          <div class="space-y-2">
            <label for="password" class="block text-sm font-semibold text-gray-700">Sua senha</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <input
                id="password"
                type="password"
                v-model="passLogin"
                class="w-full pl-12 pr-4 py-4 bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl text-gray-800 placeholder-purple-400 focus:border-purple-400 focus:outline-none focus:ring-4 focus:ring-purple-100 transition-all"
                placeholder="Digite sua senha"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            class="w-full bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-700 text-white px-8 py-4 rounded-xl text-lg font-bold hover:from-violet-700 hover:via-purple-700 hover:to-indigo-800 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl active:scale-95"
          >
            ✨ Acessar minha clínica ✨
          </button>
        </form>
      </div>

      <!-- Diferenciais da Neo Viso -->
      <div class="mt-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-5 border border-purple-100">
        <h3 class="font-bold text-purple-800 text-center mb-4">🏆 Por que escolher a Neo Viso?</h3>

        <div class="space-y-3">
          <div class="flex items-center space-x-3">
            <div class="bg-purple-500 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p class="text-purple-700 text-sm"><span class="font-semibold">Consultórios VIP</span> com equipamentos de última geração</p>
          </div>

          <div class="flex items-center space-x-3">
            <div class="bg-purple-500 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p class="text-purple-700 text-sm"><span class="font-semibold">Suporte técnico 24/7</span> durante seus atendimentos</p>
          </div>

          <div class="flex items-center space-x-3">
            <div class="bg-purple-500 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p class="text-purple-700 text-sm"><span class="font-semibold">Marketing especializado</span> para alavancar seus negócios</p>
          </div>

          <div class="flex items-center space-x-3">
            <div class="bg-purple-500 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p class="text-purple-700 text-sm"><span class="font-semibold">Produtos premium</span> disponíveis no local</p>
          </div>
        </div>

        <div class="mt-4 p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-center">
          <p class="text-white text-sm font-bold">
            🎯 Conceito único: <span class="text-yellow-300">Você é o dono por um dia!</span>
          </p>
        </div>
      </div>
<!--       
      <div class="mt-8">
        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-200"></div>
          </div>
          <div class="relative flex justify-center">
            <span class="px-2 bg-white text-sm text-gray-500">Or continue with</span>
          </div>
        </div>
        
        <div class="mt-6 grid grid-cols-2 gap-3">
          <button type="button" class="btn-outline flex justify-center items-center">
            <svg class="h-5 w-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.022A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.291 2.747-1.022 2.747-1.022.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.164 22 16.42 22 12c0-5.523-4.477-10-10-10" fill="#000"/>
            </svg>
            GitHub
          </button>
          <button type="button" class="btn-outline flex justify-center items-center">
            <svg class="h-5 w-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Google
          </button>
        </div>
      </div> -->
      
      <div class="mt-6 text-center">
        <p class="text-sm text-gray-600">
          Ainda não faz parte da Neo Viso?
          <NuxtLink to="/auth/register" class="text-primary-600 font-medium">Quero me cadastrar</NuxtLink>
        </p>
      </div>
    </div>
    <Messageapp />
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'auth'
});
// import { useAppDoctors } from '@/stores/appDoctors';

import { useApp } from "../../stores/app"

const router = useRouter();

// Form data
const userLogin = ref('')
const passLogin = ref('')
// const rememberMe = ref(false);

// Login handler
const handleLogin = () =>  {
 
   try {
        const login_data = {
            user: userLogin.value,
            password: passLogin.value
        }

        localStorage.setItem('user', userLogin.value)
        localStorage.setItem('password', passLogin.value)

        useApp().login(login_data).then((res) => {
            // loadingBtn.value = false
            useApp().logged = true
            localStorage.setItem('logged', 'true')
            useApp().setUser(res)
            router.push('/')
        }).catch((error) => {
            console.log(error)
            // loadingBtn.value = false
            useApp().message.show = true
            useApp().message.text = 'Usuário ou senha inválidos'
            useApp().message.color = 'error'
        })
    } catch (error) {
        console.log(error)
    }
}
</script>
