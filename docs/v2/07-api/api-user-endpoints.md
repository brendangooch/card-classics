
# API Endpoint Documentation: User

Date: July 28, 2025

## User Endpoints (MVP)

### POST /api/v1/register
- Registers a new user.
- Request Body:
  ```json
  {
    "email": "user@example.com",
    "password": "securePassword123",
    "guestData": { /* optional guest session data */ }
  }
  ```
- Response:
  ```json
  {
    "userId": "u12345",
    "tokens": 10
  }
  ```

### POST /api/v1/login
- Authenticates user.
- Request Body:
  ```json
  {
    "email": "user@example.com",
    "password": "securePassword123"
  }
  ```
- Response:
  ```json
  {
    "userId": "u12345",
    "authToken": "jwt.token.here"
  }
  ```

### GET /api/v1/user
- Gets user profile (requires authentication).
- Response:
  ```json
  {
    "userId": "u12345",
    "email": "user@example.com",
    "tokens": 10,
    "stats": { /* player stats */ }
