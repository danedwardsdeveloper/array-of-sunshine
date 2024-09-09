---
title: A Complete Guide to Customizing Checkbox Colors in Tailwind CSS
date: July 27, 2024
writer: Dan Edwards
tags: React, JavaScript, Front-End, CSS, Tailwind
metadescription: Learn how to customize checkbox / check box colors / colours in Tailwind CSS, including background, tick, and focus ring colors. Step-by-step guide with code examples.
keywords: Tailwind CSS, checkbox customization, React, form styling, CSS classes, @tailwindcss/forms plugin, web design, front-end development
---

**Another classic case of the official documentation being wrong, and severely incomplete! Here's how to change the color of check box inputs with Tailwind.**

## 1. Install the Forms plugin.

This is required because Tailwind doesn't simply apply CSS classes to the check boxes - it replaces them with an SVG.

```shell
# Command line at the project root

npm i @tailwindcss/forms

# Or...
pnpm i @tailwindcss/forms

# Or...
yarn add @tailwindcss/forms
```

## 2. Import the Forms plugin.

```js
// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
	plugins: [require('@tailwindcss/forms')],
	// ...
};
```

## 3. Add Tailwind Classes

Then use these properties to control the look of the check box

```html
<!-- my-site.html -->

<label for="myTailwindCheckbox">
	<input
		type="checkbox"
		id="myTailwindCheckbox"
		class="
			bg-slate-100
			hover:bg-slate-200
			text-green-500
			hover:text-green-600
			focus:ring-green-500
			h-8
			w-8
			rounded-sm"
	/>
</label>
```

### Unchecked background color

-  `bg-*`
-  `bg-slate-100`
-  `bg-green-100`
-  etc.

Adjusting the color slightly on hover is an elegant way to indicate that the check box is indeed interactive.

-  `hover:bg-*`
-  `hover:bg-slate-200`
-  etc.

### Checked color (The color of the tick)

The official docs are wrong (as of 27 July 2024). `accent-*` Doesn't do anything. Use this instead:

-  `text-*`
-  `text-green-500`
-  `text-black`
-  etc.

Again, you might also want to change the color slightly on hover:

-  `hover:text-*`
-  `hover:text-green-600`
-  etc.

### Focus ring color

This is the outline that appears when you click the checkbox, or navigate to it using the keyboard.

-  `focus:ring-*`
-  `focus:ring-green-500`
-  `focus:ring-black`
-  etc.

### Round the corners

Enhance the appeal by softening the hard edges, which can be [very subtly threatening](https://www.logicdesign.co.uk/blog/why-do-we-have-rounded-corners-website-design/).

-  `rounded-*`
-  `rounded-sm`
-  `rounded-md`
-  etc.

### Change the size

-  `h-* w-*`
-  `h-5 w-5`
-  `h-10 w-10`
-  etc.

### Example of a green check box in a React project I'm working on

```tsx
// FilmCard.tsx

<label htmlFor={film.filmId}>
	<input
		type="checkbox"
		id={film.filmId}
		className="
			bg-slate-100
			hover:bg-slate-200
			text-green-500
			hover:text-green-600
			focus:ring-green-500
			rounded-sm
			h-8
			w-8"
		checked={seenFilms[film.filmId] || false}
		onChange={handleToggle}
	/>
	&nbsp; Seen
</label>
```

And you can check out a live example on my [Metacritic100](http://metacritic100.com/) site, which lets you track of how many of MetaCritic's top 100 films you've seen.

And there you have it! Hope that helps.
