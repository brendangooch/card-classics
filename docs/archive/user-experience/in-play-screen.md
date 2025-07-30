# In-Play Screen Architecture

This document describes the structure and rationale for the in-play screen (game table) in Card Classics.

## Structure
- The in-play screen consists of multiple layered `<canvas>` elements, each responsible for a single visual layer:
  1. Table/background canvas
  2. Card layer canvas
  3. Chips/tokens/score canvas
  4. Animation/effects canvas
  5. Overlay canvas (e.g., for messages, highlights)
- A user input `<div>` is positioned above the canvases to capture keyboard, mouse, or touch input.
- Additional HTML buttons (e.g., “Deal,” “Play Card,” “Undo,” “Restart”) are layered on top or around the play area as needed.
- All elements are contained within a responsive parent container that scales with the viewport.

## Benefits
- **Separation of concerns:** Each canvas handles a specific visual responsibility, making code easier to manage and extend.
- **Efficient redraws:** Only the relevant layer needs to be updated for most actions, improving performance.
- **Crisp UI:** HTML elements (buttons, input) remain sharp and accessible, even as the canvas is scaled or animated.

## Example Layering
```
[Parent Container]
  ├─ Table/background canvas
  ├─ Card layer canvas
  ├─ Chips/tokens/score canvas
  ├─ Animation/effects canvas
  ├─ Overlay canvas
  ├─ User input <div>
  └─ HTML buttons
```

This architecture supports a visually rich, interactive, and responsive game experience, while keeping the codebase modular and maintainable.
