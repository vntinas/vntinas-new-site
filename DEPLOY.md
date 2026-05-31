# Deploying vntinas-new-site to vntinas.eu

This repo (`vntinas-new-site`, al-folio) holds the new website. The live domain
`vntinas.eu` currently points to the **old** repo `vntinas.github.io`. This guide
moves the domain to this repo.

## How it builds

`.github/workflows/deploy.yml` runs on every push to `main`:

1. Ubuntu runner, Ruby 3.3.5, Python 3.13 (Ubuntu defaults to UTF-8 — no bibtex
   locale crash like local macOS).
2. `JEKYLL_ENV=production && bundle exec jekyll build`
3. PurgeCSS strips unused CSS.
4. Built `_site/` is pushed to the **`gh-pages`** branch.

GitHub Pages then serves `gh-pages`.

> Local builds need `LANG=en_US.UTF-8 bundle exec jekyll build` to avoid a
> US-ASCII bibtex crash. CI does **not** need this.

## One-time go-live checklist

Do these in order to avoid domain downtime. Steps marked **(web)** are GitHub
settings — only you can do them.

### 1. Merge work into `main` (done via git)

```bash
cd vntinas-new-site
git checkout main
git merge feature/homepage-enhancements
git push origin main
```

Pushing `main` triggers the deploy workflow → builds → updates `gh-pages`.

### 2. Watch the build **(web)**

GitHub → `vntinas-new-site` → **Actions** tab → confirm "Deploy site" run is green.
If it fails, do NOT proceed to the domain swap.

### 3. Make this repo public **(web)**

GitHub → `vntinas-new-site` → Settings → General → bottom → **Change visibility**
→ Public. (Free GitHub Pages needs a public repo.)

### 4. Enable Pages on this repo **(web)**

Settings → Pages → Source = **Deploy from a branch** → Branch = `gh-pages` `/ (root)`
→ Save. Wait for it to publish at `https://vntinas.github.io/vntinas-new-site/`
(assets may look unstyled there — that's expected; the custom domain serves at root).

### 5. Release the domain from the OLD repo **(web)**

GitHub → `vntinas.github.io` → Settings → Pages → **remove** the custom domain
`vntinas.eu` → Save.

### 6. Claim the domain on THIS repo **(web)**

GitHub → `vntinas-new-site` → Settings → Pages → Custom domain → enter
`vntinas.eu` → Save → wait for the DNS/HTTPS check to go green → tick
**Enforce HTTPS**.

DNS already points at GitHub (the old site used it), so no DNS record change is
needed — only the repo claim moves.

### 7. Verify

Open `https://vntinas.eu` → should show the new al-folio site. Hard-refresh
(Cmd+Shift+R) to clear cache.

## Rollback

If something is wrong, reverse step 6/5: remove the domain from
`vntinas-new-site`, re-add it on `vntinas.github.io`. The old site returns.

## Everyday updates (after go-live)

Edit content → commit → push to `main`. Actions rebuilds and redeploys
automatically. Common edit targets:

| What | File |
| --- | --- |
| Bio, sections toggle | `_pages/about.md` |
| Academic journey | `_data/journey.yml` |
| Research interests | `_data/interests.yml` |
| Research highlights | `_data/highlights.yml` |
| Footer contact + map | `_data/contact.yml` |
| News items | `_news/*.md` (`short:` = sidebar headline) |
| Publications | `_bibliography/papers.bib` |
| Theme color / styles | `_sass/_themes.scss`, `_sass/*.scss` |
