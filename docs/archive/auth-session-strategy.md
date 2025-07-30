# Authentication & Session Management Strategy

Date: July 28, 2025

## Guest Sessions
- Generate a unique UUID for each device/session (using `uuid` or `nanoid`).
- Store UUID in localStorage or a secure cookie.
- Use UUID to identify guest players in games, tournaments, and for tracking metrics.
- Guest progress and stats are stored locally; can participate in tournaments with free tokens.
- On registration, serialize guest data to JSON and send to API for migration to a user account.

## Registered Users
- Registration is optional until users want to purchase tokens, sync data, or access advanced features.
- On login, client fetches user state from the server using credentials.
- User data, purchases, and progress are stored securely on the backend and accessible from any device.
- Registration rewards users with bonus tokens for tournaments.

## Tournament Participation
- Guests can use free tokens for tournaments.
- Registration required for purchasing token bundles or subscriptions, ensuring secure storage and cross-device access.
- Consider offering both one-time token bundles and subscription options for tournament play.

## Third-Party Authentication (OAuth)
- Offer Facebook/Google sign up and login for frictionless onboarding, especially for users coming from social media ads.
- Recommended libraries/tools: `passport.js` (with `passport-facebook`, `passport-google-oauth`), `auth0`, `firebase auth`.

## Data Sync & Migration
- On registration, merge guest UUID data with the new user account.
- On subsequent logins, sync user data from the server to the client.

## Security & Privacy
- Optionally rotate UUIDs for guest sessions to enhance privacy.
- Validate and securely store all authentication/session data.

---

## Next Steps
- Implement guest session management and UUID generation.
- Integrate registration, login, and OAuth flows.
- Design and test guest-to-user data migration and sync.
- Document user data storage, privacy, and security policies.
