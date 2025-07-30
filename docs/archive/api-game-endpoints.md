# API Endpoint Documentation: Game

Date: July 28, 2025

## Game Endpoints (MVP)

### POST /api/v1/game
- Creates a new game instance and persists its initial state to MongoDB.
- Request Body:
  ```json
  {
    "type": "singleplayer", // or "tournament"
    "config": { "aiPlayers": 2 }
  }
  ```
- Response:
  ```json
  {
    "gameId": "g12345",
    "status": "created"
  }
  ```

### POST /api/v1/game/:id/join
- Adds a player (guest or registered) to an existing game instance.
- Request Body:
  ```json
  {
    "playerId": "u12345" // or guest UUID
  }
  ```
- Response:
  ```json
  {
    "gameId": "g12345",
    "playerId": "u12345",
    "status": "joined"
  }
  ```

### GET /api/v1/game/:id
- Gets the current state of a game instance.
- Response:
  ```json
  {
    "gameId": "g12345",
    "state": { /* game state object */ }
  }
  ```

### PUT /api/v1/game/:id
- Updates game state (e.g., submit player action, advance turn).
- Request Body:
  ```json
  {
    "action": "swap",
    "details": { /* action-specific data */ }
  }
  ```
- Response:
  ```json
  {
    "gameId": "g12345",
    "state": { /* updated game state */ }
  }
  ```

### DELETE /api/v1/game/:id
- Ends or abandons a game instance; marks as complete and triggers cleanup.
- Response:
  ```json
  {
    "gameId": "g12345",
    "status": "deleted"
  }
  ```

---

## Notes
- Always persist game state to MongoDB after each update.
- WebSocket server loads game state from MongoDB on each request/action for consistency.
- Separate creation and joining of games for clarity and scalability.
- Use gameId to reference and manage game instances.
