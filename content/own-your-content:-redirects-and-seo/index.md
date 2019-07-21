---
title: '#OwnYourContent: Redirects and SEO'
description: '...'
date: '2019-07-08T20:21:38.504Z'
categories:
  - JavaScript
  - Netlify
  - SEO

published: false
# canonical_link: https://medium.com/@alexfinnarn/building-slack-bots-february-2019-edition-of-the-columbus-javascript-usergroup-6210772e07b6
# redirect_from:
#  - /building-slack-bots-february-2019-edition-of-the-columbus-javascript-usergroup-6210772e07b6
---

In [my last post in the #OwnYourContent series](...), I went over how to manage DNS for your new blog since Medium isn't doing that for you anymore. While going through that exercise, you may have noticed that all my domain aliases point to the same content at this point. I'd like to see `www.finnsweb.io` redirect to `read.finnsweb.io` for now until I can come up with something more general for `www.finnsweb.io`.

I also want to have a good strategy for posting content back to Medium or a similar syndication tool like dev.to in order to not lose the good SEO traffic I've already built up. My Medium account, https://www.mediumcom/@alexfinnarn, is the second link in Google search for "Alex Finnarn". I definitely don't want to ignore that link since the highest result is from a previous employer's website, and I can't control where they redirect anything. If my online presence amounts to a 404 and then a blog that hasn't updated in months, people might not see me as much of a competent, expert web developer.

Finally, I want to have some sort of analytics data I can use to help drive the focus of the content I create. Via Medium, I know that my most popular blog post ended up being on upgrading a Vue.js application to use the project's new `vue-cli` over a community-based starter kit I had been using. Unfortunately, I haven't foucsed on any Vue-related work since the time I published those posts, but at least I now know which articles I can use to drive visitors to more Vue or general JavaScript blog posts. I'd like to at least get some numbers on page views and a tally of how many readers made it all the way to the bottom of the page.

### Managing Redirects Through Netlify

The first order of business is making sure that we're getting all users to the right URLs that we want to boost on organic search platforms like Google. Going back to my previous example, if we split traffic three ways between `finnsweb.io/article-1`, `www.finnsweb.io/article-1`, and `read.finnsweb.io/article-1`, then the URL I want people to share, `read.finnsweb.io/article-1`, might only get a third of the traffic. Coupled with penalties for dulpicate content, that reality would be really bad SEO.

[The Netlify documentation regarding redirects](https://www.netlify.com/docs/redirects/) points to two places where you can place redirect rules: a `_redirects` file and in `netlify.toml`. So, which file should you put your redirect rules in, you ask? Well, it all depends.

I started by placing them in `netlify.toml`, because my version of that file was very slim and I didn't want to create another file until there was a good reason for me to do so.

```yaml
[[redirects]]
  from = "https://finnsweb.io/*"
  to = "https://read.finnsweb.io/:splat"
  status = 301
  force = true
  # query = {path = ":path"} # COMMENT: apply this rule for /old-path?path=example
  # conditions = {Language = ["en"], Country = ["US"], Role = ["admin"]}
  # headers = {X-From = "Netlify"}
  # signed = "API_SIGNATURE_TOKEN"
```

As you can see, creating the redirect rule takes a few key-value pairs including where you want the user redirected and the status code of the HTTP response amongst other options you can play around with. I only used the basics here, but the GeoIP and role-based redirect options seemed pretty interesting. You can [check those out in the Netlify documentation](https://www.netlify.com/docs/redirects/#geoip-and-language-based-redirects), if that tickles your fancy.

My redirect rules living inside `netlify.toml` was short lived, however, as I simply needed to add the same rule a few times for the different domain aliases I created. The important Netlify-specific thing to look at here is the `:splat` variable. If you've ever made any redirect rules via Apache, which is where I've always placed redirects at the web server level, you can think of `:splat === $1`.  

...mention the pretty URL thing and how that plays into the CDN

...React Helmet and metatags: https://github.com/nfl/react-helmet Make sure to add a share image for Twitter and OG.

...make a better 404 page with a list of recent content...or just redirect to the homepage with a message popup.

...gatsby-plugin-feed what is it? Some kind of RSS thing?

...add browserlist thing that connects to GA to compile for 99% of browsers
