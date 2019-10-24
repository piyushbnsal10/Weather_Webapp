//Libraries

var geocode= require('./utils/geocode')
var forecast= require('./utils/forecast')
var path=require('path')
var hbs=require('hbs')
var express=require('express')
var app=express()

//Directory Path
var publicDirectoryPath=path.join(__dirname,'./public')
var viewsPath=path.join(__dirname,'./templates/views')
var partialsPath=path.join(__dirname,'./templates/partials')

//Setup HandlerBars
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

//Setup Static Page
app.use(express.static(publicDirectoryPath))




// Routing
app.get('',(req,res)=>{
    res.render('index',{
        title: 'Weather ',
        name: 'Piyush Bansal'
    });
})

app.get('/help',(req,res)=>{
    res.render('help')
})

app.get('/About',(req,res)=>{
    res.render('about',{
        name : 'Piyush Bansal'
    })
})

app.get('/weather',(req,res)=>{
    if(!req.query.address)
        return console.log("Enter the Location")
    
    geocode(req.query.address,(error,{latitude, longitude,location}={})=>{
            if(error)
                return res.send({error});
        
            forecast(latitude,longitude,(error,data)=>{
                if(error)
                    return res.send({error});
                res.send({location,data})
                })
        })
})

app.get('*',(req,res)=>{
    res.render('404-page')
})


//Local hosting
app.listen(3000,()=>{
    console.log('Server is running on Port 3000')
});