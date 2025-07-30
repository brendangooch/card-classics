# High-Level Architecture Overview

## Diagram
```
+-------------------+        +-------------------+        +-------------------+
|   Client (UI)     |<------>|   REST API        |<------>|   Database        |
| (Web Browser)     |        | (Express/TS)      |        | (MongoDB)         |
+-------------------+        +-------------------+        +-------------------+
        |                        ^      ^
        |                        |      |
        v                        |      |
+-------------------+        +-------------------+
| WebSocket Client  |<------>| WebSocket Server  |
+-------------------+        +-------------------+
```
- Client communicates with backend via REST for standard operations and via WebSocket for real-time gameplay.
- Backend manages game state, player actions, authentication, and persistence.
- Database stores users, games, history, and backups.

## Module Map

### Client (UI)
- Presentation Layer (React/TS or Vanilla TS)
- State Management (Presentation State)
- Animation & Entity Managers
- Onboarding & Help
- Accessibility Features

### Backend (Server)
- REST API (Express/Fastify)
  - Auth Controller
  - Player Controller
  - Game Controller
  - Tournament Controller
  - Leaderboard Controller
- WebSocket Server (socket.io/ws)
  - Game Session Manager
  - Event Handlers (playCard, knock, join, leave, etc.)
  - State Broadcaster
- Domain Logic
  - Game Engine (rules, flow controller)
  - Player Model
  - Deck Model
  - Hand Evaluation
  - Tournament Logic
- Persistence Layer
  - Database Models (User, Game, Tournament, History)
  - Backup & Restore

### Shared/Utilities
- Validation & Error Handling
- Logging & Monitoring
- Security (auth, rate limiting)
- Testing (unit, integration)
- Documentation

---


---

## Fundamental Design Rule
- The WebSocket server only handles real-time events and state updates for games that are already "in-play" with all players assigned.
- Adding or removing players from a game instance is managed by REST endpoints before the game session starts.
- This separation keeps the WebSocket server focused on gameplay logic and ensures game instances are fully initialized before entering live play.

---

This overview and module map provide a clear reference for planning, implementation, and onboarding.
