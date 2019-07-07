---
title: 'Drupal Local Dev Environments - July 2019'
description: '...'
date: '2019-07-04T20:21:38.504Z'
categories:
  - Drupal
  - PHP

published: false
# canonical_link: https://medium.com/@alexfinnarn/building-slack-bots-february-2019-edition-of-the-columbus-javascript-usergroup-6210772e07b6
# redirect_from:
#  - /building-slack-bots-february-2019-edition-of-the-columbus-javascript-usergroup-6210772e07b6
---

[some pic]

It's happened again. I have a new laptop. And every time I get a new laptop, I have to set up a local dev environment. Well, I usually have to set up several local dev environments for different languages and maybe even different frameworks using the same language.

JavaScript seems to have a standardized way of easily creating local dev environments that run by simply typing `npm run dev` into a terminal, but PHP projects I work on always require more setup. Since I've mainly worked within the Drupal project most of my adult web career, I know a thing or two about opinionated development environments, and I've tried no less than 11 different "solutions" to running Drupal locally. Some were my custom code, some supported by the Drupal community at-large, and some supported by vendors with tight integration to their hosting platform.

Today, I'm going to install the top four current "solutions" for the best Drupal 8 development experience.

### Top Four Solutions?

But how did I pick the top four projects out of literally dozens of options, you might ask? Well, I stole them from the great Jeff Geerling's survey and presentation he did at Drupalcon Seatlle 2019 back in April. In full disclosure, Jeff maintains Drupal VM, one of the local dev projects, and so his opinions are...opinionated as you might guess.

[image of survey results]

In Jeff's survey, Drupal VM went from being the most used development environment in 2018 to third most used in 2019. This year, a Docker-based solution called Lando surpassed Drupal VM, a Vagrant + Virtualbox solution. Second place in the survey went to custom Docker solutions so the trend is firmly moving away from VMs to containerized solutions for better or worse...and there are reasons for not using Docker people. Don't just do it because everyone else is doing so.

The top four solutions we'll be going over here are:

- Lando
- Drupal VM
- Docksal
- DDEV

Since those four don't match the order of the survey results exactly, I need to explain why those are the top four in my book.

### Removing Custom Docker Solutions

I'm not considering "custom Docker" as second-place here because it is such a nebulous term. When I've set up custom Docker solutions, I've done it in a few different ways. At one point, I was only trying to have an app server that contained PHP and Apache but also used SQLite as the storage mechansim over another container for hosting MySQL.

I would never reccomend that setup in production, but I might be able to cobble that together quickly and get better benchmarks than one of the other listed tools. Should you listen to me babble on about how awesome that setup is? No. No you shouldn't. You'll likely just waste time trying to make your own custom solution.

However, if you're into learning more about Docker or DevOps in general, then the time won't be wasted and you should dive right in. The focus of this article is getting shit done, though, so don't even think about setting up a custom Docker soltuion for Drupal work when you already have dozens of options to choose from...and shame on you if you soldier on and also bill the client for the time!

### Why Is DDEV Fourth?

Good question, I'm glad you asked! This is arguably the most controversial part of my blog post, and it definitely irks me to go out of order than what the survey results say. Even if those results are skewed based on who saw the survey link when it was still open, they are at least hard numbers to go by. The only reason I'm putting DDEV in here is based on the Drupal.org user guide for local development.

[shakes head gif]

That's right, folks. Drupal actually picked an official local development tool by [the looks of what I see here](https://www.drupal.org/docs/official_docs/en/_local_development_guide.html). In a community that traditionally has far too many options to choose from for doing EVERYTHING, I find the idea of a community-selected de facto solution refeshing. However, that's only if they actually choose the one the community has chosen: Lando. If you find better numbers somewhere else, please let me know, but all signs I can see point to Lando for a dockerized tool and Drupal VM for the good, ole VM way of doing things.

I'm not the only one to cry foul here as the ["Local Development Guide needs a broader approach" issue](https://www.drupal.org/project/official_docs/issues/3047987) echoes my concern. Not to mention that [the selected project's documentation and Drupal's docs can get out of sync](https://www.drupal.org/project/official_docs/issues/3062623) as well as [pages disappearing or spooky d.o infrastructure not running reliably](https://www.drupal.org/project/official_docs/issues/3050085#comment-13078817).

stuff in https://www.drupal.org/project/official_docs/issues/2993153#comment-12798910

### The Test

1. Install.
2. Install Drupal.
3. Generate nodes.
4. Install Devel and Webprofiler via Composer.
5. Profile the list of nodes in a View.

### Lando Background

I've been using Lando for a few years now. Lando is developed and maintained by [the good people at Tandem](https://thinktandem.io/about/) and [follows a benevolent dictator philospohy of governance](https://docs.devwithlando.io/contrib/gov.html). Lando isn't used just for Drupal or general PHP development and has support for Go, Node, Python, and Ruby as far as other languages go...there's even dotnet support for the icing on the cake. Lando rounds out the edges with multiple database, web server, caching, and search tools available as "services".

Lando actually started out as Kalabox. Back in the day, the devs created Kalabox as a local development environment tied to the Pantheon hosting platform. Just like Acquia had Acquia Dev Desktop, Pantheon had Kalabox. As Docker became more popular, the team started Lando as a Docker-ized replacement to Kalabox. In planning for the new version, they came up with the concept of "recipes" that would allow for really simple configuration files that "just work".

In fact, they state their goal of simplicity [at the top of their "project vision" page](https://docs.devwithlando.io/contrib/vision.html) as a response to the question "why does Lando exist?".

> A user should be able to git clone a repository, run lando start and get EVERYTHING they need to develop their site locally in a few minutes.

Lando's concept of "recipes" still includes a way to tightly integrate to Pantheon. In full disclosure, Pantheon still funds Lando development through a contract for the integration support, but at least that provides some confidence that the Lando project won't fall into dissarray as long as Pantheon is still around and kicking...and since Pantheon and Lando support WordPress as well as Drupal, I think it's safe bet. :thumbsup

### Installing and Using Lando

I'm on a MacBook Pro over here, so I went to the downloads page, picked the most recent release (`v3.0.0-rc.17`), and installed it the same way I would any other MacOS program.
