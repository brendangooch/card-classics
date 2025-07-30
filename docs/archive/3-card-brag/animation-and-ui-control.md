# Animation & UI Control Flow: 3-Card Brag

Date: July 28, 2025

## Animation Sequence Management
- When a game event is received from the domain, the animation engine:
  1. Creates an animation sequence based on state changes in the event data.
  2. Adds the new sequence to the animation queue.
  3. Runs sequences in order as they are shifted from the queue.

## UI Action Control
- The client UI should enable/disable user actions based on the current game state:
  - **Human Player Turn:** Enable relevant UI controls (e.g., swap, knock).
  - **AI/Other Player Turn or Animation Running:** Disable user controls to prevent input.
- The server should include a `currentPlayer` field in each event payload.
- The client checks if `currentPlayer` matches the human player ID before enabling UI actions.
- Optionally, the animation engine can emit events to the UI to toggle controls when a sequence starts/ends.

## Next Steps
- Integrate animation engine with event-driven state updates.
- Ensure UI controls are enabled/disabled based on game state and animation flow.
