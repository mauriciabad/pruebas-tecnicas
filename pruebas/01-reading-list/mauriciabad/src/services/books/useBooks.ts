import { computed, onMounted, ref } from "vue"
import * as booksApi from './api'
import type { Book } from "./types"

const books = ref<Book[] | null>(null)

const genres = computed<string[]>(() => {
  if (!books.value) return []
  return Array.from(new Set(books.value.map((book) => book.genre)))
})

export default function useBooks() {
  onMounted(async () => {
    books.value ??= await booksApi.getAll()
  })

  return { books, genres }
}
