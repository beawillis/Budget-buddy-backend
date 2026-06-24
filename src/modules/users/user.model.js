const mongoose = require("mongoose"); //import mongoose from "mongoose";

// define the User schema using mongoose.Schema
const userSchema =
new mongoose.Schema(

{

name:{

type:String,

required:true,

trim:true

},

email:{

type:String,

required:true,

unique:true,

lowercase:true,

trim:true

},

password:{

type:String,

required:true

},

avatar:{

url:{
type:String
},

publicId:{
type:String
}

},

theme:{

type:String,

enum:[
"light",
"dark"
],

default:"light"

},

preferences:{

currency:{

type:String,

default:"UGX"

},

notifications:{

type:Boolean,

default:true

}

},

financialProfile:{

occupation:String,

education:String,

region:String,

creditScore:{

type:Number,

default:500

}

},

role:{

type:String,

enum:[
"user",
"admin"
],

default:"user"

},

firebaseUid:String

},

{

timestamps:true

}

);

module.exports =
mongoose.model(
"User",
userSchema
);