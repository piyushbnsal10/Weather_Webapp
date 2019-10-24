var request= require('request')

var forecast=(lat,long,callback)=>{
    var getWeatherUrl='https://api.darksky.net/forecast/17c1f7ef33d5fb73c80364dfb22df395/'+lat+','+long
        request({url: getWeatherUrl, json: true}, (err, {body}) =>{
            if(err)
                return callback('Unbale to connect to weather service',undefined)
            else if(body.error)
                return callback('Unable to find Location',undefined)

        callback(undefined,'It is currently '+ body.currently.temperature+' degrees out. There is a '+body.currently.precipProbability+'% chance of rain.')
        })
    }

module.exports=forecast
// forecast(28.66667,77.21667,(err,data)=>{
//     if(err)
//         console.log(err)
//     else
//         console.log(data)
// })
