<template>
  <form @submit.prevent="calculateform" class="space-y-4">
    <h2 class="text-xl font-semibold text-gray-700">Form 1 - Simple Addition</h2>
    <input
      type="number"
      v-model.number="form.a"
      placeholder="Enter number A"
      class="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
    <input
      type="number"
      v-model.number="form.b"
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
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['calculated'])

const form = ref({
  a: null,
  b: null
})

function calculateform() {
  emit('calculated', form.value.a + form.value.b)
}
</script>

<style></style>
