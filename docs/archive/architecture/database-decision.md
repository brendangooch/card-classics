# Database Decision Record

## Current Approach
- Use MongoDB as the primary database for Card Classics during MVP and early development.
- Store game sessions, player data, game state, history, and other flexible or nested domain objects as JSON-like documents.
- Leverage MongoDB's rapid prototyping, schema flexibility, and ease of integration with Node.js.

## Future Plan

## Rationale

## Notes

## Implementation Idea (Data Backup)
- Consider assigning each game a shortID (1-1000) to limit active game instances and minimize storage.
- When exceeding 1000 games, overwrite the oldest (shortID=1), ensuring the game has ended before deletion.
- Use unique IDs for each game alongside shortIDs for efficient lookup and backup strategies.
