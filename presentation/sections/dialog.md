---
layout: cover
---

# Modals: A `<dialog />`

---
layout: statement
---

<h1>
  "A game changer for the implementation of modals"
</h1>

---
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
clicks: 5
---

# The dialog element

```tsx {all|3,17-18,20,22-23|12-15|5-8|9-11,19|all}
export const Modal = (
  { children, withCloseButton }: ModalProps) => {
  const modalRef = useRef<HTMLDialogElement>(null)

  const handleClose = () => {
    modalRef.current?.close()
    withCloseButton?.onClose()
  }
  const handleKeyDown = (event) => {
    if (event.key === 'Escape') handleClose()
  }
  useEffect(() => {
    if (children) modalRef.current?.showModal()
    else handleClose()
  }, [children])

  return <dialog
    ref={modalRef}
    onKeyDown={handleKeyDown}
  >
    {withCloseButton && <CloseButtonHere />}
    {children}
  </dialog>
}
```

<arrow v-click="[1, 2]" x1="380" y1="340" x2="200" y2="417" color="#f76a4f" width="3" arrowSize="1" />
<arrow v-click="[2, 3]" x1="420" y1="410" x2="360" y2="340" color="#f76a4f" width="3" arrowSize="1" />
<arrow v-click="[3, 4]" x1="420" y1="202" x2="282" y2="202" color="#f76a4f" width="3" arrowSize="1" />

---
layout: two-cols
---

# Dialog backdrop styling

```scss
.root {
  background: var(--background-primary);
  border-radius: 12px;
  height: auto;
  left: 50%;
  justify-self: center;
  max-width: calc(#{$maxScreenWidth} - #{rem-calc(30)});
  padding: rem-calc(15);
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  width: 100%;
  z-index: 901; // 🤮
}

.overlay {
  background: var(--overlay);
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 900; // 🤮
}
```

::right::

# empty

```scss
.root {
  background: var(--background-primary);
  border-radius: 12px;
  max-width: calc(#{$maxScreenWidth} - #{rem-calc(30)});
  padding: rem-calc(15);
  
  &::backdrop {
    background: var(--overlay);
  }
}
```
