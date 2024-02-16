import { Book } from 'components/Book/Book'
import { BookModal } from 'components/BookModal/BookModal'
import { BookTooltip } from 'components/BookTooltip/BookTooltip'
import { ShelfFlyout } from 'components/ShelfFlyout/ShelfFlyout'
import { toKebabCase } from 'helpers/string-helpers'
import styles from './Library.module.scss'
import { useLibrary } from './useLibrary'

interface ILibraryProps {
  title: string
}

export const Library = ({ title }: ILibraryProps) => {
  const {
    books,
    toBeReadBooks,
    selectedBook,
    hoveredBook,
    handleSeeMoreClick,
    handleToBeReadToggle,
    setHoveredBook,
    unsetHoveredBook,
    setSelectedBook,
  } = useLibrary()

  return (
    <>
      <div className={styles.root}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.bookshelf}>
          {books.map((book, index) => (
            <Book
              key={`book-${index}`}
              style={
                {
                  'anchor-name': `--${toKebabCase(book.title)}`,
                  backgroundColor: book.color,
                } as React.CSSProperties
              }
              onMouseEnter={() => setHoveredBook(book)}
              onMouseLeave={unsetHoveredBook}
              {...book}
            />
          ))}
        </div>
      </div>
      <ShelfFlyout books={toBeReadBooks} onBookToggle={handleToBeReadToggle} />
      <BookModal book={selectedBook} onClose={() => setSelectedBook(null)} />
      {hoveredBook && (
        <BookTooltip
          book={hoveredBook}
          bookIsOnShelf={toBeReadBooks.includes(hoveredBook)}
          onSeeMoreClick={handleSeeMoreClick}
          onToBeReadToggle={handleToBeReadToggle}
          onMouseEnter={() => setHoveredBook(hoveredBook)}
          onMouseLeave={unsetHoveredBook}
        />
      )}
    </>
  )
}
