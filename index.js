var p = require('./parsebody.js')

function timeOut(){
    setTimeout(function(){
        p.getWeather(function(err,str){
            if(err){
                console.log(err);
            }else{
                console.log(str);
            }
        });
        timeOut();
    },10*1000);
}

timeOut();
