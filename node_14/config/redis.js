const redis=require('redis')
const client=redis.createClient()
const redisConnect=async()=>{
    await client.connect()

    console.log("redis connected!")

}
module.exports={client,redisConnect}