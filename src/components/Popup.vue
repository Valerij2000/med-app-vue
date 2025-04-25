<template>
  <button
    @click="showPopup = true"
    class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
  >
    Show Summary
  </button>
  <div
    v-if="showPopup"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  >
    <div class="bg-white rounded-2xl shadow-xl p-6 w-[90%] max-w-md relative">
      <!-- Close Button -->
      <button
        @click="showPopup = false"
        class="absolute top-2 right-2 text-gray-400 hover:text-black"
      >
        ✕
      </button>

      <h2 class="text-xl font-semibold mb-4">Calculation Summary</h2>

      <div class="space-y-2">
        <div v-if="result">
          <p><strong>Result:</strong> {{ result }}</p>
        </div>
        <div v-else>not results yet ...</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
defineProps(['result'])
const showPopup = ref(false)
</script>
