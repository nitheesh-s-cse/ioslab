# 🧪 IPC Using Shared Memory — Lab Website

---

## 🚀 HOW TO DEPLOY THIS WEBSITE ON GITHUB (Step by Step)

> Your website will be live at: **https://nitheesh-s-cse.github.io/ioslab/**

---

### 📌 STEP 1: Install Node.js

Go to this link and download & install Node.js:

👉 https://nodejs.org/

Download the **LTS** version. Install it. Just click Next Next Next.

To check if it's installed, open **CMD** or **Terminal** and type:

```
node -v
npm -v
```

If it shows version numbers, you're good. ✅

---

### 📌 STEP 2: Install Git

Go to this link and download & install Git:

👉 https://git-scm.com/

Install it. Just click Next Next Next.

To check if it's installed, open **CMD** or **Terminal** and type:

```
git -v
```

If it shows a version number, you're good. ✅

---

### 📌 STEP 3: Download This Project

Download this project as a ZIP file or clone it.

Then open **CMD** or **Terminal** and go inside the project folder:

```
cd ioslab
```

---

### 📌 STEP 4: Install Project Files

Run this command (only once):

```
npm install
```

⏳ Wait for it to finish. It will download all required files.

---

### 📌 STEP 5: Build the Website

Run this command:

```
npm run build
```

✅ This creates a `dist` folder — that's your final website.

---

### 📌 STEP 6: Install Deploy Tool

Run this command (only once):

```
npm install -D gh-pages
```

---

### 📌 STEP 7: Add Deploy Script

Open the file called `package.json` in Notepad or any editor.

Find this section:

```
"scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
}
```

Change it to:

```
"scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "npm run build && gh-pages -d dist"
}
```

⚠️ Don't forget the comma after `"preview": "vite preview"` — see above.

Save the file. ✅

---

### 📌 STEP 8: Set Base URL

Open the file called `vite.config.ts` in Notepad or any editor.

It looks like this:

```
export default defineConfig({
  plugins: [react()],
})
```

Change it to:

```
export default defineConfig({
  plugins: [react()],
  base: '/ioslab/',
})
```

Save the file. ✅

---

### 📌 STEP 9: Create GitHub Repo (if not done)

1. Go to 👉 https://github.com/new
2. Repository name: **ioslab**
3. Keep it **Public**
4. ❌ Do NOT tick "Add a README file"
5. Click **Create repository**

---

### 📌 STEP 10: Connect Your Project to GitHub

Open **CMD** or **Terminal** inside your project folder and run these commands **one by one**:

```
git init
```

```
git add .
```

```
git commit -m "first commit"
```

```
git branch -M main
```

```
git remote add origin https://github.com/nitheesh-s-cse/ioslab.git
```

```
git push -u origin main
```

⚠️ If it asks for your GitHub username and password, enter them.
(For password, you may need a **Personal Access Token** — see Step 11 if needed)

---

### 📌 STEP 11: GitHub Password Not Working?

GitHub doesn't accept normal passwords anymore. You need a **token**.

1. Go to 👉 https://github.com/settings/tokens
2. Click **"Generate new token (classic)"**
3. Give it a name like `deploy`
4. Tick these boxes: ✅ `repo` (full control)
5. Click **Generate token**
6. **COPY the token** (you won't see it again!)
7. When CMD asks for password, **paste the token** instead of your password

---

### 📌 STEP 12: Deploy Your Website 🚀

Run this command:

```
npm run deploy
```

⏳ Wait for it to finish. It will say `Published` at the end.

---

### 📌 STEP 13: Enable GitHub Pages

1. Go to 👉 https://github.com/nitheesh-s-cse/ioslab
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under **"Branch"**, select **gh-pages**
5. Keep folder as **/ (root)**
6. Click **Save**

⏳ Wait 1-2 minutes.

---

### 📌 STEP 14: Open Your Website! 🎉

Go to this link:

### 👉 https://nitheesh-s-cse.github.io/ioslab/

🎉🎉🎉 **Your website is LIVE!** 🎉🎉🎉

---

## ❓ Something Not Working?

| Problem | Solution |
|---------|----------|
| `npm: command not found` | Install Node.js again (Step 1) |
| `git: command not found` | Install Git again (Step 2) |
| `npm run build` fails | Run `npm install` first |
| `npm run deploy` fails | Check Step 8 (base URL) and Step 10 (git remote) |
| Page shows 404 | Check Step 13 (branch must be `gh-pages`) |
| Page is blank | Check Step 8 (base must be `/ioslab/`) |
| Password rejected | Use token instead (Step 11) |

---

## 🔄 HOW TO UPDATE AFTER MAKING CHANGES

You changed a file? Follow these steps to make it live again.

---

### ✏️ STEP A: Save Your Changed File

After you edit any file (like `src/App.tsx`, `src/components/Hero.tsx`, etc.), **save it** (Ctrl + S).

---

### ✏️ STEP B: Open Terminal in Your Project Folder

Open **CMD** or **Terminal** and go inside your project folder:

```
cd ioslab
```

---

### ✏️ STEP C: Check What You Changed

Run this command to see which files you changed:

```
git status
```

It will show files in **red** — those are your changes. ✅

---

### ✏️ STEP D: Add All Changes

Run this command:

```
git add .
```

This tells Git: "I want to save ALL my changes."

---

### ✏️ STEP E: Commit (Save a Snapshot)

Run this command:

```
git commit -m "updated website"
```

You can change the message inside quotes to anything you want. Examples:

```
git commit -m "changed heading color"
```

```
git commit -m "fixed typo in step 3"
```

```
git commit -m "added new section"
```

✅ Your changes are now saved locally.

---

### ✏️ STEP F: Push to GitHub

Run this command:

```
git push origin main
```

✅ Your code on GitHub is now updated.

---

### ✏️ STEP G: Deploy the Updated Website

Run this command:

```
npm run deploy
```

⏳ Wait for it to finish. It will say `Published` at the end.

✅ Your live website is now updated!

---

### 🎯 SHORT VERSION (After First Time)

Once you've done it once, just run these **4 commands** every time you make a change:

```
git add .
```

```
git commit -m "updated website"
```

```
git push origin main
```

```
npm run deploy
```

That's it! Your website will update in 1-2 minutes. 🎉

---

### 📝 QUICK EXAMPLE

Let's say you changed the heading in `Hero.tsx`:

1. Save the file (Ctrl + S)
2. Open terminal in project folder
3. Run:

```
git add .
git commit -m "changed heading text"
git push origin main
npm run deploy
```

4. Wait 1-2 minutes
5. Open 👉 https://nitheesh-s-cse.github.io/ioslab/
6. See your changes live! 🎉

---

### ⚠️ COMMON MISTAKES

| Mistake | Fix |
|---------|-----|
| Forgot `git add .` | Run `git add .` before commit |
| Typed wrong commit message | Doesn't matter, any message works |
| `git push` asks for password | Use your GitHub token (see Step 11 above) |
| Website not updating | Clear browser cache: Ctrl + Shift + R |
| `npm run deploy` shows error | Run `npm run build` first to check for code errors |
