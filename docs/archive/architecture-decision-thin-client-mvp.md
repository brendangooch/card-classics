# Architecture Decision: Thin Client for MVP

Date: July 28, 2025

## Decision
Card Classics MVP will use a thin client architecture. All domain logic, game state, and AI will be implemented on the server. The client will be responsible for UI rendering, user input, and communicating events to/from the server. This design supports future multiplayer, persistence, and rapid game expansion, and avoids the need for major refactoring after MVP.

## Rationale
- Keeps domain logic centralized and maintainable
- Enables scalable multiplayer and persistence features
- Simplifies client code and UI development
- Facilitates rapid addition of new games and features

## MVP Simplifications
- Game management events (restart, quit) are bypassed; a new game loads on screen reload
- Only single-player mode (vs AI) is supported in MVP

## Next Steps
- Define initial server/client event flow for a complete game session
- Implement server-side domain logic and API endpoints
- Build client to handle UI, input, and event communication
