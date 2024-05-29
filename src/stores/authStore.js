import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const authenticated = ref(false)
  const token = ref('')
  // We will not handle auth so here is a user we can use for the moment
  const user = ref({
    name: 'Marie Benjamin',
    pseudo: '@Marie_prinpri',
    description: 'A happy happy rabbit'
  })

  function authenticate() {
    authenticated.value = true
  }
  function check() {
    authenticated.value = !!localStorage.getItem('id_token')
  }

  function login(tokenValue, userInfo) {
    token.value = tokenValue
    user.value = userInfo
    localStorage.setItem('id_token', tokenValue)
    authenticate()
  }

  function logout() {
    token.value = ''
    user.value = []
    localStorage.removeItem('id_token')
    authenticated.value = false
  }


  return { authenticated, user, login, logout, check }
})
