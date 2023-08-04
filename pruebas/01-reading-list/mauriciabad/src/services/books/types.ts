export interface Library {
  library: {
    book: Book;
  }[]
}

export interface Book {
  title: string;
  pages: number;
  genre: string;
  cover: string;
  synopsis: string;
  year: number;
  ISBN: string;
  author: Author;
}
export interface Author {
  name: string;
  otherBooks?: string[];
}

export function mapLibraryToBooks(library: Library): Book[] {
  return library.library.map((({ book }) => book))
}
