export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(false)

  const setAuthenticated = (param) => {
    isAuthenticated.value = param
  }

  return {
    isAuthenticated,
    setAuthenticated,
  }
})
