# Key Metrics Dashboard: Requirements & Design

Date: July 29, 2025

## Overview
A secure, web-based dashboard for monitoring Card Classics key business and operational metrics in real time.

## Core Features
- Display vital metrics:
  - Average cost per game played
  - Total games played
  - Total revenue
  - Total direct costs
  - Active players
  - Token sales and usage
- Time filters (daily, weekly, monthly, custom range)
- CSV export for all metrics
- Visualizations: charts, graphs, and tables

## Security & Access
- Secure login (password, 2FA recommended)
- HTTPS encryption
- Role-based access (admin, accountant, etc.)
- Audit logs for access and changes


## v2.0 Constraints & Environment
- Dashboard runs locally on home PC (localhost or LAN IP only)
- Access restricted to Chrome browser on large-screen PC (50'' TV monitor)
- No multi-user or remote access in v2.0; VPN can be used for secure remote access if needed
- UI design targets large-screen layouts for maximum data visibility


## Thin Client CSV Architecture
- The dashboard is a thin client: it downloads and displays only CSV data from the server.
- No sensitive data is stored on the client; all processing and CSV generation happens server-side.
- The client fetches CSV files periodically or on demand, then visualizes the data (tables, charts, etc.).
- This mirrors the game’s thin client/server model, ensuring simplicity, security, and efficiency.

## Technical Requirements
Responsive web UI (desktop, large-screen focus)
Backend API or static endpoint for CSV data (Node.js/Express recommended)
Data source: live database and/or periodic CSV exports
Automated data refresh (configurable interval)

## Integration & Automation
- Connect to accounting software or export compatible CSVs
- Option to trigger automated reports via email

## Next Steps
- Prototype UI wireframes
- Define API endpoints and data schema
- Plan authentication and security implementation
- Gather feedback and iterate
