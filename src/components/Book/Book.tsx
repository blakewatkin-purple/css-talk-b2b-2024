import classnames from 'classnames'
import { BookModel } from 'models/BookModel'
import styles from './Book.module.scss'

interface BookProps
  extends BookModel,
    Pick<
      React.HTMLAttributes<HTMLDivElement>,
      'onMouseEnter' | 'onMouseLeave' | 'style' | 'className'
    > {}

export const Book = ({
  title,
  description,
  imgSrc,
  className,
  style,
  onMouseEnter,
  onMouseLeave,
}: BookProps) => (
  <div
    className={classnames(styles.root, className)}
    style={style}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <div className={styles.book}>
      {imgSrc && <img src={imgSrc} alt={`${title} book cover`} className={styles.bookCover} />}
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  </div>
)
