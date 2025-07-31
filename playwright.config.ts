import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  testMatch: "*.test.ts",
  fullyParallel: false,
  retries: 0,
  workers: 1,
  use: {
    headless: false,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  reporter: [
    ['html', { open: 'always' }],
  ],
});
