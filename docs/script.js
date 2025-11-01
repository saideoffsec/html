// Initialize Monaco and wire up live preview + tag explainer
require.config({ paths: { 'vs': 'https://cdn.jsdelivr.net/npm/monaco-editor@0.45.0/min/vs' } });

function setStatus(msg) {
  const el = document.getElementById('status');
  if (el) el.textContent = msg;
}

// Tag reference data (expanded)
const TAG_DB = {
  // Document metadata
  html: { desc: "Root element of an HTML document.", ex: "<!doctype html>\n<html>\n  <head><title>Doc</title></head>\n  <body>Hello</body>\n</html>" },
  head: { desc: "Container for metadata and links to scripts/styles.", ex: "<head>\n  <meta charset='utf-8'>\n  <title>Page</title>\n</head>" },
  title: { desc: "Document title (shown in browser tab).", ex: "<head>\n  <title>My Page</title>\n</head>" },
  base: { desc: "Sets the base URL/target for relative URLs.", ex: "<head>\n  <base href='https://example.com/' target='_blank'>\n</head>" },
  link: { desc: "External resource link (e.g., stylesheet, icon, preconnect).", ex: "<head>\n  <link rel='stylesheet' href='/styles.css'>\n</head>" },
  meta: { desc: "Metadata about the document (charset, viewport, descriptions, etc.).", ex: "<head>\n  <meta charset='utf-8'>\n  <meta name='viewport' content='width=device-width, initial-scale=1'>\n</head>" },
  style: { desc: "Embedded CSS styles.", ex: "<style>\n  body { font-family: system-ui }\n</style>" },
  body: { desc: "Contains the content of the document (text, images, links, etc.).", ex: "<body>\n  <h1>Welcome</h1>\n  <p>Content...</p>\n</body>" },

  // Sections & structure
  header: { desc: "Introductory content or navigational links.", ex: "<header>\n  <h1>Brand</h1>\n</header>" },
  footer: { desc: "Footer for its nearest sectioning content or root.", ex: "<footer>\n  <small>© 2025</small>\n</footer>" },
  main:   { desc: "Represents the dominant content of the document.", ex: "<main>\n  <h1>Title</h1>\n  <p>Primary content...</p>\n</main>" },
  nav:    { desc: "Section of navigation links.", ex: "<nav>\n  <a href='#home'>Home</a> · <a href='#about'>About</a>\n</nav>" },
  section: { desc: "Thematic grouping of content, typically with a heading.", ex: "<section>\n  <h2>About</h2>\n  <p>Info...</p>\n</section>" },
  article: { desc: "Self-contained composition (e.g., blog post, comment).", ex: "<article>\n  <h2>Post title</h2>\n  <p>Article text...</p>\n</article>" },
  aside:  { desc: "Tangentially related content (sidebar, callout).", ex: "<aside>\n  <h3>Note</h3>\n  <p>Extra info...</p>\n</aside>" },
  address:{ desc: "Contact information for nearest article/author.", ex: "<address>\n  <a href='mailto:editor@example.com'>editor@example.com</a>\n</address>" },

  // Grouping & text
  div:  { desc: "Generic block-level container for grouping content.", ex: "<div class='card'>\n  <h2>Card title</h2>\n  <p>Card content...</p>\n</div>" },
  p:    { desc: "Paragraph of text.", ex: "<p>This is a paragraph.</p>" },
  hr:   { desc: "Thematic break.", ex: "<p>Intro</p>\n<hr>\n<p>Next section</p>" },
  pre:  { desc: "Preformatted text (preserve whitespace).", ex: "<pre>line 1\nline 2</pre>" },
  blockquote: { desc: "Extended quotation.", ex: "<blockquote cite='https://example.com'>\n  Wise words here.\n</blockquote>" },
  ol:   { desc: "Ordered (numbered) list.", ex: "<ol>\n  <li>First</li>\n  <li>Second</li>\n</ol>" },
  ul:   { desc: "Unordered (bulleted) list.", ex: "<ul>\n  <li>First</li>\n  <li>Second</li>\n</ul>" },
  li:   { desc: "List item inside <ul> or <ol>.", ex: "<ul>\n  <li>Item</li>\n</ul>" },
  dl:   { desc: "Description list.", ex: "<dl>\n  <dt>HTML</dt><dd>Markup language</dd>\n</dl>" },
  dt:   { desc: "Term/name in a description list.", ex: "<dl>\n  <dt>CPU</dt>\n  <dd>Central Processing Unit</dd>\n</dl>" },
  dd:   { desc: "Description/details of a term in a description list.", ex: "<dl>\n  <dt>RAM</dt>\n  <dd>Random Access Memory</dd>\n</dl>" },

  // Headings
  h1:   { desc: "Section heading (level 1 of 6).", ex: "<h1>Main Title</h1>" },
  h2:   { desc: "Section heading (level 2).", ex: "<h2>Subsection</h2>" },
  h3:   { desc: "Section heading (level 3).", ex: "<h3>Topic</h3>" },
  h4:   { desc: "Section heading (level 4).", ex: "<h4>Subtopic</h4>" },
  h5:   { desc: "Section heading (level 5).", ex: "<h5>Note</h5>" },
  h6:   { desc: "Section heading (level 6).", ex: "<h6>Minor note</h6>" },

  // Inline text semantics
  span: { desc: "Generic inline container for phrasing content.", ex: "<p>Click <span class='link'>here</span> to continue.</p>" },
  a:    { desc: "Hyperlink to another resource or location.", ex: "<a href='https://example.com'>Visit Example</a>" },
  br:   { desc: "Line break.", ex: "First line<br>Second line" },
  b:    { desc: "Stylistically offset text without extra importance.", ex: "<p><b>Bold look</b> only.</p>" },
  strong: { desc: "Strong importance.", ex: "<p><strong>Warning:</strong> Proceed carefully.</p>" },
  i:    { desc: "Text in an alternate voice/mood.", ex: "<p><i>Latin phrase</i> here.</p>" },
  em:   { desc: "Emphasis.", ex: "<p>This is <em>very</em> important.</p>" },
  mark: { desc: "Highlight text.", ex: "<p>Search result: <mark>match</mark></p>" },
  small:{ desc: "Fine print or side comments.", ex: "<small>Terms apply.</small>" },
  sub:  { desc: "Subscript text.", ex: "H<sub>2</sub>O" },
  sup:  { desc: "Superscript text.", ex: "x<sup>2</sup>" },
  s:    { desc: "Strikethrough for no longer accurate text.", ex: "<p><s>$29.99</s> $19.99</p>" },
  u:    { desc: "Unarticulated annotation (stylistic underline).", ex: "<u>Underlined</u>" },
  code: { desc: "Fragment of computer code (inline).", ex: "<p>Type <code>npm start</code> to begin.</p>" },
  kbd:  { desc: "User input via keyboard.", ex: "<p>Press <kbd>Ctrl</kbd> + <kbd>S</kbd></p>" },
  samp: { desc: "Sample output from a program.", ex: "<p><samp>Operation complete.</samp></p>" },
  var:  { desc: "Variable in a mathematical or programming expression.", ex: "<p>Let <var>n</var> be an integer.</p>" },
  q:    { desc: "Short inline quotation.", ex: "<p>He said, <q>Hello</q>.</p>" },
  cite: { desc: "Citation of a creative work.", ex: "<p><cite>Origin of Species</cite></p>" },
  abbr: { desc: "Abbreviation or acronym.", ex: "<p><abbr title='HyperText Markup Language'>HTML</abbr></p>" },
  bdi:  { desc: "Bi-directional isolation.", ex: "<bdi>ABC123</bdi>" },
  bdo:  { desc: "Bi-directional override.", ex: "<bdo dir='rtl'>abc</bdo>" },
  data: { desc: "Associates content with a machine-readable value.", ex: "<p>Price: <data value='19.99'>$19.99</data></p>" },
  time: { desc: "Date/time.", ex: "<time datetime='2025-11-01'>Nov 1, 2025</time>" },
  ruby: { desc: "Ruby annotation (East Asian typography).", ex: "<ruby>漢<rt>Han</rt></ruby>" },
  rt:   { desc: "Ruby text.", ex: "<ruby>漢<rt>Han</rt></ruby>" },
  rp:   { desc: "Ruby fallback parentheses.", ex: "<ruby>漢<rp>(</rp><rt>Han</rt><rp>)</rp></ruby>" },
  wbr:  { desc: "Optional line break opportunity.", ex: "super<wbr>califragilistic" },

  // Edits
  del:  { desc: "Removed text.", ex: "<p><del>Old content</del></p>" },
  ins:  { desc: "Inserted text.", ex: "<p><ins>New content</ins></p>" },

  // Images & media
  img:  { desc: "Embeds an image; empty (void) element.", ex: "<img src='https://via.placeholder.com/120' alt='Placeholder'>" },
  picture: { desc: "Responsive image container.", ex: "<picture>\n  <source srcset='banner.webp' type='image/webp'>\n  <img src='banner.jpg' alt='Banner'>\n</picture>" },
  figure: { desc: "Self-contained media with optional caption.", ex: "<figure>\n  <img src='cat.jpg' alt='Cat'>\n  <figcaption>A sleepy cat</figcaption>\n</figure>" },
  figcaption: { desc: "Caption for a <figure>.", ex: "<figure>\n  <img src='map.png' alt='Map'>\n  <figcaption>Map of area</figcaption>\n</figure>" },

  // Embedded content
  iframe: { desc: "Embeds another HTML page.", ex: "<iframe src='https://example.com' width='400' height='200' title='Example'></iframe>" },
  embed:  { desc: "Embeds external content (plugin).", ex: "<embed src='file.pdf' type='application/pdf' width='400' height='300'>" },
  object: { desc: "Container for external resource.", ex: "<object data='file.svg' type='image/svg+xml' width='200' height='200'></object>" },
  param:  { desc: "Parameters for <object>.", ex: "<object data='movie.swf'>\n  <param name='quality' value='high'>\n</object>" },
  portal: { desc: "Enables navigation into a page (experimental).", ex: "<portal src='https://example.com'></portal>" },

  // Media
  video:  { desc: "Embeds a media player for video.", ex: "<video controls width='300'>\n  <source src='movie.mp4' type='video/mp4'>\n</video>" },
  audio:  { desc: "Embeds a media player for audio.", ex: "<audio controls>\n  <source src='sound.mp3' type='audio/mpeg'>\n</audio>" },
  source: { desc: "Media source for <audio>, <video>, or <picture>.", ex: "<video controls>\n  <source src='movie.webm' type='video/webm'>\n</video>" },
  track:  { desc: "Timed text tracks for media.", ex: "<video controls>\n  <track kind='subtitles' src='subs.vtt' srclang='en' label='English'>\n</video>" },
  canvas: { desc: "Bitmap canvas for drawing via JS.", ex: "<canvas id='c' width='200' height='100'></canvas>" },
  svg:    { desc: "Scalable Vector Graphics container.", ex: "<svg viewBox='0 0 100 50' width='200'>\n  <circle cx='25' cy='25' r='20'/>\n</svg>" },

  // Forms
  form:   { desc: "Collects user input via controls.", ex: "<form>\n  <label>Name <input name='n'></label>\n  <button>Send</button>\n</form>" },
  label:  { desc: "Caption for a form control.", ex: "<label for='email'>Email</label>\n<input id='email' type='email'>" },
  input:  { desc: "Form control for typed data; many types.", ex: "<input type='text' placeholder='Your name'>" },
  button: { desc: "Clickable button.", ex: "<button type='button'>Click me</button>" },
  textarea: { desc: "Multi-line text input control.", ex: "<textarea rows='4' cols='30'>Hello</textarea>" },
  select: { desc: "Drop-down list control.", ex: "<select>\n  <option>One</option>\n  <option>Two</option>\n</select>" },
  option: { desc: "Option within a <select> or <datalist>.", ex: "<select>\n  <option value='1'>One</option>\n</select>" },
  optgroup: { desc: "Group of options in a select.", ex: "<select>\n  <optgroup label='Group A'>\n    <option>A1</option>\n  </optgroup>\n</select>" },
  fieldset: { desc: "Groups related controls with a border.", ex: "<fieldset>\n  <legend>Profile</legend>\n  <label>Name <input></label>\n</fieldset>" },
  legend: { desc: "Caption for a <fieldset>.", ex: "<fieldset>\n  <legend>Shipping</legend>\n  ...\n</fieldset>" },
  datalist: { desc: "Provides autocomplete options for inputs.", ex: "<input list='sug'>\n<datalist id='sug'>\n  <option value='Apple'>\n  <option value='Banana'>\n</datalist>" },
  output: { desc: "Displays calculation result.", ex: "<form oninput='res.value = Number(a.value)+Number(b.value)'>\n  <input id='a' type='number'> + <input id='b' type='number'> = <output name='res'></output>\n</form>" },
  progress: { desc: "Progress of a task.", ex: "<progress value='40' max='100'></progress>" },
  meter: { desc: "Scalar measurement within a known range.", ex: "<meter value='0.7' min='0' max='1' optimum='0.9'></meter>" },

  // Interactive
  details: { desc: "Disclosure widget for additional info.", ex: "<details>\n  <summary>More</summary>\n  <p>Hidden content</p>\n</details>" },
  summary: { desc: "Summary/label for <details>.", ex: "<details>\n  <summary>FAQ</summary>\n  <p>Answer...</p>\n</details>" },
  dialog:  { desc: "Dialog box or window.", ex: "<dialog open>\n  <p>Hi!</p>\n</dialog>" },
  menu:    { desc: "Semantic menu of commands or navigation.", ex: "<menu>\n  <li><button>Refresh</button></li>\n</menu>" },

  // Tables
  table:  { desc: "Tabular data.", ex: "<table>\n  <caption>Inventory</caption>\n  <thead><tr><th>Item</th><th>Qty</th></tr></thead>\n  <tbody><tr><td>Apples</td><td>3</td></tr></tbody>\n</table>" },
  caption:{ desc: "Caption for a table.", ex: "<table>\n  <caption>Quarterly Sales</caption>\n  <tr><th>Q1</th><th>Q2</th></tr>\n</table>" },
  thead:  { desc: "Group of header rows.", ex: "<table>\n  <thead><tr><th>Item</th><th>Qty</th></tr></thead>\n  <tbody>...</tbody>\n</table>" },
  tbody:  { desc: "Group of body rows.", ex: "<table>\n  <tbody>\n    <tr><td>Apples</td><td>3</td></tr>\n  </tbody>\n</table>" },
  tfoot:  { desc: "Group of footer rows.", ex: "<table>\n  <tfoot><tr><td>Total</td><td>3</td></tr></tfoot>\n</table>" },
  tr:     { desc: "Table row.", ex: "<table>\n  <tr><td>A</td><td>B</td></tr>\n</table>" },
  th:     { desc: "Header cell.", ex: "<table>\n  <tr><th>Item</th><th>Qty</th></tr>\n</table>" },
  td:     { desc: "Data cell.", ex: "<table>\n  <tr><td>Apples</td><td>3</td></tr>\n</table>" },
  colgroup: { desc: "Defines a group of columns.", ex: "<table>\n  <colgroup>\n    <col span='1' style='background:#eee'>\n  </colgroup>\n  <tr><th>A</th><th>B</th></tr>\n</table>" },
  col:    { desc: "Column within <colgroup>.", ex: "<table>\n  <colgroup>\n    <col style='width:70%'>\n    <col style='width:30%'>\n  </colgroup>\n</table>" },

  // Scripting
  script: { desc: "Embedded or external script.", ex: "<script>\n  console.log('Hello');\n</script>" },
  noscript: { desc: "Fallback content when scripts are disabled.", ex: "<noscript>Please enable JavaScript.</noscript>" },
  template: { desc: "Client-side content template not rendered until cloned.", ex: "<template id='row'>\n  <tr><td class='name'></td><td class='qty'></td></tr>\n</template>" },
  slot: { desc: "Placeholder inside a web component for external markup.", ex: "<slot name='title'></slot>" }
};

