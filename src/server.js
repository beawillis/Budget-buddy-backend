require("dotenv").config(); //load environment variables from a .env file into process.env
require(
"./modules/jobs/scheduler"
);
const app=require("./app"); //import the express application from app.js

const connectDB=require("./config/db"); //import the connectDB function from db.js to establish a connection to the database

connectDB();

// This line is CRITICAL for Railway
const PORT = process.env.PORT || 8080; 

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});