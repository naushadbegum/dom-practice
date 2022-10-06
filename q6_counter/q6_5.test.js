const { JSDOM } = require("jsdom");
const jquery = require("jquery");

describe("my test suite 3", () => { 
  // your tests here ...
  it("counter cannot go above 10", async () => {
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
    let resetButton = jquery("button")[2];
    for (let i=0; i < 20; i++) {
        incrementButton.click();
    }
    expect(parseInt(document.querySelector("#box").innerHTML)).toBe(10);
  }); 
});