function updateExample(tag) {
  const info = TAG_DB[tag];
  const tagEl = document.getElementById('ex-tag');
  const descEl = document.getElementById('ex-desc');
  const codeEl = document.getElementById('ex-code');
  const ifr = document.getElementById('ex-preview');
  if (!tagEl || !descEl || !codeEl || !ifr) return;
  if (!info) {
    tagEl.textContent = "—";
    descEl.textContent = "No reference found. Try a common tag like <div>, <section>, <a>, <img>, <form>...";
    codeEl.textContent = "";
    ifr.srcdoc = "<!doctype html><html><body style='font:14px system-ui;color:#444;padding:8px;'>No example</body></html>";
    return;
  }
  tagEl.textContent = "<" + tag + ">";
  descEl.textContent = info.desc;
  codeEl.textContent = info.ex;
  const doc = `<!doctype html><html><head><meta charset="utf-8"><style>body{font:14px system-ui;padding:8px}</style></head><body>${info.ex}</body></html>`;
  ifr.srcdoc = doc;
}

function findCurrentTag(model, position) {
  // Get full text up to the cursor and find the last tag start near caret
  const lines = model.getLinesContent();
  let offset = 0;
  for (let i = 1; i < position.lineNumber; i++) {
    offset += lines[i-1].length + model.getEOL().length;
  }
  offset += position.column - 1;
  const text = model.getValue().slice(0, offset);
  const matches = text.match(/<\s*\/?\s*([a-zA-Z][a-zA-Z0-9-]*)/g);
  if (!matches) return null;
  const last = matches[matches.length - 1];
  const m = last.match(/<\s*\/?\s*([a-zA-Z][a-zA-Z0-9-]*)/);
  if (!m) return null;
  return m[1].toLowerCase();
}

