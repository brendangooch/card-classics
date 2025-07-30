# Card Classics: Recommended Diagrams for Design & Documentation

Date: July 30, 2025

## Overview
This document lists the key diagrams to create for Card Classics, supporting design, planning, and communication.

---

## Recommended Diagrams

### 1. App Navigation Flowchart
- Boxes for each view (Main Menu, In-Play View, Achievement View, etc.)
- Lines/arrows showing navigation paths between views

### 2. Wireframes for Each View
- Simple layout sketches for all major views (MVP & launch)
- Show placement of UI components (buttons, panels, cards, lists, etc.)

### 3. UI Component Map
- Diagram showing relationships and hierarchy of UI components
- E.g., which panels appear in which views, shared components

### 4. Game State & Command Flow
- Visualize how game commands are stored, processed, and replayed
- Useful for undo/redo and premium features

### 5. Data Model Diagram
- Entity-relationship diagram for database structure (users, games, codes, tokens, etc.)

### 6. Metrics Dashboard Layout
- Wireframe or mockup of the key metrics dashboard
- Show main metrics, filters, and export options

---


## UI Payloads: YAML Workflow

YAML can be used to author graphic/UI payloads for Card Classics:
- Write UI layouts and component definitions in YAML for readability and easy editing.
- Convert YAML to JSON on the server before sending to the client.
- Client interprets JSON to render the UI declaratively.

Example YAML:
```yaml
in_play_view:
  card_area:
    position: top_center
    size: large
  player_panel:
    position: bottom
    buttons:
      - name: play
      - name: pass
  leaderboard:
    position: right
    visible: true
```

This workflow combines the human-friendliness of YAML with the compatibility of JSON for client rendering.

Recommended tools for editing YAML: VS Code, Sublime Text, online YAML editors.

---

## Next Steps
- Create and update diagrams as the project evolves
- Link diagrams to relevant documentation for easy reference
