const cron =
require(
"node-cron"
);

module.exports =

()=>{

cron.schedule(

"0 8 * * *",

()=>{

console.log(

"Daily savings analysis"

);

}

);

};