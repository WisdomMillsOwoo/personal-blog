---
title: The Web is Healing (And It's About Time)
date: 2025-01-22T00:00:00.000-05:00
description: After years of bloated frameworks and over-engineering, the web is remembering what made it great.
isCompleted: true
slug: the-web-is-healing
tags: [web, frontend, simplicity, performance]
---

## Remember When Websites Were Fast?

I was browsing some old sites on the Wayback Machine the other day (as one does), and I was struck by how *fast* everything felt. Pages loaded instantly. Interactions were immediate. The web felt alive.

Then I opened a modern news site and watched my laptop fan spin up just to read an article.

Something went wrong along the way. But I think we're finally finding our way back.

## The Great Bloat

Somewhere between jQuery and the modern framework wars, we lost the plot. We started shipping entire application frameworks to display a blog post. We normalized 3MB JavaScript bundles for sites that could have been built with HTML and CSS.

We convinced ourselves that complexity was sophistication.

### The Numbers Don't Lie

- Average webpage size in 2010: ~700KB
- Average webpage size in 2023: ~2.2MB
- JavaScript bundle sizes have grown 10x faster than internet speeds

We're literally making the web slower while our connections get faster.

## The Healing Begins

But something beautiful is happening. Developers are rediscovering the fundamentals:

### HTML is Actually Pretty Good

```html
<!-- This works. It's accessible. It's fast. -->
<details>
  <summary>Click to expand</summary>
  <p>No JavaScript required!</p>
</details>
```

### CSS Can Do Almost Everything

Modern CSS is incredibly powerful. Grid, flexbox, custom properties, container queries - we can build complex layouts without a single line of JavaScript.

### Progressive Enhancement is Back

Start with HTML that works. Add CSS that makes it beautiful. Sprinkle JavaScript only where it adds real value.

## The New Minimalists

A new generation of developers is embracing simplicity:

- **Astro** - Ship less JavaScript by default
- **Svelte** - Compile away the framework
- **Alpine.js** - jQuery's spiritual successor, but better
- **HTMX** - HTML on steroids

These tools share a philosophy: the web platform is powerful. Let's use it.

## What I'm Doing Differently

This blog is built with SvelteKit, but it could have been built with vanilla HTML. The JavaScript enhances the experience but isn't required for it to work.

I'm also:
- Optimizing images aggressively
- Inlining critical CSS
- Using system fonts (they're beautiful and free)
- Measuring performance, not just features

## The Resistance

Not everyone is on board. I still see job postings asking for "React experts" to build marketing sites. I still see developers reaching for complex state management libraries to handle a simple form.

Old habits die hard.

## Why This Matters

Fast websites aren't just nice to have - they're more accessible, more sustainable, and more inclusive. They work on slow connections and old devices. They don't drain batteries or spin up fans.

They respect users' time and attention.

## The Path Forward

I'm not saying we should abandon modern tools. React, Vue, and Angular have their place. But let's use them intentionally, not reflexively.

Let's ask "What does this add?" instead of "What's the latest framework?"

Let's remember that the web's superpower isn't complexity - it's simplicity that scales.

## A Personal Challenge

For my next project, I'm going to try building it with just HTML, CSS, and vanilla JavaScript. No build step, no framework, no dependencies.

I bet it'll be faster, more maintainable, and more fun than anything I've built in years.

Want to join me? Let's heal the web, one simple site at a time.

What's the most over-engineered website you've encountered lately? How would you simplify it?