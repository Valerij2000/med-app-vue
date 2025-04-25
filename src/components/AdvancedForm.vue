<template>
  <form @submit.prevent="calculateform" class="space-y-4">
    <h2 class="text-xl font-semibold text-gray-700">Form 2 - Area of Rectangle</h2>
    <input
      type="number"
      v-model.number="form.length"
      placeholder="Enter Length"
      class="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
    />
    <input
      type="number"
      v-model.number="form.width"
      placeholder="Enter Width"
      class="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
    />
    <ComboboxVue @select="handleSelect" />
    <button
      type="submit"
      class="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-xl transition-all"
    >
      Calculate
    </button>
  </form>
</template>

<script setup>
import ComboboxVue from './Combobox.vue'
import { ref } from 'vue'
const emit = defineEmits(['calculated'])

const form = ref({
  length: null,
  width: null,
  selectedCategory: null
})

function handleSelect(value) {
  console.log('Selected:', value)
}

function calculateform() {
  emit('calculated', form.value.length * form.value.width)
}
</script>

<style></style>
