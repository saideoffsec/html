## **Elements and tags**

Those object which implement markup rules

```
<h1>Heading</h1>
# A heading element — defines a title or section header.

<p>This is a paragraph.</p>
# A paragraph element — defines a block of text.

<a href="https://example.com">Visit Example</a>
# A link element — connects to another page or resource.

<img src="photo.jpg" alt="Sample Image">
# An image element — embeds an image (self-closing, no end tag).

```

here `<h1>, <p>, <a>, <img>` are elements, and starting element and ending elements is seperately known as tag.

## Most usages Tags

```
<!-- Root / Document -->
<!DOCTYPE html>
# Declares the document type as HTML5.

<html lang="en">
# Root element wrapping the entire HTML document.

<head>
# Container for metadata, links, and scripts not shown as page content.

<title>Page Title</title>
# Sets the document’s title shown in the browser tab.

<base href="/" target="_blank">
# Sets the base URL and default link target for relative URLs.

<link rel="stylesheet" href="styles.css">
# Links external resources like stylesheets or icons.

<meta charset="utf-8">
# Provides metadata (character set, viewport, description, etc.).

<style>/* CSS */</style>
# Embeds CSS styles directly in the document.

<body>
# Contains all the content that is rendered on the page.

<!-- Sectioning & Structure -->
<header>
# Introductory content or navigation for a page or section.

<nav>
# Defines a section of navigation links.

<main>
# Represents the dominant content of the document.

<section>
# Thematic grouping of content, typically with a heading.

<article>
# Self-contained, independently distributable content.

<aside>
# Tangential or supplemental content (like sidebars).

<footer>
# Footer for a page or section (authorship, related links, etc.).

<h1>…</h1>
# Top-level heading (use once for main title if possible).

<h2>…</h2>
# Second-level heading for major subsections.

<h3>…</h3>
# Third-level heading for subsections.

<h4>…</h4>
# Fourth-level heading.

<h5>…</h5>
# Fifth-level heading.

<h6>…</h6>
# Sixth-level (smallest) heading.

<hgroup>
# Groups a heading with its subheadings.

<address>
# Contact information for a person, organization, or article.

<!-- Grouping Content -->
<p>…</p>
# Paragraph block of text.

<hr>
# Thematic break between paragraphs or sections.

<pre>…</pre>
# Preformatted text preserving whitespace and line breaks.

<blockquote>…</blockquote>
# Extended quotation, usually with a citation.

<ol>…</ol>
# Ordered (numbered) list.

<ul>…</ul>
# Unordered (bulleted) list.

<li>…</li>
# List item inside ol/ul/menu.

<dl>…</dl>
# Description list of terms and definitions.

<dt>…</dt>
# Term/name in a description list.

<dd>…</dd>
# Description/detail for a term in a description list.

<figure>…</figure>
# Self-contained content, like images or code listings.

<figcaption>…</figcaption>
# Caption or legend for a figure.

<div>…</div>
# Generic container with no semantic meaning.

<!-- Text-Level Semantics -->
<a href="#">…</a>
# Hyperlink to another resource or location.

<em>…</em>
# Emphasized text (typically italics, semantic).

<strong>…</strong>
# Strong importance (typically bold, semantic).

<small>…</small>
# Side comments, fine print, or legal text.

<s>…</s>
# Content that is no longer accurate or relevant.

<cite>…</cite>
# Reference to a creative work (book, article, etc.).

<q>…</q>
# Short inline quotation.

<dfn>…</dfn>
# Term being defined.

<abbr title="…">…</abbr>
# Abbreviation or acronym with optional expansion.

<ruby>…</ruby>
# Ruby annotation container for East Asian typography.

<rb>…</rb>
# Ruby base text.

<rt>…</rt>
# Ruby text (annotation) for pronunciation.

<rtc>…</rtc>
# Ruby text container for complex annotations.

<rp>…</rp>
# Fallback parentheses for browsers not supporting ruby.

<data value="…">…</data>
# Binds a readable value to a machine-readable equivalent.

<time datetime="…">…</time>
# Represents a specific time or date.

<code>…</code>
# Inline code fragment.

<var>…</var>
# Variable in a mathematical expression or programming context.

<samp>…</samp>
# Sample output from a program or system.

<kbd>…</kbd>
# User input or keyboard entry.

<sub>…</sub>
# Subscript text.

<sup>…</sup>
# Superscript text.

<i>…</i>
# Text in an alternate voice/mood (usually italic, non-semantic).

<b>…</b>
# Text offset without extra importance (usually bold, non-semantic).

<u>…</u>
# Text annotation like misspelling or proper name (underlined).

<mark>…</mark>
# Highlighted or marked text of interest.

<bdi>…</bdi>
# Isolates text that might have a different directionality.

<bdo dir="rtl">…</bdo>
# Explicitly overrides the text direction.

<span>…</span>
# Generic inline container with no semantic meaning.

<br>
# Line break within text.

<wbr>
# Optional line-break opportunity.

<!-- Edits -->
<ins>…</ins>
# Inserted content (typically underlined).

<del>…</del>
# Deleted content (typically struck through).

<!-- Embedded Content -->
<picture>…</picture>
# Responsive image container with multiple sources.

<source srcset="…" type="…">
# Media source for picture, audio, or video elements.

<img src="…" alt="…">
# Embeds an image.

<iframe src="…"></iframe>
# Inline frame embedding another HTML page.

<embed src="…">
# Integrates external content (plugin/media).

<object data="…" type="…">…</object>
# Generic container for external resources.

<param name="…" value="…">
# Parameter for an object plugin.

<video controls>…</video>
# Embeds video content.

<audio controls>…</audio>
# Embeds audio content.

<track kind="subtitles" src="…">
# Text tracks (subtitles/captions) for media.

<map name="…">…</map>
# Image map defining clickable areas.

<area shape="…" coords="…" href="…">
# Clickable area inside an image map.

<canvas>…</canvas>
# Scriptable drawing surface for graphics.

<svg>…</svg>
# Embeds SVG vector graphics.

<math>…</math>
# Embeds MathML markup.

<!-- Tables -->
<table>…</table>
# Tabular data container.

<caption>…</caption>
# Table title or description.

<colgroup>…</colgroup>
# Groups columns for shared formatting.

<col span="…">
# Defines properties for a table column.

<thead>…</thead>
# Group of header rows in a table.

<tbody>…</tbody>
# Group of body rows in a table.

<tfoot>…</tfoot>
# Group of footer rows in a table.

<tr>…</tr>
# Table row.

<th scope="col">…</th>
# Header cell in a table.

<td>…</td>
# Data cell in a table.

<!-- Forms -->
<form action="…" method="post">…</form>
# Collects and submits user input.

<label for="…">…</label>
# Caption/label for a form control.

<input type="text">
# Versatile form control for user input.

<button type="button">…</button>
# Clickable button (submit/reset/button).

<select>…</select>
# Drop-down list control.

<datalist>…</datalist>
# Provides autocomplete options for an input.

<optgroup label="…">…</optgroup>
# Groups related <option> items within a select.

<option value="…">…</option>
# Choice within a select, datalist, or menu.

<textarea>…</textarea>
# Multi-line text input control.

<output for="…">…</output>
# Result of a calculation or user action.

<progress value="…" max="…">…</progress>
# Displays task completion progress.

<meter value="…" min="…" max="…">…</meter>
# Scalar measurement within a known range.

<fieldset>…</fieldset>
# Groups related form controls.

<legend>…</legend>
# Caption for a fieldset group.

<!-- Interactive & Disclosures -->
<details>…</details>
# Disclosure widget that users can open and close.

<summary>…</summary>
# Visible heading for a details disclosure.

<dialog>…</dialog>
# Modal or non-modal dialog box.

<!-- Scripting & Templates -->
<script>/* JS */</script>
# Embeds or references executable JavaScript.

<noscript>…</noscript>
# Fallback content when scripts are disabled.

<template>…</template>
# Inactive DOM fragment for client-side templating.

<slot>…</slot>
# Placeholder in Web Components where light DOM is inserted.

```

