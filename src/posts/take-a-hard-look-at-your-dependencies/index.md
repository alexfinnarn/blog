---
title: "Take A Hard Look At Your Dependencies"
description: "…."
date: "2019-06-23T00:50:33.619Z"
categories: []
published: false
---

….

### Shake The Tree To Reduce Code Size

Any time I try to replace some parts of my code with code from Packagist, I immediately open the `vendor` directory and scream 😱. And with D8 it looks like 😱 🙏 🙀 Why so much code for so few declared dependencies in `composer.json`? And even if most of them are only used in development, it still looks scary to see hundreds of directories on first glance.

One nice thing about only requiring a single dependency is that you can look at all the code you are including to identify what is necessary to keep. There will always be the extraneous code you don’t need like tests and sometimes documentation. We are only using the code from the release and not developing on it so tests and docs are useless from my perspective.

Before doing this, it is important to note the license of the code you are looking at to see if the terms allow you to distribute the code with modifications, like the removal of files. Most of the time, you’ll be fine, but you should still check…and if the code you are pulling in doesn’t have a license, well then you should help to fix that.

In this case, we are fine to delete some of the Twig project’s files and distribute the code as long as we keep the license file intact. You might wonder if removing unused code is even worth it, and I can’t tell you that it is, in fact, a worthy effort, but I learned a thing or two while doing so…so let’s carry on.

I’m using MacOS Mojave (10.14.2) for development these days so I will only report stats from the Finder’s “Get Info” window.

```
1,219,694 bytes (4.1 MB on disk) for 949 items
```

After requiring Twig, that was the report of the `vendor` directory in the root of my module. 949 items sound like a lot to me.

#### Removing Unnecessary Polyfills

What jumped out at me on first glance was that there happened to be a `symfony` directory in addition to the `twig` directory that appeared to only include polyfills. If you look at the readmes, the two polyfill-related packages are used when the `mbstring` and `ctype` PHP extensions aren’t available.

I had no idea that some PHP packages pulled in polyfills for older versions of PHP or missing modules on host environments, but I bet they were sitting there all along in most of my PHP projects that have used Composer. Kind of reminds me of all the JavaScript (JS) tools used to compile JS code into a version compatible for older browsers.

You can check to see if those PHP modules are enabled in your dev environment via `php -m | grep cytype && php -m | grep mbstring`. In my case, I had both extensions enabled so I didn’t need the polyfills and removed them.

> One important caveat to note is that you also need to check for these extensions any place you deploy your code.

With that in mind, you might not want to try and remove these packages, but it is a good exercise to at least know they are there and what they are used for.

```
1,132,473 bytes (3.9 MB on disk) for 931 items
```

Now I have a little less code to look at and move around. You will have to run `composer dumpautoload` after you remove these packages so that Composer won’t try to load PHP classes that don’t exist anymore.

#### Remove Tests and Docs

Now I only have two directories in my `vendor` folder: `twig` and `composer`. When I went into the `twig` directory, I immediately saw two folders that I knew were pretty safe to remove: `test` and `doc`. As you might have guessed, they contain tests and documentation on how to use Twig.

```
571,738 bytes (1.8 MB on disk) for 409 items
```

There we go, after removing those two directories, I’ve reduced the disk space and number of files by half. Sure, with only one package included in my module this effort might not be worth it, but if you had `100 MB` of code and `50 MB` was just sitting there not being used, deploying code to production might become noticeably faster after removing the cruft. On a D8 project I have on my dev laptop, the vendor directory is `41.3 MB` and potentially reducing that to `20.65 MB` might help a lot with CI testing and deployment pipelines.

In D7 projects, I’ve “hardened” the codebase before by removing things I didn’t use or want in the codebase (looking at you PHP Filter module) with a `rm -rf module one two three four` command, butto get serious about this stuff I would add a script during the Composer update/install command that does the same thing to make updating code less cumbersome in the future.

Regardless of if you choose to shake the tree when it comes to your third-party included code, you ought to be looking through the vendor folder in all of your projects. I think we rely too much on dependencies these days without ever taking a glance at what we are actually including with every `composer require X` addition. There’ve been too many exploits originating from dependencies people blindly pull into their projects for us not to take the effort.
