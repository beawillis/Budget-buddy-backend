---
name: testing-budget-buddy-backend
description: Test the Budget Buddy Express.js backend end-to-end. Use when verifying API endpoints, Swagger docs, auth, validation, or other backend changes.
---

# Testing Budget Buddy Backend

## Prerequisites

1. **MongoDB** must be running locally:
   ```bash
   sudo systemctl start mongod
   ```
2. **Dependencies** installed:
   ```bash
   npm install
   ```
3. **Environment file** — copy `.env.example` to `.env` if not present. The server needs `MONGODB_URI` and `JWT_SECRET` at minimum.

## Starting the Server

```bash
node src/server.js
```

- Runs on port 3000 by default (or `PORT` env var)
- Redis errors on startup are non-fatal — queue/email features won't work but the server runs fine
- Wait for "Database Connected Successfully" before testing

## Key Test Endpoints

| Endpoint | Method | Auth | Notes |
|---|---|---|---|
| `/api/docs` | GET | No | Swagger UI |
| `/health` | GET | No | Health check |
| `/api/v1/auth/register` | POST | No | `{name, email, password}` |
| `/api/v1/auth/login` | POST | No | `{email, password}` |
| `/api/v1/loans/calculate` | POST | No | `{amount, interestRate, term}` |
| `/api/v1/goals` | POST | Yes | Zod-validated: `{name, target}` |
| `/api/v1/transactions` | POST | Yes | Joi-validated |
| `/api/v1/categories` | POST/GET | Yes | CRUD |

## Authentication for Protected Endpoints

1. Register or login to get a JWT token from the response
2. Pass it as `Authorization: Bearer <token>` header
3. In Swagger UI, click "Authorize" button and paste the token

## Known Gotchas

- **Express 5 compatibility**: `req.query` is read-only (getter-only property). Any middleware or code that tries to assign to `req.query` will crash with "Cannot set property query". This affects `express-mongo-sanitize` middleware — it must be configured to skip query sanitization or use the `.sanitize()` function directly on `req.body`/`req.params` only.
- **Dual validation frameworks**: Auth and transaction routes use Joi; goal routes use Zod. The `validate.js` middleware supports both via `.validate()` (Joi) and `.safeParse()` (Zod) detection.
- **All routes use `/api/v1/` prefix** — the old `/api/` prefix (savings, loans, investments) was migrated.
- **No test suite** exists in the repo — testing is manual via curl or Swagger UI.
- **Redis** is optional. If not running, BullMQ queue features and email notifications won't work, but the server starts normally.

## Testing Swagger Documentation

1. Navigate to `http://localhost:3000/api/docs/`
2. Verify the title reads "BudgetBuddy API"
3. Check for "Authorize" button (proves JWT securitySchemes configured)
4. Expand an endpoint to verify request body schema and response schema are shown
5. The Schemas section at the bottom should list all model schemas (User, Transaction, Goal, etc.)

## Devin Secrets Needed

None required for local testing. The `.env.example` has sensible defaults for local development.
