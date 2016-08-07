var request = require('request');
var cheerio = require('cheerio');

var commit_count = 24;

exports.getNewCommit = function (callback){
    request('https://github.com/KyrieSu/Crawler',function(err,res,body){
        if(err){
            callback(err,'fail in getNewCommit');
            return;
        }
        $ = cheerio.load(body);
        // convert string into int
        var nowCommit = parseInt($('.commits span').text()); //$(.num .text-emphasized)
        if(nowCommit!=commit_count){
            commit_count = nowCommit;
            callback(err,true);
            return;
        }
        callback(err,false);
    })
}
