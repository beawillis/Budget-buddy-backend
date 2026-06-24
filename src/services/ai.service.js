exports.answer =
(
stats
)=>{

if(
stats.health
===
"At Risk"
){

return{

message:

"Reduce expenses and increase savings."

};

}

if(
stats.health
===
"Moderate"
){

return{

message:

"Maintain current spending."

};

}

return{

message:

"Strong financial health."

};

};