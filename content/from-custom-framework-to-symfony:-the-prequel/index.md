---
title: "From Custom Framework To Symfony: The Prequel"
description: "If you’ve been a developer for a few years and have several projects under your belt, you’ve probably run across a “legacy application”. In…"
date: "2019-06-23T00:50:34.324Z"
categories: []
published: false
---

If you’ve been a developer for a few years and have several projects under your belt, you’ve probably run across a “legacy application”. In these Wild West days of churn, the legacy app might only be a few years old, but it is interesting to think back to the time of the initial commit, maybe using SVN even, of the project and what tools were available to the developers at the time. 

I feel like I’m a bit younger than this, but old-timer devs always mention to me what there growing pains were like when I act like an old-timer to a new junior team member in the likes of “back in my day, we walked the 10 miles to school. We didn’t have no motorized horse to help us!” 

### DIY CMS Frameworks

Since I started cutting my development teeth using Drupal 7 (D7), the stories I hear are all about the time someone created their own CMS. Nowadays, the idea of making your own CMS is crazy talk. In PHP, you have hosted CMSes like Contentful, fully-featured and extendable Drupal 8, WordPress somethings, and if you want to go lighter, you use a collection of libraries from Packagist. 

Back in the early-to-mid 2000’s, the idea of rolling your own CMS was common, though, and I’m kind of jealous I wasn’t around for that…I bet PHP was really fun to use back then :P But more seriously, you can learn a lot more by using a popular, well-received framework after you try to solve the same problems yourself.

While trying to change my code style from D7 procedural code to the embracement of OOP in D8, it wasn’t until a [“Drupal 8 Developer Prep” online course](https://buildamodule.com/collection/drupal-8-developer-prep) that I even knew what a front controller was and that I was using that design pattern already.

Still today there are developers that go framework-less and essentially roll their own versions of DI containers, caching, routing, etc., but I won’t be at that point for a couple more decades at least.

### Enter The Legacy Codebase

The legacy codebase I speak of didn’t come from the mid-2000’s but rather it came from 5 years ago, and holy hell, it’s 5th birthday is the very same day I’m writing this post. Too bad I’m giving it some coal for a birthday present.

\[angry birthday pic\]

Back in November 2013, things weren’t all that bad for PHP devs. Composer was around and when I looked in `composer.json` I could see some familiar libraries. 

```
"symfony/event-dispatcher": "2.2.*",
"symfony/http-foundation": "2.2.*",
"phpunit/phpunit": "3.7.*",
"monolog/monolog": "1.7.*@dev",
"guzzle/guzzle": "~3.7"
```

But then I also saw some suspect ones…

```
"saltyXXX/Spider": "dev-master",
"saltyXXX/savvy": "dev-master",
"DB": "vendor/XXX_submodules",
"RegExpRouter": "vendor/XXX_submodules/RegExpRouter/src"
```

I altered the names somewhat not to try and poop on the authors. I’m sure it might not have been a bad idea to try and create custom versions of certain parts of an app when you couldn’t find a good one. 

However, Composer was around, Symfony was around, Doctrine was around, and Twig was also around. All of the custom dependencies related to routing, templating, and database abstractions were already there. Not a lot of these libraries were around in the mid-2000’s like I mentioned, but 2013 is a different story.

From the history of the project and some chats with previous developers I could tell that the original authors were types who wanted to do it their own way, possibly for instructional purposes, but also possibly because they thought everyone else was “doing it wrong”.

### Sorting Through The Mess

I was told to look at the project and see what I wanted to keep and what I wanted to “fix”. Being the intrepid person that I am, I wrote up a bunch of issues on everything that was wrong with the app codebase and underlying framework based on my understanding of how D8 and Symfony usually handled routing, templating, ORM functionality, and things like that.

I hadn’t worked on any large D8 or Symfony application so I was mainly guessing. While I couldn’t quite put it into words, I remembered a quote from Ira Glass describing his rise to competency in his field.

\[Ira Glass quote on knowing that something is bad and having taste\]
