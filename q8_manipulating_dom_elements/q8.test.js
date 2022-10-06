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
for (let e of document.querySelectorAll('.emphasis')) {
    expect(e.style.fontFamily).toBe('Verdana');
}

for (let e of document.querySelectorAll('li.finished')) {
    expect(e.style.textDecoration).toBe('line-through');
}

for (let e of document.querySelectorAll('ul#low-priority li.todo')) {
    expect(e.style.backgroundColor).toBe('blue');
}

for (let e of document.querySelectorAll('.alert')) {
    e.style.backgroundColor = 'red';
}

});
