const { JSDOM } = require("jsdom");
const jquery = require("jquery");

describe("my test suite", () => { 
  // your tests here ...
  it("counter should be able to increment twice to 2", async () => {
    const options = {
      resources: "usable",
      runScripts: "dangerously"
    };

    // load the document
    let dom = await JSDOM.fromFile(`${__dirname}/index_solution.html`, options);
    document.documentElement.innerHTML =
      dom.window.document.documentElement.innerHTML;
    let solution;
    try {
      solution = require("./solutions.js");
    } catch (e) {
      solution = require("./script.js");
    }
    let incrementButton = jquery("button")[0];
    incrementButton.click();
    incrementButton.click();
    expect(parseInt(document.querySelector("#box").innerHTML)).toBe(2);
  }); 
});

