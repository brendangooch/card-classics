# UI Menu System: Unified Navigation

This document describes the unified, mode-first menu system for Card Classics.

## Written Navigation Spec

- **Main Menu**
  - Play Single Player → Select Game (show only games with single player mode) → (Optional: Configure Game) → Start Game
  - Challenge a Friend → Select Game (show only games with challenge mode) → (Optional: Configure Game) → Generate Link → Wait for Friend → Start Game
  - Enter Tournament → Tournament Lobby (show only games with tournament mode) → Join Tournament → Start Game
  - View Achievements/Stars
  - Settings (Language, Accessibility, Audio)
  - FAQ/Help

- Each submenu has a “Back” button to return to the previous menu.

## Flowchart (Textual Representation)

```
[Main Menu]
  ├─ Play Single Player
  │    └─ Select Game
  │         └─ (Configure Game)
  │              └─ Start Game
  ├─ Challenge a Friend
  │    └─ Select Game
  │         └─ (Configure Game)
  │              └─ Generate Link
  │                   └─ Wait for Friend
  │                        └─ Start Game
  ├─ Enter Tournament
  │    └─ Tournament Lobby
  │         └─ Join Tournament
  │              └─ Start Game
  ├─ View Achievements/Stars
  ├─ Settings
  └─ FAQ/Help
```

## Wireframe (Textual/ASCII Representation)

```
+----------------------+
|      Main Menu       |
+----------------------+
| [1] Play Single Player
| [2] Challenge a Friend
| [3] Enter Tournament
| [4] Achievements/Stars
| [5] Settings
| [6] FAQ/Help
+----------------------+

(Example: Play Single Player)
+----------------------+
|   Select Game        |
+----------------------+
| [1] Brag Royale
| [2] Clock Patience
| [3] Snap
| [Back]
+----------------------+
```

This unified menu system is simple, extensible, and context-aware. It can be further enhanced with visual tools like mermaid.js in the future.
