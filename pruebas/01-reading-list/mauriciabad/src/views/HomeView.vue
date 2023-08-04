<script setup lang="ts">
import useBooks from '@/services/books/useBooks'
import BookFilters from '@/components/bookList/BookFilters.vue'
import BookList from '@/components/bookList/BookList.vue'
import { computed, ref } from 'vue'
import type { Book } from '@/services/books/types'

const { books } = useBooks()

const selectedGenre = ref<string | null>(null)

const filteredBooks = computed<Book[]>(
  () =>
    books.value?.filter((book) => !selectedGenre.value || book.genre === selectedGenre.value) ?? []
)
</script>

<template>
  <main class="mx-auto max-w-7xl my-12 p-4">
    <template v-if="books">
      <h1 class="text-6xl font-bold">Avilable books</h1>

      <div class="mt-4 bg-white border border-stone-300 py-4 px-5 shadow-lg rounded-xl">
        <div class="flex items-baseline flex-wrap mb-2">
          <h3 class="text-2xl font-bold leading-none mr-2">Filters</h3>
          <span>{{ filteredBooks.length }} results</span>
        </div>

        <BookFilters v-model:genre="selectedGenre" />
      </div>

      <BookList :books="filteredBooks" class="mt-8" />
    </template>

    <template v-else>
      <p class="mt-24 text-xl text-gray-600 animate-pulse text-center">Loading...</p>
    </template>
  </main>
</template>
