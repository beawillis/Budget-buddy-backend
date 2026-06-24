const mongoose=require("mongoose"); //import mongoose from "mongoose";

//connect to the database
const connectDB=async()=>{

try{

    
await mongoose.connect(
process.env.MONGO_URI
);

console.log(
"Database Connected Successfully"
);

}

catch(err){ //catch any error that occurs during the connection process

console.log(
err.message
); //log the error message to the console

process.exit(1); //exit the process with a failure code (1) to indicate that the connection failed

}

};

module.exports=
connectDB;