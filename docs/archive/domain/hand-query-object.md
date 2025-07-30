# Hand Query Object Pattern

## Purpose
The Query Object pattern is used in Card Classics to encapsulate logic for analyzing and extracting information from a hand of cards. This approach keeps hand evaluation logic modular, testable, and easy to extend, while keeping the Card domain object focused on representing individual cards.

## How It Works
- A Query Object is constructed with a hand (array of card integers or Card objects).
- It exposes methods to answer specific questions about the hand, such as:
  - `isPair()`
  - `isFlush()`
  - `isStraight()`
  - `getHighestCard()`
  - `containsJoker()`
  - ...and more
- Each query method encapsulates the logic for that specific check, making the codebase easier to maintain and reason about.

## Example Usage
```typescript
const hand = [12, 25, 0]; // Example: Queen of Hearts, King of Diamonds, Joker
const handQuery = new HandQuery(hand);

if (handQuery.isPair()) {
  // ...
}
const highest = handQuery.getHighestCard();
```

## Benefits
- **Separation of Concerns:** Card objects represent cards; Query objects analyze hands.
- **Testability:** Each query can be unit tested in isolation.
- **Extensibility:** New queries can be added without modifying Card or core hand logic.
- **Readability:** Client code is more expressive and intention-revealing.

## Notes
- Query Objects can be composed or extended for more complex analysis (e.g., wild card handling, custom rules).
- This pattern is especially useful for games with many hand types or variants.
