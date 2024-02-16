---
theme: seriph
themeConfig:
  primary: '#1f2c60'
  secondary: '#f76a4f'
  background-color: '#f5ede2'
  code-highlight: '#747373'
colorSchema: light
layout: cover
highlighter: shikiji
lineNumbers: false
transition: slide-left
title: CSS Talk
mdc: true
---

<mdi-bell-ring
    class="inline ml-14 mb--3 h-10 w-10 c-[#ccb225]"
    v-motion
    :initial="{rotate: -15}"
    :visible="{ rotate: 15, transition: { duration: 650, repeat: 5, repeatType: 'mirror' }}"
></mdi-bell-ring>

# Adding the DING to your Cascading Style Sheets

A brief overview of some modern CSS functionality

---
src: ./sections/intro.md
---

---
src: ./sections/hasSelector.md
---

---
src: ./sections/containerQuery.md
---

---
src: ./sections/dialog.md
---

---
src: ./sections/anchors.md
---

---
src: ./sections/outro.md
---