Code Examkple

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>HTML Tag Showcase (Pure HTML)</title>
  <base href="/" target="_blank">
  <link rel="stylesheet" href="styles.css">
  <style></style>
</head>
<body>

<!-- Sectioning & Structure -->
<header>
  <h1>HTML Tag Showcase</h1>
  <nav>
    <a href="#structure">Structure</a>
    <a href="#grouping">Grouping</a>
    <a href="#text">Text</a>
    <a href="#embedded">Embedded</a>
    <a href="#tables">Tables</a>
    <a href="#forms">Forms</a>
    <a href="#interactive">Interactive</a>
    <a href="#scripts">Scripting</a>
  </nav>
</header>

<main id="structure">
  <section>
    <h2>Section Example</h2>
    <article>
      <h3>Article Example</h3>
      <p>This is an article inside a section.</p>
    </article>
    <aside>
      <p>This is an aside with extra info.</p>
    </aside>
  </section>

  <hgroup>
    <h2>Grouped Title</h2>
    <h3>Subtitle in the same group</h3>
  </hgroup>

  <h4>Heading Level 4</h4>
  <h5>Heading Level 5</h5>
  <h6>Heading Level 6</h6>

  <address>
    Contact: Example Org, Dhaka — Email: <a href="mailto:info@example.com">info@example.com</a>
  </address>
