const { JSDOM } = require("jsdom");
fs = require("fs");

it("clicking button generates random numbers", async () => {
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
  const rollBtn = document.querySelector("button");
  const totalField = document.querySelector("span");
  //Create a click event with optional event initialisers: bubbles, cancelable and composed
  var evt = new Event("click", {
    bubbles: false,
    cancelable: false,
    composed: false,
  });
  rollBtn.dispatchEvent(evt);
  for (let e of document.querySelectorAll(".box")) {
    expect(parseFloat(e.innerHTML)).toBeGreaterThan(0);
  }
  expect(parseFloat(totalField.innerHTML)).toBeGreaterThan(0);
});
