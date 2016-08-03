var p = require('./parsebody.js')

p.getWeather(function(err,str){
    if(err){
        console.log(err);
    }else{
        console.log(str);
    }
})
