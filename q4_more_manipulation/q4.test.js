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
  expect(document.querySelector("h1").style.color).toBe('green');
  expect(document.querySelector("li.finished").innerText.toLowerCase()).toBe('repay credit card debt');
  expect(document.querySelector("li#urgent").style.borderColor).toBe('black');
  expect(document.querySelector("li#urgent").style.borderWidth).toBe('2px');
  expect(document.querySelector(".emphasis").style.textDecoration).toBe('underline');
  expect(document.querySelector("p.emphasis").style.backgroundColor).toBe('orange');
  expect(document.querySelector("p.emphasis").style.fontSize).toBe('32px');
  expect(document.querySelector("p.emphasis").style.lineHeight).toBe('24px');
  expect(document.querySelector("li#urgent span.todo").style.backgroundColor).toBe('yellow');
  expect(document.querySelector("h2").innerHTML).toBe(`<span class="greetings">About Us</span>`);
});
