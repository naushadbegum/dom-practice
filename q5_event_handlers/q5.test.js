const { JSDOM } = require("jsdom");
const jquery = require("jquery");

it("Should be able able to change the color", async () => {
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
  jquery("#changeColor").click();
  expect(document.querySelector("h1").style.backgroundColor).toBe("yellow");
});
