const express=require("express");
const cors=require("cors");
const helmet=require("helmet");
const mongoSanitize=require("express-mongo-sanitize");
const hpp=require("hpp");

const sanitize=require("./middlewares/sanitize");
const corsOptions=require("./config/cors");
const app=express(); //create an instance of the express application

const authRoutes =require("./modules/auth/auth.routes");//import the auth routes from auth.routes.js
const userRoutes =require("./modules/users/user.routes");//import the user routes from user.routes.js
const txRoutes = require("./modules/transactions/transaction.routes");//import the transaction routes from transaction.routes.js

const dashboard = require("./modules/dashboard/dashboard.routes");//import the dashboard routes from dashboard.routes.js
const wallet = require("./modules/wallet/wallet.routes");//import the wallet routes from wallet.routes.js
const categories = require("./modules/categories/category.routes"); //import the category routes from category.routes.js

const goals =
require(
"./modules/goals/goal.routes"
);

const challenge =
require(
"./modules/challenge/challenge.routes"
);

const emergency =
require(
"./modules/emergency/emergency.routes"
);

const notifications =
require(
"./modules/notifications/notification.routes"
);

const reports =
require(
"./modules/reports/report.routes"
);

const analytics =
require(
"./modules/analytics/analytics.routes"
);

const assistant =
require(
"./modules/assistant/assistant.routes"
);

const swagger =
require(
"swagger-ui-express"
);

const YAML =
require(
"yamljs"
);

const docs =

YAML.load(
"./docs/openapi.yaml"
);

const limiter =
require(
"./middlewares/limiter"
);

const savings=
require(
"./modules/savings/savings.routes"
);

const loans=
require(
"./modules/loans/loan.routes"
);

const investments=
require(
"./modules/investments/investment.routes"
);

const health = require("./routes/health.routes");

if(process.env.NODE_ENV==="production"){
app.use(limiter);}

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

app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json());
app.use((req, res, next) => {
  if (req.body) req.body = mongoSanitize.sanitize(req.body);
  if (req.params) req.params = mongoSanitize.sanitize(req.params);
  next();
});
app.use(hpp());
app.use(sanitize);
app.use("/health",health); //use the health routes for any requests to /health


app.use("/api/v1/users",userRoutes); //use the user routes for any requests to /api/v1/users
app.use("/api/v1/auth",authRoutes); //use the auth routes for any requests to /api/v1/auth
app.use("/api/v1/transactions",txRoutes); //use the transaction routes for any requests to /api/v1/transactions
app.use("/api/v1/wallet",wallet); //use the wallet routes for any requests to /api/v1/wallet
app.use("/api/v1/categories",categories); //use the category routes for any requests to /api/v1/categories
app.use("/api/v1/dashboard",dashboard); //use the dashboard routes for any requests to /api/v1/dashboard
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


app.get("/",(req,res)=>{
res.json({

success:true,

message:
"BudgetBuddy Backend Running"

});

}
);

const error =
require(
"./middlewares/error"
);

app.use(
error
);

module.exports=app;