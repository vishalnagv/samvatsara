# ❁ SAMVATSARA ❁

A minimal month-view calendar built with React + Vite.

## Run locally

```bash
npm install
npm run dev
```

## Publish to GitHub Pages

1. **Create a GitHub repo** (e.g. named `samvatsara`) and push this project:

   ```bash
   git init
   git add .
   git commit -m "Initial commit: samvatsara calendar"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```

2. **Update the base path** in `vite.config.js` — set `base: '/<your-repo-name>/'` to match your actual repo name.

3. **Enable GitHub Pages via Actions** (already set up for you):
   - Go to your repo → Settings → Pages
   - Under "Build and deployment", set Source to **GitHub Actions**
   - Push to `main` (or re-run the workflow from the Actions tab) — the included workflow at `.github/workflows/deploy.yml` will build and deploy automatically.

4. Your site will be live at:
   `https://<your-username>.github.io/<your-repo-name>/`

### Alternative: manual deploy with gh-pages

If you'd rather not use Actions:

```bash
npm install
npm run deploy
```

This uses the `gh-pages` package to push the built `dist/` folder to a `gh-pages` branch. Then in repo Settings → Pages, set Source to the `gh-pages` branch.
