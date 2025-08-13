export default defineNuxtRouteMiddleware((to, from) => {
  // Skip SSR for auth middleware to prevent hydration mismatches
  if (process.server) {
    return
  }

  // Only run on client to avoid hydration issues
  if (process.client) {
    const appStore = useApp()
    const isLogged = localStorage.getItem('logged') === 'true'
    appStore.logged = isLogged

    // Redireciona se não estiver logado e não for a página de login
    if (!isLogged && !to.path.startsWith('/auth/')) {
      return navigateTo('/auth/login')
    }

    // Impede que o usuário logado acesse /auth/login
    if (isLogged && to.path === '/auth/login') {
      return navigateTo('/')
    }
  }
})
