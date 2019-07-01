# My Personal Website

[Description](#description)\
[Road-blocks](#road-blocks)\
[Things I Learned](#things-i-learned)

### Description

This repository contains the code for my personal website, which I currently have a lot of mismatched plans for. The site is currently being built using [Gatsby](https://www.gatsbyjs.org/), [React](https://reactjs.org/), and [BulmaCSS](https://bulma.io/).\
Some things I'd possibly like on the site are:

- My software development portfolio
- A book review section
- A blog where I can write
- Pictures
- Music that I make / a music review section

### Road-blocks

_I will be documenting things that I struggle with here._

##### Working with Gatsby Images

[Gatsby images](https://www.gatsbyjs.org/docs/working-with-images/) are super nice, as there are a few plugins that combine to:

- Load optimal image sizes across different devices
- Hold image position while the page loads so images don't jump around as they come into existence
- "Blur up" the image or use a traced placeholder SVG to hold them image's place while the page loads
- and more!
  I was struggling to get my first Gatsby image to work, as my GraphQL query wasn't picking up the file path I had defined. It turns out the issue was that using a relative path is actually way easier than I thought – I forgot that in `gatsby-config.js`, I had already set up a path to the `images` folder [Gatsby Source Filesystem](https://www.gatsbyjs.org/packages/gatsby-source-filesystem/):

```js
{
  "resolve": `gatsby-source-filesystem`,
  "options": {
    "name": `images`,
    "path": `${__dirname}/src/images`
  }
}
```

So, when defining a relative path, it is actually relative to `/src/images/`, not whatever file you are making the query from.

##### Formatting Logo in Header

Building a header component with Bulma is very easy, but since I used a Gatsby `<Link>` and `<Img>` for the main logo, it was being formatted in an unexpected way. I ended up removing `className="navbar-item"` from the link, which fixed the formatting. I may need to revisit later.

##### useStaticQuery hook

In [State is for classes not functions](#state-is-for-classes-not-functions), I described why I changed my header from a function to a class. Okay, so now that I had a class, `useStaticQuery` became an issue when I was trying to grab the logo image with graphql. You can only use a [hook](https://reactjs.org/docs/hooks-intro.html) inside a function. The way I got around this is to create a new file, `image.js`, which was a function that utilized `useStaticQuery` and returned an `<Img />`. This way, I was able to import this into `header.js`, a stateful class that wouldn't allow usage of the hook.

### Things I Learned

_I will be documenting major revelations that I have here._

##### State is for classes not functions

This was super obvious to me once I tried using state within a normal Gatsby React component, which I usually do like:

```js
const Example = () => {
  return (
    <div>
      <p>Hey I'm a component!
      <button>Click me!</button>
    </div>
  );
};
```

I tried writing a constructor for my header.js file in order to set up state in the usual way:

```js
const Header = () => {
  constructor(props) {
    super(props);

    this.state = {
      key: value
    };
  }
  ...
};
```

Whoops! A constructor is only for a class. Okay, so any time I need to use state, I also need to set up a component like this:

```js
class Header extends React {
  ...
};
```
