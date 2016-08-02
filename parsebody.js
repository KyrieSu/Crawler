var request = require('request');

function parse(html){
    console.log(html);
}


request('https://www.google.com.tw',function(err,res,body){
    if(err){
        console.log(err);
    }else{
        parse(body);
    }
});
