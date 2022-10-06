const { JSDOM } = require("jsdom");
fs = require("fs");

it("should be able to select the header", async () => {
  const options = {
    resources: "usable",
    runScripts: "dangerously"
  };

  // load the document
  let dom = await JSDOM.fromFile(`${__dirname}/index.html`, options);
  document.documentElement.innerHTML =
    dom.window.document.documentElement.innerHTML;

  let solution;
  try {
    solution = require("./solutions.js");
  } catch (e) {
    solution = require("./script.js");
  }
  let {
    header2,
    highlight,
    spanHighlight,
    finished,
    firstParagraph,
    emphasisParagraph
  } = solution;

  expect(document.querySelector("h2")).toBe(header2);
  expect(document.querySelector(".highlight")).toBe(highlight);
  expect(document.querySelector("span.highlight")).toBe(spanHighlight);
  expect(document.querySelector(".finished")).toBe(finished);
  expect(document.querySelector("p")).toBe(firstParagraph);
  expect(document.querySelector("p.emphasis")).toBe(emphasisParagraph);  
});
