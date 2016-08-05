var request = require('request');

request( { url : 'http://www.cjihrig.com/development/php/hello_cookies.php', method : 'GET',
        header: { 'Cookie' : 'name=Stranger'} },function(err,res,body){
            if(err){
                console.log(err);
            }else{
                console.log(body);
            }
})
