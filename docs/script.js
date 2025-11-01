const htmlInput = document.getElementById("htmlInput");
const outputFrame = document.getElementById("outputFrame");

function updatePreview() {
  const htmlCode = htmlInput.value;
  const doc = outputFrame.contentDocument || outputFrame.contentWindow.document;
  doc.open();
  doc.write(htmlCode);
  doc.close();
}

htmlInput.addEventListener("input", updatePreview);

// Optional: Load default sample HTML
htmlInput.value = `
<h1>Hello World!</h1>
<p>This is a <b>live HTML editor</b>.</p>
<ul>
  <li>Edit HTML on the left</li>
  <li>See results on the right</li>
</ul>
`;
updatePreview();
