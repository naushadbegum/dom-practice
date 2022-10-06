const { JSDOM } = require("jsdom");
const jquery = require("jquery");

describe("my test suite 2", () => { 
  // your tests here ...
  it("counter should be able to increment twice to 2 and then decrement to 1", async () => {
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
    let decrementButton = jquery("button")[1];
    incrementButton.click();
    incrementButton.click();
    decrementButton.click();
    expect(parseInt(document.querySelector("#box").innerHTML)).toBe(1);
  }); 
});
