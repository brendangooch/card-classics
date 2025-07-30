# Presentation State Model

This document describes the rationale and structure for modeling presentation state in Card Classics, separate from game state.

## Rationale
- Centralizes all UI-related state (e.g., overlays, tooltips, animation progress, onboarding steps, sound settings).
- Decouples game logic from UI logic, improving maintainability and testability.
- Enables features like skipping or replaying animations, restoring UI after pause, and consistent onboarding experiences.
- Makes debugging and manual testing easier by allowing direct manipulation of UI state.

## Example Presentation State Properties
- `currentView`: Which main screen is active (e.g., menu, in-play, settings, onboarding, achievements)
- `activeOverlays`: Which overlays (e.g., pause, help, settings, loader) are currently visible
- `loaderState`: Loader overlay state (e.g., waiting, loaded)
- `tooltipState`: Which tooltips are shown, their content, and position
- `visualGuidesState`: Current visual guides or highlights
- `animationState`: Progress and status of ongoing animations (e.g., typewriter effect, fade)
- `consoleMessages`: Current and queued messages for the player console
- `notificationQueue`: Queue of notifications, ads, or recommendations to display
- `adState`: Whether an internal ad or recommendation is being shown, and its content
- `myList`: List of games the player has saved for quick access
- `onboardingStep`: Current step in the onboarding or walkthrough flow
- `soundSettings`: Mute/unmute, volume
- `uiConfig`: User preferences (e.g., reduced motion, high contrast, tooltips enabled)
- `inputFocus`: Which UI element is currently focused or active
- `transitionState`: Current UI transition/animation in progress
- `errorState`: Any errors to display to the user
- `theme`: Current color scheme or theme

## Interaction with Game State
- Presentation state is updated in response to game state changes (e.g., new round, player action, error).
- Presentation state can also be updated independently (e.g., user toggles sound, skips animation, opens help overlay).
- A single API call can update both game and presentation state for onboarding, testing, or accessibility.


## Entity & Animation Management
- Use entity managers (e.g., cardEntityManager, lifeEntityManager) to manage collections of entities (cards, lives, avatars).
- Managers are registered with the game loop to be updated and rendered while the loop is running.
- A separate AnimationEngine object is also updated by the game loop and manages a queue of AnimationSequences to run in series.
- Each AnimationSequence can use an EntityRegistry to coordinate a sequence of animations on a timeline.

## Best Practices
- Keep presentation state in a dedicated object or store (e.g., in React, use a separate context or reducer).
- Avoid mixing UI state with core game logic or data models.
- Use clear, descriptive property names and document their purpose.

This pattern supports a robust, maintainable, and user-friendly UI for Card Classics, especially as features and complexity grow.
