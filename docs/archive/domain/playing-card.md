# Playing Card Domain Object

## Overview
In the Card Classics domain model, a playing card is represented as a simple integer (1–52 for standard cards, 0 for joker) throughout the game instance for efficiency. When additional functionality is needed (e.g., for hand evaluation or presentation), the integer is wrapped in a Card domain object that exposes useful methods and properties.

## Card Representation
- **Integer Value:**
  - 1–52: Standard playing cards
  - 0: Joker (wild card)
- **Suit and Rank:**
  - The Card object interprets the integer to provide suit and rank objects.

## Card Domain Object
- **Constructor:** Accepts an integer (0–52)
- **Properties/Methods:**
  - `get rank(): Rank` — Returns the card's rank object
  - `get suit(): Suit` — Returns the card's suit object
  - `get fullname(): string` — Returns a string like "King of Spades"
  - Helper methods for hand analysis (e.g., isFaceCard, isAce, isJoker, etc.)
    - (Note: These may be extracted into a separate utility/component for clarity and reusability.)

## Usage Pattern
- Cards are stored as integers in game state and logic for performance and simplicity.
- When client code (hand evaluation, UI, etc.) needs more information, it wraps the integer in a Card object to access rank, suit, and helper methods.

## Example
```typescript
const cardInt = 51; // King of Spades
const card = new Card(cardInt);
console.log(card.rank);      // Rank.King
console.log(card.suit);      // Suit.Spades
console.log(card.fullname);  // "King of Spades"
```

## Notes
- This approach keeps the core game logic efficient while providing rich functionality for analysis and presentation.
- Joker handling (0) is supported throughout.
- Helper methods for hand analysis should be modular and may be refactored into a dedicated utility as the codebase grows.