</main>

<footer>
  <p>© <time datetime="2025-11-01">2025</time> Example Footer</p>
</footer>

<!-- Grouping Content -->
<section id="grouping">
  <h2>Grouping Content</h2>
  <p>This is a paragraph with <em>emphasis</em> and <strong>strong</strong> text.</p>
  <hr>
  <pre>Preformatted
text keeps    spaces and
line breaks.</pre>
  <blockquote cite="https://example.com">A longer quotation goes here.</blockquote>

  <ol>
    <li>Ordered item 1</li>
    <li>Ordered item 2</li>
  </ol>

  <ul>
    <li>Unordered item A</li>
    <li>Unordered item B</li>
  </ul>

  <dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language</dd>
  </dl>

  <figure>
    <img src="https://via.placeholder.com/320x160" alt="Placeholder image">
    <figcaption>Figure with an image and caption.</figcaption>
  </figure>

  <div>Generic div container</div>
</section>

<!-- Text-Level Semantics -->
<section id="text">
  <h2>Text-Level Semantics</h2>

  <p>
    <a href="https://example.com">A hyperlink</a> •
    <small>small print</small> •
    <s>no longer accurate</s> •
    <cite>Work Title</cite> •
    <q>inline quote</q> •
    <dfn>defined term</dfn> •
    <abbr title="World Health Organization">WHO</abbr>
  </p>

  <p>
    <!-- Ruby with rb/rt/rtc/rp -->
    <ruby>
      <rb>漢</rb><rt>hàn</rt>
      <rb>字</rb><rt>zì</rt>
      <rtc><rt>Chinese characters</rt></rtc>
      <rp>(</rp><rt>hanzi</rt><rp>)</rp>
    </ruby>
  </p>

  <p>
    <code>const a = 1;</code> •
    <var>x</var> •
    <samp>program output</samp> •
    <kbd>Ctrl</kbd>+<kbd>S</kbd> •
    H<sub>2</sub>O •
    E = mc<sup>2</sup> •
    <i>alternate voice</i> •
    <b>offset text</b> •
    <u>annotation</u> •
    <mark>highlight</mark> •
    <bdi>abcעברית</bdi> •
    <bdo dir="rtl">Reversed direction</bdo> •
    <span>inline span</span><br>
    Optional<wbr>Break
  </p>

  <p>
    <data value="42">Answer</data> at
    <time datetime="2025-11-01T09:00">9:00 AM</time>.
  </p>

  <!-- Edits -->
  <p><ins>Inserted text</ins> and <del>deleted text</del>.</p>
</section>

<!-- Embedded Content -->
<section id="embedded">
  <h2>Embedded Content</h2>

  <picture>
    <source srcset="https://via.placeholder.com/600x200" media="(min-width: 600px)">
    <source srcset="https://via.placeholder.com/320x160" media="(max-width: 599px)">
    <img src="https://via.placeholder.com/400x180" alt="Responsive image example">
  </picture>

  <iframe src="https://example.com" title="Example iframe" loading="lazy"></iframe>

  <embed src="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" type="application/pdf">

  <object data="https://via.placeholder.com/150" type="image/png">
    <param name="alt" value="Fallback alt text">
    Fallback content for object.
  </object>

  <video controls width="360">
    <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4">
    <track kind="captions" srclang="en" src="https://raw.githubusercontent.com/mdn/learning-area/main/html/multimedia-and-embedding/video-and-audio-content/video-subtitles-en.vtt" label="English">
    Your browser does not support the video tag.
  </video>

  <audio controls>
    <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>

  <map name="demo-map">
    <area shape="rect" coords="0,0,100,50" href="https://example.com" alt="Rect area">
  </map>
  <img src="https://via.placeholder.com/200x100" usemap="#demo-map" alt="Image map">

  <canvas id="cv" width="240" height="80">Canvas fallback text</canvas>

  <svg width="200" height="80" viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="SVG demo">
    <circle cx="40" cy="40" r="30"></circle>
    <text x="80" y="48">SVG Text</text>
  </svg>

  <math xmlns="http://www.w3.org/1998/Math/MathML" display="inline">
    <mrow><mi>E</mi><mo>=</mo><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></mrow>
  </math>
</section>

<!-- Tables -->
<section id="tables">
  <h2>Tables</h2>
  <table>
    <caption>Sample Table</caption>
    <colgroup>
      <col span="1">
      <col span="1">
    </colgroup>
    <thead>
      <tr><th scope="col">Name</th><th scope="col">Value</th></tr>
    </thead>
    <tbody>
      <tr><td>A</td><td>1</td></tr>
      <tr><td>B</td><td>2</td></tr>
    </tbody>
    <tfoot>
      <tr><td>Total</td><td>3</td></tr>
    </tfoot>
  </table>
