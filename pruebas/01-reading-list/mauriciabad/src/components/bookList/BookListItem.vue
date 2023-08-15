<script lang="ts" setup>
import type { Book, BookISBN } from '@/services/books/types'
import useReadingList from '@/services/readingList/useReadingList'
import BookmarkIcon from './BookmarkIcon.vue'
import { computed } from 'vue'
import { IconBookmark, IconBookmarkOff } from '@tabler/icons-vue'

const props = defineProps<{
  book: Book
}>()

const { readingList, toggleReadingListBook } = useReadingList()
const inReadingList = computed<boolean>(() => readingList.value.has(props.book.ISBN))
</script>

<template>
  <li class="relative group">
    <div class="relative">
      <img
        :src="book.cover"
        :alt="`'${book.title}' cover`"
        class="w-full block aspect-[9/14] object-cover rounded-md shadow-lg"
      />
      <div
        class="absolute group-hover:opacity-100 focus-within:opacity-100 opacity-0 flex text-white group-focus-visible:block inset-0 flex-col justify-center items-center"
      >
        <button
          @click="toggleReadingListBook(book.ISBN)"
          class="border-2 border-current rounded-full aspect-square p-2 backdrop-blur-sm backdrop-brightness-90"
          :aria-label="inReadingList ? 'Remove from reading list' : 'Add to reading list'"
          :title="inReadingList ? 'Remove from reading list' : 'Add to reading list'"
        >
          <IconBookmarkOff v-if="inReadingList" />
          <IconBookmark v-else />
        </button>
      </div>
    </div>
    <div class="text-center px-1 mt-2 text-md leading-4 font-semibold">
      <span>
        {{ book.title }}
      </span>
    </div>
    <BookmarkIcon v-if="inReadingList" class="absolute right-4 -top-1 z-10" />
  </li>
</template>
