# MVP Requirements and User Stories

## MVP User Stories
1. As a player, I want to play a complete game of 3-card brag against AI opponents.
2. As a player, I want to interact with animated card graphics during gameplay.
3. As a player, I want to make moves and play cards using basic input handling.
4. As a player, I want to receive game updates, feedback, and onboarding via a Game Console UI.
5. As a player, I want to access the platform using a shareable code, so I can join games and invite friends to play over the web.

## Excluded from MVP (for future releases)
- Multiplayer (joining/inviting sessions)
- Card reordering by swiping
- Game rules/instructions onboarding
- Multiple game types (will add after MVP)
- Persistent game progress/error recovery
- Social/invite features

## Architecture Decision Pending

## Architecture Decision
For the MVP, Card Classics will use a thin client architecture. All domain logic, game state, and AI will reside on the server. The client will handle UI, input, and event communication only. This approach enables a clear separation of concerns, supports future multiplayer and persistence features, and avoids refactoring later. Game management events (restart, quit) are bypassed for MVP; a new game loads on screen reload.
