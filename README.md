# My Personal Website

[Description](#description)\
[Road-blocks](#road-blocks)\
[Things I Have Learned](#things-i-have-learned)

### Description

This repository contains the code for my personal website, which I currently have a lot of mismatched plans for. The site is currently being built using [Gatsby](https://www.gatsbyjs.com/), [React](https://reactjs.org/), and [BulmaCSS](https://bulma.io/).\
Some things I'd planned for the site were:

- My software development portfolio
- A book review section
- A blog
- Pictures
- Music that I make / a music review section

Most of that didn't pan out, as I had a lot to learn, but I plan on getting there in a future re-do of this project.

### Building

Build new versions of the site with:
```sh
yarn run deploy # see package.json for the script this executes
```

### Road-blocks

_I will be documenting things that I struggle with here._

<details><summary>Working with Gatsby Images</summary>
<p>
<a href="https://www.gatsbyjs.org/docs/working-with-images/">Gatsby images</a> are super nice, as there are a few plugins that combine to:
</p>

<ul>
  <li>Load optimal image sizes across different devices</li>
  <li>Hold image position while the page loads so images don't jump around as they come into existence</li>
  <li>"Blur up" the image or use a traced placeholder SVG to hold them image's place while the page loads</li>
  <li>and more!</li>
</ul>
<p>
I was struggling to get my first Gatsby image to work, as my GraphQL query wasn't picking up the file path I had defined. It turns out the issue was that using a relative path is actually way easier than I thought – I forgot that in <b>gatsby-config.js</b>, I had already set up a path to the <b>images</b> folder <a href="https://www.gatsbyjs.org/packages/gatsby-source-filesystem/">Gatsby Source Filesystem</a>:

```js
{
  "resolve": `gatsby-source-filesystem`,
  "options": {
    "name": `images`,
    "path": `${__dirname}/src/images`
  }
}
```

So, when defining a relative path, it is actually relative to <b>/src/images/</b>, not whatever file you are making the query from.

</p>
</details>

<details><summary>Formatting Logo in Header</summary>

<p>
Building a header component with Bulma is very easy, but since I used a Gatsby <b>&lt;Link /&gt;</b> and <b>&lt;Img /&gt;</b> for the main logo, it was being formatted in an unexpected way. I ended up removing <b>className="navbar-item"</b> from the link, which fixed the formatting. I may need to revisit later.
</p>
</details>

<details><summary>useStaticQuery hook</summary>

<p>
In <a href="#state-is-for-classes-not-functions">State is for classes not functions</a>, I described why I changed my header from a function to a class. Okay, so now that I had a class, <b>useStaticQuery</b> became an issue when I was trying to grab the logo image with graphql. You can only use a <a href="https://reactjs.org/docs/hooks-intro.html">hook</a> inside a function. The way I got around this is to create a new file, <b>image.js</b>, which was a function that utilized <b>useStaticQuery</b> and returned an <b>&lt;Img /&gt;</b>. This way, I was able to import this into <b>header.js</b>, a stateful class that wouldn't allow usage of the hook.
</p>
</details>

<details><summary>Jest / Enzyme testing an element's classes inside a shallow wrapper</summary>
<p>
This was super weird and frustrating. I was writing header tests and eventually got to the point where I wanted to make sure an <b>is-active</b> class was being added to a couple of things in the header when the burger icon was clicked, thus changing the state. I swear to god that the first time I wrote a test, nothing unexpected went down:

```js
it("has a dropdown toggle that rotates between a burger and an X upon state change", () => {
  const dropdownMenu = header.find("#mobileHeaderToggle");
  dropdownMenu.props().onClick();
  expect(dropdownMenu.hasClass("is-active")); // I could swear this worked at first!
});
```

But then, I wrote another test to do basically the same thing for the actual menu display and all of the sudden, I could not get the <b>is-active</b> class to show up anywhere for the life of me. After a long, frustrating time of tinkering, I realize that I could get it to work like this:

```js
it("has a dropdown toggle that rotates between a burger and an X upon state change", () => {
  const dropdownMenu = header.find("#mobileHeaderToggle");
  dropdownMenu.props().onClick();
  dropdownMenu = header.find("#mobileHeaderToggle"); // the added line
  expect(dropdownMenu.hasClass("is-active"));
});
```

This is obviously really hacky, and not what I wanted, but at least it made me realize that the element was not ever updating from its initialized form. Aha!–I thought... I just need to use <b>let</b> instead of <b>const</b>. That didn't work. Looking through some docs made me think that I needed to do a <b>header.update()</b> after <b>onClick</b> was called – That didn't work either. Very weird, and I eventually figured that it was best to just move on. I settled on doing this:

```js
const dropdownMenu = header.find("#mobileHeaderToggle");
dropdownMenu.props().onClick();
expect(header.exists(".is-active"));
```

to test both classes being added at once. This works because I'm not testing it through the dropdownMenu variable any longer. There are a lot of things that I fail to understand going on behind the scenes here. I will need some more experienced eyes to tell me where I was going wrong.

</p>
</details>

<details><summary>mount vs. shallow in Enzyme</summary>
<p>
Enzyme is a super helpful thing to have in addition to Jest. Pretty early on, I understood that calling <b>shallow(&lt;Component /&gt;)</b> will render the component, but not its child components. This made sense to me as something that's good for testing things in isolation. However, I ran into trouble when trying to write a test that makes sure link destinations are going to the right place in the header and footer nav menus.
</p>
<p>
I wanted to do this by checking the Gatsby Link's <b>to</b> prop and comparing it to the content between the tags. The link destinations are lowercase, separated by dashes, and include a forward slash (e.g. /link-destination); but the content would be a capitalized phrase (e.g. Link Destination). So, I processed the strings with these things in mind so that "Link Destination" would reduce to "linkdestination" and "/link-destination" would reduce to "linkdestination" as well. For the footer tests, I was reading the content between the <b>&lt;List&gt;</b> and <b>&lt;/List&gt;</b> by doing a <b>.find()</b> on the children of all <b>li</b> tags and then using a <b>forEach()</b> to get <b>.text()</b> of their children. This worked great, but when I went to do the same thing in <b>Header</b>, it was getting <b>/&lt;mockconstructor&gt;</b> for the content reading. At this point, I realized that I was doing a <b>mount</b> in the footer and a <b>shallow</b> in the header.
</p>
<p>
Okay, so I just need to mount the header in that specific test and then unmount it, right? Wrong. I couldn't mount it at all because of the graphql query in <b>&lt;HeaderLogo /&gt;</b>.

```sh
TypeError: Cannot read property 'fileName' of undefined

      16 |   `);
      17 |
    > 18 |   return <Img fixed={data.fileName.childImageSharp.fixed} alt="logo" />;
         |                           ^
      19 | };
```

I don't know really know what is all going on behind the scenes here, so I couldn't figure out how to write this particular test. You can read more about <b>mount</b> vs. <b>shallow</b> <a href="https://gist.github.com/fokusferit/e4558d384e4e9cab95d04e5f35d4f913">here</a>.

</p>
</details>

<details><summary>Organizing CSS</summary>
  <p>
    The overall way that I style my site is fine – in fact, I quite like it. I have a master <b>styles.scss</b> file in the <b>src/</b> directory which imports Bulma and does some other initial things. Then, I have a <b>styles/</b> directory within both the <b>components/</b> and <b>pages/</b> directories that can serve some additional Sass to whatever files necessary. However, within those files, things get really messy. I am not sure of any rhyme or reason to writing clean CSS. I need to do some reading on the subject. It's not that this has ever caused any real issues, but I can tell that if these files get much bigger, they will become extremely confusing. Should I list styles with respect to the order the site dictates? Maybe? But I can pretty easily ctrl+f to find what I need for now.. 
  </p>
</details>

<details><summary>Usage of <b>!important</b> in CSS</summary>
<p>
In a standard set of CSS files, you probably won't end up using <b>!important</b> very often. However, when using a CSS framework, it's a different story. I feel like I needed to put <b>!important</b> after just about every rule I was writing, or else it would get overwritten by something in Bulma. I wager that this can be avoided somehow, but I couldn't figure it out. The order that CSS files are imported indicates which rules will take precedence if there are instances of conflicting rules. However, rearranging my imports didn't seem to be doing the trick so I just ended up slapping an <b>!important</b> anywhere a rule wasn't going through.

<em>Update</em>: CSS files running into each other in general is an issue. Stuff that I write in <b>blog-post.scss</b> (for example) is affecting other files. The solution.. css modules! I found out that you can do this easily with Sass. Simply, <b>filename.module.scss</b>. In the next commit, I'll make all my scss files into modules and adjust from there. There will probably need to be some file restructuring.

<em>Another update</em>: Well, I started trying to convert to CSS modules, and it looks like that'd be a much larger task than I anticipated. It would take major restructuring to do this, and I'm not sure how I would go about styling pre-generated Bulma classes. I may revisit this later or just forget about it since this is a pretty small site.

</p>
</details>

<details><summary>Writing unit tests for pages / components that use GraphQL queries</summary>
<p>
Writing tests for components is pretty straightforward, especially since Enzyme allows for shallow rendering. However, in files that use a GraphQL query, I couldn't figure out how to test the code without getting something like <b>cannot read property of undefined</b> (e.g. on <b>data.allMarkdownRemark.edges.map</b>). I tried <b>shallow</b>, <b>mount</b>, and <b>render</b> and none of them did the trick. For now, there will be no tests for files that use GraphQL.
</p>
</details>

<details><summary>Opening and closing modals in the book review</summary>
<p>
This took <em>forever</em> but I am really pleased with the solution I ended up at. Basically, I had a <b>&lt;Modal /&gt;</b> that needed to

• open when a button was clicked in the Book Review

• close when the background of the <b>&lt;Modal /&gt;</b> or a button on it was clicked

I had a heck of a time trying to figure out how to set up state to do this properly. At first I thought that it made the most sense to keep an <b>isOpen</b> state in the <b>&lt;Modal /&gt;</b> itself, but I found that it is bad to try to control child component state from the parent component. Rather, I should be keeping the state in the parent component and using props to open / close the child component.

I got so lost and confused while doing this that I created a Stack Overflow account and asked <a href="https://stackoverflow.com/questions/57405151/how-do-i-control-the-state-of-this-child-component-upon-a-button-click-in-its-pa/57405242?noredirect=1#comment101326183_57405242">a question</a> about it. The solution ended up being <em>really</em> simple, and it made me appreciate how nice React is. I needed to:

• keep track of state in <b>Book Review</b>

• pass the <b>\_closeModal</b> function as a prop to <b>&lt;Modal /&gt;</b> so that stuff going on inside it (like a click registered on the background or 'x' button) can manipulate the state of <b>Book Review</b>

This helped me figure out how to configure my dropdown menus as well. It is easy to keep track of which one is open in the state in <b>Book Review</b> and pass the toggle function as a prop to each <b>&lt;Dropdown /&gt;</b>.

</p>
</details>

<details><summary>Getting data from GraphQL in a React class</summary>
<p>
I couldn't figure out how to pull data into the book review at first, because all the Gatsby docs use shorthand functions for components / pages that are used to demonstrate GraphQL.

I needed my book review to be a class because it needs to keep track of state. I couldn't figure out how to do the query to grab the book review content, but I had the sense that I needed to somehow utilize StaticQuery. My suspicions were confirmed when I stumbled upon <a href="https://spectrum.chat/gatsby-js/general/is-this-a-good-way-of-using-gatsby-v2s-staticquery-with-react-component-class~d9db7af2-f594-4199-9640-8756f39876d5">this post</a>. I still don't understand how it works, but hey, at least it works at all.

</p>
</details>

<details><summary>Mapping genres to the dropdown in the book review</summary>
<p>
What I needed was to iterate through the nodes representing my book review markdown files and display the tags (stored as arrays) under the genre dropdown. First of all, the way <b>BookReview</b> is set up, I couldn't figure out how to use standard Javascript to populate an array with the result of my GraphQL query. Otherwise, I would've just iterated through the nodes and the tags within them to push unique values to the <b>genreOptions</b> dropdown. The way I did my query, I had no idea how to do that. I am still really confused about how GraphQL queries interplay with the standard React setup. I don't quite get when the data becomes available and such.

So, the way I figured it, the only way to achieve what I wanted was to directly set the <b>options</b> prop of <b>&lt;Dropdown /&gt;</b> to what it needed to be. Normally that's not bad - you just map the nodes and return some <b>frontmatter</b> field from them. But, this particular frontmatter field was an array. I tried submapping through the tag fields, but nothing was showing up. When I populated a const array with data with the submap and returned that, it was getting returned for every node (book) that came back from GraphQL. I needed to somehow return it from outside the map.

I ended up with a rough solution, but it works! And I learned some things about array methods. First, I realized I needed to do a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap">flatMap</a> to avoid getting arrays in every single dropdown item position. This was almost right, but I was getting back a list with a ton of duplicates (because the snapshot of the <b>genreOptions</b> array was getting returned for every book). What I did was create a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set">Set</a> from the ugly array that was formed, and then convert in back to an array when processing it in the actual dropdown. This worked! This is a very rough solution that I don't love. However, when you don't know everything, you sometimes need to create workarounds like this until you gain more knowledge. And I'll never have to manually add to this dropdown now! Anytime I tag a book with a genre I haven't used before, it'll automatically get pulled from my GraphQL layer!

</p>
</details>

### Things I Have Learned

_I will be documenting important things I pick up here._

<details><summary id="state-is-for-classes-not-functions">State is for classes not functions</summary>

<p>
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

</p>
</details>

<details><summary>Adding more stuff to a git commit</summary>

<p>
Let's say you write a nice commit message in Vim, but you forgot to mention one thing... simply run:

```sh
git commit --amend
```

and you'll be brought back to vim to add or change anything you need without making a brand new commit

</p>
</details>

<details><summary>Simulating events in Enzyme</summary>

<p>
Apparently using e.g. <b>button.simulate("click")</b> instead of <b>button.props().onClick()</b> is <a href="https://github.com/airbnb/enzyme/issues/1606">bad</a>.
</p>
</details>

<details><summary>Gatsby image component</summary>
<p>
It is indeed possible to create a component that takes care of the things needed to query and display Gatsby images (rather than having a separate query for every single image). <a href="https://www.freecodecamp.org/news/how-i-made-my-portfolio-website-blazing-fast-with-gatsby-82ccddc2f671/">This post</a> explained how this can be done using the <b>allFile</b> query. Once you have queried all the images, you can simply use <b>props</b> to select the right one. One improvement I'd like to make is to allow props to be passed to this component such that you may indicate whether you are requesting a <b>fluid</b> or <b>fixed</b> image (and if it is <b>fixed</b>, what size?). I'm not sure how (or if it's even possible) to pass props to a graphql query, which I think is what I'd need to do for this functionality. So, for now, <b>image.js</b> just returns a <b>fluid</b> image.
</p>
</details>

<details><summary>Yarn doesn't have <b>audit fix</b>... <em>...What?!</em></summary>
<p>
This is actually hugely inconvenient. Read more <a href="https://github.com/yarnpkg/yarn/issues/7075">here</a>. It seems like the yarn maintainer is stubborn and doesn't want to implement this, but in the meantime I'm freaking out about how to fix all of my vulnerable dependencies.
</p>
</details>

<details><summary>Gatsby source filesystem + gatsby transformer remark</summary>
<p>
It took forever for me to figure out why I couldn't query <b>allMarkdownRemark</b> from GraphQL Playground. I was getting a warning about the gatsby-transformer-remark plugin being behind the version of gatsby on my site, so I went down a rabbit hole of trying to update various parts of the gatsby package. I learned a bit about how all <em>that</em> works, but it still wasn't fixing the issue. Eventually, I realized that I needed to define a new gatsby-source-filesystem path in <b>gatsby-config.js</b> for the blog-posts directory I had just created.
</p>
</details>

<details><summary>Branching is crucial in Git</summary>
<p>
My typical workflow would involve me working on a part of the website that I wanted to tackle next until inevitably getting distracted by little bugs and changes that I notice need attention. I'd make small adjustments and then package all these little changes into the commit I was working on. This is really bad! I should have created branches for all of the website pages as well as each of the components. (I'll do that once I push this commit). Then, if I notice something wrong with the footer, for example, I'll swap to the footer branch and commit to it before eventually merging back with master.

Oh, also I need to commit more often. I tend to just commit when I feel like I've accomplished something, but that's not really the point.

</p>
</details>

<details><summary>Testing a development site on mobile</summary>
<p>
I thought it wouldn't be bad to hop on a localhost port if your iPhone is on the network as your computer (I was encouraged by <a href="https://stackoverflow.com/questions/3132105/how-do-you-access-a-website-running-on-localhost-from-iphone-browser">this thread</a>). Alas, I couldn't get it to work. But then I found this absolutely awesome solution in <a href="">this thread</a>.

```sh
gatsby develop -o -H $HOSTNAME -p 8000
```

I added this script to <b>package.json</b> because it is useful to have it in shorthand for testing on my phone.

</p>
</details>

### Todo

- Don't re-trigger the hover animation on desktop header links when you click on of them to visit a different page.
- Get a graphic designer to make some cool things for the landing page!
- Figure out a way to write my email address in the footer in a way that prevents spam bots from finding it.
- Enable "clicking out of" the filters for the book review.. Also make it such that only one may be expanded at a time.
- Remove google links from various anchor tags in the book review.
- Only allow one dropdown menu to be open at a time in BookReview
- Get the areas to the left and right of the dropdown filters in the Book Review to close all filters as well
- Mobile changes:
  - Fix spinning burger in menu – the spans get all messed up
  - Book review dropdowns run into the side
  - Mobile clicks are gross, mostly from hover stuff
- Fix footer jump on zoom
- Vary excerpt length in book review based on zoom?
- Change title fonts, since I'm going for a space theme
- Position image in mobile book review listings to left of excerpt text
- Change slugs of dynamically generated pages such that they don't include "/markdown"
- Check unique key warning on book review and warning on lazy loading images
- In the mobile book review, line up the dropdowns horizontally instead of stacking them
- Add some light animations to the book review
