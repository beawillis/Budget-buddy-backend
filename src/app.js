const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const hpp = require("hpp");

const sanitize = require("./middlewares/sanitize");
const corsOptions = require("./config/cors");

const app = express();

/* ======================
   ROUTES
====================== */

const authRoutes = require("./modules/auth/auth.routes");
const userRoutes = require("./modules/users/user.routes");
const txRoutes = require("./modules/transactions/transaction.routes");

const dashboard = require("./modules/dashboard/dashboard.routes");
const wallet = require("./modules/wallet/wallet.routes");
const categories = require("./modules/categories/category.routes");

const goals = require("./modules/goals/goal.routes");
const challenge = require("./modules/challenge/challenge.routes");
const emergency = require("./modules/emergency/emergency.routes");
const notifications = require("./modules/notifications/notification.routes");

const reports = require("./modules/reports/report.routes");
const analytics = require("./modules/analytics/analytics.routes");

const assistant = require("./modules/assistant/assistant.routes");

const savings = require("./modules/savings/savings.routes");
const loans = require("./modules/loans/loan.routes");
const investments = require("./modules/investments/investment.routes");

const health = require("./routes/health.routes");

/* ======================
   DOCS
====================== */

const swagger = require("swagger-ui-express");
const YAML = require("yamljs");

const docs = YAML.load("./docs/openapi.yaml");

/* ======================
   MIDDLEWARES
====================== */

const limiter = require("./middlewares/limiter");

if (process.env.NODE_ENV === "production") {
  app.use(limiter);
}

/*
CORS MUST COME FIRST
*/
app.use(cors(corsOptions));

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true
  })
);

app.use(helmet());

//app.use(mongoSanitize());

//app.use(hpp());

//app.use(sanitize);

/* ======================
   REQUEST LOGGER
====================== */

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

/* ======================
   SWAGGER
====================== */

app.use(
  "/api/docs",
  swagger.serve,
  swagger.setup(docs, {
    swaggerOptions: {
      persistAuthorization: true,
      displayRequestDuration: true
    }
  })
);

/* ======================
   HEALTH
====================== */

app.use("/health", health);

/* ======================
   API ROUTES
====================== */

app.use("/api/v1/auth", authRoutes);

app.use("/api/v1/users", userRoutes);

app.use(
  "/api/v1/transactions",
  txRoutes
);

app.use(
  "/api/v1/dashboard",
  dashboard
);

app.use(
  "/api/v1/wallet",
  wallet
);

app.use(
  "/api/v1/categories",
  categories
);

app.use(
  "/api/v1/goals",
  goals
);

app.use(
  "/api/v1/challenge",
  challenge
);

app.use(
  "/api/v1/emergency",
  emergency
);

app.use(
  "/api/v1/notifications",
  notifications
);

app.use(
  "/api/v1/reports",
  reports
);

app.use(
  "/api/v1/analytics",
  analytics
);

app.use(
  "/api/v1/assistant",
  assistant
);

app.use(
  "/api/v1/savings",
  savings
);

app.use(
  "/api/v1/loans",
  loans
);

app.use(
  "/api/v1/investments",
  investments
);

/* ======================
   ROOT
====================== */

app.get("/", (req, res) => {

res.status(200).json({

success: true,

message:
"BudgetBuddy Backend Running"

});

});

/* ======================
   ERROR
====================== */

const error =
require(
"./middlewares/error"
);

app.use(error);

module.exports = app;