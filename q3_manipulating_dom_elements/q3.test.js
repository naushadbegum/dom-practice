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
  expect(document.querySelector("h1").innerText.toLowerCase()).toBe("Hello world!".toLowerCase());
  expect(document.querySelector("span#important").style.backgroundColor).toBe('red');
  expect(document.querySelector("li.todo").style.fontFamily.toLowerCase()).toBe('Verdana'.toLowerCase());
  expect(document.querySelector("li.todo").style.fontSize).toBe('16px');

});
