# Suits and Ranks Domain Model

## Suits
The four standard suits in a deck are:


| Suit     | Integer Value | Symbol |
|----------|---------------|--------|
| Clubs    | 1             | ♣      |
| Hearts   | 2             | ♥      |
| Spades   | 3             | ♠      |
| Diamonds | 4             | ♦      |

- Suits are represented as integers 1–4 in code for efficiency and to match the card image sprite order.
- Display names and symbols are used for presentation.

## Ranks
The thirteen ranks in a standard deck are:

| Rank Name | Integer Value | Display | Notes           |
|-----------|--------------|---------|-----------------|
| Ace       | 1            | A       | High or low     |
| Two       | 2            | 2       |                 |
| Three     | 3            | 3       |                 |
| Four      | 4            | 4       |                 |
| Five      | 5            | 5       |                 |
| Six       | 6            | 6       |                 |
| Seven     | 7            | 7       |                 |
| Eight     | 8            | 8       |                 |
| Nine      | 9            | 9       |                 |
| Ten       | 10           | 10      |                 |
| Jack      | 11           | J       | Face card       |
| Queen     | 12           | Q       | Face card       |
| King      | 13           | K       | Face card, high |

- Ranks are represented as integers (1–13).
- Ace can be high or low depending on game rules.
-
- The Rank object provides helper methods:
  - `getPluralName()`: Returns the plural form of the rank (e.g., "nines", "sixes").
    - For ranks ending in 'x', 's', or 'z', or for "six", adds 'es' (e.g., "sixes").
    - Otherwise, adds 's' (e.g., "nines").
  - `getNameWithArticle()`: Returns the rank name with the correct indefinite article (e.g., "a nine", "an ace").

## Joker
- Joker is represented as integer 0.
- Treated as a wild card in most games.

## Example Usage
```typescript
const suit = Suit.Spades; // 3
const rank = Rank.King;   // 13
const card = new Card(51); // King of Spades
console.log(card.suit); // Suit.Spades (3)
console.log(card.rank); // Rank.King (13)
```

## Notes
- Suits and ranks are used throughout the domain for card construction, hand evaluation, and presentation.
- Special rules (e.g., ace high/low) are handled in hand evaluation logic.
- Cards are typically constructed by type: the Deck object deals random integers, which are stored in the game instance and only wrapped as Card objects when needed for evaluation or presentation.
