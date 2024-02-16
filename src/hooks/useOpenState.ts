import { useState } from 'react'

export const useOpenState = (defaultState: boolean) => {
  const [isOpen, setIsOpen] = useState(defaultState || false)

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)
  const toggle = () => setIsOpen(!isOpen)

  return { isOpen, open, close, toggle }
}
