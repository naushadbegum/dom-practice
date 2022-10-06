const { JSDOM } = require("jsdom");
const jquery = require("jquery");

describe("my test suite 3", () => { 
  // your tests here ...
  it("counter is green when number is even and red when odd", async () => {
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
    
    incrementButton.click(); // --> 1
    incrementButton.click(); // --> 2
    incrementButton.click(); // --> 3
    incrementButton.click(); // --> 4
    
    expect(parseInt(document.querySelector("#box").innerHTML)).toBe(4);
    expect(document.querySelector("#box").style.backgroundColor).toBe('green');

    decrementButton.click();
    expect(document.querySelector("#box").style.backgroundColor).toBe('red');

  }); 
});
