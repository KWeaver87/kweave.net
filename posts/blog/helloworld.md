---
title: Hello, World!
created: 2021-03-09
tags: website, why_use_x
---

I just completed the basics of the blogging engine for my site. I certainly had a rough time getting started on it, particularly having to get all the config files and VSCode to play nice together. For now, it simply renders some Markdown files into this area, but I hope to add some more features over time. I'll be sharing a small series of posts explaining some of the tech/libraries that I decided on using for making the site.

#### Tech used

Here's a brief overview of the tech/libraries I decided to go with:
- [Visual Studio Code](https://code.visualstudio.com/) (on Ubuntu 20.04)
- [TypeScript](https://www.typescriptlang.org/)
- [Next.js](https://nextjs.org/)
- [MVP.CSS](https://andybrewer.github.io/mvp/)
- [Marked](https://marked.js.org/)
- [SCSS/SASS](https://sass-lang.com/)
- [front-matter](https://github.com/jxson/front-matter)

#### Why use TypeScript?

##### Pros

So, JavaScript is everywhere. But it's a fully dynamic language. Is that function giving me a number, a string, an instance of Foo, or just undefined? There's not really any guarantees on any of this, especially when dealing with imported libraries. My biggest peev around this is not having any code completion assistance whenever the IDE can't figure out what type a variable is. This also comes into play regarding simple mistakes, like misspelled variables. I much prefer to catch these in the editor from the compiler than at runtime.

I love many of TypeScript's language features. Union types, tuple types, and strict null checking are just a few that come to my mind right off the bat. The type system provided has some very powerful features, and they keep adding more as the landscape develops. I particularly enjoy having the `strict` option enabled, as it helps prevent loads of runtime errors. Particularly undefined errors. And can't forget that the TypeScript team will often add in features that are still experimental or draft status in the ECMA standards. Such as when they added [Nullish Coalescing operator](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#nullish-coalescing) in 3.7, months before it was formally adopted into ECMA2020.

##### Cons

So, the drawbacks. The biggest one is that it's not JavaScript. As in, it won't run in your browser. You have to pass your code through the compiler after every edit before the browser (or Node) will be happy. So you have to set up a process to automatically compile whenever you launch. Which is another con, the time and knowledge it takes to install and set up TypeScript into a project. And when you add in Prettier and ESLint, that's more systems that you have to make sure will handle TypeScript.

Using external libraries can be a mixed bag. Most of the big JS frameworks out there include full TS support. But often you can find a small helper library that does something amazing for you, but it doesn't play nice with TS. Requiring stacking a virtual house of cards to get that part working. Many projects provide type declarations in an external package, such as `@types/node`. Which is another step to get things workings, when compared to vanilla JS. But worse than that, with the `strict` option that I love so much enabled, if a project doesn't have any type declarations... you're left to write them for yourself. Which is more files, more steps, more time.

##### Conclusion

So, for me, I'd say do vanilla JS if you just need to cobble something together quickly. Something small and simple, easy to keep track of the whole thing in your head. But the bigger the project is, the more you'll appreciate the error checking and prevention tools that TypeScript provides to you.