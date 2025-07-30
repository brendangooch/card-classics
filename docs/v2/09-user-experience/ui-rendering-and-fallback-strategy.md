# Card Classics: UI Rendering & Fallback Strategy

Date: July 30, 2025

## Overview
This document describes the strategy for rendering the Card Classics UI, including feature detection, canvas/HTML fallback, and SEO considerations.

---


## Rendering Strategy
- The optional fullscreen/immersive view acts as the trigger for launching the fullscreen canvas UI system.
- If the user enables fullscreen mode, the client app takes over with a canvas-driven UI for a consistent, immersive experience.
- If the user does not enable fullscreen, the UI is driven by static HTML, CSS, and JavaScript for standard navigation and interaction.
- Feature detection ("sniffing") is used to check for canvas support and required browser features.
- If canvas or required features are unavailable, the app falls back to the standard HTML/CSS menu interface.
- The initial HTML page is fully rendered and indexable for SEO, with content hidden or minimal until the client app takes control.

---


## User Experience
- Users open the browser, navigate to card-classics.com, and are prompted to enter fullscreen mode for gamemode.
- Fullscreen mode disables most default browser scrolling and gesture behaviors, making swipe and tap detection for game actions much more reliable—especially on Apple devices.
- Players can swipe or tap to select cards without interference from browser UI.
- The app adapts to device capabilities, providing the best possible experience for each user.
- If a feature is unavailable, users are advised to try a different device or use the fallback interface.

---

## Technical Notes
- Use feature detection libraries or custom checks for canvas, fullscreen API, and other modern features.
- Maintain accessibility and usability in both canvas and HTML/CSS modes.
- Update strategy as new devices and browser features emerge.

---

## Next Steps
- Implement feature detection and fallback logic in the client app
- Test rendering on a wide range of devices and browsers
- Monitor user feedback and adjust strategy as needed
