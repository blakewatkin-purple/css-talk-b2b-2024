import { Book } from 'components/Book/Book'
import { toKebabCase } from 'helpers/string-helpers'
import { BookModel } from 'models/BookModel'
import styles from './BookTooltip.module.scss'

interface BookTooltipProps
  extends Pick<React.HTMLAttributes<HTMLDivElement>, 'onMouseEnter' | 'onMouseLeave'> {
  book: BookModel
  bookIsOnShelf: boolean
  onSeeMoreClick: (book: BookModel) => void
  onToBeReadToggle: (book: BookModel) => void
}

export const BookTooltip = ({
  book,
  bookIsOnShelf,
  onSeeMoreClick,
  onToBeReadToggle,
  onMouseEnter,
  onMouseLeave,
}: BookTooltipProps) => (
  <div
    className={styles.root}
    style={
      {
        'anchor-default': `--${toKebabCase(book.title)}`,
        '--cover-color': book.color,
      } as React.CSSProperties
    }
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <Book {...book} />
    <div className={styles.actionButtons}>
      <button type='button' onClick={() => onSeeMoreClick(book)}>
        See more
      </button>
      <button type='button' onClick={() => onToBeReadToggle(book)}>
        {`${bookIsOnShelf ? 'Remove from' : 'Add to'} shelf`}
      </button>
    </div>
  </div>
)