</section>

<!-- Forms -->
<section id="forms">
  <h2>Forms</h2>
  <form action="#" method="post">
    <fieldset>
      <legend>Profile</legend>

      <label for="name">Name</label>
      <input id="name" name="name" type="text" placeholder="Your name">

      <label for="bio">Bio</label>
      <textarea id="bio" name="bio" rows="3"></textarea>

      <label for="color">Favorite Color</label>
      <select id="color" name="color">
        <optgroup label="Warm">
          <option value="red">Red</option>
          <option value="orange">Orange</option>
        </optgroup>
        <optgroup label="Cool">
          <option value="blue">Blue</option>
          <option value="green">Green</option>
        </optgroup>
      </select>

      <label for="pets">Pets (datalist)</label>
      <input id="pets" name="pets" list="petlist" placeholder="Type to autocomplete">
      <datalist id="petlist">
        <option value="Cat"></option>
        <option value="Dog"></option>
      </datalist>

      <label>Progress <progress value="70" max="100">70%</progress></label>
      <label>Meter <meter value="0.6" min="0" max="1">0.6</meter></label>

      <output id="out" for="name">Live output</output>

      <div>
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
        <button type="button">Plain Button</button>
      </div>
    </fieldset>
  </form>
</section>

<!-- Interactive & Disclosures -->
<section id="interactive">
  <h2>Interactive & Disclosures</h2>

  <details>
    <summary>Click to expand details</summary>
    <p>This content is revealed inside details.</p>
  </details>

  <dialog open>
    <p>This is a dialog shown using the <code>open</code> attribute.</p>
    <p><button type="button">Close (no JS)</button></p>
  </dialog>
</section>

<!-- Scripting & Templates -->
<section id="scripts">
  <h2>Scripting & Templates</h2>

  <template id="card-template">
    <div>
      <slot name="title"></slot>
      <slot></slot>
    </div>
  </template>

  <my-card>
    <span slot="title"><strong>Web Component Title</strong></span>
    This is slotted content.
  </my-card>

  <noscript>
    JavaScript is disabled — this appears inside <code>noscript</code>.
  </noscript>

  <script></script>
</section>

</body>
</html>

```

![1761992479254](image/03-Elements/1761992479254.png)

## All HTML 5 Tags With Example

"a" Tag: do ancoring or linking

![1761995825448](image/03-Elements/1761995825448.png)

```
<!-- Basic hyperlink -->
<a href="https://www.example.com">Visit Example</a>

<!-- Link to another page -->
<a href="about.html">About Us</a>

<!-- Open link in a new tab -->
<a href="https://www.example.com" target="_blank">Open in New Tab</a>

<!-- Email link -->
<a href="mailto:info@example.com">Send Email</a>

<!-- Telephone link -->
<a href="tel:+8801742271463">Call Us</a>

<!-- Bookmark link (jump to section on the same page) -->
<a href="#section2">Go to Section 2</a>

```

"abbr" Tag: do abbreviation

```
<!-- Basic abbreviation -->
<abbr title="World Health Organization">WHO</abbr>

<!-- Another example -->
<abbr title="HyperText Markup Language">HTML</abbr>

<!-- In a sentence -->
<p>The <abbr title="Central Processing Unit">CPU</abbr> is the brain of the computer.</p>

```

![1761996293809](image/03-Elements/1761996293809.png)

"address" Tag: mention address

```
<!-- Basic address example -->
<address>
  Written by <a href="mailto:info@example.com">John Doe</a>.<br>
  Visit us at:<br>
  Example Company<br>
  123 Web Street, Dhaka<br>
  Bangladesh
</address>

<!-- Address for a webpage author -->
<address>
  Author: <a href="mailto:author@example.com">Jane Smith</a>
</address>

<!-- Address used in a footer -->
<footer>
  <address>
    Contact: <a href="mailto:support@example.com">support@example.com</a><br>
    456 HTML Avenue, Web City
  </address>
</footer>

```

![1761996442319](image/03-Elements/1761996442319.png)

"area" Tag: do image maping

```
<!-- Basic image map with clickable areas -->
<img src="https://www.mapsofworld.com/style_2019/images/world-map.png?v:1" alt="World Map" usemap="#worldmap">

<map name="worldmap">
  <area shape="rect" coords="0,0,100,100" href="https://www.mapsofworld.com/style_2019/images/world-map.png?v:1" alt="Canada">
</map>

<!-- Example with target attribute -->
<area shape="rect" coords="10,10,110,110" href="https://example.com" target="_blank" alt="Example Link">

