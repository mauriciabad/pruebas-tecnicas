export interface Library {
  library: {
    book: Book;
  }[]
}

export type BookISBN = string;

export interface Book {
  title: string;
  pages: number;
  genre: string;
  cover: string;
  synopsis: string;
  year: number;
  ISBN: BookISBN;
  author: Author;
}

export interface UnknownBook extends Book {
  isUnknownBook: true;
}

export function makeUnknownBook(bookISBN: BookISBN = ''): UnknownBook {
  return {
    isUnknownBook: true,
    title: `Unknown book '${bookISBN}'`,
    pages: 0,
    genre: 'Unknown',
    cover: 'https://singlecolorimage.com/get/d6cfcc/9x14',
    synopsis: 'Unknown',
    year: 0,
    ISBN: bookISBN,
    author: {
      name: 'Unknwon',
    },
  }
}

export interface Author {
  name: string;
  otherBooks?: string[];
}

export function mapLibraryToBooks(library: Library): Book[] {
  return library.library.map((({ book }) => book))
}
