
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