```



![1762000301221](image/03-Elements/1762000301221.png)

article: mentioning that it's an article

```
<article>
  <h2>Understanding Cybersecurity Basics</h2>
  <p>Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks.</p>
</article>

```

![1762000540097](image/03-Elements/1762000540097.png)





aside: side notes

```
<aside>
  <h2>Did You Know?</h2>
  <p>The first computer virus was created in 1986 and was called the “Brain” virus.</p>
</aside>

```


![1762000636178](image/03-Elements/1762000636178.png)

audio:

```
<audio controls>
  <source src="audio-file.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

```

![1762000724301](image/03-Elements/1762000724301.png)

b: bold

```
<p>This is a <b>bold</b> word in a sentence.</p>

```

![1762000866254](image/03-Elements/1762000866254.png)

base: define url's base part here, next time just use `/directory/filename.html` etc

```
<head>
  <base href="https://www.example.com/" target="_blank">
</head>

```

![1762004127521](image/03-Elements/1762004127521.png)



bdi: bidirectional isolation, keep the direction fixed

```
<p>Usernames: <bdi>علي</bdi>, <bdi>John</bdi>, <bdi>Мария</bdi></p>

```

![1762004261408](image/03-Elements/1762004261408.png)

bdo: bidirectional override, force the direction

```
<p><bdo dir="rtl">This text will be displayed from right to left.</bdo></p>

```

![1762004349530](image/03-Elements/1762004349530.png)

blockquote: quote as a block



![1762004431603](image/03-Elements/1762004431603.png)

body: document's visible contents lies here 

```
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Body Tag Example</title>
</head>
<body>
  <h1>Welcome to My Web Page</h1>
  <p>This is the main content area inside the body tag.</p>
</body>
</html>

```

![1762004646696](image/03-Elements/1762004646696.png)

br: breaks line or pressing `Enter`

```
<p>This is the first line.<br>This is the second line.<br>This is the third line.</p>

```

![1762004901612](image/03-Elements/1762004901612.png)

button:

```
<!-- Basic button -->
<button>Click Me</button>

<!-- Submit button inside a form -->
<form action="/submit">
  <button type="submit">Submit</button>
</form>

<!-- Reset button -->
<form>
  <input type="text" placeholder="Enter your name">
  <button type="reset">Reset</button>
</form>

<!-- Button linking to another page -->
<button onclick="window.location.href='https://www.example.com'">Go to Example</button>

```

![1762005071587](image/03-Elements/1762005071587.png)

canvas: Region creator

```
<canvas id="myCanvas" width="200" height="100">
  Your browser does not support the canvas element.
</canvas>

```

![1762008625421](image/03-Elements/1762008625421.png)

caption: like title 

```
<table border="1">
  <caption>Monthly Sales Report</caption>
  <tr>
    <th>Month</th>
    <th>Sales</th>
  </tr>
  <tr>
    <td>January</td>
    <td>$5,000</td>
  </tr>
</table>

```

![1762008771663](image/03-Elements/1762008771663.png)

cite: to do citation

```
<p><cite>The Art of War</cite> by Sun Tzu is a timeless book on strategy.</p>

```

![1762008880777](image/03-Elements/1762008880777.png)

code: showing as a code 

```
<p>To display a message in JavaScript, use <code>console.log("Hello, World!");</code></p>

```

![1762008930196](image/03-Elements/1762008930196.png)

col: column

```
<table border="1">
  <colgroup>
    <col style="background-color: lightblue;">
    <col style="background-color: lightgreen;">
  </colgroup>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>John</td>
    <td>25</td>
  </tr>
</table>

```

![1762009014715](image/03-Elements/1762009014715.png)

colgroup: column grouping

```
<table border="1">
  <colgroup>
    <col style="background-color: lightblue;">
    <col style="background-color: lightgreen;">
    <col style="background-color: lightyellow;">
  </colgroup>
  <tr>
    <th>Product</th>
    <th>Price</th>
    <th>Stock</th>
  </tr>
  <tr>
    <td>Laptop</td>
    <td>$800</td>
    <td>Available</td>
  </tr>
</table>

```

![1762009108189](image/03-Elements/1762009108189.png)

data: for machine

```
<p>The product <data value="101">Laptop</data> is currently in stock.</p>

```

![1762009242324](image/03-Elements/1762009242324.png)

datalist: giving option to choose

```
<form>
  <label for="browser">Choose your browser:</label>
  <input list="browsers" id="browser" name="browser">

  <datalist id="browsers">
    <option value="Google Chrome">
    <option value="Mozilla Firefox">
    <option value="Microsoft Edge">
    <option value="Safari">
    <option value="Opera">
  </datalist>
</form>

