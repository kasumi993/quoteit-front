<template>
  <div class="flex flex-row border border-gray-800 gap-8 flex-nowrap p-4 rounded-lg">
    <UserProfile class="w-1/3"/>
    <NewQuote class="w-2/3" @update-quote-list="updateQuoteList"/>
  </div>
</template>

<script>
import UserProfile from '/src/components/UserProfile.vue'
import NewQuote from '/src/components/NewQuote.vue'

export default {
  name: "addNewQuoteComponent",
  components: {
    UserProfile,
    NewQuote
  },
  methods: {
    updateQuoteList() {
      this.$emit('update-quote-list');
    }
  }
}
</script>

<style scoped>

</style>
