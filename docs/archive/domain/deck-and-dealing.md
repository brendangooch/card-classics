# Deck and Dealing Domain Model

## Deck Construction
- A standard deck consists of 52 cards (13 ranks × 4 suits).
- Jokers (wild cards) can be added: 0–3 per deck, as configured at game creation.
- Custom deck sizes or compositions can be supported for variant games.

## Card Representation
- Each card in the deck is represented as an integer:
  - 1–52: Standard cards (see suits-and-ranks.md for mapping)
  - 0: Joker

## Shuffling
- The deck is shuffled using a standard randomization algorithm (e.g., Fisher-Yates).
- Shuffling occurs at the start of each game or round, as required by game rules.

## Dealing
- The deck maintains a `topCardIndex` (initially 0) to track the next card to deal.
- On each `deal()`, increment `topCardIndex` and return `this.cards[topCardIndex % this.cards.length]`.
- This avoids shifting the array and allows for efficient cycling or redealing.
- Dealt cards are stored in the game state as integers for efficiency.
- When needed for evaluation or presentation, integers are wrapped as Card objects.
- The deck tracks which cards have been dealt and which remain using the index.

## Special Rules
- Burn cards (discarding top cards before dealing) can be supported if required by specific games.
- Redeals may occur if the deck runs out of cards or by special rule.

## Example Usage
```typescript
const deck = new Deck({ jokers: 2 });
deck.shuffle();
const hand = [deck.deal(), deck.deal(), deck.deal()]; // [12, 25, 0]
```

## Notes
- The Deck object is responsible for construction, shuffling, and dealing.
- Game logic determines when to shuffle, deal, or redeal.
- Deck state is tracked throughout the game instance.
