let redis = require('redis');

let client = redis.createClient()
client.on('connect',function(){
    console.log('connected to redis')
})

module.exports = client