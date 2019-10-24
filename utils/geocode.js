var request= require('request')

var geocode=(address,callback)=>{
    var LatLongUrl='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoicGl5dXNoYm5zYWwiLCJhIjoiY2syM25yZXpiMG9tMzNnbXphY2Fjcm5wdiJ9.dQIX5LwvkJ7wXyzXkbP6Tg&limit=1'
    request({url: LatLongUrl, json:true},(err,{body})=>{
        if(err)
            return callback('Unbale to connect to Location service',undefined)
        else if(body.features.length === 0)
            return callback('Unable to find Location',undefined)

        callback(undefined,{
                latitude:body.features[0].center[1],
                longitude:body.features[0].center[0],
                location:body.features[0].place_name})
                })
}

 module.exports=geocode;
// geocode('Delhi',(err,data)=>{
//     if(err)
//         console.log(err)
//     else
//         console.log(data)
// })

