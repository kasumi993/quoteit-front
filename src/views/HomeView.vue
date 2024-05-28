<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import CardComponent from '../components/CardComponent.vue'

import QuotesService from '@/services/quotes'
import { useRouter } from 'vue-router'
import BannerCardComponent from '@/components/BannerCardComponent.vue'
import CardListComponent from '@/components/cardListComponent.vue'

const router = useRouter()
const quotesList = ref([])

const getQuotes = async () => {
  const response = await QuotesService.getQuotes()
  quotesList.value = response
}

onBeforeMount(() => {
  getQuotes()
})
</script>

<template>
  <div class="Home">
    <div class="intro-banner flex flex-row flex-nowrap gap-5 mt-10 ml-10 mr-10">
      <div class="banner-image">
        <span class="style-text"> <img
            src="@/assets/stars-icon.svg"
            width="25"
        >New </span>
        <banner-card-component class="mt-6" />
      </div>
      <div class="trend-list">
        <span class="style-text"> <img
            src="@/assets/stars-icon.svg"
            width="25"
        >Trending </span>
        <card-list-component class="mt-6" />
      </div>
    </div>

    <div class="m-14 grid grid-cols-3 gap-8">
      <div
          v-for="(quote, index) in quotesList"
          :key="index"
      >
        <CardComponent
            :title="quote.title"/>
      </div>
    </div>
  </div>
</template>


<style lang="scss">
.intro-banner {
  max-height: 70vh;
  overflow: hidden;
  .style-text {
    display: flex;
    color: #31AADD;
  }
  .banner-image {
    width: 70%;
  }
  .trend-list {
    width: 30%;
  }
}

</style>
