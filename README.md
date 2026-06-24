# BudgetBuddy Backend

Production-grade Backend API for BudgetBuddy — a Financial Technology (FinTech) budgeting, savings, analytics, and financial wellness platform.

---

# Overview

BudgetBuddy Backend powers the BudgetBuddy financial platform by providing:

* Secure Authentication (JWT + bcrypt)
* User Profile Management
* Transaction Processing
* Wallet Management
* Budget Categories
* Savings Goals
* Emergency Fund Tracking
* Savings Plans
* Savings Challenges
* Loan Simulation
* Investment Simulation
* Reports & PDF Export
* Financial Analytics
* AI Financial Assistant
* Notifications & Alerts
* Scheduled Financial Jobs
* Cloud Media Uploads (Cloudinary)
* Email Services
* Redis Queue Processing (BullMQ)
* Docker Deployment
* Render Cloud Deployment

The system is designed using a **modular architecture** for scalability, maintainability, and production readiness.

---

# Architecture

```
Frontend (HTML/CSS/JS + Chart.js)
         |
    Express API
         |
    Controllers
         |
      Services
         |
  MongoDB + Redis
         |
Cloudinary / Email / Scheduler
```

---

# Technology Stack

## Backend

* Node.js
* Express.js 5
* MongoDB
* Mongoose

## Authentication

* JWT
* bcrypt

## Validation

* Zod (auth, users, transactions, goals)
* Joi (loans, savings)

## Storage

* Multer
* Cloudinary

## Queue System

* BullMQ
* Redis

## Security

* Helmet
* express-mongo-sanitize
* hpp (HTTP Parameter Pollution protection)
* Custom XSS sanitization
* Rate Limiting
* CORS

## Documentation

* Swagger UI (`/api/docs`)
* OpenAPI 3.0 (`docs/openapi.yaml`)

## Deployment

* Docker
* Render

## Monitoring

* Morgan
* Winston

---

# Project Structure

```plaintext
backend/
|
+-- package.json
+-- .env
+-- .env.example
+-- Dockerfile
+-- render.yaml
+-- README.md
|
+-- docs/
|   +-- openapi.yaml
|
+-- src/
    +-- server.js
    +-- app.js
    |
    +-- config/
    |   +-- cloudinary.js
    |   +-- cors.js
    |   +-- db.js
    |   +-- logger.js
    |   +-- redis.js
    |
    +-- middlewares/
    |   +-- auth.js
    |   +-- error.js
    |   +-- limiter.js
    |   +-- permissions.js
    |   +-- sanitize.js
    |   +-- upload.js
    |   +-- validate.js
    |
    +-- modules/
    |   +-- auth/
    |   +-- users/
    |   +-- transactions/
    |   +-- wallet/
    |   +-- categories/
    |   +-- dashboard/
    |   +-- goals/
    |   +-- challenge/
    |   +-- emergency/
    |   +-- savings/
    |   +-- loans/
    |   +-- investments/
    |   +-- notifications/
    |   +-- analytics/
    |   +-- reports/
    |   +-- assistant/
    |   +-- jobs/
    |
    +-- services/
    |   +-- ai.service.js
    |   +-- analytics.service.js
    |   +-- email.service.js
    |   +-- pdf.service.js
    |
    +-- queues/
    |   +-- alert.queue.js
    |   +-- email.queue.js
    |   +-- export.queue.js
    |
    +-- routes/
        +-- health.routes.js
```

---

# API Endpoints

All API routes use the `/api/v1/` prefix. Protected routes require a JWT token in the `Authorization: Bearer <token>` header.

---

## Authentication

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/api/v1/auth/register` | No | Register a new user |
| POST | `/api/v1/auth/login` | No | Login and receive JWT token |

### Register

```http
POST /api/v1/auth/register
```

```json
{
  "name": "Bea Willis",
  "email": "bea@gmail.com",
  "password": "Password123"
}
```

Response (201):

```json
{
  "user": {
    "_id": "...",
    "name": "Bea Willis",
    "email": "bea@gmail.com",
    "role": "user",
    "theme": "light",
    "preferences": { "currency": "UGX", "notifications": true }
  },
  "token": "eyJhbGciOiJIUzI1NiIs..."
}
```

### Login

```http
POST /api/v1/auth/login
```

```json
{
  "email": "bea@gmail.com",
  "password": "Password123"
}
```

---

## User Management

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/api/v1/users/profile` | Yes | Get current user profile |
| PUT | `/api/v1/users/profile` | Yes | Update user profile |
| POST | `/api/v1/users/avatar` | Yes | Upload user avatar |

Uploads handled via Multer + Cloudinary.

---

## Transactions

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/api/v1/transactions` | Yes | Create a transaction |
| GET | `/api/v1/transactions` | Yes | List all transactions |
| DELETE | `/api/v1/transactions/:id` | Yes | Delete a transaction |

---

## Wallet

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/api/v1/wallet/summary` | Yes | Get wallet summary |

Returns:

```json
{
  "income": 0,
  "expense": 0,
  "balance": 0
}
```

---

