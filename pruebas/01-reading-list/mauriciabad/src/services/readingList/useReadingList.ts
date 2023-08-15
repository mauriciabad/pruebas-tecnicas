
import { useLocalStorage } from '@vueuse/core'
import type { BookISBN } from '../books/types'
import { useBroadcastChannel } from '@vueuse/core'
import { watch } from 'vue'

const {
  data,
  post,
} = useBroadcastChannel<Set<BookISBN>, Set<BookISBN>>({ name: 'reading-lista' })
watch(data, () => { post(data.value) })

const readingList = useLocalStorage<Set<BookISBN>>('reading-list-books', new Set())

export default function useReadingList() {

  function toggleReadingListBook(bookISBN: BookISBN): void {
    if (readingList.value.has(bookISBN)) readingList.value.delete(bookISBN)
    else readingList.value.add(bookISBN)
  }

  return { readingList, toggleReadingListBook }
}
