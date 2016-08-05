var request = require('request');
var cheerio = require('cheerio');

exports.getinfo = function(url,callback){
    request(url,function(err,res,body){
        if(err || res.statusCode==404){
            callback(err,'404 not founded ~');
            return;
        }else{
            $ = cheerio.load(body);
            var info = {
                title : $('#eow-title').text().split('\n')[1].trim(),
                watch : $('.watch-view-count').text().substring(5).replace(/,/g,'') //global replace
            };
        }
        callback(err,info);
    })
}