function updatePreviewFromValue(val) {
  const iframe = document.getElementById('preview');
  if (!iframe) return;
  const doc = `<!doctype html><html><head><meta charset="utf-8"><style>body{font:14px system-ui;padding:10px}</style></head><body>${val}</body></html>`;
  iframe.srcdoc = doc;
}

require(['vs/editor/editor.main'], function() {
  const initial = "<!doctype html>\n<html>\n  <head>\n    <meta charset='utf-8'>\n    <title>Playground</title>\n  </head>\n  <body>\n    <h1>Hello, world!</h1>\n    <p>Start editing...</p>\n  </body>\n</html>\n";
  const editor = monaco.editor.create(document.getElementById('editor'), {
    value: initial,
    language: 'html',
    theme: 'vs-dark',
    automaticLayout: true,
    fontSize: 14,
    minimap: { enabled: true },
    smoothScrolling: true,
    mouseWheelZoom: true,
    wordWrap: 'on',
    renderWhitespace: 'selection',
    tabSize: 2
  });

  function sync() {
    const val = editor.getValue();
    updatePreviewFromValue(val);
  }
  editor.onDidChangeModelContent(() => {
    sync();
    const tag = findCurrentTag(editor.getModel(), editor.getPosition());
    if (tag) updateExample(tag);
  });
  editor.onDidChangeCursorPosition(() => {
    const tag = findCurrentTag(editor.getModel(), editor.getPosition());
    if (tag) updateExample(tag);
  });

  // Initial render
  sync();
  updateExample('html');
  setStatus('Ready — Monaco loaded');
  window.__editor = editor;
});
