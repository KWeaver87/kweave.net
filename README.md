This is my personal website, a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Development server:

```bash
yarn dev
```

## Blog Posts

These are written as Markdown files in [posts/blog](./posts/blog), then sorted by newest created first. A front-matter section is required, with all fields being mandatory unless noted otherwise. It's recommended to start with the H3 (`###`) level, so to not drown out the main page.
```md
---
title: Example Post
created: Date
modified: Optional date
tags: example, testing
---

Rest of the Markdown file goes here
```

## Deployment

Running `yarn deploy` will build the site and run deploy.sh to put the files on the server over SSH.
