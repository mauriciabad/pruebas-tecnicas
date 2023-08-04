<script lang="ts" setup>
import { computed } from 'vue'
import useBooks from '@/services/books/useBooks'
import InputSelect from '../InputSelect.vue'

const ALL_GENRES = 'Todos'

const props = defineProps<{
  genre: string | null
}>()

const emit = defineEmits<{
  (event: 'update:genre', value: string | null): void
}>()

const selectedGenre = computed<string | null>({
  get() {
    if (props.genre === null) return ALL_GENRES

    return props.genre
  },
  set(value) {
    if (value === ALL_GENRES) {
      emit('update:genre', null)
      return
    }

    emit('update:genre', value)
  }
})

const { genres } = useBooks()
</script>

<template>
  <div class="flex">
    <div>
      <span class="font-semibold ml-1">Genre</span>
      <InputSelect v-model="selectedGenre" :options="[ALL_GENRES, ...genres]" />
    </div>
  </div>
</template>
