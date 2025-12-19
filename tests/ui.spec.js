const { test, expect } = require("@playwright/test");

test("button click updates text", async ({ page }) => {
  await page.goto("http://localhost:3000");

  await page.click("text=Click Me");

  await expect(page.locator("#dynamic-text"))
    .toContainText("JavaScript is working");
});
