require("dotenv").config(); //load environment variables from a .env file into process.env
require(
"./modules/jobs/scheduler"
);
const app=require("./app"); //import the express application from app.js

const connectDB=require("./config/db"); //import the connectDB function from db.js to establish a connection to the database

connectDB();

const PORT=process.env.PORT||3000;

app.listen(PORT,()=>{console.log(`Server running on ${PORT}`);

}

);