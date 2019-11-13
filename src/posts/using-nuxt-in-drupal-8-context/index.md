---
title: "Using Nuxt In Drupal 8 Context"
description: "yada yada…install Nuxt the way you would in the docs. We will use Axios to make calls to the Drupal backend. The app takes a list of…"
date: "2019-06-23T00:50:31.396Z"
categories: []
published: false
---

yada yada…install Nuxt the way you would in the docs. We will use Axios to make calls to the Drupal backend. The app takes a list of organizations from the D8 app and allows users to perform a search.

linting tools are PITA…

added Prettier but it kept telling me to fix errors that automatically formatting via PhpStorm doesn’t do. There is cmd+alt+P for Prettier formatting but I like cmd+alt+L. So I restarted without Prettier. I think styling was still applied to my project though…so delete .idea files or redo again.

Ended up ignoring Vue files from ESLint because of the script tag never indenting and that caused compilation errors. I will enable that later.

Add something about the redirect to the route you are working on. People will complain that they go to a 404 so it’s better to only allow them to go to one page. Plus, you learn how to add middleware to the whole project or just a route.

### D8 Site

Installed via the `contentacms/contenta-jsonapi-project` project. End up making Vue Consumer via the Lando + D8 + Nuxt blog post. This included making a role just for the `vue_consumer`.
