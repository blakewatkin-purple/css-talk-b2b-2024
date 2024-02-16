import CloseIcon from 'assets/icon-close-toggle.svg?react'
import { Book } from 'components/Book/Book'
import { BookModel } from 'models/BookModel'
import { useEffect, useRef } from 'react'
import styles from './BookModal.module.scss'

interface BookModalProps {
  book: BookModel | null
  onClose: () => void
}

export const BookModal = ({ book, onClose }: BookModalProps) => {
  const modalRef = useRef<HTMLDialogElement>(null)

  const handleClose = () => {
    modalRef.current?.close()
    onClose()
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === 'Escape') handleClose()
  }

  useEffect(() => {
    if (book) modalRef.current?.showModal()
  }, [book])

  return (
    <dialog
      ref={modalRef}
      className={styles.root}
      style={{ '--cover-color': book?.color } as React.CSSProperties}
      onKeyDown={handleKeyDown}
    >
      <div className={styles.backCover}>{book && <Book {...book} />}</div>
      <button
        type='button'
        onClick={handleClose}
        className={styles.closeButton}
        title='Close modal button'
      >
        <CloseIcon />
      </button>
      <div className={styles.frontCover} />
    </dialog>
  )
}
