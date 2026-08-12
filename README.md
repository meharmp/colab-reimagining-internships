# Reimagining Internships That Work for Everyone

Single-page recap site for TinkerHub's Co:lab workshop (Aug 9, 2026, TinkerSpace Kochi).
Plain HTML/CSS/JS — no build step.

## Editing content

All swappable content — draft playbook links, the Google Form URL, and the
photo gallery — lives in [`content.js`](content.js). Edit that file only for
routine updates; `index.html`, `styles.css`, and `script.js` shouldn't need
to change.

## Local preview

Any static file server works, e.g.:

```
python3 -m http.server 4173
```

Then open http://localhost:4173.

## Deploy

Published via GitHub Pages from the `main` branch root. Pages rebuilds
automatically on every push to `main`.
