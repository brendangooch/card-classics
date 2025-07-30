# Data Model & Schema Documentation

Date: July 28, 2025

## Overview
This document describes the core data models and database schema for Card Classics, supporting game logic, user management, and extensibility.

## Goals
- Define clear, maintainable data structures
- Support game state, user profiles, and metrics
- Enable future expansion and analytics

## Core Data Models

### User
- `userId`: string (ShortID or UUID)
- `username`: string
- `email`: string
- `passwordHash`: string
- `profile`: { avatar, preferences, ... }
- `points`: number
- `gamesPlayed`: number
- `createdAt`: date
- `lastLogin`: date

### Game
- `gameId`: string
- `type`: string (e.g., "3-card brag")
- `state`: string (waiting, active, finished)
- `players`: [userId]
- `currentTurn`: userId
- `deck`: [card]
- `communityCards`: [card]
- `playerHands`: { userId: [card] }
- `actions`: [action]
- `createdAt`: date
- `updatedAt`: date

### Card
// Card is referenced by a single 'type' property as an integer (0-52)
`type`: number (0-52)

### Action/Event
- `actionId`: string
- `gameId`: string
- `userId`: string
- `type`: string (swap-single, swap-all, knock, etc.)
- `payload`: object
- `timestamp`: date

## Schema Design
- Use MongoDB collections for users, games, actions/events
- Index on userId, gameId, and timestamps for performance
- Store game state snapshots for recovery and analytics
- Use references for relationships (userId in games, etc.)

## Best Practices
- Document all schema changes and migrations
- Validate data on both client and server
- Use versioning for major schema updates

## Future Considerations
- Support for additional game types and features
- Advanced analytics and reporting
- Data export and backup strategies

## References
- [MongoDB Data Modeling](https://www.mongodb.com/docs/manual/core/data-modeling-introduction/)
- [Schema Design Best Practices](https://www.mongodb.com/developer/products/mongodb/schema-design-best-practices/)
