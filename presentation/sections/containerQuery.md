---
layout: cover
---

# I cannot `@container` myself

---
layout: statement
---

<h1>
  "A media query based on element size rather than viewport size"
</h1>

---
layout: two-cols
clicks: 6
---

# Container queries

```scss {all|2-5|7-10|12-15|17-20|22-23|all}
.root {
    // container: container-name / container-type;
    container: book / inline-size;

    .book { ... }

    // Sitting on the shelf
    @container book (width < 350px) {
        .book { ... }
    }

    // Hover state
    @container (width >= 350px) and (width < 400px) {
        .book { ... }
    }

    // Flyout
    @container (width >= 400px) and (width < 550px) {
        .book { ... }
    }

    // Modal
    @container book (width >= 550px) { .book { ... } }
}
```

<template v-slot:right>
<div class="h-100 right pos-relative">

  <img v-click="[2,3]" class="image pos-absolute top-0 h-100" src="/OnTheShelf.png" />

  <img v-click="[3,4]" class="image pos-absolute top-0 h-100" src="/HoverState.png" />

  <img v-click="[4,5]" class="image pos-absolute top-0 h-100" src="/Flyout.png" />

  <img v-click="[5,7]" class="image pos-absolute top-0 h-100" src="/Modal.png" />

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