# Client/Server Communication Architecture

## Overview
- The platform uses a WebSocket-only architecture for all real-time communication between client and server.
- All messages (client-to-server and server-to-client) follow a consistent JSON format.

## Message Types
- **Client → Server:**
  - joinGame
  - leaveGame
  - rejoinGame
  - restartGame
  - playMove
  - sendEmoji
- **Server → Client:**
  - gameEvent (e.g., move played, player joined/left, emoji received)
  - gameStateUpdate (full or partial state sync)

## Request/Response Pattern
- Each client request includes a unique `requestId`.
- The server responds with the same `requestId`, allowing the client to match responses to requests.
- One-way events (like state updates) may omit `requestId`.

## Versioning
- Each message includes a `version` field (e.g., `v1.0.0`) to support future protocol changes.

## Error Handling & Disruptions
- The server detects disconnects, timeouts, and rage-quits.
- Players receive a grace period after a timeout; after this, they are removed from the game.
- Opponents receive additional points if a player leaves; the disconnected player forfeits all points for that game.
- This ensures a stable and fair experience for all players.

## Scalability & Graceful Degradation
- The server is designed to fail gracefully under heavy load: game event/state broadcasts may be delayed, but the system remains operational.

This architecture provides a simple, extensible, and robust foundation for real-time multiplayer card games.
