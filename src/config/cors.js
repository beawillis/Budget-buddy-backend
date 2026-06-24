//cors.js
const corsOptions={

    // Allow requests from the client URL specified in the environment variable
origin:
process.env.CLIENT_URL,

credentials:true

};

module.exports=
corsOptions;