```

![1762009393591](image/03-Elements/1762009393591.png)

dd: definition

```
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language — the standard language for creating web pages.</dd>

  <dt>CSS</dt>
  <dd>Cascading Style Sheets — used for designing and formatting web pages.</dd>
</dl>

```

![1762009493101](image/03-Elements/1762009493101.png)

del: deleted

```
<p>The old price was <del>$100</del> now it's <ins>$80</ins>.</p>

```

![1762009557570](image/03-Elements/1762009557570.png)

details: toogle menue like

```
<details>
  <summary>What is HTML?</summary>
  <p>HTML stands for HyperText Markup Language. It is used to structure content on the web.</p>
</details>

```

![1762009641500](image/03-Elements/1762009641500.png)

dfn: inline define term



```
<p><dfn>Phishing</dfn> is a type of cyber attack where attackers trick users into revealing sensitive information.</p>

```

dialog: dialogue window

```
<dialog open>
  <h2>Welcome!</h2>
  <p>This is a simple dialog box.</p>
  <button>Close</button>
</dialog>

```

![1762009801764](image/03-Elements/1762009801764.png)

div: division for grouping

```
<div>
  <h2>Welcome to My Website</h2>
  <p>This section is grouped inside a div element.</p>
</div>

```



![1762009868625](image/03-Elements/1762009868625.png)

dl: descriiptive list

```
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language — the standard language for creating web pages.</dd>

  <dt>CSS</dt>
  <dd>Cascading Style Sheets — used to design and format web pages.</dd>

  <dt>JavaScript</dt>
  <dd>A programming language used to make web pages interactive.</dd>
</dl>

```

![1762010003693](image/03-Elements/1762010003693.png)

dt: description term

```
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language — the standard language for creating web pages.</dd>

  <dt>CSS</dt>
  <dd>Cascading Style Sheets — used for styling and layout of web pages.</dd>
</dl>

```



![1762010060448](image/03-Elements/1762010060448.png)

em: emphasize

```
<p>Learning <em>cybersecurity</em> requires both theory and practical experience.</p>

```

![1762010099184](image/03-Elements/1762010099184.png)

embed: to embed

```
<embed src="https://www.dcpehvpm.org/E-Content/BCA/BCA-II/Web%20Technology/the-complete-reference-html-css-fifth-edition.pdf" type="application/pdf" width="600" height="400">

```

![1762010248146](image/03-Elements/1762010248146.png)

fieldset: grouping html form's tags

```
<form>
  <fieldset>
    <legend>Personal Information</legend>

    <label for="name">Name:</label>
    <input type="text" id="name" name="name"><br><br>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email"><br><br>

    <button type="submit">Submit</button>
  </fieldset>
</form>

```



![1762010315584](image/03-Elements/1762010315584.png)

figcaption: defines figure

```
<figure>
  <img src="sunset.jpg" alt="Sunset over the mountains">
  <figcaption>Sunset over the Himalayas — captured in autumn 2025.</figcaption>
</figure>

```

![1762010616102](image/03-Elements/1762010616102.png)


figure: for grouping figure

```
<figure>
  <img src="cybersecurity.jpg" alt="A padlock symbol representing cybersecurity">
  <figcaption>Illustration showing the concept of cybersecurity protection.</figcaption>
</figure>

```

![1762010689951](image/03-Elements/1762010689951.png)

footer: bottom part

```
<footer>
  <p>© 2025 OffSecPractitioner. All rights reserved.</p>
  <p>Contact: <a href="mailto:info@example.com">info@example.com</a></p>
</footer>

```



![1762010753577](image/03-Elements/1762010753577.png)

form: building form

```
<form action="/submit" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name"><br><br>

  <label for="email">Email:</label>
  <input type="email" id="email" name="email"><br><br>

  <button type="submit">Submit</button>
</form>

```

![1762011544906](image/03-Elements/1762011544906.png)

h1-6:

```
<h1>This is a Heading 1</h1>
<h2>This is a Heading 2</h2>
<h3>This is a Heading 3</h3>
<h4>This is a Heading 4</h4>
<h5>This is a Heading 5</h5>
<h6>This is a Heading 6</h6>

```



![1762011680553](image/03-Elements/1762011680553.png)

head: contain metadata, not visible publickly

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Head Tag Example</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Content goes here</h1>
</body>
</html>

```



![1762011825432](image/03-Elements/1762011825432.png)

header: intro

```
<header>
  <h1>OffSec Practitioner</h1>
  <p>Empowering the next generation of ethical hackers.</p>
  <nav>
    <a href="#home">Home</a> |
    <a href="#courses">Courses</a> |
    <a href="#contact">Contact</a>
  </nav>
</header>

```



![1762011889719](image/03-Elements/1762011889719.png)

hr: seperator line 



