// stores/useFormStore.js
import { defineStore } from 'pinia'

export const useFormStore = defineStore('form', {
  state: () => ({
    currentForm: 'form1',
    result: null
  }),
  actions: {
    setForm(form) {
      this.currentForm = form
    },
    setResult(value) {
      this.result = value
    }
  }
})
