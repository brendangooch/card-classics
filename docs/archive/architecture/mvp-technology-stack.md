# MVP Technology Stack: Languages, Libraries, and Tools

## Guiding Principles
- Maintainability and extensibility
- Accessibility and internationalization
- Thin client/server architecture (server-authoritative)
- Modern, standards-based web technologies
- Fast iteration and testability

---

## 1. Programming Languages
- **TypeScript** (client & shared logic):
  - Strong typing, modern JS features, better maintainability.
- **Node.js (JavaScript/TypeScript)** (server):
  - Fast prototyping, shared code with client, large ecosystem.

## 2. Core Libraries & Frameworks
- **UI Rendering:**
  - **Vanilla TypeScript + Canvas API**
    - Direct control for custom card/tabletop rendering.
    - No heavy UI framework (React/Vue) for MVP; focus on performance and simplicity.
- **State Management:**
  - **Custom Presentation State Singleton**
    - Centralized, decoupled from domain logic (see docs/user-experience/presentation-state-model.md).
- **Networking:**
  - **WebSocket API** (native or with a minimal wrapper)
    - Real-time, low-latency communication.
- **Animation:**
  - **Custom AnimationManager**
    - Tailored for card/tabletop game needs (see docs/user-experience/animation-system.md).

## 3. Build Tools & Bundlers
- **Vite**
  - Fast dev server, modern build pipeline, TypeScript support.
- **ESLint + Prettier**
  - Code quality and consistent formatting.

## 4. Testing Frameworks
- **Jest**
  - Unit and integration testing for TypeScript.
- **Testing Library (optional for UI)**
  - For future UI testing if needed.

## 5. Accessibility & Internationalization
- **axe-core** (for accessibility testing)
- **i18next** (for future internationalization, optional for MVP)

## 6. Documentation & Developer Experience
- **Markdown** (for all docs)
- **VS Code** (recommended editor)
- **Git** (with milestone/release branching strategy)

---

## Justification
- All tools/libraries are chosen for their maturity, ecosystem support, and alignment with project goals.
- Avoiding heavy frameworks keeps the MVP lean and focused on core gameplay and UI/UX.
- TypeScript everywhere ensures maintainability and easier onboarding for new contributors.

---

## Future Considerations
- Evaluate React or Vue for more complex UI needs post-MVP.
- Consider state management libraries (Redux, Zustand) if presentation state grows in complexity.
- Add CI/CD tools (GitHub Actions) for automated testing and deployment.

---

## References
- See also: docs/user-experience/presentation-state-model.md, docs/user-experience/animation-system.md, docs/versioning/git-strategy.md
