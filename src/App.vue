<template>
  <div class="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-lg space-y-6">
    <TogglerVue :currentForm="currentForm" @update:form="currentForm = $event" />
    <BaseFormVue v-if="currentForm === 'form1'" @calculated="result = $event" />
    <AdvancedFormVue v-else @calculated="result = $event" />
    <ResultDisplayVue :result="result" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AdvancedFormVue from './components/AdvancedForm.vue'
import BaseFormVue from './components/BaseForm.vue'
import ResultDisplayVue from './components/ResultDisplay.vue'
import TogglerVue from './components/Toggler.vue'

const currentForm = ref('form1')
const result = ref(null)
</script>
