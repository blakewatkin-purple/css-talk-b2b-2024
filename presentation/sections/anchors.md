---
layout: cover
---

# I have so many anchors!

---
layout: two-cols
---

# Anchor setup example

```tsx
{books.map((book, index) => (
    <Book
        key={`book-${index}`}
        style={
        {
            'anchor-name': `--${toKebabCase(book.title)}`,
        } as React.CSSProperties
        }
        {...book}
    />
))}

// Hover state
<div
    className={styles.root}
    style={
        {
        'anchor-default': `--${toKebabCase(book.title)}`,
        } as React.CSSProperties
    }
>
    <Book {...book} />
</div>
```

::right::

# empty

```scss
.root {
  position: fixed;
  position-fallback: --right-then-left-then-top;
}
@position-fallback --right-then-left-then-top {
  @try {
    left: calc(anchor(right) + 6px);
    top: calc(
      anchor(top) + math.div(375px - $tooltip-height, 2)
    ); // will be able to use anchor-size(height) once it's implemented
  }

  @try {
    right: calc(anchor(left) + 6px);
    top: calc(
      anchor(top) + math.div(375px - $tooltip-height, 2)
    );
  }

  @try {
    bottom: calc(anchor(top) - 6px);
    left: calc(anchor(center) - math.div($tooltip-width, 2));
  }
}
```