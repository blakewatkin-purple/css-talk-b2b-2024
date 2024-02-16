---
layout: cover
---

# I can `:has` selector

---
layout: statement
clicks: 3
---

<h1 v-click="[0, 1]">
  "This pseudo-class presents a way of selecting a parent element 
  or a previous sibling element with respect to a reference element 
  by taking a relative selector list as an argument."
</h1>

<div v-click="[1, 4]" class="pos-absolute top-10% left-5% h-80% w-90% rounded-16px grid grid-rows-33% grid-items-center">
  <div v-click="[1, 4]">Parent selector </div>
  <div v-click="[2, 4]">Sibling selector</div>
  <div v-click="[3, 4]">Mysterious third option ⁉️⁉️</div>
</div>

---
layout: two-cols
---

# Parent selector

```tsx
// Component snippet
<section>
  <h1>The Cool Cabana 😎</h1>
  <p>A long time ago in a cabana far far away</p>
  {imgUrl && <img src={imgUrl} class="icon" />}
</section>
```

```scss
// Styles snippet
section {
  ...
  // omitted for brevity...

  &:has(> .icon) {
    background-color: olive;
  }
}
```

<template v-slot:right>
<div class="h-100 right pos-relative">

  <img class="image pos-absolute top-25%" src="/Cabanas2.png" />

</div>

</template>

<style>
div:not(.right) {
  background-color: var(--slidev-theme-background-color);
}
img.image {
    margin-top: 15%;
}
.slidev-code-wrapper {
  margin-right: 10px !important;
}
</style>

---
layout: two-cols
---

# Sibling selector

```tsx
// Component snippet
{cabanas.map(cabana => (
  <>
    <h1>{cabana.title}</h1>
    {cabana.description &&
      <p>{cabana.description}</p>
    }
  </>
))}
```

```scss {all|1-7|1,9-15|all}
// Styles snippet
h1 {
  color: black;

  &:has(+ p) {
    color: red;
  }
  &:not(:has(+ p)),
  &:has(+ :not(p)) {
    color: green;
  }
}
```

<template v-slot:right>
<div class="h-100 right pos-relative">

  <img class="image pos-absolute top-25%" src="/Cabanas1.png" />

</div>

</template>

<style>
div:not(.right) {
  background-color: var(--slidev-theme-background-color);
}
img.image {
    margin-top: 15%;
}
.slidev-code-wrapper {
  margin-right: 10px !important;
}
</style>

---
layout: two-cols
---

# Sibling selector (cont.)

```tsx {all|2|4|5-7|8-10|all}
<section>
  {cabanas.map(cabana => (
    <>
      <h1>{cabana.title}</h1>
      {cabana.description &&
        <p>{cabana.description}</p>
      }
      {cabana.imgUrl &&
        <img src={cabana.imgUrl} class="icon" />
      }
    </>
  ))}
</section>
```

::right::

# empty

```scss {0|1-2|5-10|5-16|18-22|all}
section {
  h1 {
    margin-bottom: 10px;
    
    // this selector:
    // has immediate sibling of p,
    // or immediate sibling with class .icon
    &:has(+ p), &:has(+ .icon) {
      margin-bottom: 0;
    }
    // is the same as this selector:
    // has immediate sibling that is either p
    // or class .icon
    &:has(+ :is(p, .icon)) {
      margin-bottom: 0;
    }

    // has immediate sibling p that in turn
    // has immediate sibling with class .icon
    &:has(+ p + .icon) {
      margin-bottom: 0;
    }
  }
}
```

---
layout: two-cols
---

# Mysterious third option

```tsx
<section>
  {cabanas.length === 0 && 
    <span>
      Looks like you're out of cabanas 😭
    </span>
  }

  {cabanas.length > 10 &&
    <span>
      The amount of cabanas is bananas!
    </span>
  }
  
  {cabanas.map(cabana => (
    <>
      <h1>{cabana.title}</h1>
      {/* ... */}
    </>
  ))}
</section>
```

::right::

# empty

```tsx {0|all}
<section>
  {cabanas.map(cabana => (
    <>
      <h1>{cabana.title}</h1>
      {/* ... */}
    </>
  ))}
</section>
```


```scss {0|1-5|all}
section {
  &:empty:before {
    content: "Looks like you're out of cabanas 😭";
    ...
  }

  &:has(:nth-child(10)):before {
    content: "The amount of cabanas is bananas!";
    ...
  }
}
```

---
layout: default
---

# Complex example

```scss {all|1,3,10,12,21-23|1,3,10,12,14-15,17,21-23|1,3,5-8,10,12,21-23|all}
$warning-count: 5;

.flyout {
  ...
  &:has(.flyoutContent > .content > .books :nth-child(#{$warning-count})) .flyoutButton .counter {
    background: $warning-color;
    border-color: $warning-color;
  }

  .flyoutContent > .content {
    ...
    > .books {
      ...
      &:has(:nth-child(#{$warning-count})):before {
        background-color: $warning-color;
        border-radius: 6px;
        content: "If you spent more time actually reading you wouldn't have such a long to be read list.";
        font-size: rem-calc(18);
        padding: rem-calc(6) 0;
      }
    }
  }
}
```
