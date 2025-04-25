<template>
  <button
    @click="handlerClicker"
    class="px-6 py-2 bg-blue-600 text-white font-semibold rounded-xl shadow hover:bg-blue-700 transition duration-200"
  >
    Click on me
  </button>
</template>

<script setup>
import { ref } from 'vue'

const number = ref(0)

const handlerClicker = () => {
  console.log(number.value++)
}
</script>
