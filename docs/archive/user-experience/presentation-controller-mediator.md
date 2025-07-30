# Presentation Controller / Mediator Pattern

## Purpose

The Presentation Controller (or Mediator) is a central object responsible for translating game events and user actions into updates to the presentation state. It acts as the single point of coordination between the domain/game logic, the presentation state, the animation system, and UI components.

## Responsibilities
- Listen for game events (from the server or domain logic).
- Listen for user actions (UI events, input, commands).
- Translate these events into updates to the presentation state singleton.
- Orchestrate communication between UI components, the animation/sequence manager, and the presentation state.
- Enforce separation between domain/game state and presentation/UI state.
- Optionally, handle side effects such as triggering animations, sounds, or notifications.

## Benefits
- Decouples UI logic from domain/game logic.
- Centralizes presentation state management for easier debugging and testing.
- Enables consistent, predictable UI updates and animation flows.
- Facilitates advanced features (undo/redo, replay, time-travel debugging).

## Example Flow
1. Game event (e.g., card played) is received from the server.
2. Presentation Controller receives the event and updates the presentation state accordingly (e.g., moves card visually, updates UI overlays).
3. Presentation Controller triggers the AnimationManager to animate the card movement.
4. UI components subscribe to presentation state changes and update their rendering.
5. User action (e.g., button click) is handled by the Presentation Controller, which updates the presentation state and/or sends a command to the server.

## Integration with Existing System
- The Presentation Controller sits above the presentation state singleton and below the UI components and animation/entity managers.
- It is the only object allowed to mutate the presentation state directly.
- UI components and animation managers subscribe to presentation state changes but do not modify it directly.
- The domain/game logic communicates with the Presentation Controller via events or commands, not by directly accessing the presentation state.

## Diagram

```
[Domain/Game Logic] <--> [Presentation Controller/Mediator] <--> [Presentation State Singleton]
                                                    |                     |
                                                    v                     v
                                         [Animation Manager]      [UI Components]
```

## Notes
- This pattern is inspired by Flux/Redux (unidirectional data flow) but tailored for a game UI with real-time updates and animations.
- The controller/mediator can be implemented as a class, singleton, or module, depending on your needs.
- Keeping the presentation state and its controller separate from the domain/game logic improves maintainability and testability.
