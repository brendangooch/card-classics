# Hand Evaluator Pattern

## Purpose
The Hand Evaluator in Card Classics is responsible for determining the best possible hand from a set of cards, taking into account game-specific rules, wild cards (jokers), and ace-high/ace-low logic. It is designed to be flexible and extensible, supporting custom hand definitions and evaluation order.

## How It Works
- The HandEvaluator is constructed with a configuration object that defines:
  - The set of possible hands (e.g., Pair, Straight, Flush, etc.)
  - The order in which hands should be evaluated (highest to lowest)
  - Special rules (e.g., wild card handling, ace high/low)
- When evaluating a hand, the HandEvaluator:
  1. Iterates through the configured hand definitions in order.
  2. Uses Query Objects to check if the hand matches each definition.
  3. Returns a HandDescription object for the first matching hand, or a NullHand object if no match is found.

## Example Usage
```typescript
const config = [
  { name: 'Trip-3s', query: isTrip3s },
  { name: 'Three of a Kind', query: isThreeOfAKind },
  // ...other hand definitions
];
const evaluator = new HandEvaluator(config);
const hand = [12, 25, 0]; // Example hand
const result = evaluator.evaluate(hand);
// result: { name: 'Pair', rank: 6, score: 112, ... } or NullHand
```

## Benefits
- **Flexibility:** Easily supports new hand types, custom rules, and game variants.
- **Maintainability:** Hand definitions and evaluation order are decoupled from core logic.
- **Testability:** Each hand definition and query can be tested in isolation.
- **Extensibility:** Supports complex rules (wild cards, ace high/low, etc.) without cluttering the main evaluation logic.

## Notes
- The HandEvaluator can be extended to support additional metadata (e.g., tiebreakers, hand description strings).
- NullHand objects provide a consistent way to represent hands that do not match any defined type.
- This pattern is especially useful for games with many hand types, wild cards, or custom rules.
