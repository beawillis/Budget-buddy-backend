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

console.error(
"Database Connection Error:",
err.message
); //log the error message to the console

if(process.env.NODE_ENV==='production'){
  setTimeout(()=>connectDB(), 5000); //retry after 5 seconds
}else{
  process.exit(1);
}

}

};

module.exports=
connectDB;