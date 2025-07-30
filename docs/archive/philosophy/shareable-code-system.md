# Shareable Code System: Access & Rewards

Date: July 29, 2025

## Overview
This document outlines the design and strategy for a shareable code system in Card Classics, enabling partners and community groups to distribute free access and rewards to users via simple, secure codes.

## Core Concept
- 5-digit numeric codes (e.g., “12345”) are a core part of the Card Classics user experience, providing 100,000 possible codes for future-proofing and scalability.
- Codes can unlock benefits: free tokens, temporary access, tournament entry, challenges, or special features.
- Codes are distributed by partners, charities, pubs, players, or through marketing campaigns.
- Players can generate codes to challenge friends, join tournaments, or share access.

## User Experience
- Platform access is exclusively through codes—most players (guests) arrive having received a free code.
- After the play bundle is used up, users are gently nudged to purchase a limited or unlimited play code.
- Every session begins with the splash screen, followed by the enter code screen/option button, then a customized index page.
- The index page adapts and becomes more helpful as the player interacts with the app.
- From the index page, players select a game and navigate to a standardized game menu.
- If the code is specific to a tournament, game, or mode, the interface adapts after code entry to reflect available options.
- On every app or website visit, players are prompted: "Do you have a code?" They can enter a code or click "No" to continue.
- Public endpoint: https://card-classics.com/enter-code with a simple landing page (4 input boxes, submit button).
- Codes can be pasted, typed, or shared verbally—making them accessible and memorable.
- Upon submission, the code is validated and the user is granted access to certain or all games, tournaments, or features for a configurable period (days/weeks/months/years).
- Codes can be used for one-time tournament entry, challenges, or special events. Once used, codes can be recycled or returned to the pool for future use.
- Immediate feedback and reward confirmation.
- Optionally display a thank-you or sponsor message referencing the code provider (e.g., “Thanks to [Local Pub] for supporting Card Classics!”).
- Local businesses or sponsors can donate token bundles to the needy, with their support acknowledged on the landing page or in-app.

## Technical Design
- Codes are unique, time-limited, and can be single-use, multi-use, or recycled for future use.
- Configurable for different rewards (tokens, access, tournament entry, challenges, discounts).
- Bulk generation and tracking for partners, sponsors, and players.
- Security: Prevent brute-force guessing, limit redemptions per user/device, log all redemptions.
- Admin dashboard for code management, analytics, and code pool maintenance.

## Distribution & Impact
- Partners, sponsors, local authorities, and players can purchase or generate bulk play bundles (e.g., 10,000 monthly plays) and distribute codes and the web address to anyone they choose.
- Codes can be printed, emailed, shared verbally, or generated in-app—simple and accessible.
- Supports social good initiatives, viral growth, challenges, and targeted promotions.

## Future Considerations
- Expand code system for event access, special tournaments, seasonal rewards, and new game launches.
- Integrate with analytics to measure impact, optimize distribution, and support community-driven features.

## Notes
- The code system is designed to be flexible, secure, and easy to use for users, partners, and players.
- Codes are a core UX feature, supporting onboarding, challenges, tournaments, viral growth, and inclusivity.
- Supports Card Classics’ mission of community engagement and social good.
