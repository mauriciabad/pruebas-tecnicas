<script lang="ts" setup>
import type { Book } from '@/services/books/types'

defineProps<{
  book: Book
}>()
</script>

<template>
  <li>
    <img
      :src="book.cover"
      :alt="`'${book.title}' cover`"
      class="w-full block aspect-[9/14] object-cover rounded-md shadow-lg"
    />
    <div class="text-center px-1 mt-2 text-md leading-4 font-semibold">
      <span>
        {{ book.title }}
      </span>
    </div>
  </li>
</template>
