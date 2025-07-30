# 3-Card Brag: Message Types & Event Flow

Date: July 28, 2025

## Overview
This document defines the recommended message types and event flow for 3-card brag gameplay in Card Classics. These message types are used for client-server communication over WebSocket or REST, enabling real-time game state updates and player actions.

## Core Message Types

### 1. Game Lifecycle
- `game:create` — Sent by server when a new game is created.
- `game:join` — Sent by client to join a game; server responds with current state.
- `game:state` — Broadcast by server to all players when game state changes (e.g., after each action).
- `game:end` — Sent by server when the game concludes.

### 2. Player Actions

// 3-card brag player actions (MVP):
- `player:swap-single` — Client requests to swap a single card; server processes and updates state.
- `player:swap-all` — Client requests to swap all cards; server processes and updates state.
- `player:knock` — Client requests to knock; server processes and updates state.

// Optional/future actions (not available in MVP):
- `player:quit` — Client requests to quit the game.
- `player:restart` — Client requests to restart the game.

### 3. Hand & Reveal
- `hand:deal` — Server deals hands and notifies players.
- `hand:reveal` — Server or client requests hand reveal; server broadcasts results.

### 4. Turn & State
- `turn:advance` — Server notifies clients of turn change.
- `turn:timeout` — Server notifies clients of a timeout event.

### 5. Error & Info
- `error` — Server sends error message (invalid action, out of turn, etc.).
- `info` — Server sends informational message (e.g., waiting for players).

## Example Event Flow
1. `game:create` → `game:join` → `hand:deal`
2. Player actions: `player:swap-single`, `player:swap-all`, `player:knock`
3. Server broadcasts `game:state` after each action
4. `hand:reveal` or `player:show` at end of round
5. `game:end` when game concludes

## Message Payload Example

// Example: Swap a single card
```json
{
  "type": "player:swap-single",
  "playerId": "3",                // ShortID 1-6
  "playerCardIndex": 1,             // Index in player's hand
  "communityCardIndex": 0,          // Index in community cards
  "playerCardType": "spade-7",     // Card type for rendering
  "communityCardType": "heart-K"   // Card type for rendering
}
```

// The payload includes all info needed for client rendering and state updates.

## Notes
- All messages should include a `type` field and relevant metadata (playerId, gameId, etc.).
- Use versioning for message schemas if protocol changes.
- Extend message types for advanced features (chat, rematch, etc.) as needed.
