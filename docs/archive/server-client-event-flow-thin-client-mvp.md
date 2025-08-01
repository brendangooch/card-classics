# Server/Client Event Flow: Thin Client MVP

Date: July 28, 2025

## Step-by-Step Event Flow

1. **Client Loads Application**
   - Client connects to server (WebSocket or HTTP).
   - UI displays “Start Game” option.

2. **Client Requests Game Start**
   - Client emits `startGame` event with:
     - Game type (e.g., 3-card brag)
     - Game configuration (e.g., number of AI players)
     - Mode (single-player)

3. **Server Creates Game Instance**
   - Server initializes game state, deals cards, sets up AI.
   - Server responds with `gameState` event containing:
     - Initial hands (only send player’s own hand to client)
     - Player turn
     - Game metadata

4. **Client Renders Game State**
   - UI displays cards, player info, and game console.
   - Client waits for user input.

5. **Client Sends Player Action**
   - On user move (e.g., play card, bet), client emits `playerAction` event with action details.

6. **Server Processes Action**
   - Server updates game state, runs AI logic if needed.
   - Server emits updated `gameState` event (or specific `actionResult` event).

7. **Client Updates UI**
   - UI animates card movement, updates game console, shows new state.

8. **Repeat Steps 5–7**
   - Continue until game ends.

9. **Server Emits Game End**
   - Server sends `gameEnd` event with results.

10. **Client Displays Results**
    - UI shows winner, final hands, and option to start a new game.

---

## Communication Diagram

```
Client                Server
  |                     |
  |--- startGame ------>|  // Request new game
  |<-- gameState -------|  // Initial state (only send player's hand)
  |                     |
  |--- playerAction --->|  // User move
  |<-- gameState -------|  // Updated state
  |                     |
  |--- playerAction --->|  // Next move
  |<-- gameState -------|  // Updated state
  |                     |
  |<-- gameEnd ---------|  // Game finished
  |                     |
```

---

## Security/Integrity Note
- Only send facedown card data to the correct player. Do not broadcast all hand information to every client. This prevents cheating and maintains game integrity.

---


## Message Sequencing & Payload Structure


Each server-to-client message includes:
- `type`: Event type (e.g., `gameStarted`, `nextTurn`, `playerActionResult`, `gameEnd`)
- `step`: Auto-incrementing sequence number (per game session)
- `gameId`: Unique identifier for the game session
- `timestamp`: Server time for the event
- `playerId`: Recipient player (for personalized data)
- `payload`: Event-specific data (e.g., hand, turn info, action result)
- `summary`: Human-readable message generated by the server, describing the event for display in the Game Console UI
- `meta`: Optional metadata (e.g., error codes, warnings, AI/human indicator)


**Example Message:**
```json
{
  "type": "nextTurn",
  "step": 7,
  "gameId": "abc123",
  "timestamp": "2025-07-28T09:15:00Z",
  "playerId": "player1",
  "payload": {
    "currentPlayer": "AI2",
    "availableActions": ["bet", "swap", "knock"],
    "hand": ["5♠", "7♦", "J♣"], // Only for player1 if it's their turn
    "pot": 30,
    "round": 2
  },
  "summary": "It's AI2's turn. Available actions: bet, swap, knock.",
  "meta": {
    "isAI": true
  }
}
```

---

## 3-Card Brag Event Flow

**Client → Server:**
- `startGame` (game type/config/mode)
- `playerAction` (move details: bet, swap, knock, etc.)

**Server → Client:**
- `gameStarted` (initial state, dealer selected)
- `dealerSelected` (dealer chosen)
- `nextRound` (new round begins)
- `nextTurn` (whose turn, available actions)
- `playerActionResult` (result of move, updated state)
- `swapSingle` / `swapAll` (swap actions)
- `knock` (player knocks, triggers showdown)
- `roundOver` (round results, hands revealed)
- `gameOver` (final results, winner)

**Event Sequence Example:**
1. Client: `startGame`
2. Server: `gameStarted`, `dealerSelected`, `nextRound`, `nextTurn` (AI), `playerActionResult`, `nextTurn` (AI), `playerActionResult`, `nextTurn` (human)
3. Client: `playerAction` (e.g., swap, bet, knock)
4. Server: `playerActionResult`, `nextTurn` (AI), ... (repeat until round/game ends)
5. Server: `roundOver`, `gameOver`

**Note:**
- Server sends single events per client request/emission, with delays for AI turns to simulate human play.
- Animation system can queue and process events in order using the `step` property.
