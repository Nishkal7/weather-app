const request = require('request')

const forecast = (lat,long,callback) => {
    const url = 'https://api.darksky.net/forecast/8baf51dcc78cb0217490e928b1d1b66e/'+lat+','+long
    request({url : url,json : true},(error,response) => {
        if(error){
            callback('Unable to connect to weather services',undefined)
        }else if(response.body.error){
            callback('Unable to find location',undefined)      
        }else{
            callback(undefined,{
                forecast: response.body.currently.summary+'. It is currently '+response.body.currently.temperature+' degrees out.The High today is '+response.body.daily.data[0].temperatureHigh+' with a low of '+response.body.daily.data[0].temperatureLow +'. There is '+response.body.currently.precipProbability+'% chance of rain'
            })
        }
    })
}

module.exports= forecast