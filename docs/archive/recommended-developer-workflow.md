# Card Classics: Recommended Developer Workflow

Date: July 28, 2025

## Overview
This workflow is designed to maximize code quality, maintainability, and developer focus for the Card Classics project. It integrates automated testing, code review, and documentation alignment.

## Workflow Steps

1. **Core Logic Development**
   - Focus on implementing core game logic and features.
   - Defer cross-cutting concerns (security, logging, performance, etc.) until after core logic is validated.

2. **Automated Testing**
   - Follow Test-Driven Development (TDD) best practices wherever possible.
   - Lean on Copilot to create tests for core logic before writing implementation code.
   - Write and run unit, integration, and end-to-end tests for all new code.
   - Ensure all tests pass before submitting code for review.

3. **Automated Code Review (Copilot)**
   - Submit code for Copilot review before merging or check-in.
   - Copilot will cross-reference:
     - Project architecture and design patterns
     - Documentation and message types
     - Best practices and cross-cutting concerns
   - Receive actionable feedback and address issues as needed.

4. **Human Review (Optional/Advanced)**
   - For major changes, request human review for design, business logic, or architectural decisions.
   - If working solo, consider stepping away from code for a week or two before reviewing your own work. This helps you approach the review with a fresh perspective and catch issues you might otherwise miss.

5. **Cross-Cutting Concerns Integration**
   - After core logic is validated and reviewed, add or refine cross-cutting concerns.
   - Examples: error handling, security, logging, metrics, accessibility, performance.

6. **Documentation Alignment**
   - Update documentation to reflect new features, message types, and architectural changes.
   - Ensure code and docs remain in sync.

## Benefits
- Frees developer focus for core logic and innovation
- Ensures code quality and consistency
- Reduces technical debt and rework
- Aligns implementation with evolving documentation and architecture

## Notes
- All code must pass tests before review and merge.
- Copilot review is required for all code submissions.
- Human review is recommended for major changes.
- Documentation should be updated as part of the workflow.
