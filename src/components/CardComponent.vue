<template>
  <div class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
    <a
      href="#"
      class="block max-w-sm p-16 rounded-lg shadow bg-gray-900 hover:bg-gray-700"
    >

      <h5 class="mb-2 text-sm font-bold tracking-tight text-white">{{ quote.content }}</h5>
      <p class="font-normal text-gray-400">{{ quote.author }}</p>
    </a>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  // type inference enabled
  props: {
    quote: {
      type: String,
      default: ''
    }
  }
})
</script>