## Categories

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/api/v1/categories` | Yes | Create a category |
| GET | `/api/v1/categories` | Yes | List all categories |
| DELETE | `/api/v1/categories/:id` | Yes | Delete a category |

---

## Dashboard

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/api/v1/dashboard` | Yes | Get financial overview |

Returns balance, monthly trends, spending breakdown, and health score.

---

## Goals

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/api/v1/goals` | Yes | Create a savings goal |
| GET | `/api/v1/goals` | Yes | List all goals |
| POST | `/api/v1/goals/:id/deposit` | Yes | Contribute to a goal |

---

## Savings

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/api/v1/savings/start` | Yes | Start a savings plan |
| POST | `/api/v1/savings/deposit` | Yes | Deposit into active savings |
| GET | `/api/v1/savings/status` | Yes | Get savings status |

---

## Challenge

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/api/v1/challenge/start` | Yes | Start a savings challenge |
| GET | `/api/v1/challenge` | Yes | Get current challenge progress |

---

## Emergency Fund

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/api/v1/emergency` | Yes | Get emergency fund overview |

Returns:

```json
{
  "target": 9000,
  "current": 4000,
  "progress": 44
}
```

---

## Loans

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/api/v1/loans/calculate` | No | Calculate loan repayment |
| POST | `/api/v1/loans/save` | Yes | Save a loan calculation |

### Calculate

```http
POST /api/v1/loans/calculate
```

```json
{
  "amount": 1000000,
  "interestRate": 12,
  "term": 3
}
```

Response:

```json
{
  "monthly": 33214.31,
  "total": 1195715.15,
  "interest": 195715.15
}
```

---

## Investments

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/api/v1/investments/simulate` | No | Simulate investment returns |

```json
{
  "principal": 1000,
  "rate": 10,
  "years": 5
}
```

---

## Reports

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/api/v1/reports/export` | Yes (admin) | Export financial report as PDF |

Requires admin role.

---

## Analytics

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/api/v1/analytics/summary` | Yes | Get financial analytics |

Returns income, expense, savings, savings ratio, and financial health rating.

---

## AI Assistant

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/api/v1/assistant/chat` | Yes | Chat with AI financial assistant |

```json
{
  "message": "How can I reduce expenses?"
}
```

---

## Notifications

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/api/v1/notifications` | Yes | List user notifications |

---

## Health

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/` | No | API root status |
| GET | `/health` | No | Health check |

---

# Environment Variables

Create a `.env` file from `.env.example`:

```env
PORT=3000
NODE_ENV=development

MONGO_URI=mongodb://localhost:27017/budgetbuddy
CLIENT_URL=http://your-client-url.com

JWT_SECRET=your_jwt_secret
JWT_EXPIRES=2d

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

EMAIL=your_email@gmail.com
EMAIL_PASS=your_email_password

REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_USERNAME=default
REDIS_PASSWORD=your_password
```

> **Note:** Redis is optional for local development. The server starts without it — only queue-based features (email jobs, alert processing) require Redis.

---

# Installation

Install dependencies:

```bash
npm install
```

Run locally (with hot reload):

```bash
npm run dev
```

Production:

```bash
npm start
```

---

# Docker

Build:

```bash
docker build -t budgetbuddy .
```

Run:

```bash
docker run -p 3000:3000 budgetbuddy
```

---

# Render Deployment

## Build Command

```bash
npm install
```

## Start Command

```bash
npm start
```

### Required Environment Variables

* `MONGO_URI`
* `JWT_SECRET`
* `JWT_EXPIRES`
* `CLOUDINARY_CLOUD_NAME`
* `CLOUDINARY_API_KEY`
* `CLOUDINARY_API_SECRET`
* `REDIS_HOST`
* `REDIS_PORT`
* `REDIS_PASSWORD`
* `EMAIL`
* `EMAIL_PASS`
* `CLIENT_URL`

---

# Queue System

Queues (requires Redis):

```plaintext
email.queue.js    — sends email notifications
alert.queue.js    — financial alerts and reminders
export.queue.js   — PDF report generation
```

---

# Security

* **Helmet** — HTTP security headers
* **Rate Limiting** — brute-force protection on sensitive routes
* **Input Sanitization** — XSS prevention (script tags, event handlers, query params)
* **express-mongo-sanitize** — NoSQL injection prevention
* **hpp** — HTTP Parameter Pollution protection
* **JWT** — stateless authentication
* **Role-based Permissions** — admin/user roles
* **CORS** — configurable origin whitelist
* **Validation** — Zod and Joi schema validation on all input routes

---

# API Documentation

Interactive Swagger UI:

```
http://localhost:3000/api/docs
```

OpenAPI 3.0 specification:

```
docs/openapi.yaml
```

The Swagger UI includes all 27 endpoints with full request/response schemas, JWT authentication (click "Authorize"), and tag-based grouping.

---

# CI/CD

```
GitHub Push
    |
Render Auto-Deploy
    |
Health Check (/health)
    |
Production
```

---

# Performance

Optimizations:

* MongoDB Aggregation Pipelines
* Redis-backed Queue Workers
* Pagination support
* Async background jobs
* Scheduled tasks (reminders, health checks)

---

# Contributors

BudgetBuddy Development Team

---

Version: `v1.0.0`

Last Updated: `June 2026`
