var request = require('request');
var cheerio = require('cheerio');

var commit_count = 23;


//function getNewCommit(callback){
    request('https://github.com/KyrieSu/Crawler',function(err,res,body){
        if(err){
            callback(err,'fail in getNewCommit');
            return;
        }
        $ = cheerio.load(body);
        var nowCommit = parseInt($('.commits span').text()); //$(.num .text-emphasized)
        console.log(nowCommit == commit_count);
    })
//}
