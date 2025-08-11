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

      <!-- Diferenciais da Neo Viso aprimorados -->
      <div class="bg-white rounded-3xl p-8 shadow-xl border border-purple-100">
        <div class="text-center mb-8">
          <div class="bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
            <span class="text-2xl">🏆</span>
          </div>
          <h3 class="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
            Por que escolher a Neo Viso?
          </h3>
          <p class="text-gray-600">Sua jornada de sucesso começa aqui</p>
        </div>

        <div class="space-y-5">
          <div class="flex items-start space-x-4 p-4 rounded-2xl bg-gradient-to-r from-purple-50 to-indigo-50 hover:from-purple-100 hover:to-indigo-100 transition-all transform hover:scale-105">
            <div class="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <p class="text-purple-800 font-semibold">Consultórios VIP de última geração</p>
              <p class="text-purple-600 text-sm mt-1">Ambiente premium que inspira confiança nos seus pacientes</p>
            </div>
          </div>

          <div class="flex items-start space-x-4 p-4 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 hover:from-emerald-100 hover:to-teal-100 transition-all transform hover:scale-105">
            <div class="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p class="text-emerald-800 font-semibold">Suporte técnico 24/7</p>
              <p class="text-emerald-600 text-sm mt-1">Nossa equipe te acompanha em cada atendimento</p>
            </div>
          </div>

          <div class="flex items-start space-x-4 p-4 rounded-2xl bg-gradient-to-r from-orange-50 to-red-50 hover:from-orange-100 hover:to-red-100 transition-all transform hover:scale-105">
            <div class="bg-gradient-to-br from-orange-500 to-red-600 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2M7 4h10l-1 12a2 2 0 01-2 2H10a2 2 0 01-2-2L7 4zM10 10v4m4-4v4" />
              </svg>
            </div>
            <div>
              <p class="text-orange-800 font-semibold">Marketing especializado</p>
              <p class="text-orange-600 text-sm mt-1">Estratégias personalizadas para alavancar seu negócio</p>
            </div>
          </div>

          <div class="flex items-start space-x-4 p-4 rounded-2xl bg-gradient-to-r from-pink-50 to-rose-50 hover:from-pink-100 hover:to-rose-100 transition-all transform hover:scale-105">
            <div class="bg-gradient-to-br from-pink-500 to-rose-600 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <div>
              <p class="text-pink-800 font-semibold">Produtos premium inclusos</p>
              <p class="text-pink-600 text-sm mt-1">Linha completa de produtos de alta qualidade à sua disposição</p>
            </div>
          </div>
        </div>

        <!-- CTA especial -->
        <div class="mt-8 p-6 bg-gradient-to-br from-violet-500 via-purple-500 to-indigo-600 rounded-2xl text-center shadow-xl">
          <div class="flex items-center justify-center mb-3">
            <div class="bg-white/20 rounded-full p-2 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span class="text-white text-lg font-bold">🎯 Conceito único na região!</span>
          </div>
          <p class="text-white/90 text-lg leading-relaxed">
            <span class="font-bold text-yellow-300">Você é o dono por um dia!</span><br>
            <span class="text-sm">A clínica inteira trabalhando para o seu sucesso ✨</span>
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
          Ainda não faz parte da Neoviso?
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

        if (process.client) {
          localStorage.setItem('user', userLogin.value)
          localStorage.setItem('password', passLogin.value)
        }

        useApp().login(login_data).then((res) => {
            // loadingBtn.value = false
            useApp().logged = true
            if (process.client) {
              localStorage.setItem('logged', 'true')
            }
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
