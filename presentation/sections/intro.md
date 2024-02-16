---
layout: table-of-contents
---

# Table of contents

<BackgroundCard>
  <div v-click="[1, 6]"><span>1.</span> I can <code>:has</code> selector</div>
  <div v-click="[2, 6]"><span>2.</span> I cannot <code>@container</code> myself</div>
  <div v-click="[3, 6]"><span>3.</span> Modals: A <code>&lt;dialog /&gt;</code></div>
  <div v-click="[4, 6]"><span>4.</span> I have so many anchors!</div>
  <div v-click="[5, 6]"><span>5.</span> The rest?</div>
</BackgroundCard>

---
layout: disclaimer
---

<h1
  v-motion
  :initial="{ y: 100, x: 0, scale: 1 }"
  :visible="{ y: -140, x: -360, scale: 0.7, transition: { duration: 1000, delay: 650 }}"
>Disclaimer</h1>

<div
  v-motion
  :initial="{ opacity: 0 }"
  :visible="{ opacity: 1, transition: { duration: 1000, delay: 950 }}"
  class="py-5 px-10 h-50 flex flex-items-center bg-[#1f2c60] rounded-16px c-white"
>
  <h3>
    The code snippets you are about to see are not necessarily the best implementations of the functionality,
    rather they serve only as an example of <em>how</em> the features work.
  </h3>
</div>
