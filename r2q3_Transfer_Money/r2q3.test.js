const { JSDOM } = require("jsdom");
fs = require("fs");

beforeAll(async () => {
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
});
it("all 3 buttons have id attributes", async () => {
  const topUpBtn = document.querySelector("#topUp10");
  expect(topUpBtn).not.toBe(null);
  const transfer10ToWalletBtn = document.querySelector("#transfer10ToWallet");
  expect(transfer10ToWalletBtn).not.toBe(null);
  const transfer10ToAccountBtn = document.querySelector("#transfer10ToAccount");
  expect(transfer10ToAccountBtn).not.toBe(null);
});

it("top up button works to add money to account", async () => {
  const topUpBtn = document.querySelector("#topUp10");
  expect(topUpBtn).not.toBe(null);
  //Create a click event with optional event initialisers: bubbles, cancelable and composed
  const evt = new Event("click", {
    bubbles: false,
    cancelable: false,
    composed: false,
  });
  topUpBtn.dispatchEvent(evt);
  const currentBalance = parseInt(account.innerHTML);
  expect(currentBalance).toBeGreaterThan(0);
});

it("all 3 buttons have id attributes", async () => {
  const topUpBtn = document.querySelector("#topUp10");
  expect(topUpBtn).not.toBe(null);
  const transfer10ToWalletBtn = document.querySelector("#transfer10ToWallet");
  expect(transfer10ToWalletBtn).not.toBe(null);
  const transfer10ToAccountBtn = document.querySelector("#transfer10ToAccount");
  expect(transfer10ToAccountBtn).not.toBe(null);
});

it("transfer money to wallet button works by decreasing account and increasing wallet", async () => {
  const transfer10ToWalletBtn = document.querySelector("#transfer10ToWallet");
  expect(transfer10ToWalletBtn).not.toBe(null);
  // check balances before click
  const wallet = document.querySelector("#other-wallet");
  const walletBalanceB4Click = parseInt(wallet.innerHTML);
  const account = document.querySelector("#account");
  const accountBalanceB4Click = parseInt(account.innerHTML);
  //Create a click event with optional event initialisers: bubbles, cancelable and composed
  const evt = new Event("click", {
    bubbles: false,
    cancelable: false,
    composed: false,
  });
  transfer10ToWalletBtn.dispatchEvent(evt);
  const currentWalletBalance = parseInt(wallet.innerHTML);
  const currentAccountBalance = parseInt(account.innerHTML);
  expect(currentWalletBalance).toBeGreaterThan(walletBalanceB4Click);
  expect(currentAccountBalance).toBeLessThan(accountBalanceB4Click);
});

it("transfer money to account button works by decreasing wallet and increasing account", async () => {
  const transfer10ToAccountBtn = document.querySelector("#transfer10ToAccount");
  expect(transfer10ToAccountBtn).not.toBe(null);
  // check balances before click
  const wallet = document.querySelector("#other-wallet");
  const walletBalanceB4Click = parseInt(wallet.innerHTML);
  const account = document.querySelector("#account");
  const accountBalanceB4Click = parseInt(account.innerHTML);
  //Create a click event with optional event initialisers: bubbles, cancelable and composed
  const evt = new Event("click", {
    bubbles: false,
    cancelable: false,
    composed: false,
  });
  transfer10ToAccountBtn.dispatchEvent(evt);
  const currentWalletBalance = parseInt(wallet.innerHTML);
  const currentAccountBalance = parseInt(account.innerHTML);
  expect(walletBalanceB4Click).toBeGreaterThan(currentWalletBalance);
  expect(accountBalanceB4Click).toBeLessThan(currentAccountBalance);
});
