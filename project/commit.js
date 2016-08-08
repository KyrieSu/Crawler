var request = require('request');
var cheerio = require('cheerio');


exports.getNewCommit = function(callback){
    request('https://github.com/KyrieSu/Crawler',function(err,res,body){
        if(err){
            callback(err,'fail in getNewCommit');
            return;
        }
        var $ = cheerio.load(body);
        // convert string into int
        var nowCommit = parseInt($('.num.text-emphasized').text());
        callback(err,nowCommit);
    })
}
