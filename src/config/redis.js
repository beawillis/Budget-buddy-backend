const Redis =
require(
"ioredis"
);

const redis =
new Redis({

host:
process.env.REDIS_HOST,

port:
Number(
process.env.REDIS_PORT
),

username:
process.env.REDIS_USERNAME,

password:
process.env.REDIS_PASSWORD,

maxRetriesPerRequest:
1,

retryStrategy(){
return null;
}

});

redis.on(

"connect",

()=>{

console.log(

"Redis Connected"

);

}

);

redis.on(

"error",

(err)=>{

console.log(

"Redis Error:",

err.message

);

}

);

module.exports =
redis;