```
<h2>Introduction</h2>
<p>This course will teach you the fundamentals of web security.</p>

<hr>

<h2>Next Steps</h2>
<p>Once you complete this section, you’ll move on to advanced topics.</p>

```

![1762012086610](image/03-Elements/1762012086610.png)

html: wrap everything

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Tag Example</title>
</head>
<body>
  <h1>Hello, World!</h1>
  <p>This webpage is wrapped inside the HTML tag.</p>
</body>
</html>

```

![1762012206086](image/03-Elements/1762012206086.png)

i: italic

```
<p>The word <i>hacker</i> originally meant someone who loves exploring technology.</p>

```

![1762012320542](image/03-Elements/1762012320542.png)

iframe: embed another webpage

```
<iframe src="https://www.example.com" width="600" height="400" title="Example Website">
  Your browser does not support iframes.
</iframe>

```

![1762012431037](image/03-Elements/1762012431037.png)



img:

```
<img src="sunset.jpg" alt="Sunset over the mountains" width="600" height="400">

```

![1762012486078](image/03-Elements/1762012486078.png)



input:

```
<form>
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" placeholder="Enter your name">
</form>

```

![1762012538983](image/03-Elements/1762012538983.png)

ins: inserted

```
<p>The course fee was <del>$250</del> now it’s <ins>$200</ins>.</p>

```

![1762012588890](image/03-Elements/1762012588890.png)

kbd: keyboard key

```
<p>To refresh the page, press <kbd>Ctrl</kbd> + <kbd>R</kbd>.</p>

```

![1762012939336](image/03-Elements/1762012939336.png)

label:

```
<form>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" placeholder="Enter your email">
</form>

```

![1762012987698](image/03-Elements/1762012987698.png)


legend



![1762013046094](image/03-Elements/1762013046094.png)

li:

```
<ul>
  <li>Learn HTML</li>
  <li>Practice CSS</li>
  <li>Build a portfolio</li>
</ul>

<ol>
  <li>Download resources</li>
  <li>Watch tutorials</li>
  <li>Start coding</li>
</ol>

```


![1762013102480](image/03-Elements/1762013102480.png)


link



```
<head>
  <link rel="stylesheet" href="styles.css">
</head>

```


main

```
<main>
  <h1>Welcome to OffSec Practitioner</h1>
  <p>Our mission is to train elite cybersecurity professionals through real-world practice and mentorship.</p>
</main>

```

![1762013190762](image/03-Elements/1762013190762.png)

map: image mapping

```
<img src="world-map.jpg" alt="World Map" usemap="#worldmap">

<map name="worldmap">
  <area shape="rect" coords="34,44,270,350" href="https://en.wikipedia.org/wiki/North_America" alt="North America">
  <area shape="circle" coords="400,200,60" href="https://en.wikipedia.org/wiki/Europe" alt="Europe">
</map>

```

![1762013250603](image/03-Elements/1762013250603.png)

mark: marking

```
<p>Learning <mark>ethical hacking</mark> can help you understand how to protect systems better.</p>

```

![1762013343456](image/03-Elements/1762013343456.png)

math: math equation

```
<math xmlns="http://www.w3.org/1998/Math/MathML">
  <mrow>
    <msup><mi>E</mi><mn>2</mn></msup>
    <mo>=</mo>
    <msup><mi>m</mi><mn>2</mn></msup>
    <msup><mi>c</mi><mn>4</mn></msup>
  </mrow>
</math>

```

![1762013476656](image/03-Elements/1762013476656.png)

menu: Menu



![1762014265861](image/03-Elements/1762014265861.png)



meta:



```
<head>
  <meta charset="UTF-8">
  <meta name="description" content="Learn ethical hacking and OSINT investigation from professionals.">
  <meta name="keywords" content="Cybersecurity, OSINT, Ethical Hacking, OffSecPractitioner">
  <meta name="author" content="Saide">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

```


meter:



![1762014383275](image/03-Elements/1762014383275.png)

nav: navigation 



```
<nav>
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>

```

![1762014446467](image/03-Elements/1762014446467.png)

noscript: note for those whos browser doesn't support script


![1762014533164](image/03-Elements/1762014533164.png)

object: embed object



![1762014621772](image/03-Elements/1762014621772.png)

ol:

![1762014678767](image/03-Elements/1762014678767.png)

optgroup: groping option

```
<label for="course">Choose a course:</label>
<select id="course" name="course">
  <optgroup label="Offensive Security">
    <option value="web-pentest">Web Penetration Testing</option>
    <option value="network-pentest">Network Penetration Testing</option>
  </optgroup>
  <optgroup label="OSINT">
    <option value="basic-osint">OSINT Fundamentals</option>
    <option value="adv-osint">Advanced OSINT Techniques</option>
  </optgroup>
