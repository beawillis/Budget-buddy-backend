//logger.js
const winston=
require("winston");

//create a logger instance using winston
module.exports=
winston.createLogger({

transports:[

    //log to the console
new winston.transports.Console()

]

});