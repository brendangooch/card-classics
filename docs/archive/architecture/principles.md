# Architecture Principles

This document outlines the core architectural principles guiding the design and development of Card Classics.

## Separation of Concerns
- The client is responsible solely for presentation and capturing user input.
- The server is responsible for all game logic and state management.

## Server Architecture
- The server utilizes a functional programming style for its operations.
- An object-oriented domain model forms the core of the application logic, ensuring clarity and extensibility.


## Exception: Simple Single-Player Games

For simple single-player games (such as Clock Patience and other solitaire-style games), game logic may be bundled with the client to reduce server load. This exception is made for efficiency and does not affect the architecture of multiplayer or competitive games.


## Client Architecture Principle

The graphics (presentation) controller is agnostic to the source of game events; it processes events identically whether they originate from the server or the client. This ensures flexibility and maintainability across different game modes and architectures.

These principles ensure maintainability, scalability, and a clear division of responsibilities across the system.
