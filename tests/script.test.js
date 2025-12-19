/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const path = require("path");

beforeEach(() => {
  const html = fs.readFileSync(
    path.resolve(__dirname, "../index.html"),
    "utf8"
  );
  document.documentElement.innerHTML = html;
  require("../script.js");
});

test("changeMessage updates dynamic text", () => {
  changeMessage();
  const text = document.getElementById("dynamic-text").textContent;
  expect(text).toContain("JavaScript is working");
});

test("form submission shows success message", () => {
  document.getElementById("name").value = "John";
  document.getElementById("email").value = "john@test.com";

  submitForm({ preventDefault: () => {} });

  const message = document.getElementById("form-message").textContent;
  expect(message).toContain("John");
});
