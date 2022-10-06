const { JSDOM } = require("jsdom");
fs = require("fs");

it("should be able to select the header", async () => {
  const options = {
    resources: "usable",
    runScripts: "dangerously",
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
  for (let e of document.querySelectorAll(".a:not(.undercover)")) {
    expect(e.style.backgroundColor).toBe("red");
  }

  for (let e of document.querySelectorAll("div.undercover.a")) {
    expect(e.style.backgroundColor).toBe("yellow");
  }
});
