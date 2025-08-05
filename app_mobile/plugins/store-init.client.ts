export default defineNuxtPlugin(() => {
  // Plugin que roda apenas no cliente para inicializar o store
  const appStore = useApp()
  
  // Restaura estado do localStorage no cliente
  if (process.client) {
    const isLogged = localStorage.getItem('logged') === 'true'
    const userData = localStorage.getItem('user')
    
    if (isLogged) {
      appStore.logged = true
      
      // Se há dados de usuário, pode tentar restaurar
      if (userData) {
        // Aqui você pode implementar a restauração do usuário completo
        // Por exemplo, fazendo uma nova chamada à API ou restaurando do localStorage
      }
    }
  }
})
