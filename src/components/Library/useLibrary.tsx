import { BookModel, placeholderBooks } from 'models/BookModel'
import { useState } from 'react'
import { useDebounce } from 'react-use'

export const useLibrary = () => {
  const [books] = useState<BookModel[]>(placeholderBooks)
  const [toBeReadBooks, setToBeReadBooks] = useState<BookModel[]>([])
  const [selectedBook, setSelectedBook] = useState<BookModel | null>(null)
  const [hoveredBook, _setHoveredBook] = useState<BookModel | null>(null)
  const [preDebounceHoveredBook, setPreDebouncedHoveredBook] = useState<BookModel | null>(null)

  const setHoveredBook = (book: BookModel | null) => {
    setPreDebouncedHoveredBook(book)
    _setHoveredBook(book)
  }

  const unsetHoveredBook = () => {
    setPreDebouncedHoveredBook(null)
  }

  useDebounce(
    () => {
      _setHoveredBook(preDebounceHoveredBook)
    },
    250,
    [preDebounceHoveredBook, _setHoveredBook]
  )

  const handleSeeMoreClick = (book: BookModel) => {
    setSelectedBook(book)
    setHoveredBook(null)
  }

  const handleToBeReadToggle = (book: BookModel) => {
    if (toBeReadBooks.includes(book)) setToBeReadBooks([...toBeReadBooks.filter(x => x !== book)])
    else setToBeReadBooks([...toBeReadBooks, book])
  }

  return {
    books,
    toBeReadBooks,
    selectedBook,
    hoveredBook,
    handleSeeMoreClick,
    handleToBeReadToggle,
    setHoveredBook,
    unsetHoveredBook,
    setSelectedBook,
  }
}
