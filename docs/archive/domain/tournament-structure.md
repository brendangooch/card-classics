# Tournament Structure Domain Model

## Overview
The Tournament object manages multi-table or multi-round competitions, coordinating multiple game instances, player progression, and elimination until a final winner is determined.

## Properties
- **id:** Unique identifier for the tournament
- **players:** Array of Player objects (all participants)
- **games:** Array of Game objects (active and completed games)
- **round:** Current tournament round number
- **brackets:** (Optional) Structure for organizing matches (e.g., single/double elimination, Swiss)
- **status:** Current status (e.g., 'registration', 'in-progress', 'complete')
- **config:** Tournament configuration (rules, entry requirements, etc.)
- **winner:** (Optional) Player object or id of the tournament winner

## Tournament Flow
1. **Registration:** Players join the tournament
2. **Seeding:** Players are assigned to tables/games for the first round
3. **Game Play:** Each table runs a game instance according to standard game flow
4. **Progression:** Winners/qualifiers advance to the next round; losers are eliminated
5. **Next Round:** Repeat seeding and game play for advancing players
6. **Completion:** Declare the final winner when only one player remains

## State Transitions
- The tournament transitions between phases based on player actions and game results
- State is updated in response to game completions, eliminations, and round advancement

## Example Usage
```typescript
const tournament = new Tournament({
  players: [/* ... */],
  config: {/* ... */}
});
tournament.start();
```

## Notes
- The Tournament object coordinates multiple Game instances and tracks overall progression
- Supports different tournament formats (single elimination, double elimination, Swiss, etc.)
- Tournament state is updated and persisted for fairness and auditability
