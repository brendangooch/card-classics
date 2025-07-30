# Game State & Flow Domain Model

## Overview
The Game object manages the overall state and flow of a game instance. It coordinates players, deck, rounds, turns, and tracks the progression from setup to completion.

## Properties
- **id:** Unique identifier for the game instance
- **players:** Array of Player objects (active and eliminated)
- **deck:** Deck object (current deck state)
- **round:** Current round number
- **turn:** Current turn number or index
- **phase:** Current phase (e.g., 'setup', 'dealing', 'playing', 'scoring', 'complete')
- **communityCards:** (Optional) Array of card integers for games with shared cards
- **history:** (Optional) Log of actions/events for replay or audit
- **config:** Game configuration (rules, options, etc.)
- **winner:** (Optional) Player object or id of the winner

## Game Flow
1. **Setup:** Initialize players, deck, and configuration
2. **Dealing:** Shuffle deck, deal cards to players (and community if needed)
3. **Playing:** Players take turns according to game rules
4. **Scoring:** Evaluate hands, update lives/scores, eliminate players as needed
5. **Next Round:** Advance round/turn, repeat dealing and playing
6. **Completion:** Declare winner when end condition is met (e.g., one player left)

## State Transitions
- The game transitions between phases based on player actions and game rules
- State is updated in response to events (deal, play, knock, score, eliminate)

## Example Usage
```typescript
const game = new Game({
  players: [/* ... */],
  deck: new Deck(),
  config: {/* ... */}
});
game.start();
```

## Notes
- The Game object is the central authority for game state and flow
- It interacts with Player, Deck, and other domain objects
- Game state is updated and persisted as needed for multiplayer or replay
- **Thin Client Architecture:** All domain/game logic operates strictly on the server. The client is responsible only for presentation and user input, ensuring fairness and security.
-
- **Flow Controller Pattern:**
  - A separate FlowController object manages the progression of the game.
  - The controller exposes a `proceed()` method, which advances the game state according to the current phase and rules.
  - This encapsulates flow logic, allowing the rest of the system to trigger game progression without needing to know the details of the flow.
  - Improves modularity, testability, and separation of concerns.
