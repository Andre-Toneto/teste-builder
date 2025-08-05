export default defineNuxtRouteMiddleware((to, from) => {
  const appStore = useApp()

  // No servidor, assume não logado por segurança
  if (process.server) {
    // Redireciona para login se não for página de auth
    if (!to.path.startsWith('/auth/')) {
      return navigateTo('/auth/login')
    }
  }

  // No cliente, verifica localStorage
  if (process.client) {
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
