import CloseIcon from 'assets/icon-close-toggle.svg?react'
import { Book } from 'components/Book/Book'
import { Flyout } from 'components/Flyout/Flyout'
import { FlyoutHeader } from 'components/Flyout/FlyoutHeader/FlyoutHeader'
import { useOpenState } from 'hooks/useOpenState'
import { BookModel } from 'models/BookModel'
import styles from './ShelfFlyout.module.scss'

interface IShelfFlyoutProps {
  books: BookModel[]
  onBookToggle: (book: BookModel) => void
}

export const ShelfFlyout = ({ books, onBookToggle }: IShelfFlyoutProps) => {
  const { isOpen, toggle, close } = useOpenState(false)

  return (
    <Flyout isOpen={isOpen} onToggle={toggle} className={styles.flyout}>
      {{
        button: (
          <div className={styles.flyoutButton}>
            TBR
            <div className={styles.counter}>{books.length}</div>
          </div>
        ),
        content: (
          <div className={styles.flyoutContent}>
            <div className={styles.content}>
              <FlyoutHeader onCloseFlyout={close}>
                <h3 className={styles.headerText}>To Be Read</h3>
              </FlyoutHeader>
              <section className={styles.books}>
                {books.map((book, index) => (
                  <div key={`book-${index}`} className={styles.bookWrapper}>
                    <Book key={book.title} {...book} />
                    <button
                      type='button'
                      onClick={() => onBookToggle(book)}
                      className={styles.closeButton}
                      title='Remove book button'
                    >
                      <CloseIcon />
                    </button>
                  </div>
                ))}
              </section>
            </div>
          </div>
        ),
      }}
    </Flyout>
  )
}
