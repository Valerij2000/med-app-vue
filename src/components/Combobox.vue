<template>
  <div class="w-full max-w-md mx-auto mt-10">
    <div class="relative">
      <input
        type="text"
        v-model="query"
        @focus="open = true"
        @keydown.down.prevent="highlightNext"
        @keydown.up.prevent="highlightPrev"
        @keydown.enter.prevent="selectOption"
        placeholder="Выберите элемент..."
        class="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <ul
        v-show="open && filteredOptions.length"
        class="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-xl shadow-lg max-h-60 overflow-auto"
      >
        <li
          v-for="(option, index) in filteredOptions"
          :key="option"
          @click="select(option)"
          :class="[
            'cursor-pointer px-4 py-2 hover:bg-blue-100',
            index === highlightedIndex ? 'bg-blue-100' : ''
          ]"
        >
          {{ option }}
        </li>
      </ul>
    </div>

    <div v-if="selected" class="mt-4 text-gray-700">
      Вы выбрали: <span class="font-semibold">{{ selected }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const options = ['Vue', 'React', 'Angular', 'Svelte', 'Solid', 'Alpine']
const query = ref('')
const selected = ref(null)
const open = ref(false)
const highlightedIndex = ref(-1)

const filteredOptions = computed(() =>
  options.filter((opt) => opt.toLowerCase().includes(query.value.toLowerCase()))
)

const select = (option) => {
  selected.value = option
  query.value = option
  open.value = false
}

const selectOption = () => {
  if (highlightedIndex.value >= 0) {
    select(filteredOptions.value[highlightedIndex.value])
  }
}

const highlightNext = () => {
  if (highlightedIndex.value < filteredOptions.value.length - 1) {
    highlightedIndex.value++
  }
}

const highlightPrev = () => {
  if (highlightedIndex.value > 0) {
    highlightedIndex.value--
  }
}

watch(query, () => {
  open.value = true
  highlightedIndex.value = -1
})

document.addEventListener('click', (e) => {
  if (!e.target.closest('.relative')) {
    open.value = false
  }
})
</script>
