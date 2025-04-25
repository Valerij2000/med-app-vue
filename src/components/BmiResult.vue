<template>
  <div class="p-4 mt-6 rounded bg-gray-100">
    <p class="text-lg font-medium">Ваш ИМТ: <span class="font-bold">{{ bmi }}</span></p>
    <p v-if="category" class="text-sm text-gray-700 mt-1">Категория: {{ category }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  bmi: String,
})

const category = computed(() => {
  const bmiVal = parseFloat(props.bmi)
  if (bmiVal < 18.5) return 'Недостаточный вес'
  if (bmiVal < 25) return 'Норма'
  if (bmiVal < 30) return 'Избыточный вес'
  return 'Ожирение'
})
</script>