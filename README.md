# BudgetBuddy Backend

Production-grade Backend API for BudgetBuddy — a Financial Technology (FinTech) budgeting, savings, analytics, and financial wellness platform.

---

# Overview

BudgetBuddy Backend powers the BudgetBuddy financial platform by providing:

* Secure Authentication
* User Profile Management
* Transaction Processing
* Wallet Management
* Budget Categories
* Savings Goals
* Emergency Fund Tracking
* Savings Challenges
* Loan Simulation
* Investment Simulation
* Reports & PDF Export
* Financial Analytics
* AI Financial Assistant
* Notifications & Alerts
* Scheduled Financial Jobs
* Cloud Media Uploads
* Email Services
* Redis Queue Processing
* Docker Deployment
* Render Cloud Deployment

The system is designed using a **modular architecture** for scalability, maintainability, and production readiness.

---

# Architecture

Frontend (HTML/CSS/JS + Chart.js)
↓
Express API
↓
Controllers
↓
Services
↓
MongoDB + Redis
↓
Cloudinary / Email / Scheduler

---

# Technology Stack

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

## Authentication

* JWT
* bcrypt

## Validation

* Joi

## Storage

* Multer
* Cloudinary

## Queue System

* BullMQ
* Redis

## Documentation

* Swagger
* OpenAPI

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

├── package.json
├── .env
├── .env.example
├── Dockerfile
├── render.yaml
├── README.md

├── src

│
├── server.js
├── app.js

├── config
│
├── middleware
│
├── modules
│
│   ├── auth
│   ├── users
│   ├── transactions
│   ├── wallet
│   ├── categories
│   ├── dashboard
│   ├── goals
│   ├── emergency
│   ├── savings
│   ├── loans
│   ├── investment
│   ├── notifications
│   ├── analytics
│   ├── reports
│   └── assistant

├── services

├── queues

├── jobs

├── docs

└── tests
```

---

# Features

---

## Authentication

### Register

POST

```http
/api/auth/register
```

### Login

POST

```http
/api/auth/login
```

### Current User

GET

```http
/api/auth/me
```

---

## User Management

### Get Profile

```http
GET /api/users/profile
```

### Update Profile

```http
PUT /api/users/profile
```

### Upload Avatar

```http
POST /api/users/avatar
```

Uploads handled via:

* Multer
* Cloudinary

---

## Transactions

### Create Transaction

```http
POST /api/transactions
```

### Get Transactions

```http
GET /api/transactions
```

### Delete

```http
DELETE /api/transactions/:id
```

---

## Wallet

### Summary

```http
GET /api/wallet
```

Returns:

```json
{
"income":0,
"expense":0,
"balance":0
}
```

---

## Categories

### Create

```http
POST /api/categories
```

### List

```http
GET /api/categories
```

---

## Dashboard

### Financial Overview

```http
GET /api/dashboard
```

Returns:

* Balance
* Monthly trends
* Spending breakdown
* Health score

---

## Goals

### Create Goal

```http
POST /api/goals
```

### Contribute

```http
POST /api/goals/:id/contribute
```

### List

```http
GET /api/goals
```

---

## Savings

### Start Challenge

```http
POST /api/savings/start
```

### Progress

```http
GET /api/savings/progress
```

---

## Emergency Fund

### Overview

```http
GET /api/emergency
```

Returns:

```json
{
"target":9000,
"current":4000,
"progress":44
}
```

---

## Loans

### Calculate

```http
POST /api/loans/calculate
```

Input:

```json
{
"amount":10000,
"rate":12,
"years":3
}
```

---

## Investment

### Simulate

```http
POST /api/investments/simulate
```

Input:

```json
{
"principal":1000,
"rate":10,
"years":5
}
```

---

## Reports

### Export PDF

```http
GET /api/reports/pdf
```

### Export CSV

```http
GET /api/reports/csv
```

---

## Analytics

### Insights

```http
GET /api/analytics
```

Returns:

* Financial Score
* Spending Trends
* Recommendations

---

## AI Assistant

### Chat

```http
POST /api/assistant/chat
```

Input:

```json
{
"message":"How can I reduce expenses?"
}
```

---

## Notifications

### Send

```http
POST /api/notifications
```

Supports:

* Email
* Reminders
* Financial alerts

---

# Environment Variables

Create `.env`

```env
PORT=3000

MONGO_URI=

JWT_SECRET=

JWT_EXPIRES=7d

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

EMAIL=
EMAIL_PASS=

REDIS_URL=

FRONTEND_URL=

NODE_ENV=development
```

---

# Installation

Install dependencies

```bash
npm install
```

Run locally

```bash
npm run dev
```

Production

```bash
npm start
```

---

# Docker

Build

```bash
docker build -t budgetbuddy .
```

Run

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

Environment Variables:

* MONGO_URI
* REDIS_URL
* JWT_SECRET
* CLOUDINARY
* EMAIL

---

# Queue System

Queues:

```plaintext
email.queue.js
alert.queue.js
export.queue.js
```

Workers process:

* emails
* exports
* reminders

---

# Security

Implemented:

* Helmet
* Rate Limiting
* Input Sanitization
* JWT
* Role Permissions
* CORS
* Validation

---

# Testing

Run:

```bash
npm test
```

Manual:

Postman Collection:

```plaintext
docs/postman/
```

---

# API Documentation

Swagger:

```plaintext
/api/docs
```

OpenAPI:

```plaintext
docs/openapi.js
```

---

# CI/CD

Pipeline:

```plaintext
GitHub
↓

Render Deploy

↓

Health Check

↓

Production
```

---

# Performance

Optimizations:

* Aggregation Pipelines
* Redis Cache
* Queue Workers
* Pagination
* Async Jobs

---

# Contributors

BudgetBuddy Development Team

---

Version

```plaintext
v1.0.0
```

Last Updated

```plaintext
June 2026
```
