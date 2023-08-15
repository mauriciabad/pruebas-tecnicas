<script lang="ts" setup>
import type { Book, UnknownBook } from '@/services/books/types'
import { makeUnknownBook } from '@/services/books/types'
import useBooks from '@/services/books/useBooks'
import useReadingList from '@/services/readingList/useReadingList'
import { computed } from 'vue'
import BookList from '@/components/bookList/BookList.vue'

const { readingList } = useReadingList()
const { books } = useBooks()

const booksInReadingList = computed<(Book | UnknownBook)[]>(() =>
  Array.from(readingList.value)
    .map(
      (bookISBN) => books.value?.find((book) => book.ISBN === bookISBN) ?? makeUnknownBook(bookISBN)
    )
    .reverse()
)
</script>

<template>
  <aside>
    <h2 class="text-4xl sm:text-3xl lg:text-4xl font-bold mt-4">Reading List</h2>
    <BookList :books="booksInReadingList" class="mt-6" hide-bookmarks />
  </aside>
</template>
