---
title: "way to do this *in PHP*, no less"
description: "wthomas [Yesterday at 5:27 PM]\nhah! what for?\n9 replies"
date: "2019-06-23T00:50:31.905Z"
categories: []
published: false
---

wthomas \[Yesterday at 5:27 PM\]  
hah! what for?  
9 replies

kylecoberly \[16 hours ago\]  
given an array that looks like this: \`\[2, 2.5, 3, 10, 10.5\]\`, breaking it into something like this: \`\[\[2, 2.5, 3\], \[10, 10.5\]\]\`

kylecoberly \[16 hours ago\]  
essentially finding the “contiguous” segments, where contiguous means things in increments of 0.5

kylecoberly \[16 hours ago\]  
 \`\`\`private function coalesceAvailabilities(&$availabilities)  
 {  
 do {  
 $currentElement = $availabilities\[0\];  
 $new\_availabilities\[\] = array\_shift($availabilities);  
 } while (  
 array\_key\_exists(0, $availabilities)  
 && $availabilities\[0\] == $currentElement + 0.5  
 );  
 return $new\_availabilities;  
 }\`\`\`  
(edited)

Tim Mensch \[15 hours ago\]  
Cool. Cue some functional guru to comment about the magic functional way to do this…

kylecoberly \[15 hours ago\]  
…magic functional way to do this \*in PHP\*, no less

Tim Mensch \[15 hours ago\]  
Yeah, I thought that was PHP. Haven’t kept up with all of the newness in PHP 7; don’t actually know if it has any fancy functional doohickeys.

kylecoberly \[15 hours ago\]  
it super doesn’t, and even to the extent you can with some libraries, it’s so unconventional that no other PHP developer will be able to read it

Tim Mensch \[15 hours ago\]  
Fair enough. :slightly\_smiling\_face:

mplewis \[14 hours ago\]  
That sort of felt like a challenge so I did it in JS [https://runkit.com/mplewis/5c5cc80d3175b30012c14c92](https://runkit.com/mplewis/5c5cc80d3175b30012c14c92)  
runkit.com  
RunKit  
RunKit notebooks are interactive javascript playgrounds connected to a complete node environment right in your browser. Every npm module pre-installed.
