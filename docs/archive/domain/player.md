# Player Domain Model

## Overview
The Player object represents a participant in a game. It tracks the player's state, hand, lives, and other relevant properties throughout the game lifecycle.

## Properties
- **id:** Unique identifier for the player (string or integer)
- **name:** Display name (optional, for UI)
- **lives:** Number of lives remaining
- **hand:** Array of card integers (the player's current cards)
- **status:** Current status (e.g., 'active', 'eliminated', 'waiting')
- **score:** (Optional) Score or points, if used in the game
- **isDealer:** Boolean indicating if the player is the current dealer
- **seat:** (Optional) Player's seat or position at the table
- **metadata:** (Optional) Any additional game-specific data

## Lifecycle
- Players are created at game setup and assigned initial properties (lives, hand, etc.)
- During the game, player state is updated as cards are dealt, lives are lost, or status changes
- When a player loses all lives, their status is set to 'eliminated'
- The last remaining player is declared the winner

## Example Usage
```typescript
const player = new Player({
  id: 1,
  name: 'Alice',
  lives: 3,
  hand: [12, 25, 0],
  status: 'active',
  isDealer: false
});
```

## Notes
- The Player object is used throughout the game logic for turn management, hand evaluation, and UI updates
- Player state is updated in response to game events (e.g., deal, knock, lose life)
- Additional properties can be added as needed for specific games or features
