<template>
  <div class="px-4 rounded-lg">
    <div class="flex justify-between items-center border-b pb-4 border-gray-800">
      <input
          id="new-quote-input"
          type="text"
          v-model="content"
          class="block w-2/4 py-4 text-sm outline-none rounded-[12px] bg-gray-950 border-none placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          placeholder="Une citation..."
          required
      >
      <input
          id="new-quote-input"
          type="text"
          v-model="author"
          class="block w-1/4 py-4 text-sm outline-none rounded-[12px] bg-gray-950 border-none placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          placeholder="Auteur"
          required
      >
      <button class="bg-blue-500 text-white px-4 py-2 ml-4 rounded-full" @click="publishQuote" ref="publishBtn">Publier</button>
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
import QuotesService from '@/services/quotes'

export default {
  name: "newQuote",
  data() {
    return {
      content: '',
      author: '',
    }
  },
  methods: {
    publishQuote() {
      if (this.author && this.content.length > 5) {
        QuotesService.saveQuote({author: this.author, content: this.content})
            .then(() => {
              this.$refs.publishBtn.textContent = 'Publié !';
              this.$refs.publishBtn.classList.remove('bg-blue-500');
              this.$refs.publishBtn.classList.add('bg-green-500');
              this.content = '';
              this.author = '';
              this.$emit('update-quote-list');
              setTimeout(() => {
                this.$refs.publishBtn.textContent = 'Publier';
                this.$refs.publishBtn.classList.remove('bg-green-500');
                this.$refs.publishBtn.classList.add('bg-blue-500');
              }, 2000)
            })
            .catch(() => {
              alert('Une erreur est survenue, veuilez réessayer plus tard');
            })
      } else {
        alert('Le contenu et l\'auteur doivent être renseignés et le contenu doit être supérieur à 5 characteres')
      }
    }
  }
}
</script>

<style scoped>

</style>