</select>

```

![1762014784673](image/03-Elements/1762014784673.png)

option: option to choose

```
<label for="language">Choose a language:</label>
<select id="language" name="language">
  <option value="html">HTML</option>
  <option value="css">CSS</option>
  <option value="javascript">JavaScript</option>
</select>

```

![1762014858333](image/03-Elements/1762014858333.png)

p: paragraph



![1762014967394](image/03-Elements/1762014967394.png)


picture

```
<picture>
  <source srcset="image-large.jpg" media="(min-width: 800px)">
  <source srcset="image-medium.jpg" media="(min-width: 500px)">
  <img src="image-small.jpg" alt="Beautiful mountain landscape">
</picture>

```



![1762015035357](image/03-Elements/1762015035357.png)

pre: as it is

```
<pre>
Line 1
  Line 2 (indented)
    Line 3 (more indented)
</pre>

```

![1762015236603](image/03-Elements/1762015236603.png)


progress

```
<label for="file">File upload:</label>
<progress id="file" value="45" max="100">45%</progress>

```



![1762015298117](image/03-Elements/1762015298117.png)

q:

```
<p>She said, <q>Practice makes perfect.</q></p>

```



![1762015350545](image/03-Elements/1762015350545.png)

ruby, rb, rt, rtc:

```
<ruby>
  漢 <rt>kan</rt>
  字 <rt>ji</rt>
</ruby>

```

![1762015414222](image/03-Elements/1762015414222.png)



![1762015596415](image/03-Elements/1762015596415.png)

s: strike

```
<p>This item was <s>$100</s> now only $75!</p>

```

![1762015649882](image/03-Elements/1762015649882.png)

samp:

```
<p>System message: <samp>File not found</samp></p>

```



![1762015727970](image/03-Elements/1762015727970.png)

search:

```
<search>
  <form action="/search">
    <input type="search" name="q" placeholder="Search..." />
    <button type="submit">Go</button>
  </form>
</search>

```

![1762015806610](image/03-Elements/1762015806610.png)



section:



```
<section>
  <h2>About Us</h2>
  <p>We provide professional offensive security and OSINT services worldwide.</p>
</section>

```

![1762015849219](image/03-Elements/1762015849219.png)

select:

```
<label for="language">Choose a language:</label>
<select id="language" name="language">
  <option value="html">HTML</option>
  <option value="css">CSS</option>
  <option value="javascript">JavaScript</option>
</select>

```

![1762016108256](image/03-Elements/1762016108256.png)


small

```
<p>Terms and conditions apply. <small>Offer valid until December 31, 2025.</small></p>

```

![1762016391622](image/03-Elements/1762016391622.png)


source

```
<video controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

```

![1762016459749](image/03-Elements/1762016459749.png)

span: inline div

```
<p>This is a <span style="color: red;">red</span> word.</p>

```

![1762016502116](image/03-Elements/1762016502116.png)

strong

```
<p>Always <strong>verify</strong> before you trust.</p>

```

![1762016567957](image/03-Elements/1762016567957.png)


sub, sup

```
<p>Water formula: H<sub>2</sub>O</p>
<p>Square value: x<sup>2</sup></p>

```

![1762016603981](image/03-Elements/1762016603981.png)

svg: graphics

```
<!-- SVG Examples -->
<svg width="120" height="120">
  <circle cx="60" cy="60" r="50" fill="lightgray" stroke="black" stroke-width="2" />
</svg>

<svg viewBox="0 0 24 24" width="24" height="24" aria-label="check">
  <path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" stroke-width="2" />
</svg>

<svg width="200" height="60">
  <rect width="200" height="60" rx="8" ry="8" fill="#eef" />
  <text x="100" y="38" text-anchor="middle" font-size="20">Hello SVG</text>
</svg>

```

![1762016713625](image/03-Elements/1762016713625.png)


table, tbody,td:

```
<table border="1">
  <tbody>
    <tr>
      <td>Name</td>
      <td>Role</td>
    </tr>
    <tr>
      <td>Parves</td>
      <td>Security Researcher</td>
    </tr>
    <tr>
      <td>Noyon</td>
      <td>Founder</td>
    </tr>
  </tbody>
</table>

```

![1762016777046](image/03-Elements/1762016777046.png)

textarea

```
<label for="message">Your Message:</label><br>
<textarea id="message" name="message" rows="4" cols="40" placeholder="Type your message here..."></textarea>

```

![1762016998012](image/03-Elements/1762016998012.png)

time:

```
<p>Meeting scheduled at <time datetime="2025-11-01T14:00">2:00 PM, Nov 1, 2025</time>.</p>
```

![1762017077185](image/03-Elements/1762017077185.png)
