# BudgetBuddy Backend — Technical Documentation

Version: 1.0
Last Updated: June 2026

---

# 1. Project Overview

BudgetBuddy Backend is a production-oriented financial management API built to support the BudgetBuddy financial technology platform.

The backend powers:

* Authentication
* User profiles
* Transactions
* Wallet management
* Categories
* Financial analytics
* Goals tracking
* Savings challenges
* Emergency fund monitoring
* Loans
* Investment simulation
* Reports & exports
* Notifications
* AI financial assistance
* Background jobs
* Queue processing
* Cloud storage
* Deployment automation

---

# 2. Business Goal

Enable users to:

* Track spending
* Build savings habits
* Monitor financial health
* Improve decision-making
* Receive intelligent financial alerts
* Simulate loans and investments
* Generate financial reports

---

# 3. Technology Stack

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

## Authentication

* JWT
* bcrypt

## File Storage

* Multer
* Cloudinary

## Queue & Cache

* Redis
* BullMQ

## Notifications

* Nodemailer

## Documentation

* OpenAPI
* Swagger UI

## Deployment

* Docker
* Render
* GitHub Actions

---

# 4. Project Structure

```plaintext
backend/

package.json
Dockerfile
render.yaml
README.md
.env
.env.example

src/

server.js
app.js

config/
db.js
cors.js
cloudinary.js
firebase.js
logger.js

middleware/
auth.js
validate.js
sanitize.js
upload.js
error.js
limiter.js
permissions.js

modules/

auth/
users/

transactions/
wallet/
categories/

dashboard/

goals/
savings/
emergency/

loans/
investments/

notifications/

reports/
analytics/

assistant/

services/

queues/

jobs/

docs/

openapi.js

tests/
```

---

# 5. System Architecture

Client

↓

Frontend

↓

Express API

↓

Middleware Layer

↓

Business Modules

↓

MongoDB

↓

Redis Queue

↓

External Services

---

# 6. Environment Variables

```env
PORT=3000

MONGO_URI=

JWT_SECRET=

JWT_EXPIRES=7d

CLOUD_NAME=
API_KEY=
API_SECRET=

REDIS_URL=

EMAIL=
EMAIL_PASS=

CLIENT_URL=

NODE_ENV=development
```

---

# 7. Authentication Flow

Register

↓

Hash Password

↓

Save User

↓

Generate JWT

↓

Login

↓

Issue Access Token

↓

Protected Routes

---

# 8. Core Modules

## Authentication

Endpoints

POST /api/auth/register

POST /api/auth/login

POST /api/auth/logout

---

## Users

GET /api/users/profile

PUT /api/users/profile

POST /api/users/upload

---

## Transactions

POST /api/transactions

GET /api/transactions

PUT /api/transactions/:id

DELETE /api/transactions/:id

---

## Wallet

GET /api/wallet

GET /api/wallet/summary

---

## Categories

POST /api/categories

GET /api/categories

DELETE /api/categories/:id

---

## Dashboard

GET /api/dashboard

---

## Goals

POST /api/goals

POST /api/goals/contribute

GET /api/goals

---

## Savings

POST /api/savings/start

POST /api/savings/deposit

GET /api/savings/status

---

## Emergency Fund

GET /api/emergency

---

## Loans

POST /api/loans/calculate

POST /api/loans/save

GET /api/loans

---

## Investments

POST /api/investments/simulator

POST /api/investments/save

GET /api/investments

---

## Reports

GET /api/reports/pdf

GET /api/reports/csv

---

## Analytics

GET /api/analytics

---

## Notifications

GET /api/notifications

POST /api/notifications/email

---

## Assistant

POST /api/assistant/chat

---

# 9. Middleware

auth.js

JWT verification

validate.js

Joi validation

sanitize.js

Input sanitation

upload.js

Multer uploads

limiter.js

Rate limiting

error.js

Central error handler

permissions.js

Access control

---

# 10. Services

analytics.service

financial calculations

pdf.service

report generation

email.service

email sending

storage.service

cloud uploads

ai.service

assistant logic

notification.service

alert engine

---

# 11. Queue Workers

email.queue

export.queue

alert.queue

---

# 12. Scheduled Jobs

health.job

financial health score

savings.job

daily reminders

reminders.job

bill notifications

---

# 13. Security

Helmet

JWT

Rate limiting

Input sanitation

Password hashing

Protected uploads

Cloud storage

Environment variables

---

# 14. Deployment

Build:

```bash
docker build -t budgetbuddy .
```

Run:

```bash
docker run -p 3000:3000 budgetbuddy
```

Deploy:

Push GitHub

↓

Create Render Service

↓

Add Environment Variables

↓

Deploy

---

# 15. Testing

Run:

```bash
npm run dev
```

Test:

Postman

Swagger

---

# 16. Future Improvements

Open Banking

Plaid Integration

AI Forecasting

Recurring Budgets

Mobile App

Investment Portfolio Tracking

Family Accounts

---

# 17. Contributors

Backend Team

BudgetBuddy Project

BETECHIFIED Capstone 2026
