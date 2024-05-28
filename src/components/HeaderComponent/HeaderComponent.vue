<template>
  <header>
    <nav class="bg-gray-900 rounded-[12px] px-4 lg:px-6 py-2.5">
      <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <a
          href="/home"
          class="flex items-center"
        >
          <span class="ml-4 self-center text-xl font-semibold whitespace-nowrap text-white">QuoteTier</span>
        </a>
        <div class="flex items-center lg:order-2">
          <div
            v-if="!authStore.authenticated"
            class="cursor-pointer text-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hover:bg-gray-700 focus:ring-gray-800"
            @click="login"
          >
            Se connecter
          </div>
          <div
            v-else
            class="cursor-pointer text-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hover:bg-gray-700 focus:ring-gray-800"
            @click="logout"
          >
            Se déconnecter
          </div>
          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            class="inline-flex items-center p-2 ml-1 text-sm rounded-lg lg:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            ><path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            /></svg>
            <svg
              class="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            ><path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            /></svg>
          </button>
        </div>
        <search-bar></search-bar>
      </div>
    </nav>
  </header>
</template>

<script>
import { useAuthStore } from '@/stores/authStore.js'
import SearchBar from "@/components/SearchBar.vue";

export default {
  name: 'HeaderComponent',
  components: {SearchBar},
  setup() {
    const authStore = useAuthStore()
    return { authStore }
  },
  methods: {
    logout() {
      this.authStore.logout();
      this.$router.push('/login');
    },
    login() {
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped>


</style>
