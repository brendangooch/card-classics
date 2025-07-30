# 3-Card Brag Hand Evaluation Logic & Animation Flow

Date: July 28, 2025

## Hand Evaluation Logic

### Evaluation Sequence
1. **Check for Tie**
   - If all players have hands with the same score, the round is tied and no player loses a life.
2. **Trip 3s (Three of Threes)**
   - If any player has three 3s (score: 600), all other players lose 2 lives.
3. **Other Three of a Kind**
   - If any player has three of a kind (not 3s), all other players lose 1 life. Highest scoring hand(s) win.
4. **No Hand**
   - Any player with "no hand" (score: 0) loses a life. No further comparison needed.
5. **Lowest Scoring Hand**
   - If none of the above, player(s) with the lowest scoring hand lose a life. Joint-lowest hands all lose a life.
6. **Knock and Lose Penalty**
   - If the player who knocked lost at least one life, they lose an additional life as punishment.

### Implementation Notes

- A dedicated domain component (e.g., `RoundEnder`) is responsible for evaluating hands and updating player lives.
- The `endRound()` method accepts the `playerLives` and `playerHands` components, evaluates hands, and removes lives from the instance state as needed.
- Evaluate hands and assign scores using the 3-card brag ranking system.
- Store lives lost for each player and update game state.
- Reveal hands and trigger appropriate animation sequences and console messages.

---


