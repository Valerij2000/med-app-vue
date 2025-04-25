<template>
  <div class="flex justify-center gap-4">
    <button
      class="px-4 py-2 rounded-xl font-medium transition-all"
      :class="{
        'bg-blue-600 text-white': currentForm === 'form1',
        'bg-gray-200 text-gray-800 hover:bg-gray-300': currentForm !== 'form1'
      }"
      @click="$emit('update:form', 'form1')"
    >
      Base Form
    </button>
    <button
      class="px-4 py-2 rounded-xl font-medium transition-all"
      :class="{
        'bg-blue-600 text-white': currentForm === 'form2',
        'bg-gray-200 text-gray-800 hover:bg-gray-300': currentForm !== 'form2'
      }"
      @click="$emit('update:form', 'form2')"
    >
      Advanced Form
    </button>
  </div>
</template>

<script setup>
defineProps(['currentForm'])
defineEmits(['update:form'])
</script>
