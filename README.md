# Dianahub

Static site for Diana's analytics tools, hosted on GitHub Pages.

## Structure

- `public/` is the site root that gets deployed.
- `public/downloads.js` holds the installer download link for each tool. Edit it there to change or enable a Download Installer button.

## Repositories and deployment

The main repository is on GitLab:
[latam-python-club-committee/dianahub](https://git.simon-kucher.com/latam-python-club-committee/dianahub).
Make all edits and pushes there.

The GitLab repo is mirrored to a GitHub repository owned by Sofia Moreno. Every push
to GitLab is mirrored to GitHub automatically, and each push to `main` on GitHub runs
the GitHub Actions workflow in [`.github/workflows/static.yml`](.github/workflows/static.yml),
which deploys `public/` to GitHub Pages. Don't push to the GitHub repo directly; the
mirror will overwrite it.

One-time setup: in the GitHub repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.

## Updating an installer

1. In the GitLab repository of the app you're updating (for example FactorStrat or
   QuickWins), create a release: **Deploy → Releases → New release**.
2. Download the release's **Source code (zip)**.
3. Upload the zip to the Simon-Kucher SharePoint.
4. Create a share link set to **People in Simon-Kucher** (anyone in the organization).
5. In this repo, paste the link into that app's entry in
   [`public/downloads.js`](public/downloads.js).
6. Make sure the link ends with `&download=1`. Without it, users are sent to
   the SharePoint preview page instead of downloading the file. For example:

   ```
   https://simonkuchernam-my.sharepoint.com/:u:/g/personal/...?e=XXXXXX&download=1
   ```

7. Commit and push to GitLab. The mirror and the Pages workflow publish the change.