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
  let items = document.querySelectorAll('li.todo');
  for (let i of items){
      expect(i.style.color).toBe('orange');
  }
});
