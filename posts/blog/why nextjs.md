---
title: Why Use Next.js?
created: 2021-03-11
modified: 2021-03-11
tags: website, why_use_x
---

I should start this off talking about why I went with React. When I first started doing webdev, I had to pick between Angular, React, and Vue for which one to learn first. Following more research, I decided that Vue was the one to start with. It seemed simple enough at the time, I liked the Single File Component (SFC) setup, and it had a feel of being less bloated than React, since it was newer and could benefit from lessons learned from React. After going through a tutorial, I ended up picking up [Nuxt.js](https://nuxtjs.org) for a project, enjoying the features and opinionated nature.

#### Starting with Vue

Fast forward to working on a more recent project, and I started with Vue. After spending the hours setting up the various packages and config files... ESLint, Prettier, webpack, Typescript, VSCode, etc., I wrote the first bit of code... and it didn't work right. Spending another half hour or so troubleshooting that, I found that I had typoed a variable name in the `<template>` area. I assumed I had a mistake in my configs, spending more hours researching that, until I found that there is very limited error checking of the script in `<template>` areas. That was unacceptable to me, so I decided to give React a try.

#### Moving to React

Several things stuck out to me when I had finished React's tutorial. The biggest one being that JSX/TSX files had much better support in VSCode than Vue's SFC files. The boilerplate code I had to write for every component was reduced, thanks to the functional approach that v16.8 brought about. And it was all supported by the error checkers provided by the TypeScript compiler and ESLint.

#### Finally, to Next.js

Before starting this site, I stumbled upon a news article that talked about something called [Jamstack](https://jamstack.org/). I'm not still really sure what that is, since the site is full of empty-feeling marketing malarkey statements. But it lead to me discovering a feature that I like: Static Site Generation (SSG) while still using a fancy JS framework like React. Between the different SSGs listed on the site, I looked at a few, deciding upon Next.Js since it was the most popular, and I was familiar with its concepts from using Nuxt.js previously.

So far, I'm happy with this choice. The SSG was painless to get working. I haven't used it here yet, but I like the simplicity of automatically generated routing based upon file names. Having an opinionated directory layout helped me get started on something that I'm not thoroughly experienced with. The popularity certainly doesn't hurt, specifically meaning there is a good amount of documentation and examples available.

I don't have much of a basis to speak on any significant drawbacks. I haven't yet tried out any other SSG framework that sits on top of React to make any valid comparisons. One thing I would like is including better configs out of the box for ESLint, Prettier, VSCode, and some testing frameworks. But that's also getting perhaps too opinionated for a project. At least, Next does take care of automatically handling the webpack/babel stage of transpiling JS and CSS into production files. The biggest thing would be adding another library your project is absolutely dependent on, creating a big headache to maintain and update the project if that library goes defunct in the future.