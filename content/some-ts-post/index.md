---
title: "some TS post?"
description: "Back To Optional Parameters…and Generics"
date: "2019-06-23T00:50:34.307Z"
categories: []
published: false
---

### Back To Optional Parameters…and Generics

So now my IDE is complaining about `TS1015: Parameter cannot have question mark and initializer`. I’ve always defined optional parameters with what is called an “initializer”, I guess. If the value of the parameter was set to the initializer, I could tell that the function caller didn’t pass in that parameter or the value passed in was the same.

I also saw `TS2322: Type 'null' is not assignable to type 'string | undefined'`. If you really want to know more about what you should do in these cases, you can [read the actual spec for TypeScript on parameter lists](https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md#3922-parameter-list). In my case, I just went with initializers and made all the string types default to a blank value. I’m not sure why I thought assigning `null` to a string made sense, but you live and you learn.

Property doesn’t exist on object
