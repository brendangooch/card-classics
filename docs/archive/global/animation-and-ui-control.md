# Animation & UI Control System: Global Design

Date: July 28, 2025

## Event-Driven Animation Sequences

- Each animation sequence stores a list of events to emit at specific intervals or keyframes.
- A message broker (event dispatcher) listens for these events and calls the correct methods on entities or UI components at the right time.
- This replaces the need for complex command objects and enables modular, flexible, and maintainable animation logic across all games.

## Global Speed Control
- The game loop exposes a `setSpeed()` method to adjust the fixed delta time for all entity updates.
- Dynamically alters the speed of the entire game world and all animations through a single parameter.
- Supports accessibility, user preference, and debugging.

## State Synchronization & Snapshot Rendering
- The presentation layer can accept any game state (from start to game over) and render it accurately.
- Offers options to animate transitions between snapshots or instantly render the current state.
- Supports recovery from disconnects, fast-forwarding, and flexible UI/UX.

## UI Action Control
- Enable/disable user actions based on the current game state:
  - **Human Player Turn:** Enable relevant UI controls.
  - **AI/Other Player Turn or Animation Running:** Disable user controls to prevent input.
- The server includes a `currentPlayer` field in each event payload.
- The client checks if `currentPlayer` matches the human player ID before enabling UI actions.
- Animation engine can emit events to the UI to toggle controls when a sequence starts/ends.

## Next Steps

---

## Extensibility & Multi-Game Support

---

## Declarative Graphics & UI Payloads
- On game creation or join, the server sends a graphics/UI payload containing all data required to render the game (table layout, positions, UI components, properties, etc.).
- The client receives this payload, instantiates the UI, and wraps each component in client-side logic for animations and effects.
- Both the graphical layout and UI controls (buttons, panels, indicators) can be described declaratively, allowing for flexible and dynamic interfaces.
- Example payload structure:
  ```json
  {
    "version": "1.0",
    "layout": { /* table layout, positions, etc. */ },
    "ui": [
      { "type": "button", "id": "knock", "label": "Knock", "position": {"x":100,"y":400}, "visible": true },
      { "type": "panel", "id": "console", "position": {"x":0,"y":500}, "size": {"width":500,"height":100} }
    ],
    "theme": "classic-green"
  }
  ```

## Structuring & Versioning Payloads





To support rapid addition of new UI component types, themes, or behaviors, the client uses an extensible registry pattern. This registry is a map of component types to their rendering logic (factory functions or classes). New types can be registered dynamically at runtime, allowing the client to interpret new payloads without redeployment.

**Example: Dynamic Component Registry in TypeScript**

```ts
// Component registry
const componentRegistry: Record<string, (props: any) => UIComponent> = {
  button: createButton,
  panel: createPanel,
  // ...other built-in types
};

// Register a new type at runtime
function registerComponent(type: string, factory: (props: any) => UIComponent) {
  componentRegistry[type] = factory;
}

// Usage: interpreting the payload
function instantiateComponent(payloadItem: any) {
  const factory = componentRegistry[payloadItem.type];
  if (!factory) throw new Error(`Unknown component type: ${payloadItem.type}`);
  return factory(payloadItem);
}

// Example: dynamically add a "slider" component
registerComponent("slider", createSlider);
```

This pattern allows new UI types or themes to be loaded from the server, plugins, or config files. The payload can reference these new types, and the client will know how to render them, supporting future extensibility and minimal updates.
