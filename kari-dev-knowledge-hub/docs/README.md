# Deploying the Kari Dev Community Site

This directory contains the GitHub Pages static site for the Kari Dev community.

## Quick Deploy

1. Push this repository to GitHub (e.g., `github.com/kari-dev/kari-dev`)
2. Go to **Settings → Pages**
3. Under **Source**, select **Deploy from a branch**
4. Choose branch (e.g., `main`) and folder `/docs`
5. Click **Save**

Your site will be live at `https://kari-dev.github.io/kari-dev/` (or your custom domain).

## Files

- `index.html` - Main landing page
- `.nojekyll` - Disables Jekyll processing

## Customization

- Update links in `index.html` to match your actual GitHub org/repo names
- Add more sections or pages by creating new HTML files
- Replace placeholder stats and content with real community data
