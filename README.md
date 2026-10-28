# Dianahub

Static site for Diana's analytics tools, hosted on GitHub Pages.

## Structure

- `docs/` is the site root that gets deployed.
- `docs/downloads.js` holds the installer download link for each tool. Edit it there to change or enable a Download Installer button.

## Deployment

GitHub Pages serves `docs/` straight from the `main` branch, so every push to `main` deploys it.

One-time setup: in the GitHub repo, go to **Settings → Pages**, set **Source** to **Deploy from a branch**, then pick branch `main` and folder `/docs`.

## Running locally

Run `serve.bat`, or:

```
python -m http.server 8080 --directory docs
```

Then open http://localhost:8080/.
