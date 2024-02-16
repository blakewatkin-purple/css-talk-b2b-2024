import CloseIcon from 'assets/icon-close-toggle.svg?react'
import classnames from 'classnames'
import { useEffect, useRef } from 'react'
import styles from './Modal.module.scss'

interface ModalProps {
  children?: React.ReactNode
  className?: string
  withCloseButton?: {
    onClose: () => void
  }
}

export const Modal = ({ children, className, withCloseButton }: ModalProps) => {
  const modalRef = useRef<HTMLDialogElement>(null)

  const handleClose = () => {
    modalRef.current?.close()
    withCloseButton?.onClose()
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === 'Escape') handleClose()
  }

  useEffect(() => {
    if (children) modalRef.current?.showModal()
    else handleClose()
  }, [children])

  return (
    <dialog ref={modalRef} className={classnames(styles.root, className)} onKeyDown={handleKeyDown}>
      {withCloseButton && (
        <button type='button' onClick={handleClose} className={styles.closeButton}>
          <CloseIcon />
        </button>
      )}
      {children}
    </dialog>
  )
}
