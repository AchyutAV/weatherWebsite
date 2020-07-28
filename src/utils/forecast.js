const request = require('request')

const forecast = (latitude, longitude, callback) => {
    
    const url = 'http://api.weatherstack.com/forecast?access_key=d29003145d4fb7a76f7923655e6e8b4a&query='+latitude+','+longitude

    request({url, json: true}, (error, {body}) => {
        if(error){
            callback('unable to connect weather service', undefined)
        }else if(body.error){
            callback('unable to find location', undefined)
        }else{
            callback(undefined ,  "It is currently " + body.current.temperature + " degrees out. There is " + body.current.precip + "% chance of rain.");
        }
    })
}



module.exports = forecast