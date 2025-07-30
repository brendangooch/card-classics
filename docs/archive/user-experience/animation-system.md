# Animation System Design

This document describes the animation system architecture for Card Classics, including its integration with a multi-canvas, layered rendering approach.

## Overview
- The animation system is built on a game loop that routinely updates, interpolates, and renders a collection of screen entities.
- Rendering occurs across multiple layered `<canvas>` elements, each responsible for a specific visual layer (e.g., background, cards, effects, overlays).

## Entities & Dynamic Objects
- Each screen entity is composed of one or more dynamicObjects, which store current values that change over time (e.g., position, scale, opacity).
- Entity methods are either:
  - **Reactive:** Responding to user interaction (e.g., drag, click, tap)
  - **Command-based:** Returning a command object that can be executed on demand by an animation sequence

## AnimationManager & Sequences
- The AnimationManager maintains a queue of animationSequences.
- Each animationSequence is a series of commands or transitions to be executed in order.
- The AnimationManager runs (updates) sequences in series until the queue is empty.
- This ensures that complex, multi-step animations (e.g., dealing cards, collecting chips) play smoothly and in the correct order.

## Game Loop & Rendering
- The game loop updates all dynamicObjects and entities, interpolates their values, and triggers redraws on the appropriate canvas layers.
- Only the relevant canvas layer is redrawn for most actions, improving performance and separation of concerns.

## Event Ordering & Predictability
- As long as game events are received in the correct order, the animation system renders all actions correctly and predictably.
- The system is robust to both user-driven and programmatic (AI or server) events.

## Benefits
- Modular, extensible, and easy to maintain
- Supports rich, layered visual effects and smooth transitions
- Decouples animation logic from game logic and UI controls

This architecture enables a visually engaging, responsive, and maintainable animation system for Card Classics.
