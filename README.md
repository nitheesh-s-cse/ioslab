# 🧪 IPC Using Shared Memory — Lab Guide Website

A stunning, professional dark-themed website documenting the complete lab procedure for **Inter-Process Communication using Shared Memory** in Linux C programming.

---

## 🚀 Complete GitHub Pages Deployment Steps

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+)
- [Git](https://git-scm.com/)
- A [GitHub](https://github.com/) account

---

### Step 1: Build the Project Locally

```bash
npm install
npm run build
```

This generates the production files in the `dist/` folder.

---

### Step 2: Create a GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Name your repo (e.g., `ipc-shared-memory-lab`)
3. Keep it **Public**
4. **Do NOT** initialize with README (we already have one)
5. Click **Create repository**

---

### Step 3: Initialize Git & Push

```bash
git init
git add .
git commit -m "Initial commit - IPC Shared Memory Lab Guide"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/ipc-shared-memory-lab.git
git push -u origin main
```

> Replace `YOUR_USERNAME` with your actual GitHub username.

---

### Step 4: Deploy to GitHub Pages

#### Option A: Using `gh-pages` Package (Easiest)

```bash
npm install -D gh-pages
```

Add this to your `package.json` scripts:
```json
"deploy": "npm run build && gh-pages -d dist"
```

Then run:
```bash
npm run deploy
```

#### Option B: GitHub Actions (Automatic CI/CD)

1. In your repo, go to **Settings → Pages**
2. Under **Source**, select **GitHub Actions**
3. Create the file `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

4. Push the workflow file:
```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Actions deployment"
git push
```

---

### Step 5: Configure Base URL (Important!)

If your repo name is NOT `your-username.github.io`, you need to set the base URL.

Edit `vite.config.ts`:
```ts
export default defineConfig({
  plugins: [react()],
  base: '/ipc-shared-memory-lab/',  // ← your repo name
})
```

Then rebuild and redeploy:
```bash
npm run deploy
```

---

### Step 6: Enable GitHub Pages

1. Go to your repo → **Settings** → **Pages**
2. For Option A: Under **Source**, select **Deploy from a branch** → **gh-pages** → **/ (root)**
3. For Option B: It's automatic via GitHub Actions
4. Click **Save**
5. Wait 1-2 minutes

---

### Step 7: Access Your Live Site! 🎉

Your site will be live at:

```
https://YOUR_USERNAME.github.io/ipc-shared-memory-lab/
```

---

## 🛠 Tech Stack

- **React 19** + TypeScript
- **Vite** (build tool)
- **Tailwind CSS v4** (styling)
- **Framer Motion** (animations)
- **Canvas API** (particle effects)

---

## 📁 Project Structure

```
├── index.html
├── src/
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   ├── index.css            # Global styles & animations
│   └── components/
│       ├── Navbar.tsx        # Fixed navigation bar
│       ├── Hero.tsx          # Hero section with effects
│       ├── ParticleField.tsx # Canvas particle background
│       ├── LabSteps.tsx      # 10-step lab procedure
│       ├── StepCard.tsx      # Individual step card
│       ├── CodeBlock.tsx     # Terminal-style code blocks
│       ├── SourceCode.tsx    # Full C source code section
│       └── Footer.tsx        # Footer
├── package.json
├── vite.config.ts
└── README.md
```
