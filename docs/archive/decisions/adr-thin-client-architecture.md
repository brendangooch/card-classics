# ADR: Thin Client Architecture

## Status
Accepted

## Context
The initial design bundled game logic with the client application, with an option to join a socket-based online game. However, after further research and discussion, it was discovered that hosting games on the server is very low cost and offers significant advantages.

## Decision
All game logic will be implemented and hosted on the server. The client application will focus solely on presentation and capturing user input. This centralizes all game logic, ensuring consistency and simplifying updates.

This architecture maintains a clean separation of concerns:
- The client is responsible only for presentation and user input.
- The server is responsible for all game logic and state management.

The server will utilize a functional programming style for its operations, with an object-oriented domain model at the heart of the application logic.

## Consequences
- Improved maintainability and scalability
- Easier to update and patch game logic
- Enhanced security and reduced risk of cheating
- Consistent gameplay experience across all clients
- Slightly increased server load, but manageable given low hosting costs

## Exception: Simple Single-Player Games

For simple single-player games (such as Clock Patience and other solitaire-style games), game logic may be bundled with the client to reduce server load. This exception is made for efficiency and does not affect the architecture of multiplayer or competitive games.

---
This decision should be revisited if hosting costs or technology constraints change significantly in the future.
