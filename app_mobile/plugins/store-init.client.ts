export default defineNuxtPlugin(() => {
  // Plugin que roda apenas no cliente para inicializar o store
  const appStore = useApp()

  // Restaura estado do localStorage no cliente
  if (process.client) {
    const isLogged = localStorage.getItem('logged') === 'true'
    const userData = localStorage.getItem('user')
    const userPassword = localStorage.getItem('password')

    if (isLogged && userData && userPassword) {
      // Realizar login automático
      appStore.logged = true

      // Tentar fazer login com as credenciais salvas
      const loginData = {
        user: userData,
        password: userPassword
      }

      appStore.login(loginData).then((res) => {
        // Login automático bem-sucedido
        appStore.setUser(res)
        console.log('Login automático realizado com sucesso')
      }).catch((error) => {
        // Se falhar, limpar dados e redirecionar para login
        console.warn('Falha no login automático:', error)
        appStore.logged = false
        localStorage.removeItem('logged')
        localStorage.removeItem('user')
        localStorage.removeItem('password')
        // Não redirecionar aqui para evitar loops, o middleware auth fará isso
      })
    }
  }
})
