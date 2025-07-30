# UI Structure Overview

## Conceptual Model

The UI is organized into two main layers:

---

### 1. Views (Pages/Screens)
- Represent major sections of the app (e.g., Home, Game, Settings, Achievements).
- Each view provides a distinct user context or workflow.
- Views manage layout and coordinate which components are displayed.
- **Orientation Property:** Each view is designed for a specific device orientation (portrait or landscape). The view includes an `orientation` property indicating its intended rendering mode.
- **Global Orientation Handling:** The app has global event listeners that detect 'wrong orientation' events. If the device orientation does not match the view's requirement, a "rotate device" hint view is displayed to guide the user.

---

### 2. UI Components
- Reusable elements within views (e.g., buttons, lists, cards, forms, in-play controls).
- Components handle user interaction, display data, and trigger actions.
- Components can be nested and composed to build complex interfaces.
- **Standalone Entities:** UI components—especially buttons—are designed as entirely standalone entities in the client. Each button has a clear role: triggering an action, executing a command, or invoking a callback. This separation ensures components are modular, testable, and reusable across views.
- **Global Help Icon:** A help icon is incorporated globally across the app, always accessible in a fixed position. When activated, it displays a static set of paragraphs for the current view, explaining what each button does. These explanations are stored as an array per view, making them easy to maintain and update. This feature provides clear, accessible guidance without overwhelming the user and encourages exploration.

---

## Example Structure Diagram

```
App
│
├── HomeView (orientation: portrait)
│   ├── GameList
│   ├── ProfileButton
│   ├── SettingsButton
│   └── HelpIcon
│
├── GameView (orientation: landscape)
│   ├── CardTable
│   ├── ActionButtons
│   ├── PlayerStats
│   └── HelpIcon
│
├── AchievementsView (orientation: portrait)
│   ├── AchievementList
│   ├── BackButton
│   └── HelpIcon
│
└── SettingsView (orientation: portrait)
    ├── ThemeSelector
    ├── MailingListOptInButton
    ├── LegalLinks
    └── HelpIcon
```

---

## Benefits
- Modular, maintainable, and scalable UI.
- Easy to add, update, or reuse components.
- Clear separation of concerns between views and components.
- Responsive to device orientation, improving user experience.
- Standalone components simplify action handling and testing.
- Global help icon provides accessible, non-intimidating guidance for all users.
