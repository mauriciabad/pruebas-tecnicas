<script lang="ts" setup>
import type { Book } from '@/services/books/types'
import BookListItem from './BookListItem.vue'

defineProps<{
  books: Book[]
}>()
</script>

<template>
  <ul class="grid grid-cols-[repeat(auto-fill,minmax(11rem,1fr))] gap-6">
    <BookListItem v-for="book in books" :key="book.ISBN" :book="book" />
  </ul>
</template>
