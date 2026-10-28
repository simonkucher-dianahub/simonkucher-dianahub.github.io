# Dianahub

Static site for Diana's analytics tools, hosted on GitHub Pages.

## Structure

- `public/` is the site root that gets deployed. The site itself lives in `public/dianahub/`.
- `public/dianahub/downloads.js` holds the installer download link for each tool. Edit it there to change or enable a Download Installer button.

## Deployment

Every push to `master` deploys `public/` through the GitHub Actions workflow in
[`.github/workflows/pages.yml`](.github/workflows/pages.yml).

One-time setup: in the GitHub repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.

## Running locally

Run `serve.bat`, or:

```
python -m http.server 8080 --directory public
```

Then open http://localhost:8080/dianahub/.
