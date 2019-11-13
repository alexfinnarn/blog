---
title: '#OwnYourContent: SEO, React Helmet, And Google Analytics'
description: ''
date: '2019-08-14T20:21:38.504Z'
categories:
  - JavaScript
  - Netlify
  - SEO

published: false
# canonical_link: https://medium.com/@alexfinnarn/building-slack-bots-february-2019-edition-of-the-columbus-javascript-usergroup-6210772e07b6
# redirect_from:
#  - /building-slack-bots-february-2019-edition-of-the-columbus-javascript-usergroup-6210772e07b6
---

"I don't know what to tell you, Alex. They said it just didn't show up when they posted a link to Facebook and Twitter." They meaning the CEO of the company. I too feel the same pain after I transferred my blog off of Medium. Just like that CEO, I had something I was proud enough of to share with the world only to see the default blank image show up when I shared my post on Twitter. To me, sharing content without a bit of media thrown in is just not as engaging as it should be, and I'm sure there is data to back me up on that.

One issue that complicates the matter is that you don't know how Facebook is scraping your site to find the image for including in your shares. I worked for that previously mentioned CEO, and it was a huge PITA to work on social share issues because Facebook and Twitter couldn't reach our development and staging servers. Getting changes through QA and approved by the business was a nightmare. All I could say is "it looks right to me in the source but we won't know if it works until we push it to production."

As a cherry on top, one manager had contracted with a tool that sat in front of our application and "optimized things" before any requests hit the server I controlled. No one knew much about the optimization tool, and I suspected the social media services couldn't see an image on page load because of it so putting the "right" information in the source code won't help.

The final kicker comes when you find out that Open Graph tag governance is community-based and doesn't really have a definitive list of what tags are acceptable and/or when the tags you put in your code are deprecated or updated. Facebook, Twitter, Instagram, Pinterest, etc. can use different tag structures so testing this stuff out isn't as simple as it seems. Luckily for us, Facebook is buying out a lot of those companies so at least that should consolidate our frustrations, right?

### Introducing React Helmet

The first order of business in my SEO journey is to get an image to show up when I share a blog post on Twitter. I hate that I had this feature on Medium without needing to do anything and now I have to add it back myself. Of course, the Medium to blog [insert link...] conversion tool helped me out a lot so I can't complain too much.

Luckily for me, the conversion tool includes [React Helmet](https://github.com/nfl/react-helmet): "A document head manager for React". I tend to call the social sharing information metatdata, but it does all get rendered in the HTML document `<head>` section. Curiously enough, the package is developed by the NFL. I had to do a double-take when I first saw that, but I guess it does make sense that the NFL uses React in web projects where SEO is important.

How does React Helmet work exactly? Let's look at some example code from their readme to find out.

```js
import React from "react";
import {Helmet} from "react-helmet";

class Application extends React.Component {
  render () {
    return (
        <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>My Title</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            ...
        </div>
```

As you can see the `<Helmet>` component takes care of all of the work for you. The component can be placed within other components and the metadata information will bubble up when the page is rendered. Child components take precedence over the parent components so you can nicely provide metadata for your pages in a parent container component and override only the parts you need in child components.

That's a really nice feature when you think about it, and I feel like this is a harder task to implement in other paradigms. In my example of the frustrated CEO, I was working with a CMS and server-rendered templates that only allowed for one injection point. Sure, I could have made some interface where you could inject your own metadata at different parts in the codebase, but I don't think it would have ever been as nice to work with as what I see in React Helmet.

```jsx
<Parent>
    <Helmet>
        <title>{genericGeneratedTitle}</title>
        <meta property="og:type" content="article" />
        <meta property="og:image" content="http://company.logo" />
    </Helmet>

    <Child>
        <Helmet>
            <title>Optimized Title</title>
            <meta property="og:image" content="http://your.image" />
        </Helmet>
    </Child>
</Parent>

// Outputs...
<head>
    <title>Optimized Title</title>
    <meta property="og:type" content="article" />
    <meta property="og:image" content="http://your.image" />
</head>
```

That structure parallels what I had to create for my job. They wanted some default information for each web page but the ability to override it on each page if the content creator wanted to do so. This way all pages would have some sort of image show up when posted even if it was only the generic company logo.

### Implementing React Helmet In MDX With Gatsby

While using React Helmet in standard React code and JSX files is pretty straight-forward, my blog posts are written in Markdown. Well, the format is actually MDX which is Markdown combined with JSX. Couple that with front matter in the blog post templates and my IDE wasn't too happy when I tried to import and use React Helmet in a post.

I am still pretty new to using Gatsby, but it didn't take me long to find [information on how to use MDX](https://www.gatsbyjs.org/docs/mdx/). Even though the medium to blog conversion tool I used included an MDX plugin, I still had to dig around to see how things were implemented.

I came to find out that the plugin in my `package.json` was merged into Gatsby and the author recommended using that newer version instead of 

Finally, I want to have some sort of analytics data I can use to help drive the focus of the content I create. Via Medium, I know that my most popular blog post ended up being on upgrading a Vue.js application to use the project's new `vue-cli` over a community-based starter kit I had been using. Unfortunately, I haven't focused on any Vue-related work since the time I published those posts, but at least I now know which articles I can use to drive visitors to more Vue or general JavaScript blog posts. I'd like to at least get some numbers on page views and a tally of how many readers made it all the way to the bottom of the page.

...also add something about comments - https://www.gatsbyjs.org/docs/adding-comments/
