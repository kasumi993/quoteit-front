<template>
  <transition name="fade">
    <form class="w-max">
      <label
          for="default-search"
          class="mb-2 text-sm font-medium sr-only text-white"
      >Chercher</label>
      <div class="relative w-72">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
              class="w-4 h-4 text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
          >
            <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
            id="default-search"
            type="search"
            v-model="searchText"
            class="block w-full opacity-40 p-2 ps-10 text-sm border outline-none rounded-[12px] bg-gray-900 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            placeholder="Rechercher des citations..."
            required
        >
      </div>
    </form>
  </transition>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      searchText: null,
      timeout: null,
    }
  },
  watch: {
    searchText() {
      if (this.timeout) clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.search();
      }, 500)
    }
  },
  methods: {
    search() {
      this.$emit('search-quote', this.searchText);
    }
  }
}
</script>

<style scoped>

</style>
