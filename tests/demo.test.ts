import cyborgTest from "@cyborgtests/test";

cyborgTest(
  "Login should be successful",
  async ({ page, manualStep }) => {
    await page.goto("https://practicetestautomation.com/practice-test-login/");

    // Automate the login form
    await manualStep("Fill in username and password, then submit the form");
    await manualStep("Verify that the user is successfully logged in");
  }
);
