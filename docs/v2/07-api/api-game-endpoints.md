
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
