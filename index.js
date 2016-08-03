var p = require('./parsebody.js')


setTimeout(function(){
    p.getWeather(function(err,str){
        if(err){
            console.log(err);
        }else{
            console.log(str);
        }
    });
},10*1000);
