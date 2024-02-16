import classnames from 'classnames'
import styles from './Flyout.module.scss'

interface IFlyoutProps {
  className?: string
  isOpen: boolean
  onToggle: () => void
  children: {
    button: React.ReactNode
    content: React.ReactNode
  }
}

export const Flyout = (props: IFlyoutProps) => (
  <div className={classnames(styles.root, props.className, { [styles.active]: props.isOpen })}>
    <button className={styles.toggleButton} onClick={props.onToggle}>
      {props.children.button}
    </button>
    <div className={styles.content}>{props.children.content}</div>
  </div>
)
