<template>
  <div class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300">
    <div class="block max-w-sm p-4 rounded-lg shadow bg-gray-900 hover:bg-gray-700">
      <div class="block max-w-sm px-12 pt-16 pb-4">
        <p class="mb-2 text-sm font-bold tracking-tight text-white">" {{ quote.content }} "</p>
        <p class="font-normal text-gray-400">{{ quote.author }}</p>
      </div>
      <div class="flex flex-row mt-12 justify-between">
        <p class="text-sm text-gray-400 mr-4" @click="sendLike">{{ quote.likes }} <i ref="likeButton" :class="liked ? 'liked fa fa-heart' : 'fa fa-heart-o'" class="like-icon hover:scale-110 cursor-pointer"></i></p>
        <p class="text-sm text-gray-400">{{ quote.creator }}</p>
        <p class="text-md text-gray-400 cursor-pointer" @click="shareQuote"><i class="fa fa-share-alt" aria-hidden="true"></i></p>
      </div>
    </div>
  </div>
</template>

<script>
import QuotesService from '@/services/quotes'

export default {
  props: ['quote'],
  data() {
    return {
      liked: false,
    }
  },
  methods: {
    sendLike() {
      if (!this.liked) {
        QuotesService.likeQuote(this.quote.id)
            .then((response) => {
              this.liked = response.likes > this.quote.likes;
              this.quote.likes += 1;
            })
            .catch(() => {
              alert('Une erreur est survenue, veuilez réessayer plus tard');
            })
      } else {
        QuotesService.unlikeQuote(this.quote.id)
            .then((response) => {
              this.liked = response.likes > this.quote.likes;
              this.quote.likes -= 1;
            })
            .catch(() => {
              alert('Une erreur est survenue, veuilez réessayer plus tard');
            })
      }

    },
    shareQuote() {
      this.$emit('open-socials-modal', this.quote);
    }
  }
}
</script>

<style>
.like-icon {
  &:hover, &.liked {
    color: #bb1818;
    fill: #bb1818;
  }

}

</style>
