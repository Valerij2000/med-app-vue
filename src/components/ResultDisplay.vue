<template>
  <div v-if="result !== null" class="text-center text-lg font-bold text-gray-700 mt-6">
    Result: <span class="text-blue-600">{{ result }}</span>
  </div>
</template>

<script setup>
defineProps(['result'])
</script>
