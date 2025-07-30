# 3-Card Brag (Bastard Brag)

## Overview
3-Card Brag, also known as Bastard Brag, is a classic British card game for 2 to 6 players. The game can also be played in multi-table tournament events. The objective is to be the last player remaining with lives.

## Setup
- **Players:** 2–6 (optionally supports multi-table tournaments)
- **Lives:** Each player starts with 1–10 lives (default is equal for all, configurable at game creation)
- **Deck:** 52 standard playing cards, plus optionally 0–3 jokers (wild cards)

## Game Structure
- The game is played in rounds, each consisting of turns.
- At the start of each round, the dealer deals 3 cards to each player and 3 community cards to the center of the table.
- The second (middle) community card is dealt face down; the outer two are face up.
- The player to the left of the dealer goes first each round; play proceeds clockwise.

## Player Actions (on their turn)
- **Swap Single:** Swap one of your cards for one of the community cards.
- **Swap All:** Swap all three of your cards with the three community cards.
- **Knock:** End the round (only available after all players have taken at least one turn and if no one has knocked yet).

## Round End
- When a player knocks, each opponent gets one final turn.
- After the final turns, all hands are revealed.
- The player(s) with the lowest scoring hand(s) lose a life.
- New rounds are played until only one player has lives remaining; that player is the winner.



## Hand Rankings & Scoring

| Hand Name        | Rank | Score                                 |
|------------------|------|---------------------------------------|
| Trip-3s          | 1    | 600                                   |
| Three of a Kind  | 2    | 500 + rank number of highest card (ace high)     |
| Straight Flush   | 3    | 400 + highest rank number (ace high)  |
| Straight         | 4    | 300 + highest rank number (ace high)  |
| Flush            | 5    | 200 + highest rank number (ace high)  |
| Pair             | 6    | 100 + highest card rank number (ace high) |
| No Hand          | 7    | 0 (no score)                          |


**Note:** A hand in 3-card brag always consists of 3 cards.

**Card Representation in Code:**
- Each card is represented by an integer between 1 and 52.
- 0 represents a joker (wild card).


*Additional hands to be documented below as provided.*

## Quirks & Special Rules

- **Dealer Selection:** At the start of a new game, the dealer is chosen by dealing cards face-up to each player, one at a time, until a player receives a joker or a jack. That player becomes the first dealer.
- **Dealing Order:** The dealer may deal the cards in any order they choose.
- **Dealer Rotation:** After each round, the role of dealer passes to the next (alive) player to the previous dealer's left.
