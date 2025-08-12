# Demo: Automated Tests with Playwright + @cyborgtests/test ([wit](https://github.com/CyborgTests/playwright-manual-step-automation))

**Choose one of the options below to get started. Both options provide full access to test editing and creation capabilities.**

## Option 1: Open in Gitpod
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/CyborgTests/demo-playwright-manual-step-automation)

**Pros:**
- No local setup required

**How to start:**
1. Click the "Open in Gitpod" button above
2. Login or sign up using your 
2. Gitpod will automatically:
   - Clone the repository
   - Install dependencies
   - Install Chromium
   - Start the development server
3. You'll be ready to test in under 2 minutes!

---

## Option 2: Local Development Setup

**Pros:**
- Offline development
- Does not require gitpod authorization

---

### 1) Prerequisites

> If something is missing, see **Section 6: Installing Tools**

* **Git** (any recent version)
* **Node.js** LTS (recommended 18.x or 20.x) + **npm**
* **Playwright browsers** (will install with a command below)
* (Optional) **VS Code** with *Playwright Test for VSCode* and *ESLint* extensions.

Check installations:

```bash
node -v
npm -v
git --version
```

---

### 2) Clone the demo repository

HTTPS
```bash
git clone https://github.com/CyborgTests/demo-playwright-manual-step-automation.git
cd demo-playwright-manual-step-automation
```
or SSH (if keys are set up)
```bash
git clone git@github.com:CyborgTests/demo-playwright-manual-step-automation.git
cd demo-playwright-manual-step-automation
```

---

### 3) Install dependencies

```bash
npm install
npx playwright install --with-deps
```

---

### 4) Quick start: run tests

Run all tests in headless mode:

```bash
npx playwright test
```

Run in **UI Mode**:

```bash
npx playwright test --ui
```

Run a specific file/test/project:

```bash
# by file path
npx playwright test tests/example.spec.ts

# by test name pattern
npx playwright test -g "login"

# for a specific project from playwright.config (chromium / firefox / webkit)
npx playwright test --project=chromium
```

Run in **headed** mode:

```bash
npx playwright test --headed
```

> In VS Code: open project folder → **Testing** tab → click **Run Tests** or use Playwright panel.

---

### 5) Adding new tests

#### From a template

1. Create a new file in `tests/`, e.g. `tests/login.spec.ts`.
2. Add basic template:

```ts
import cyborgTest from "@cyborgtests/test";
import { expect } from "@playwright/test";

cyborgTest(
  "Login should be successful",
  async ({ page, manualStep }) => {
    await page.goto('https://example.com/login');
    await page.fill('#email', 'user@example.com');
    await page.fill('#password', 'secret');
    await page.click('button[type="submit"]');

    await expect(page.getByText('Welcome')).toBeVisible();

    // Example of a manual check step
    await manualStep('Ensure logo is visible and aligned');
  }
);
```

3. Run the test: `npx playwright test tests/login.spec.ts --headed` or via UI Mode.

---

## 6) Installing tools (if missing)

### 6.1 Git

* **Windows**: install **Git for Windows**.
* **macOS**: `xcode-select --install` or via Homebrew: `brew install git`.
* **Linux (Ubuntu/Debian)**:

  ```bash
  sudo apt update && sudo apt install -y git
  ```

### 6.2 Node.js + npm

* **Windows/macOS**: use **nvm** or official installer from nodejs.org.
* **macOS (Homebrew)**:

  ```bash
  brew install node
  ```
* **Linux (Ubuntu/Debian)**:

  ```bash
  sudo apt update
  sudo apt install -y ca-certificates curl gnupg
  curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
  sudo apt install -y nodejs
  ```

Check: `node -v && npm -v`

### 6.3 Playwright browsers

```bash
npx playwright install
# or for Linux with system dependencies
npx playwright install --with-deps
```

(Optional) **VS Code**: download from official site, add *Playwright* and *ESLint* extensions.

---

### 7) Common issues

* **"command not found: git / node / npm"** — install from section 6, restart terminal.
* **Playwright cannot find browsers** — run `npx playwright install`.
* **Permission errors on Linux** — use `sudo` for system deps or `nvm` for Node.
* **Incompatible Node version** — switch to LTS (18/20) via nvm.
* **Tests can’t find selectors** — improve locators, use `await expect(...).toBeVisible()`.
* **Private package not found** — check `.npmrc`/registry token.

---

### 8) Questions?

Ask on our [Discord](https://discord.com/invite/rNZCd3MHDx) or open an Issue in the demo repo. Good luck! 🚀
