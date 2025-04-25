<template>
  <div class="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-lg space-y-6">
    <div class="flex justify-center gap-4">
      <button
        class="px-4 py-2 rounded-xl font-medium transition-all"
        :class="{
          'bg-blue-600 text-white': currentForm === 'form1',
          'bg-gray-200 text-gray-800 hover:bg-gray-300': currentForm !== 'form1'
        }"
        @click="currentForm = 'form1'"
      >
        Form 1
      </button>
      <button
        class="px-4 py-2 rounded-xl font-medium transition-all"
        :class="{
          'bg-blue-600 text-white': currentForm === 'form2',
          'bg-gray-200 text-gray-800 hover:bg-gray-300': currentForm !== 'form2'
        }"
        @click="currentForm = 'form2'"
      >
        Form 2
      </button>
    </div>

    <!-- Form 1 -->
    <form v-if="currentForm === 'form1'" @submit.prevent="calculateForm1" class="space-y-4">
      <h2 class="text-xl font-semibold text-gray-700">Form 1 - Simple Addition</h2>
      <input
        type="number"
        v-model.number="form1.a"
        placeholder="Enter number A"
        class="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="number"
        v-model.number="form1.b"
        placeholder="Enter number B"
        class="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        class="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-xl transition-all"
      >
        Calculate
      </button>
    </form>

    <!-- Form 2 -->
    <form v-else @submit.prevent="calculateForm2" class="space-y-4">
      <h2 class="text-xl font-semibold text-gray-700">Form 2 - Area of Rectangle</h2>
      <input
        type="number"
        v-model.number="form2.length"
        placeholder="Enter Length"
        class="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
      />
      <input
        type="number"
        v-model.number="form2.width"
        placeholder="Enter Width"
        class="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
      />
      <button
        type="submit"
        class="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-xl transition-all"
      >
        Calculate
      </button>
    </form>

    <!-- Result Display -->
    <div v-if="result !== null" class="text-center text-lg font-bold text-gray-700 mt-6">
      Result: <span class="text-blue-600">{{ result }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const currentForm = ref('form1')
const result = ref(null)

const form1 = ref({
  a: null,
  b: null
})

const form2 = ref({
  length: null,
  width: null
})

function calculateForm1() {
  result.value = form1.value.a + form1.value.b
}

function calculateForm2() {
  result.value = form2.value.length * form2.value.width
}
</script>

<style scoped>
body {
  @apply bg-gray-100;
}
</style>
