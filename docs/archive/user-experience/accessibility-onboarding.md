# Accessibility & Onboarding Enhancements

This document outlines accessibility improvements and onboarding features for Card Classics, with a focus on the animation system, player console, and in-play UI.

## Accessibility Improvements
- **Optional Animations:** Users can disable or slow down animations (e.g., typewriter effect, fades) for a more accessible or efficient experience. When disabled, the next state is rendered immediately.
- **High Contrast & Color Use:** Use high-contrast colors and avoid relying solely on color to convey information.
- **Keyboard & Screen Reader Support:** Ensure all interactive elements (cards, buttons) are accessible via keyboard and have appropriate ARIA labels and focus indicators.
- **Pause Option:** Single player games include a pause feature.
- **Text Alternatives:** Provide text alternatives or descriptions for important animated effects and game events.
- **Consistent Messaging:** The player console displays continual, human-friendly sentences explaining game events and state.
- **Tooltip & Visual Guides:** Add dedicated tooltip and visual guides canvases to the in-play canvas stack for contextual help and guidance.


## Onboarding Features
- **Interactive Menu:** Menu adapts based on the player's journey stage (e.g., first visit, returning player).
- **First Visit Walkthrough:** On first visit, "Play Now" launches a guided walkthrough.
- **Returning Player Experience:** On subsequent visits, "Play Now" starts a regular game, with an option to enable/disable tooltips in the configuration page.
- **Walkthroughs:** Step-by-step guides for first-time users.
- **Demo/Spectator Mode:** Option to watch a game in progress.
- **How to Play:** Accessible guides with text and visuals.
- **Interactive Guides & Tooltips:** Contextual help and tooltips for new or complex features, with user control over their visibility.
- **Replay (Future):** Potential for full game replays in future versions.
- **API-Driven State Rendering:** With clean client/server separation, a single API call can render any game state for onboarding, testing, or accessibility purposes.

These enhancements ensure Card Classics is accessible, user-friendly, and welcoming to all players, regardless of ability or experience.
