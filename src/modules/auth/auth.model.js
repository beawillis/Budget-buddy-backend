const mongoose =require("mongoose"); //import mongoose from "mongoose";

// define the User schema using mongoose.Schema
const UserSchema =new mongoose.Schema(

{

name:{
type:String,
required:true
},

email:{

type:String,

required:true,

unique:true,

lowercase:true

},

password:{

type:String,

required:true

},

avatar:{

url:String,

publicId:String

},

theme:{

type:String,

default:"light"

}

},

{

timestamps:true

}

);

module.exports =mongoose.model("User",UserSchema); //export the User model based on the UserSchema