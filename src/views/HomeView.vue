<template>
  <div class="Home">
    <div class="main-section flex flex-row flex-nowrap gap-5 mt-10">
      <div class="left-section flex flex-col gap-5">
        <div class="top-content">
          <div class="add-new-quote">
            <add-new-quote-component></add-new-quote-component>
          </div>
        </div>
        <div class="bottom-content">
          <div class="mt-12 grid grid-cols-3 gap-8">
            <div
                v-for="(quote, index) in quotesList"
                :key="index">
              <CardComponent :quote="quote" @open-socials-modal="openSocialsModal"/>
            </div>
          </div>
        </div>
      </div>
      <div class="right-section">
        <div class="trend-list">
        <span class="style-text"> <img
            src="@/assets/stars-icon.svg"
            width="25"
        >Trending </span>
          <card-list-component class="mt-6" />
        </div>
      </div>
    </div>
    <socials-modal v-if="displaySocialsModal" @close="closeSocialsModal" :quote="sharedQuote"></socials-modal>
  </div>
</template>

<script>
import CardComponent from '../components/CardComponent.vue'
import QuotesService from '@/services/quotes'
import CardListComponent from '@/components/cardListComponent.vue'
import AddNewQuoteComponent from "@/components/AddNewQuoteComponent.vue";
import SocialsModal from "@/components/SocialsModal.vue";

export default {
  components: {
    CardListComponent,
    AddNewQuoteComponent,
    SocialsModal,
    CardComponent
  },
  props: ['searchText'],
  data() {
    return {
      displaySocialsModal: false,
      quotesList: {},
      sharedQuote: null,
    }
  },
  beforeMount() {
    this.getQuotes(null);
  },
  watch: {
    searchText() {
      this.getQuotes(this.searchText)
    }
  },
  methods: {
    async getQuotes(filter) {
      const response = await QuotesService.getQuotes(filter)
      this.quotesList = response;
    },
    openSocialsModal(quote) {
      this.displaySocialsModal = true;
      this.sharedQuote = quote;
    },
    closeSocialsModal() {
      this.displaySocialsModal = false;
    }
  }
}
</script>


<style lang="scss">
.main-section {
  max-width: 100%;
  max-height: 100vh;
  height: calc(100vh - 170px);
  overflow: hidden;
  .style-text {
    display: flex;
    color: #31AADD;
  }
  .left-section {
    width: 70%;
    .bottom-content {
      overflow: scroll;
    }
  }
  .right-section {
    width: 30%;
    position: relative;
    .trend-list {
      width: 400px;
      position: fixed;
    }
  }
}

</style>
