# Kari Dev - Complete Setup Guide

This document provides step-by-step instructions to bootstrap the entire Kari Dev community platform on GitHub.

## Prerequisites

- GitHub account with admin permissions
- GitHub CLI (`gh`) installed and authenticated
- Node.js 20+ (for Docusaurus)

## Step 1: Create GitHub Organization

```bash
gh org create kari-dev --public
```

## Step 2: Create Repositories

Run the bootstrap script:

```bash
cd _setup
bash bootstrap.sh
```

This creates:
- `kari-dev/knowledge-hub`
- `kari-dev/project-01-portfolio` through `kari-dev/project-10-ai-study-assistant`

## Step 3: Configure Organization Settings

1. Go to Organization Settings > Member privileges
2. Enable "Allow members to create repositories in this organization"
3. Set default repository permission to "Write"

## Step 4: Set Up Branch Protection

Protect `main` branch on all repos:
- Require pull request reviews before merging
- Require status checks to pass before merging

## Step 5: Deploy Documentation Site

```bash
cd _setup/kari-dev-knowledge-hub/docusaurus
npm install
npm run build
```

Push to a `docs-site` branch or deploy with GitHub Pages.

## Step 6: Community Onboarding

1. Pin `START-HERE.md` to the knowledge-hub README
2. Add the organization to your profile
3. Announce in developer communities

## Labels

Apply these labels to all repositories:

- `good-first-project` - Great for first-time contributors
- `beginner` - Beginner-friendly task
- `help-needed` - Needs community input
- `mentor-review` - Waiting for mentor review
- `documentation` - Documentation change
- `bug` - Something is broken
- `feature-request` - New feature suggestion

You can apply labels via GitHub UI or use the `gh` CLI.
