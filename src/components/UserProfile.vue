<template>
  <div class="p-4 rounded-lg flex">
    <img class="rounded-full h-16 w-16" src="@/assets/avatar.svg" alt="Profile Picture">
    <div class="ml-4 flex-1">
      <div class="text-white text-lg font-bold">{{ authStore.user.name }}</div>
      <div class="text-gray-500">{{ authStore.user.pseudo }}</div>
      <div class="text-gray-400 mt-1">{{ authStore.user.description }}</div>
    </div>
  </div>
</template>

<script>
import {useAuthStore} from "@/stores/authStore.js";
export default {
  name: 'UserProfile',
  setup() {
    const authStore = useAuthStore();
    return {authStore}
  }
}
</script>
