<template>
  <article
    class="flex max-w-xl flex-col items-start justify-between"
    :style="{ fontSize: fontSize + 'em' }"
  >
    <div class="flex items-center gap-x-4 text-xs">
      <time class="text-gray-500">{{ date }}</time>
      <a
        href="#"
        class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
        >{{ categtitle }}</a
      >
    </div>
    <div class="group relative">
      <h3 class="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
        <a href="#">
          <span class="absolute inset-0" />
          {{ title }}
        </a>
      </h3>
      <p class="mt-5 line-clamp-3 text-sm/6 text-gray-600">{{ description }}</p>
    </div>
    <div class="relative mt-8 flex items-center gap-x-4">
      <img :src="imageUrl" alt="" class="size-10 rounded-full bg-gray-50" />
      <div class="text-sm/6">
        <p class="font-semibold text-gray-900">
          <a href="#">
            <span class="absolute inset-0" />
            {{ authorName }}
          </a>
        </p>
        <p class="text-gray-600">{{ role }}</p>
      </div>
    </div>
    <button
      @click="$emit('enlarge-text')"
      class="px-6 py-2 bg-blue-600 text-white font-semibold rounded-xl shadow hover:bg-blue-700 transition duration-200 mt-5"
    >
      Enlarge post text
    </button>
  </article>
  <hr />
</template>

<script setup>
const props = defineProps({
  date: String,
  categtitle: String,
  title: String,
  description: String,
  imageUrl: String,
  authorName: String,
  role: String,
  fontSize: Number
})
</script>
