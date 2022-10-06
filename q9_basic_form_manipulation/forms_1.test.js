const { JSDOM } = require("jsdom");
const $ = require("jquery");

it("Should be able able to retrieve changes from form", async () => {
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
  // fill up the form
  $('#email-address').val("tanny-lim@a.com");
  $('.phone-type')[2].checked = true;
  $('.services')[0].checked = true;
  $('.services')[2].checked = true;
  $('#pick-up').val('clementi');
  // ending fill up the form
  let [email, model, services, pickup] = solution();
  expect(email).toBe("tanny-lim@a.com");
  expect(model).toBe('samsung-old');
  expect(services[0]).toBe('replace-screen');
  expect(services[1]).toBe('flash-bios');
  expect(pickup).toBe('clementi');

});
