---
title: HTML & CSS by Jon Duckett. Is it still relevant?
date: May 08, 2024
writer: Dan Edwards
tags: Book review, HTML, CSS
metadescription: Discover if Jon Duckett's "HTML & CSS" is still relevant in today's fast-evolving web development landscape. This review evaluates its strengths in presenting fundamental concepts and identifies outdated elements and missing modern practices.
keywords: html & css book review, jon duckett, web development books, html5, css3, coding education, web design, programming books, outdated tech, modern web practices, book relevance, html semantic elements, css grid, flexbox, responsive design, webp images, coding resources
---

**I bought this book as it was recommended reading to accompany the Codecademy Full-Stack Engineer career pathway. I am usually very fast to reach for a book whenever I’m learning something new, but I must admit I was suspicious about such an old book on such a fast-changing subject.**

However I was pleasantly surprised by how relevant it all seemed, and it helped me to organise and solidify my existing understanding of these languages. The first working draft of HTML 5 was published in January 2008, and the book was published in 2011. While there have been plenty of additions, there isn’t much that’s depreciated or totally out of date. CSS, however, has come a long quite a way since the book’s release, but the information is presently so nicely, and organised so well that I would recommend reading it if you are learning web development.

## The good stuff

#### Great overview of two languages

The book offers a well-thought out and nicely presented overview of what these two technologies can do. It can be really helpful to see the bigger picture early when you’re trying to learn something new.

#### Beautiful layouts

I don’t know what it is about software development books, but nearly all the ones I have are very big and heavy, but sparsely typeset. Despite being over 500 pages long, it’s actually quite a quick read. The attention to layout and presentation makes a welcome change from official programming documentation with very little imagination given to these areas.

#### Fantastic explanations

Duckett clearly knows a thing or two about pedagogy, because he takes nothing for granted and explains everything clearly. Too often, once we’ve mastered a complex subject, we lose all memory of the effort we put in in order to get where we are today. Good teaching is about having empathy with your student, and imagining that you don’t know the things you know now.

## What’s out of date

#### HTML5 semantic elements

These are actually in the book, but in a section at the back (page 432). While a new practice when the book was first published, it’s now well established and essential practice for keeping your code structured, clean and accessible. A modern web page should use tags like these as standard, not as an extra: `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>` and `<footer>`.

#### Flash player

Adobe Flash Player was a platform that enabled websites to play video, but it is now [officially dead](https://www.lifewire.com/what-happened-to-flash-2617986). It has has been superseded by the html `<video>` element, and other video-hosting platforms, such as YouTube & Vimeo that allow you to embed videos on a web page easily without hosting huge files and worrying about encoding.

#### Image formats

On the web, JPEG and PNG images are now being replaced with WebP and AVIF. These filetypes offer better compression which enables you to reduce the file size dramatically without losing too much quality, which in turn will make your sites load faster. WebP was developed by Google and currently has better browser support than AVIF.

#### CSS blink

Sadly this incredibly annoying feature has been depreciated. [Homer Simpson’s website](https://www.youtube.com/watch?v=HlX4T2SBkC0) could have used it to great effect.

#### [960.gs](http://960.gs)

This CSS framework, referenced frequently throughout the book, allowed developers to use a grid layout system easily before CSS3 was widely supported. It was very popular in the early 2010s before features like Grid and Flexbox were introduced.

## What’s missing

#### CSS Grid & Flexbox

These powerful features were only emerging when the book was published, and negate the need for a lot of hacky workarounds like using `float` for layout and `inline-block` for horizontal alignment.

#### Responsive Design Enhancements

##### Media Queries

The introduction of more sophisticated media queries with features like orientation and resolution detection give us even more fine-grained control for building responsive designs across various devices.

##### Viewport Units (`vh`, `vw`, `vmin`, `vmax`):

These units, relative to the viewport size, simplified the creation of responsive layouts that scale proportionally with screen dimensions.

##### Variables (Custom Properties)

**CSS Variables:** Native variables in CSS allow you to define reusable values, making your stylesheets more dynamic and maintainable. This reduces repetition and eases style updates.

-  **Animations and Transitions**
   -  **CSS Transitions:** Smoothly transition property changes over a set duration, creating simple animations on hover or other interactions, without the need for JavaScript.
   -  **CSS Animations:** More powerful control over animations with `@keyframes`, allowing you to define complex, multi-step animation sequences directly within your stylesheets.
-  **Other notable CSS updates**
   -  **Calc Function:** Allows calculations within CSS (e.g., `width: calc(100% - 20px);` for dynamic sizing).
   -  **Shapes:** Features for creating basic geometric shapes (`circle`, `polygon`) with CSS.
   -  **Filters and Blend Modes:** Graphical effects like `blur`, `grayscale`, `drop-shadow`, and blend modes for manipulating image and element appearance.

**Overall, I’d say this is well worth a read, but not much use as a reference book. And I must say: don’t bother buying this book new. I bought mine on Amazon for £19.99, but there are copies in very good condition on eBay for less than £3. It’s also online as a [PDF](https://wtf.tw/ref/duckett.pdf).**

**I have since come across a much better book: HTML, CSS & JavaScript in Easy Steps by Mike McGrath. Updated in 2020, this is a similar (weirdly almost identical in size and weight to the Duckett book) but much more up-to-date whistle-stop tour of the languages of web development.**
