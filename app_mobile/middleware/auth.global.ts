export default defineNuxtRouteMiddleware((to, from) => {
  if (process.client) {
    const appStore = useApp()
    const isLogged = localStorage.getItem('logged') === 'true'

    appStore.logged = isLogged

    // Redireciona se não estiver logado e não for a página de login
    if (!isLogged && to.path !== '/auth/login') {
      return navigateTo('/auth/login')
    }

    // Opcional: impede que o usuário logado acesse /auth/login
    if (isLogged && to.path === '/auth/login') {
      return navigateTo('/')
    }
  }
})