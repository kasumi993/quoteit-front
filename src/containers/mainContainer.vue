<template>
  <div class="main bg-gray-950 px-12 py-4">
    <HeaderComponent @search-quote="searchQuote"/>
    <router-view :searchText="searchText" />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent/FooterComponent.vue'

export default {
  name: 'MainContainer',
  components: { FooterComponent, HeaderComponent },
  data() {
    return {
      searchText: null,
    }
  },
  methods: {
    searchQuote(searchText) {
      this.searchText = searchText;
    }
  }
}
</script>

<style>



</style>
