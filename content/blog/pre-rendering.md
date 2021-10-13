---
title: 'Two Forms of Pre-rendering'
date: '2020-01-01'
category: 'Mathematics'
tags: 'ReactJS,NextJS,JS,SSR,Test2'
imageLink: 'https://source.unsplash.com/1600x900/?water,nature'
featured: '1'
---

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others. 

![dsfsdf](https://images.unsplash.com/photo-1633298151917-c2e858ff349b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80)


```js
console.log("Hello World")
```

# GFM

## Autolink literals

[www.example.com, ](https://example.com)
