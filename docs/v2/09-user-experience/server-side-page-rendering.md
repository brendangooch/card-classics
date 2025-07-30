# Server-Side Page Rendering

## Overview
Page rendering logic is handled on the server. The client requests data/layout for each view, and displays a loader overlay until the fetch resolves.

## Minimal Data Approach
- The server typically serves only the minimal data required for each view—often just the content for a single `<div>` element.
- On each page switch, the client updates the content of this main container dynamically, rather than reloading the entire page.
- This keeps the client lightweight, fast, and easy to maintain.
- All navigation, rendering, and state management can be handled by swapping the inner content of the main container.

## Benefits
- Fast, consistent UI updates.
- Supports thin-client philosophy.
- Reduces client complexity.

## Loader Overlay
- Displayed during data fetches.
- Simple, unobtrusive design.

## Future Option: Download for Offline Play
- Offer users the ability to download the game for offline play (for a small fee).
- Downloaded version caches all necessary assets and data locally.

## Implementation Notes
- Validate button labels server-side for unique shortcuts.
- Personalize views based on user data.
