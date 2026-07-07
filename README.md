# Jessie Zhang — Art Portfolio

Static portfolio site (plain HTML/CSS/JS, no build step) for GitHub Pages.

**Live URL (after enabling Pages):** https://jessiezhang-0925.github.io/Art-Portfolio/

## Deploy

1. Push this repo to the `main` branch.
2. On GitHub: **Settings → Pages → Build and deployment**
   - Source: *Deploy from a branch*
   - Branch: `main` / `/ (root)` → Save
3. Wait ~1 minute, then open the live URL above.

## Structure

```
index.html          single-page portfolio
assets/css/style.css
assets/js/main.js   lightbox + scroll reveal
assets/img/         web-optimized artwork (max ~2000px wide)
.nojekyll           disables Jekyll processing
```

## Adding new work

Drop a web-sized JPG into `assets/img/`, then copy one of the
`<figure class="art">` blocks in `index.html` and update the
`src`, `alt` and caption. Images inside `.art` / `.case-step`
are picked up by the lightbox automatically.
