import CloseIcon from 'assets/icon-close-toggle.svg?react'
import styles from './FlyoutHeader.module.scss'

interface IFlyoutHeaderProps {
  children: React.ReactNode
  onCloseFlyout: () => void
}

export const FlyoutHeader = (props: IFlyoutHeaderProps) => {
  return (
    <div className={styles.root}>
      {props.children}
      <button onClick={props.onCloseFlyout} className={styles.closeButton} title='Close flyout'>
        <CloseIcon />
      </button>
    </div>
  )
}
