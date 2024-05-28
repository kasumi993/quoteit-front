<template>
  <div class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300">
    <div class="block max-w-sm p-4 rounded-lg shadow bg-gray-900 hover:bg-gray-700">
      <div class="block max-w-sm px-12 pt-16 pb-4">
        <p class="mb-2 text-sm font-bold tracking-tight text-white">" {{ quote.content }} "</p>
        <p class="font-normal text-gray-400">{{ quote.author }}</p>
      </div>
      <div class="flex flex-row mt-12">
        <p class="font-normal text-gray-400 mr-4" @click="sendLike">{{ quote.likes }} <i ref="likeButton" :class="liked ? 'liked fa fa-heart' : 'fa fa-heart-o'" class="like-icon hover:scale-110 cursor-pointer"></i></p>
        <p class="text-sm text-gray-400">{{ quote.author }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['quote'],
  data() {
    return {
      liked: false,
    }
  },
  methods: {
    sendLike() {
      this.liked = !this.liked;
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
