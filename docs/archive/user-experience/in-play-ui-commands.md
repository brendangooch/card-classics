# In-Play UI: Commands & Controls

This document outlines the essential commands, buttons, and UI patterns for the in-play screen in Card Classics.

## Core Game Actions (3-Card Brag Example)
- **Swap a single card** (with a community card)
- **Swap all three cards** (with all three community cards)
- **Knock** (end round)

## General Controls
- **Quit** (exit to menu or home)
- **Restart** (restart current game/round)
- **Toggle sound** (mute/unmute)
- **Show rules/help** (quick reference for new players)

## UI Placement Best Practices
- General controls can be presented as always-visible icons (e.g., in a corner or toolbar) for quick access, rather than hidden in a separate menu. This reduces friction and keeps essential actions one tap/click away.
- For less frequently used or advanced options, a dedicated menu or overlay can be used.

## Input Handling
- Mouse/touch gestures for card selection and swaps
- Keyboard shortcuts for core actions (if on desktop)
- Visual feedback for valid/invalid moves

## Transitions
- Smooth, consistent animated transition between the menu system and the in-play screen (e.g., fade, slide, or scale effect) to maintain a polished user experience.

## Future Considerations
- Handler for gesture display (showing what move was made)
- Animations for card swaps and knock action
- (Optional) Undo last move (if game rules allow)

This approach ensures a minimal, accessible, and user-friendly in-play interface, while supporting future enhancements.
