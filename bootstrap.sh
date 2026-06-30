#!/bin/bash
# Kari Dev bootstrap script
# Creates GitHub Organization repos and pushes local setup

set -e

ORG="kari-dev"
SETUP_DIR="$(dirname "$0")"

# Project name mapping
declare -A PROJECT_NAMES=(
  [01]="project-01-portfolio"
  [02]="project-02-todo-app"
  [03]="project-03-expense-tracker"
  [04]="project-04-jwt-auth-system"
  [05]="project-05-crud-api"
  [06]="project-06-mini-ecommerce"
  [07]="project-07-realtime-chat"
  [08]="project-08-booking-system"
  [09]="project-09-admin-dashboard"
  [10]="project-10-ai-study-assistant"
)

echo "Bootstrapping Kari Dev repositories..."

# Knowledge Hub
gh repo create "$ORG/knowledge-hub" --public --source "$SETUP_DIR/kari-dev-knowledge-hub" --remote=origin --push

# Project Repos
for i in 01 02 03 04 05 06 07 08 09 10; do
  # Copy shared workflow to project repo
  mkdir -p "$SETUP_DIR/kari-dev-${PROJECT_NAMES[$i]}/.github/workflows"
  cp "$SETUP_DIR/shared-resources/.github/workflows/ci.yml" "$SETUP_DIR/kari-dev-${PROJECT_NAMES[$i]}/.github/workflows/ci.yml"
  
  gh repo create "$ORG/${PROJECT_NAMES[$i]}" --public --source "$SETUP_DIR/kari-dev-${PROJECT_NAMES[$i]}" --remote=origin --push
done

# Import labels to all repos
echo "Setting up labels..."
repos=("knowledge-hub" "project-01-portfolio" "project-02-todo-app" "project-03-expense-tracker" "project-04-jwt-auth-system" "project-05-crud-api" "project-06-mini-ecommerce" "project-07-realtime-chat" "project-08-booking-system" "project-09-admin-dashboard" "project-10-ai-study-assistant")
for repo in "${repos[@]}"; do
  gh label list --repo "$ORG/$repo" | grep -q "good-first-project" || gh label create good-first-project --color "7057ff" --desc "Great for first-time contributors" --repo "$ORG/$repo" || true
  gh label create beginner --color "0075ca" --desc "Beginner-friendly task" --repo "$ORG/$repo" || true
  gh label create help-needed --color "d93f0b" --desc "Needs community input" --repo "$ORG/$repo" || true
  gh label create mentor-review --color "fbca04" --desc "Waiting for mentor review" --repo "$ORG/$repo" || true
  gh label create documentation --color "0075ca" --desc "Documentation change" --repo "$ORG/$repo" || true
  gh label create bug --color "d73a4a" --desc "Something is broken" --repo "$ORG/$repo" || true
  gh label create feature-request --color "a2eeef" --desc "New feature suggestion" --repo "$ORG/$repo" || true
done

echo "Done! Repositories created, populated, and labeled."
