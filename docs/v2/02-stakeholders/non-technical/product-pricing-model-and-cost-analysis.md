# Product Pricing Model & Cost Analysis

Date: July 29, 2025

## Overview
This document outlines the pricing model for Card Classics, including direct costs, commission structure, and margin considerations for online gaming.

## Direct Costs per Game
- **Server/Hosting:** Cloud compute, bandwidth, storage (estimate per active game session)
- **Payment Processing:** Transaction fees (typically 2–5%)
- **Support/Moderation:** Staff or automated systems
- **Licensing/Compliance:** If applicable
- **Marketing/Commission:** 25% sales commission for influencer/affiliate partnerships

## Example Cost Breakdown (per game)
- Server/Hosting: $0.01–$0.10
- Payment Processing: $0.05 (on $1 sale)
- Support/Moderation: $0.01
- Marketing/Commission: $0.25 (on $1 sale)
- Total Direct Cost: ~$0.32–$0.41

## Reasonable Margin in Online Gaming
- Industry margins vary widely; 30–60% is typical for digital games after direct costs and commissions.
- Example: If a game is sold for $1, and direct costs are $0.40, a margin of $0.60 (60%) is reasonable.


## Pricing Logic & Revenue Streams
- Standard: 1 token = 1 tournament game; all other play is free.
- Token price: ~10p GBP on average.
- Example income: 2-player game = 20p, 6-player = 60p, 100-player = £10.
- Revenue sources: token sales, subscriptions, bulk purchases, sponsored codes, and more.
- Pricing may be adjusted for bundles, tournaments, or premium features.



## Key Business Metrics
- **Average Cost per Game Played:** The most vital financial metric to track; helps guide pricing and cost control decisions.
- **Total Games Played:** Useful for scaling and growth analysis.
- **Total Revenue & Direct Costs:** For margin and profitability tracking.
- **Guest-to-User Conversion Rate:** Track how many guests register as users; key for growth and engagement.

## Analytics API & Data Capture
- All client-side metrics (registrations, games played, purchases, etc.) are sent to the server via dedicated analytics API routes.
- UUIDs include timestamps, enabling charting of new visits and registrations by period.
- Since every game instance is hosted on the server, game data can be captured directly without cluttering the client with monitoring code.

## Accounting & Automation
- After MVP, set up formal accounts with an accountant using spreadsheet software.
- Automate data collection and export key metrics as CSV files for easy analysis and reporting.
- Use automation to minimize manual work and improve accuracy.

## Next Steps
- Refine cost estimates with real data
- Monitor margins and adjust pricing as needed
