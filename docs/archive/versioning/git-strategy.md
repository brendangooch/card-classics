# Git Strategy

This document outlines the git workflow and branching strategy for Card Classics.

## Branching Model
- Primary development occurs on the `main` branch.
- For each planned major or minor release, create a new branch (e.g., `release/v1.0.0`).
- Hotfixes and experimental features branch off the relevant release branch (e.g., `hotfix/v1.0.1`, `feature/ai-experiment`).
- Multiple branches can be created from the same base version for experimentation.

## Commit & Push Practices
- Commit and push changes at meaningful milestones (patch, minor, or major release), rather than after every small change.
- Use clear, descriptive commit messages.
- No strict commit message convention is required unless desired in the future.

## Releases & Tags
- Tag releases with version numbers (e.g., `v1.0.0`) for easy reference and rollback.

## Collaboration
- The workflow is optimized for solo development.
- As the project grows or collaboration needs change, the strategy can be adapted to include pull requests, code reviews, or more structured workflows.

## Simplicity First
- The workflow prioritizes simplicity and ease of use, with flexibility for future expansion.


## Example Git Commands

### Create a new release branch
```bash
git checkout main
git pull
git checkout -b release/v1.0.0
```

### Create a feature or hotfix branch
```bash
git checkout release/v1.0.0
git checkout -b feature/ai-experiment
```

### Commit and push changes
```bash
git add .
git commit -m "Add new feature or fix bug"
git push origin feature/ai-experiment
```

### Tag a release
```bash
git checkout release/v1.0.0
git tag v1.0.0
git push origin v1.0.0
```

### Merge a feature branch back into a release branch
```bash
git checkout release/v1.0.0
git merge feature/ai-experiment
git push origin release/v1.0.0
```

These commands cover the most common tasks in the workflow. Adjust as needed for your project.
