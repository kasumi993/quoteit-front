<template>
  <div class="px-4 rounded-lg">
    <div class="flex justify-between items-center border-b pb-4 border-gray-800">
      <input
          id="new-quote-input"
          type="text"
          class="block w-2/4 py-4 text-sm outline-none rounded-[12px] bg-gray-950 border-none placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          placeholder="Une citation..."
          required
      >
      <input
          id="new-quote-input"
          type="text"
          class="block w-1/4 py-4 text-sm outline-none rounded-[12px] bg-gray-950 border-none placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          placeholder="Auteur"
          required
      >
      <button class="bg-blue-500 text-white px-4 py-2 ml-4 rounded-full">Publier</button>
    </div>
    <div class="flex flex-row gap-4 mt-4">
      <div class="flex flex-row flex-nowrap">
        <img class="rounded-full h-4 w-4" src="https://placehold.co/600x400/31AADD/png" alt="Profile Picture">
        <span class="text-white text-sm ml-2">Blue</span>
      </div>
      <div class="flex flex-row flex-nowrap">
        <img class="rounded-full h-4 w-4" src="https://placehold.co/600x400/pink/white" alt="Profile Picture">
        <span class="text-white text-sm ml-2">Pink</span>
      </div>
      <div class="flex flex-row flex-nowrap">
        <img class="rounded-full h-4 w-4" src="https://placehold.co/600x400/white/white" alt="Profile Picture">
        <span class="text-white text-sm ml-2">Grey</span>
      </div>
      <div class="flex flex-row flex-nowrap">
        <img class="rounded-full h-4 w-4" src="https://placehold.co/600x400/orange/white" alt="Profile Picture">
        <span class="text-white text-sm ml-2">Orange</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "newQuote"
}
</script>

<style scoped>

</style>
