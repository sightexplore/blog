---
id: '1'
title: 'SSR vs SSG'
date: 'Oct 1, 2021'
category: 'Computer'
tags: 'ReactJS,NextJS,JS,SSG,Test3'
imageLink: 'https://source.unsplash.com/m_HRfLhgABo/1600x900'
featured: '1'
---

We recommend using **Static Generation** (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.

You can use Static Generation for many types of pages, including:

- Marketing pages
- Blog posts
- E-commerce product listings
- Help and documentation

You should ask yourself: "Can I pre-render this page **ahead** of a user's request?" If the answer is yes, then you should choose Static Generation.

On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.

In that case, you can use **Server-Side Rendering**. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate data.

On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.

In that case, you can use **Server-Side Rendering**. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate data.


```html
<!--HTML document declaration-->
<!DOCTYPE html>
<!--HTML Tag: The root-->
<html lang="en">
    <!--Header file, Metadata, Title, etc. -->
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <!--Visible Content-->
    </body>
</html>

```

> Enclosed


1. Item 1
1. Item 2
1. Item 3
   1. Item 3a
   1. Item 3b


* Item 1
* Item 2
  * Item 2a
  * Item 2b
    1. Item 3c


As Kanye West said:

> We're living the future so
> the present is our past.
> We're living the future so
> the present is our past.
> We're living the future so
> the present is our past.
> We're living the future so
> the present is our past.
> We're living the future so
> the present is our past.
> We're living the future so
> the present is our past.
