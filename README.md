# My Personal Website

### Description

This repository contains the code for my personal website, which I currently have a lot of mismatched plans for. The site is currently being built using [Gatsby](https://www.gatsbyjs.org/), [React](https://reactjs.org/), and [BulmaCSS](https://bulma.io/).\
Some things I'd possibly like on the site are:

- My software development portfolio
- A book review section
- A blog where I can write
- Pictures
- Music that I make / a music review section

### Road-blocks

_I will be documenting things that I struggle with here_

##### Working with Gatsby Images

[Gatsby images](https://www.gatsbyjs.org/docs/working-with-images/) are super nice, as there are a few plugins that combine to:

- Load optimal image sizes across different devices
- Hold image position while the page loads so images don't jump around as they come into existence
- "Blur up" the image or use a traced placeholder SVG to hold them image's place while the page loads
- and more!
  I was struggling to get my first Gatsby image to work, as my GraphQL query wasn't picking up the file path I had defined. It turns out the issue was that using a relative path is actually way easier than I thought – I forgot that in `gatsby-config.js`, I had already set up a path to the `images` folder [Gatsby Source Filesystem](https://www.gatsbyjs.org/packages/gatsby-source-filesystem/):

```json
{
  "resolve": `gatsby-source-filesystem`,
  "options": {
    "name": `images`,
    "path": `${__dirname}/src/images`
  }
}
```

So, when defining a relative path, it is actually relative to `/src/images/`, not whatever file you are making the query from.

### Things I Learned

_I will be documenting major revelations that I have here_
