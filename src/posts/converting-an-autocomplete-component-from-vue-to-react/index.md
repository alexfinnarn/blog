---
title: "Converting An Autocomplete Component From Vue To React"
description: "I started learning Vue in June of 2017 while working it into a UI I was building at work. Liking underdogs and initially hating the look of…"
date: "2019-06-23T00:50:33.642Z"
categories: []
published: false
---

I started learning Vue in June of 2017 while working it into a UI I was building at work. Liking underdogs and initially hating the look of JSX (like everyone with working eyeballs), I was set on Vue being the right tool for the job and the view layer framework I would use from then on.

Now that it is December 2018, I decided to take a step back and look more at React. I’ll explain my reasons in more detail in another blog post \[link to it…\], but I ended up feeling good about switching to React…and at a mighty good time too since [I can use Hooks](https://reactjs.org/docs/hooks-intro.html) for the entirety of my React development and never have to endure the pains of class-based components. Hooray…at least I think?!

### Roll Your Own To Learn

In learning Vue, I ended up not using any components community members had contributed for better or worse. In learning React, I figured I would do the same. I spent a little bit of time looking at UI libraries out there taking links from [“Best React UI Components” blog posts](https://hackernoon.com/23-best-react-ui-component-libraries-and-frameworks-250a81b2ac42), and I looked at the [Auto-complete component from Ant Design](https://ant.design/components/auto-complete/) for a time. 

I’m not knocking Ant or the awesome React UI component libraries, but if all you have to work with is a few callbacks for when the input changes and you’ll be working on your UI application for some time, I bet you’ll run into cases when changing a part of the internals of the autocomplete component makes more sense than working around what you can’t change.

You also might ask, “am I good enough to make a whole autocomplete component by myself?” and/or “how will I make one that’s better than what oodles of people use in their apps every day?” Well, the nice thing about breaking down UIs into smaller component chunks is that their behavior becomes far easier to model and reason with. For an autocomplete component, you’ll probably be able to define the functionality your code needs rather easily once you think about it for a little while.

### What Is An Autocomplete Input?

[I’ll link to my Vue code to start out with](https://github.com/CuBoulder/lil_shrugger/blob/1.x/src/components/AutocompleteInput.vue). That is a “Single File Vue Component” or SFC for short, but you don’t really need to know what that means to look at the details. I think Vue is pretty semantic with its syntax and core API.

[At the top of the file in the HTML template](https://github.com/CuBoulder/lil_shrugger/blob/1.x/src/components/AutocompleteInput.vue#L3), we basically have an input and unordered list that is hidden by default. When the user starts typing a query into the input, the unordered list appears with results based on the current query. 

In the “methods” part of the SFC exported object, we have the logic that filters the list items and handles the user’s keyboard interactions including typing into the input.

As you can see in that code snippet, the actual data that users can filter by is grabbed from [a central store using Vuex](https://vuex.vuejs.org/), which is basically a clone of Redux. In this post, I’m not concerned about grabbing that data but more so on how we handle the user interacting with the autocomplete input.

My biggest question going into this task was how to handle the `@blur`, `@keydown.down`, and similar events on the HTML input. To be perfectly honest, I copied, pasted, and modified an example of creating an autocomplete input when I first created my component, but you can [read about key modifiers in the Vue documentation](https://vuejs.org/v2/guide/events.html#Key-Modifiers).
