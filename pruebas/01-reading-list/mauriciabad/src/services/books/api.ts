import booksJson from './data.json'
import { mapLibraryToBooks, type Book, type Library } from './types'

export async function getAll(): Promise<Book[]> {
  const library = booksJson as unknown as Library
  const books = mapLibraryToBooks(library)

  return Promise.resolve(books)
}
